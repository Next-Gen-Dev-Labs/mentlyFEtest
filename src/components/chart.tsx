"use client";
// pages/test-chart.js (or .jsx)
// import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  //   Legend,
  //   Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Students", value: 100, color: "#60A5FA" },
  { name: "Mentors", value: 80, color: "#6EE7B7" },
  { name: "Programs", value: 35, color: "#F9A8B4" },
  { name: "Others", value: 25, color: "#FBBF24" },
];

const totalUsers = data.reduce((sum, entry) => sum + entry.value, 0);

// const data = [
//   { name: "Students", value: 80 },
//   { name: "Mentors", value: 50 },
//   { name: "Programs", value: 30 },
//   { name: "Others", value: 20 },
// ];

// const COLORS = ["#62b2fd", "#98df64", "#F99bab", "#ffb44f"];

export const UserChart = () => {
  return (
    <div className="relative h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={40}
            // paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center text content */}
      <div className="absolute bg-white h-20 w-20 -translate-y-1/2 top-1/2 rounded-full left-1/2 -translate-x-1/2 inset-0 flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-gray-800">{totalUsers}</p>
        <p className="text-xs text-gray-500">Users</p>
      </div>
    </div>
  );
};

// <ResponsiveContainer width={"100%"} height={250}>
//   <PieChart>
//     <Pie
//       data={data}
//       cx="50%"
//       cy="50%"
//       outerRadius={70}
//       innerRadius={40}
//       //   paddingAngle={3}
//       dataKey="value"
//       //   label
//     >
//       {data.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//       ))}
//     </Pie>
//     {/* <Legend /> */}
//     <Tooltip />
//     {/* <Legend
//       verticalAlign="middle"
//       align="right"
//       width={30}
//       layout="vertical"
//       iconSize={10}
//       iconType="square"
//     /> */}
//   </PieChart>
// </ResponsiveContainer>
