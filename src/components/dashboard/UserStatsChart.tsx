
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

type UserStats = {
  active: number;
  inProgress: number;
  pending: number;
  total: number;
}

type UserStatsChartProps = {
  stats: UserStats;
}

const UserStatsChart: React.FC<UserStatsChartProps> = ({ stats }) => {
  const data = [
    { name: 'Active', value: stats.active, color: '#6e2dc3' },
    { name: 'In Progress', value: stats.inProgress, color: '#9b87f5' },
    { name: 'Pending', value: stats.pending, color: '#e2dbff' },
  ];
  
  return (
    <div className="relative flex flex-col items-center justify-center h-64 p-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label 
              value={stats.total} 
              position="center"
              className="text-3xl font-bold"
              fontSize={24}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="flex gap-8 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-xs text-gray-500">{item.name}</span>
            </div>
            <span className="font-medium text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatsChart;
