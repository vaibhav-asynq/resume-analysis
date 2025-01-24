import React from 'react';

export default function CandidateOverview({ candidate }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Candidate Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium text-gray-700">Basic Information</h3>
          <dl className="mt-2 space-y-2">
            <div>
              <dt className="text-sm text-gray-500">Name</dt>
              <dd className="text-sm font-medium">{candidate.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Location</dt>
              <dd className="text-sm font-medium">{candidate.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Experience</dt>
              <dd className="text-sm font-medium">{candidate.experience} years</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Current Role</dt>
              <dd className="text-sm font-medium">{candidate.currentRole}</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-indigo-600">{candidate.overallScore}%</div>
          <div className="text-sm text-gray-500 mt-2">Overall Match Score</div>
        </div>
      </div>
    </div>
  );
}
