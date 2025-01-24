import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function TechnicalAnalysis({ skills, githubData }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Technical Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Skills Proficiency</h3>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-3">GitHub Insights</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Repositories</span>
              <span className="text-sm font-medium">{githubData.repoCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Contributions</span>
              <span className="text-sm font-medium">{githubData.contributions}</span>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-2">Primary Languages</h4>
              <div className="flex flex-wrap gap-2">
                {githubData.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs"
                  >
                    {lang.name} ({lang.percentage}%)
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
