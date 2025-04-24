"use client";

import { faker } from "@faker-js/faker";
import { ChevronDown } from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";

const pie_data = [
  { name: "Students", value: faker.number.int({ min: 100, max: 300 }) },
  { name: "Mentors", value: faker.number.int({ min: 20, max: 100 }) },
  { name: "Programs", value: faker.number.int({ min: 5, max: 30 }) },
  { name: "Others", value: faker.number.int({ min: 10, max: 50 }) },
];
const labels = ["Students", "Mentors", "Programs", "Others"];
const COLORS = ["#62B2FD", "#9BDFC4", "#F99BAB", "#FFB44F"];

export default function Chart() {
  return (
    <div className="rounded-2xl bg-[#E7DDFF4D] w-full border border-[#E1E7EC]">
      <div className="w-full flex items-center justify-between px-8 py-4 border-b border-b-[#E1E7EC]">
        <h4 className="font-semibold text-lg/[22px] text-[#595564]">Users</h4>

        <div className="border border-[#e1e7ec] rounded-sm py-2 px-3 gap-3 flex items-center justify-center">
          <span className="text-sm/4 font-medium text-[#595564]">All</span>
          <span className="cursor-pointer">
            <ChevronDown color="#595564" size={"16px"} />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 py-8 pr-4 flex-wrap">
        <div className="relative">
          <div className="inset-[45%] absolute flex flex-col gap-1 items-center justify-center">
            <h2 className="text-2xl/[22px] font-bold text-[#222529]">
              {pie_data.reduce((acc, curr) => acc + curr.value, 0)}
            </h2>
            <p className="text-xs text-[#595564]">Users</p>
          </div>
          <PieChart width={220} height={220}>
            <Pie
              data={pie_data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
            >
              {pie_data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="flex justify-center gap-4 flex-col">
          {labels.map((label, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="size-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <p className="text-sm text-[#595564] w-full flex items-center justify-between gap-4">
                {label}

                <span className="text-xs font-bold">
                  {pie_data[index].value}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
