import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Students", value: 200, color: "#62B2FD" },
  { name: "Mentors", value: 8, color: "#9BDFC4" },
  { name: "Programs", value: 22, color: "#F99BAB" },
  { name: "Others", value: 10, color: "#FFB44F" },
];

export default function NewUserCard() {
  const totalUsers = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Users</h2>
      <div className="flex items-center justify-center h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center">
          <span className="text-2xl font-bold text-gray-800">{totalUsers}</span>
          <p className="text-sm text-gray-500">Users</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.name} {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
