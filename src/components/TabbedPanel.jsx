import React, { useState } from 'react';
import JobPanel from './JobPanel';
import ResumePreview from './ResumePreview';

export default function TabbedPanel({ jobDescription }) {
  const [activeTab, setActiveTab] = useState('job');

  return (
    <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('job')}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === 'job'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Job Description
          </button>
          <button
            onClick={() => setActiveTab('resume')}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === 'resume'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Original Resume
          </button>
        </nav>
      </div>

      <div className="flex-1 overflow-auto">
        {activeTab === 'job' ? (
          <JobPanel jobDescription={jobDescription} />
        ) : (
          <ResumePreview />
        )}
      </div>
    </div>
  );
}
