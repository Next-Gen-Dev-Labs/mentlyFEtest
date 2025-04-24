"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

const chartData = [
  { label: "Students", count: 200, fill: "#63B2FD" },
  { label: "Mentors", count: 8, fill: "#9BDFC4" },
  { label: "Programs", count: 22, fill: "#F99BAB" },
  { label: "Others", count: 10, fill: "#FFB44E" },
];

const chartConfig = {
  students: {
    label: "Students",
    color: "#63B2FD",
  },
  mentors: {
    label: "Mentors",
    color: "#9BDFC4",
  },
  programs: {
    label: "Programs",
    color: "#F99BAB",
  },
  others: {
    label: "Others",
    color: "#FFB44E",
  },
} satisfies ChartConfig;

export function UserChart() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <div className="flex items-center gap-1 px-3">
      <ChartContainer
        config={chartConfig}
        className="mx-auto h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] max-h-[300px] max-w-[300px]"
      >
        <PieChart width={250} height={250}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="label"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {total.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-sm"
                      >
                        Total Users
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="space-y-3 hidden lg:block">
        {chartData.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: `${item.fill}` }}
            />
            <p>{item.label}</p>
            <p className="font-semibold">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
