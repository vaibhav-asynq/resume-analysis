import React from 'react';

export default function ResumePreview() {
  return (
    <div className="bg-white p-8 min-h-full">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600">Senior Frontend Developer</p>
          <p className="text-sm text-gray-500">San Francisco, CA • john.doe@email.com • (555) 123-4567</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            Senior Frontend Developer with 8+ years of experience in building scalable web applications.
            Expertise in React, TypeScript, and modern JavaScript. Proven track record of leading teams
            and delivering high-impact projects.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Senior Frontend Developer - Tech Corp</h3>
              <p className="text-sm text-gray-500">2020 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Led a team of 5 engineers in rebuilding the core product</li>
                <li>Improved system performance by 40%</li>
                <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Frontend Developer - Innovation Inc</h3>
              <p className="text-sm text-gray-500">2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Developed responsive web applications using React</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented automated testing improving code coverage by 75%</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
          <div>
            <h3 className="font-medium">M.S. Computer Science - Stanford University</h3>
            <p className="text-sm text-gray-500">2018</p>
          </div>
          <div className="mt-2">
            <h3 className="font-medium">B.S. Computer Science - UC Berkeley</h3>
            <p className="text-sm text-gray-500">2015</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'JavaScript', 'Node.js', 'HTML/CSS', 'Git', 'AWS', 
              'Redux', 'GraphQL', 'Jest', 'CI/CD', 'Agile'].map((skill) => (
              <span 
                key={skill}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>AWS Certified Developer</li>
            <li>Google Cloud Professional</li>
            <li>MongoDB Certified Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
