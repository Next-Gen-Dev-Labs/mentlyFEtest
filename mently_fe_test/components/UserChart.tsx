"use client";

import {
  PieChart as RePieChart,
  Pie as RePie,
  Cell as ReCell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Students", value: 400, color: "#3B82F6" },
  { name: "Purple Category", value: 200, color: "#A855F7" },
  { name: "Programs", value: 150, color: "#EC4899" },
  { name: "Others", value: 50, color: "#F97316" },
  { name: "Mentors", value: 100, color: "#22C55E" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

export default function UserChart() {
  return (
    <div className="flex items-center justify-between w-full p-6">
      {/* Donut Chart */}
      <div className="w-1/2 flex justify-center items-center relative h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart>
            <RePie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <ReCell key={`cell-${index}`} fill={entry.color} />
              ))}
            </RePie>
          </RePieChart>
        </ResponsiveContainer>
        <div className="absolute text-center text-lg font-bold text-gray-800">
          {total} Users
        </div>
      </div>

      {/* Legend */}
      <div className=" space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
