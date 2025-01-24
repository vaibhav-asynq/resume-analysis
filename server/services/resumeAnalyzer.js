import natural from 'natural';
const TfIdf = natural.TfIdf;

export async function analyzeResume(resumeText, jobDescription) {
  try {
    // Initialize analysis object
    const analysis = {
      candidate: extractCandidateInfo(resumeText),
      technical: analyzeTechnicalSkills(resumeText, jobDescription),
      cultural: analyzeCulturalFit(resumeText, jobDescription),
      insights: extractInsights(resumeText),
      overallScore: 0
    };

    // Calculate overall score
    analysis.overallScore = calculateOverallScore(analysis);

    return analysis;
  } catch (error) {
    console.error('Resume analysis error:', error);
    throw new Error('Failed to analyze resume');
  }
}

function extractCandidateInfo(text) {
  // Basic info extraction using regex patterns
  const emailPattern = /[\w.-]+@[\w.-]+\.\w+/;
  const phonePattern = /(\+\d{1,3}[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/;
  
  return {
    name: extractName(text),
    email: text.match(emailPattern)?.[0] || '',
    phone: text.match(phonePattern)?.[0] || '',
    experience: estimateYearsOfExperience(text)
  };
}

function analyzeTechnicalSkills(resumeText, jobDescription) {
  const tfidf = new TfIdf();
  
  // Add documents to TF-IDF
  tfidf.addDocument(resumeText);
  tfidf.addDocument(jobDescription);

  // Common technical skills to look for
  const commonSkills = [
    'javascript', 'python', 'java', 'react', 'angular', 'vue', 'node',
    'aws', 'docker', 'kubernetes', 'sql', 'nosql', 'git'
  ];

  const skills = commonSkills.map(skill => {
    const score = calculateSkillScore(resumeText, skill);
    return {
      name: skill,
      level: determineSkillLevel(score),
      proficiency: Math.min(Math.round(score * 100), 100)
    };
  }).filter(skill => skill.proficiency > 0);

  return {
    skills,
    skillsMatch: calculateSkillsMatch(skills, jobDescription)
  };
}

function analyzeCulturalFit(resumeText, jobDescription) {
  // Look for cultural indicators in the text
  const culturalIndicators = {
    teamwork: ['team', 'collaborate', 'coordinate'],
    leadership: ['lead', 'manage', 'mentor'],
    innovation: ['innovate', 'create', 'design'],
    communication: ['communicate', 'present', 'write']
  };

  const scores = {};
  for (const [trait, keywords] of Object.entries(culturalIndicators)) {
    scores[trait] = calculateTraitScore(resumeText, keywords);
  }

  return {
    scores,
    overallScore: calculateCulturalScore(scores)
  };
}

function extractInsights(text) {
  return {
    achievements: extractAchievements(text),
    education: extractEducation(text),
    certifications: extractCertifications(text)
  };
}

// Helper functions
function extractName(text) {
  const firstLine = text.split('\n')[0].trim();
  return firstLine || 'Unknown';
}

function estimateYearsOfExperience(text) {
  const years = text.match(/\b(19|20)\d{2}\b/g) || [];
  if (years.length < 2) return 0;
  
  const sortedYears = years.map(Number).sort();
  return new Date().getFullYear() - sortedYears[0];
}

function calculateSkillScore(text, skill) {
  const matches = text.toLowerCase().match(new RegExp(skill.toLowerCase(), 'g')) || [];
  return Math.min(matches.length / 3, 1);
}

function determineSkillLevel(score) {
  if (score > 0.8) return 'Expert';
  if (score > 0.5) return 'Advanced';
  if (score > 0.3) return 'Intermediate';
  return 'Beginner';
}

function calculateTraitScore(text, keywords) {
  const matches = keywords.reduce((count, keyword) => {
    const matches = text.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || [];
    return count + matches.length;
  }, 0);
  
  return Math.min(matches / keywords.length / 2, 1) * 100;
}

function calculateCulturalScore(scores) {
  return Math.round(
    Object.values(scores).reduce((sum, score) => sum + score, 0) / 
    Object.values(scores).length
  );
}

function calculateSkillsMatch(skills, jobDescription) {
  const totalSkills = skills.length;
  if (totalSkills === 0) return 0;

  const matchedSkills = skills.filter(skill => 
    jobDescription.toLowerCase().includes(skill.name.toLowerCase())
  ).length;

  return Math.round((matchedSkills / totalSkills) * 100);
}

function extractAchievements(text) {
  // Simple achievement extraction based on common patterns
  const achievements = [];
  const lines = text.split('\n');
  
  for (const line of lines) {
    if (/increased|improved|led|developed|implemented|reduced|achieved/i.test(line)) {
      achievements.push(line.trim());
    }
  }

  return achievements.slice(0, 3); // Return top 3 achievements
}

function extractEducation(text) {
  const education = [];
  const degrees = ['B.S.', 'M.S.', 'PhD', 'Bachelor', 'Master', 'Doctorate'];
  const lines = text.split('\n');

  for (const line of lines) {
    if (degrees.some(degree => line.includes(degree))) {
      education.push({
        degree: line.trim(),
        institution: 'University', // This would need more sophisticated parsing
        year: extractYear(line) || 'N/A'
      });
    }
  }

  return education;
}

function extractCertifications(text) {
  const certifications = [];
  const certKeywords = ['certified', 'certification', 'certificate'];
  const lines = text.split('\n');

  for (const line of lines) {
    if (certKeywords.some(keyword => line.toLowerCase().includes(keyword))) {
      certifications.push(line.trim());
    }
  }

  return certifications;
}

function extractYear(text) {
  const yearMatch = text.match(/\b(19|20)\d{2}\b/);
  return yearMatch ? yearMatch[0] : null;
}

function calculateOverallScore(analysis) {
  const weights = {
    technical: 0.5,
    cultural: 0.3,
    experience: 0.2
  };

  return Math.round(
    weights.technical * analysis.technical.skillsMatch +
    weights.cultural * analysis.cultural.overallScore +
    weights.experience * Math.min(analysis.candidate.experience * 10, 100)
  );
}
