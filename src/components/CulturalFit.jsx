import React from 'react';

export default function CulturalFit({ culturalData }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Cultural Fit Analysis</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Work Environment Match</h3>
          <div className="grid grid-cols-2 gap-4">
            {culturalData.workEnvironment.map((item) => (
              <div key={item.trait} className="bg-gray-50 p-3 rounded">
                <div className="text-sm font-medium">{item.trait}</div>
                <div className="text-sm text-gray-500">{item.match}% match</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-3">Key Values</h3>
          <div className="flex flex-wrap gap-2">
            {culturalData.values.map((value) => (
              <span
                key={value}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-3">Cultural Fit Score</h3>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full"
                style={{ width: `${culturalData.overallScore}%` }}
              />
            </div>
            <span className="ml-3 text-lg font-medium">{culturalData.overallScore}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
