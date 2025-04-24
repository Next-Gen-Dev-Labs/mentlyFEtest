"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronIcon } from "~/assets/icons";

export const UsersWidget = () => {
  const data = [
    { name: "Students", value: 200, color: "#62B2FD" },
    { name: "Mentors", value: 8, color: "#9BDFC4" },
    { name: "Programs", value: 22, color: "#F99BAB" },
    { name: "Others", value: 10, color: "#FFB44F" },
  ];

  const totalUsers = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full bg-[#E7DDFF4D] border border-border-primary rounded-xl overflow-hidden">
      <div className="w-full border-b border-[#E1E7EC] flex items-center justify-between h-15 py-3 px-6">
        <p className="text-font text-lg font-semibold">Users</p>
        <div className="flex items-center border border-grey-200 rounded py-2 px-3 gap-3 h-9">
          <p className="text-font font-medium text-xs">All</p>
          <ChevronIcon className="text-font size-2.5" />
        </div>
      </div>
      <div className="w-full py-9 px-2.5 flex items-center justify-center gap-3">
        <div className="w-45 h-45 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center">
            <p className="text-2xl font-bold text-grey-800">{totalUsers}</p>
            <p className="text-font text-xs">Users</p>
          </div>
        </div>
        <div className="w-28 flex-none flex flex-col gap-3 items-start">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-between h-3.5"
              >
                <div className="flex items-center gap-1">
                  <span
                    className={`size-1.5 rounded-full`}
                    style={{ background: item.color }}
                  />
                  <p className="text-font text-[10px]/3">{item.name}</p>
                </div>
                <p className="text-font text-xs font-bold">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
