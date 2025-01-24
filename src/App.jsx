import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CandidateOverview from './components/CandidateOverview';
import TechnicalAnalysis from './components/TechnicalAnalysis';
import CulturalFit from './components/CulturalFit';
import ResumeInsights from './components/ResumeInsights';
import TabbedPanel from './components/TabbedPanel';

const mockData = {
  candidate: {
    name: "John Doe",
    location: "San Francisco, CA",
    experience: 8,
    currentRole: "Senior Frontend Developer at Tech Corp",
    overallScore: 85
  },
  technical: {
    skills: [
      { name: "React", level: "Advanced", proficiency: 90 },
      { name: "JavaScript", level: "Advanced", proficiency: 85 },
      { name: "TypeScript", level: "Intermediate", proficiency: 75 },
      { name: "Node.js", level: "Intermediate", proficiency: 70 }
    ],
    github: {
      repoCount: 25,
      contributions: "1,243",
      languages: [
        { name: "JavaScript", percentage: 45 },
        { name: "TypeScript", percentage: 30 },
        { name: "Python", percentage: 15 }
      ]
    }
  },
  cultural: {
    workEnvironment: [
      { trait: "Team Size", match: 90 },
      { trait: "Work Style", match: 85 },
      { trait: "Communication", match: 95 },
      { trait: "Leadership", match: 80 }
    ],
    values: ["Collaborative", "Innovative", "Self-driven", "Mentorship"],
    overallScore: 88
  },
  insights: {
    achievements: [
      "Led a team of 5 engineers in rebuilding the core product",
      "Improved system performance by 40%",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        institution: "Stanford University",
        year: "2018"
      },
      {
        degree: "B.S. Computer Science",
        institution: "UC Berkeley",
        year: "2015"
      }
    ],
    certifications: [
      "AWS Certified Developer",
      "Google Cloud Professional",
      "MongoDB Certified Developer"
    ]
  },
  jobDescription: {
    overview: "We are seeking a Senior Frontend Developer to join our team and lead the development of our next-generation web applications. The ideal candidate will have strong expertise in modern JavaScript frameworks and a track record of building scalable, user-friendly applications.",
    requirements: [
      "5+ years of experience with modern JavaScript frameworks (React, Vue, or Angular)",
      "Strong proficiency in TypeScript and modern JavaScript (ES6+)",
      "Experience with state management solutions (Redux, Vuex, or similar)",
      "Knowledge of modern build tools and workflows (Webpack, Vite, etc.)",
      "Understanding of web performance optimization techniques"
    ],
    responsibilities: [
      "Lead the development of complex frontend applications",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with UX designers and backend developers",
      "Implement best practices for code quality and testing",
      "Contribute to technical architecture decisions"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "Previous experience leading development teams",
      "Strong problem-solving and analytical skills",
      "Excellent communication and collaboration abilities",
      "Experience with agile development methodologies"
    ]
  }
};

export default function App() {
  const [showResults, setShowResults] = useState(false);
  const sampleResumeUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  const handleAnalysisSubmit = () => {
    setShowResults(true);
  };

  if (!showResults) {
    return <InputForm onSubmit={handleAnalysisSubmit} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Analysis Dashboard</h1>
            <p className="mt-2 text-gray-600">Comprehensive candidate evaluation for Senior Frontend Developer position</p>
          </div>
          <button
            onClick={() => setShowResults(false)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            New Analysis
          </button>
        </header>

        <div className="flex gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              <CandidateOverview candidate={mockData.candidate} />
              <TechnicalAnalysis 
                skills={mockData.technical.skills} 
                githubData={mockData.technical.github} 
              />
              <CulturalFit culturalData={mockData.cultural} />
              <ResumeInsights insights={mockData.insights} />
            </div>
          </div>
          
          <div className="w-96 sticky top-8 h-[calc(100vh-4rem)]">
            <TabbedPanel 
              jobDescription={mockData.jobDescription}
              resumeUrl={sampleResumeUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
