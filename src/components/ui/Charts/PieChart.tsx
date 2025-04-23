"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

interface ChartItem {
  name: string;
  value: number;
  color: string;
}

interface UserDonutChartProps {
  data: ChartItem[];
  total: number;
}

const UserDonutChart: React.FC<UserDonutChartProps> = ({ data, total }) => {
  return (
    <div className="flex items-center py-6 px-3  w-full max-w-md">
      <div className="w-auto h-auto relative">
        <PieChart width={200} height={200} className="">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute top-0 left-0 w-full h-full text-center flex flex-col justify-center items-center z-10 ">
          <div className="text-2xl font-extrabold text-[#222529]">{total}</div>
          <div className="text-[#595564] text-sm">Users</div>
        </div>
      </div>

      <div className="mt-6 w-full">
        {data.map((item, idx) => (
          <div key={idx} className="flex gap-4 ml-4 items-center mb-2">
            <div className="flex items-center">
              <span
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-[#595564] text-[10px]">{item.name}</span>
            </div>
            <span className="text-[#595564] text-xs font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDonutChart;
