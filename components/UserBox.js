"use client";

import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#62B2FD", "#9BDFC4", "#F99BAB", "#FFB44F"];

const UsersBox = ({ data = { students: 0, mentors: 0, programs: 0, others: 0 } }) => {
  const chartData = [
    { name: "Students", value: data.students },
    { name: "Mentors", value: data.mentors },
    { name: "Programs", value: data.programs },
    { name: "Others", value: data.others },
  ];

  const total =
    (data.students || 0) +
    (data.mentors || 0) +
    (data.programs || 0) +
    (data.others || 0);

  return (
    <div className="bg-[#F9F7FF] mt-3 rounded-xl p-4 w-full max-w-sm border border-[#E6E8EF]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[#3F3F3F]">Users</h3>
        <button className="text-xs text-[#3F3F3F] border border-[#E6E8EF] px-2 py-1 rounded-md">
          All <span className="ml-1">▼</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="relative w-32 h-32">
          <PieChart width={128} height={128}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={1}
              minAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[22px] font-bold text-[#1E1E1E]">{total}</p>
            <p className="text-xs text-[#8C8C8C] -mt-1">Users</p>
          </div>
        </div>

        {/* Labels */}
        <div className="space-y-3 text-sm text-[#3F3F3F]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#62B2FD]" />
            <span>Students</span>
            <span className="ml-auto font-medium">{data.students}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9BDFC4]" />
            <span>Mentors</span>
            <span className="ml-auto font-medium">{data.mentors}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F99BAB]" />
            <span>Programs</span>
            <span className="ml-auto font-medium">{data.programs}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB44F]" />
            <span>Others</span>
            <span className="ml-auto font-medium">{data.others}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersBox;
