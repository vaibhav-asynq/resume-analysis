import React from 'react';

export default function ResumeInsights({ insights }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Resume Insights</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Key Achievements</h3>
          <ul className="space-y-2">
            {insights.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-600">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-3">Education & Certifications</h3>
          <div className="space-y-3">
            {insights.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-indigo-500 pl-3">
                <div className="font-medium">{edu.degree}</div>
                <div className="text-sm text-gray-500">{edu.institution}</div>
                <div className="text-sm text-gray-500">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-3">Professional Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {insights.certifications.map((cert, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
