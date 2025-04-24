import { ChevronDown } from "lucide-react";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const pieChart = [
  { name: "Students", value: 200, color: "#62B2FD" },
  { name: "Mentors", value: 8, color: "#9BDFC4" },
  { name: "Programs", value: 22, color: "#F99BAB" },
  { name: "Others", value: 10, color: "#FFB44F" },
  { name: "", value: 5, color: "#9F97F7" },
];

const UserChart = () => {
  return (
    <div className="bg-[#f5f1fe] rounded-[16px]  py-4 space-y-7 border border-[#e1e7ec]">
      <div className="flex justify-between items-center border-b border-[#e1e7ec] pb-5">
        <p className="text-lg text-[#595564] font-semibold px-6">Users</p>
        <div className="custom-select2 flex items-center justify-between mr-6">
          <select className="appearance-none text-[#595564]">
            <option>All</option>
            <option>Students</option>
            <option>Mentors</option>
            <option>Programs</option>
            <option>Others</option>
          </select>
          <ChevronDown className="text-[#595564]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pr-6">
        <div className="w-[220px] h-[200px] relative mb-4 md:mb-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChart}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                labelLine={false}
                startAngle={90}
                endAngle={-270}
              >
                {pieChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[#1F0954] text-4xl font-bold">240</p>
            <p className="text-[#595564] text-lg">Users</p>
          </div>
        </div>

        <div className="space-y-1">
          {pieChart
            .filter((item) => item.name)
            .map((entry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 min-w-[180px]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-gray-600 text-sm">{entry.name}</span>
                </div>
                <span className="text-gray-800 font-medium ml-auto">
                  {entry.value}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserChart;
