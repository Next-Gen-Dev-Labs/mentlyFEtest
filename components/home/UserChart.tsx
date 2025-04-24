'use client';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Students', value: 200 },
  { name: 'Mentors', value: 100 },
  { name: 'Mentee', value: 60 },
  { name: 'Programs', value: 30 },
  { name: 'Others', value: 10 },
];


const COLORS = ['#5AA9FA', '#9BDFC4', '#F8B5C2', '#FFCC75','#9F97F7'];

export default function UserDonutChart() {
  return (
    <div className="relative   flex items-center justify-center">
      <PieChart width={200} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={100}
          startAngle={90}
          endAngle={450}
          dataKey="value"
          paddingAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-2xl font-bold font-chivo text-[#222529]">240</p>
        <p className="text-xs text-[#595564]">Users</p>
      </div>
    </div>
  );
}