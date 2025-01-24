import React from 'react';

export default function JobPanel({ jobDescription }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">Job Description</h2>
      <div className="prose max-w-none">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Position Overview</h3>
            <p className="mt-2 text-gray-600">{jobDescription.overview}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">Requirements</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {jobDescription.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Responsibilities</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {jobDescription.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Qualifications</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {jobDescription.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
