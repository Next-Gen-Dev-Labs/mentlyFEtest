"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { browser: "students", visitors: 200, fill: "hsl(var(--chart-1))" },
  { browser: "mentors", visitors: 8, fill: "hsl(var(--chart-2))" },
  { browser: "programs", visitors: 22, fill: "hsl(var(--chart-3))" },
  { browser: "others", visitors: 10, fill: "hsl(var(--chart-4))" },
];

const chartConfig = {
  users: {
    label: "Users",
  },
  students: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
  mentors: {
    label: "Mentors",
    color: "hsl(var(--chart-2))",
  },
  programs: {
    label: "Programs",
    color: "hsl(var(--chart-3))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

const UserCards = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="h-auto rounded-xl bg-card py-2.5 px-3">
      <div className="flex justify-between border-b pt-1.5 px-3 pb-3">
        <span className="text-lg font-semibold text-muted-foreground/100">
          Users
        </span>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <div className="flex items-center gap-2 border px-2.5 py-1.5 rounded-md">
                <span className="text-sm font-medium">All</span>
                <ChevronDown size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-lg">
              <DropdownMenuItem className="text-sm font-medium cursor-pointer">
                Today
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm font-medium cursor-pointer">
                Last Week
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm font-medium cursor-pointer">
                Last Month
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card className="border-0 mt-3">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-4">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[200px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                strokeWidth={0}
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
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-sm"
                          >
                            Users
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            {chartData.map((item) => (
              <div
                key={item.browser}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[10px] leading-2.5">
                    {
                      chartConfig[item.browser as keyof typeof chartConfig]
                        .label
                    }
                  </span>
                </div>
                <span className="font-bold text-xs">{item.visitors}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCards;
