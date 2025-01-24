export default function RecommendationCard({ recommendations }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
      <ul className="space-y-3">
        {recommendations.map((rec, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">
              {index + 1}
            </span>
            <span className="text-gray-600">{rec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
