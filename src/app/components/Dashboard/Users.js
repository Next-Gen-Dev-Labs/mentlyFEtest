"use client";

import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import Image from "next/image";

const data = [
    { name: "Students", value: 200, color: "#62B2FD" },
    { name: "Mentors", value: 8, color: "#9BDFC4" },
    { name: "Programs", value: 22, color: "#F99BAB"},
    { name: "Others", value: 10, color: "#FFB44F" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

const Users = ({className}) => {
    return (
        <div className={`${className}`}>
            <div className="flex justify-between items-center mb-4 down">
                <Image src="/menu.svg" alt="Menu" width={16} height={16} />

                <div className="flex items-center justify-between gap-[7rem] md:gap-[31rem] lg:gap-[14rem]">
                    <h1 className="text-left text-[#595564] text-base font-bold">Users</h1>
                    <button className="font-semibold text-xs text-[#6F01D0]">See All</button>
                </div>

                <Image src="/more.svg" alt="More" width={18} height={18} />
            </div>

            <div className="flex items-center md:justify-center lg:justify-between mt-[3rem]">
                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        isAnimationActive={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        <Label
                            position="center"
                            content={({ viewBox }) => {
                                const { cx, cy } = viewBox;
                                return (
                                <>
                                    <text
                                        x={cx}
                                        y={cy - 10}
                                        textAnchor="middle"
                                        className="text-2xl font-bold fill-black leading-[1.2rem]"
                                    >
                                        {total}
                                    </text>
                                    <text
                                        x={cx}
                                        y={cy + 10}
                                        textAnchor="middle"
                                        className="text-[12px] fill-[#595564]"
                                    >
                                        Users
                                    </text>
                                </>
                                );
                            }}
                        />
                    </Pie>
                </PieChart>

                <ul className="ml-4 text-sm space-y-2">
                    {data.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <span
                                className="inline-block w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span className="text-[#595564]">{item.name}</span>
                            <span className="ml-auto font-bold text-[#595564]">{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;
