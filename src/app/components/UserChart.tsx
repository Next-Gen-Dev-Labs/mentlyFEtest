// components/UserChart.tsx
"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Mon', users: 30 },
  { name: 'Tue', users: 45 },
  { name: 'Wed', users: 25 },
  { name: 'Thu', users: 60 },
  { name: 'Fri', users: 20 },
];

const UserChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">User Growth</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#a855f7" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;