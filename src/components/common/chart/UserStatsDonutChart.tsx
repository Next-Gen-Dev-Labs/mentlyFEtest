"use client";

import { PieChart, Pie, Cell } from "recharts";
import { ChevronDown } from "lucide-react";

interface UserStatItem {
    name: string;
    value: number;
    color: string;
}

interface UserStatsDonutChartProps {
    data: UserStatItem[];
    title?: string;
    filterLabel?: string;
}

export default function UserStatsDonutChart({
    data,
    title = "Users",
    filterLabel = "All",
}: UserStatsDonutChartProps) {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="bg-white rounded-2xl p-4  w-full border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <button className="flex items-center text-sm bg-white border px-2 py-1 rounded-md shadow-sm">
                    {filterLabel} <ChevronDown className="w-4 h-4 ml-1" />
                </button>
            </div>

            {/* Chart */}
            <div className="flex items-center w-full">

                <div className="flex justify-center items-center mt-4 relative">
                    <PieChart width={220} height={220}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>

                    {/* Center total */}
                    <div className="absolute text-center">
                        <p className="text-2xl font-bold text-gray-800">{total}</p>
                        <p className="text-sm text-gray-500">{title}</p>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-2 space-y-1 text-sm w-full">
                    {data.map((entry, index) => (
                        <div className="flex items-center justify-between px-2" key={index}>
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: entry.color }}
                                />
                                <span className="text-gray-600">{entry.name}</span>
                            </div>
                            <span className="font-semibold text-gray-700">{entry.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}