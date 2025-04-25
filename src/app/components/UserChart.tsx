'use client';

import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#7C3AED', '#10B981', '#F59E0B', '#E5E7EB'];

const data = [
  { name: 'Students', value: 200 },
  { name: 'Mentors', value: 8 },
  { name: 'Programs', value: 22 },
  { name: 'Others', value: 10 },
];

const UserChart: React.FC = () => {
  return (
    <div className="p-4 rounded-2xl bg-white shadow-sm">
      <h3 className="font-semibold mb-2">Users</h3>
      <div className="flex items-center justify-center">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute text-center">
          <h4 className="text-lg font-bold">240</h4>
          <p className="text-xs text-gray-500">Users</p>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
