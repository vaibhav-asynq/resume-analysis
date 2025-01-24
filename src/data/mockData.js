export const mockData = {
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
