export default function JobDetails({ job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Job Requirements</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-700">Position</h3>
          <p className="text-gray-600">{job.title}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.requiredSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
