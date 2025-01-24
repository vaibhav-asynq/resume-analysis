import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default function SkillMatch({ skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Skills Match</h2>
      <RadialBarChart 
        width={300} 
        height={300} 
        cx={150} 
        cy={150} 
        innerRadius={20} 
        outerRadius={140} 
        data={skills}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          dataKey="value"
        />
        <Legend />
      </RadialBarChart>
    </div>
  );
}
