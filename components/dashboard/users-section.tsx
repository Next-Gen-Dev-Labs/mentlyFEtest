"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ChartData {
  name: string;
  value: number;
  color: string;
  total: number;
}

const data: ChartData[] = [
  { name: "Students", value: 200, color: "#4D92EB", total: 200 },
  { name: "Mentors", value: 8, color: "#63B3ED", total: 8 },
  { name: "Programs", value: 22, color: "#9AE6B4", total: 22 },
  { name: "Others", value: 10, color: "#FC8181", total: 10 },
];

const totalUsers = 240;

export default function UsersSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Card className="w-full">
      <CardHeader className="pb-2 border-b">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <CardTitle className="text-xl font-semibold text-gray-800">Users</CardTitle>
          <Button
            variant="outline"
            size="sm"
            className="text-sm rounded-md border-gray-300 bg-white text-gray-700 hover:bg-gray-100 flex items-center gap-1"
          >
            All
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="flex flex-col sm:flex-row md:flex-col  xl:flex-row items-center md:items-start justify-center md:justify-start gap-6 w-full">
          {/* Pie Chart */}
          <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px]">
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
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{totalUsers}</span>
              <span className="text-xs text-gray-500">Users</span>
            </div>
          </div>

          {/* Legend Labels */}
          <div className="flex flex-col gap-3">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-sm text-gray-700">
                  {item.name}
                  <span className="text-gray-500"> ({item.total})</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
