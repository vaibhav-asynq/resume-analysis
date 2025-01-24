import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CandidateOverview from './components/CandidateOverview';
import TechnicalAnalysis from './components/TechnicalAnalysis';
import CulturalFit from './components/CulturalFit';
import ResumeInsights from './components/ResumeInsights';
import TabbedPanel from './components/TabbedPanel';
import { mockData } from './data/mockData';

export default function App() {
  const [showResults, setShowResults] = useState(false);

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
            <TabbedPanel jobDescription={mockData.jobDescription} />
          </div>
        </div>
      </div>
    </div>
  );
}
