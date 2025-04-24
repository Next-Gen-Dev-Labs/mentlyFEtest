"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: {
    total: number;
    categories: DataItem[];
  };
}

export function DonutChart({ data }: DonutChartProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const chartData = data.categories.map(cat => ({
    name: cat.name,
    value: cat.value,
  }));
  
  const COLORS = data.categories.map(cat => cat.color);

  if (!mounted) {
    return (
      <div className="flex items-center h-[180px]">
        <div className="animate-pulse  rounded-full h-[120px] w-[120px]"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 border-0 ">
      {/* Donut Chart - Made smaller */}
      <div className="w-[120px] h-[120px] relative flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <p className="text-xl font-bold">{data.total}</p>
          <p className="text-xs text-gray-500">Users</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={55}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Compact Labels and Values */}
      <div className="flex-1">
        <div className="">
          {data.categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-2 h-2 rounded-full mr-2 flex-shrink-0" 
                style={{ backgroundColor: category.color }} 
              />
              <span className="text-[10px] mr-2">{category.name}</span>
              <span className="text-[10px] font-sm">{category.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}