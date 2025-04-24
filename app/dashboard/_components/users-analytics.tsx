"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AnalyticsItem {
  type: string;
  users: number;
}

interface UsersAnalyticsProps {
  data: AnalyticsItem[];
  description?: string;
}

export function UsersAnalytics({
  data,
  description = "Total Platform Users",
}: UsersAnalyticsProps) {
  const [selectedFilter, setSelectedFilter] = React.useState("all");

  const chartData = React.useMemo(() => {
    return data
      .filter((d) => {
        if (selectedFilter === "all") return true;
        return d.type === selectedFilter;
      })
      .map((item) => ({
        ...item,
        fill: `var(--chart-${data.findIndex((d) => d.type === item.type) + 1})`,
      }));
  }, [data, selectedFilter]);

  const chartConfig = React.useMemo(
    () => ({
      users: {
        label: "Users",
      },
      ...chartData.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.type]: {
            label: curr.type.charAt(0).toUpperCase() + curr.type.slice(1),
            color: curr.fill,
          },
        }),
        {}
      ),
    }),
    [chartData]
  ) satisfies ChartConfig;

  const totalUsers = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.users, 0);
  }, [data]);

  return (
    <Card>
      <CardHeader className=" flex flex-row items-center border-b border-border/50 justify-between ">
        <div>
          <CardTitle>Users</CardTitle>
          <CardDescription className="sr-only">{description}</CardDescription>
        </div>

        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger className="w-[140px] shadow-none border border-border rounded-xs">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {data.map((item) => (
              <SelectItem key={item.type} value={item.type}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex justify-center  gap-6 flex-row items-center flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          key={selectedFilter}
          className=" aspect-square p-0 h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="type"
              innerRadius={50}
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
                          {selectedFilter === "all"
                            ? totalUsers.toLocaleString()
                            : chartData
                                .find((item) => item.type === selectedFilter)
                                ?.users.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {selectedFilter === "all"
                            ? "Users"
                            : chartData.find(
                                (item) => item.type === selectedFilter
                              )?.type}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex flex-col gap-3">
          {chartData.map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <div
                className="size-3 rounded-xs"
                style={{ backgroundColor: item.fill }}
              />
              <div className="flex items-center gap-2 justify-between w-full text-[0.625rem]">
                <span className="font-medium text-card-foreground-light capitalize">
                  {item.type}
                </span>
                <b className="text-muted-foreground text-xs text-right">
                  {/* ({(( */}
                  {item.users}
                  {/* // / totalUsers) * 100).toFixed(1)}%) */}
                </b>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
