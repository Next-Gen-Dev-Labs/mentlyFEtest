"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function UserSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [chartData] = useState({
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
    total: 240
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = [
    { name: "Students", value: chartData.students, color: "#60a5fa" },
    { name: "Mentors", value: chartData.mentors, color: "#c084fc" },
    { name: "Programs", value: chartData.programs, color: "#4ade80" },
    { name: "Others", value: chartData.others, color: "#facc15" }
  ];

  const COLORS = data.map((item) => item.color);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-400 font-normal">Users</h2>
        <div className="border border-gray-200 rounded px-2 py-1 text-sm">
          <option>All</option>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-48 h-48 mb-6 md:mb-0">
          {isMounted && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} users`, null]} />
              </PieChart>
            </ResponsiveContainer>
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">{chartData.total}</div>
            <div className="text-sm text-gray-500">Users</div>
          </div>
        </div>

        <div className="flex-1 pl-0 md:pl-10 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-sm">{item.name}</span>
              <span className="ml-auto text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
