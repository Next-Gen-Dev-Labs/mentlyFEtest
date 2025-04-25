  "use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Students", value: 200, color: "#5B93FF" },
  { name: "Mentors", value: 8, color: "#FFD88D" },
  { name: "Programs", value: 22, color: "#FF8B8B" },
  { name: "Others", value: 10, color: "#A5F1C1" },
];

export default function UsersPieChartCard() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <section className="bg-white p-4 rounded-xl  w-full max-w-md">
      <div className="flex items-start justify-between mb-4">
        <h2 className="font-semibold text-lg">Users</h2>
        <select className="border text-sm px-2 py-1 rounded-md">
          <option>All</option>
        </select>
      </div>

      <div className="flex items-center gap-6">
        {/* Pie Chart */}
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={65}
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Center Text (absolute way) */}
        <div className="absolute ml-[60px] mt-[22px] text-center">
          <p className="text-xl font-bold">{total}</p>
          <p className="text-sm text-gray-500">Users</p>
        </div>

        {/* Legend */}
        <ul className="space-y-2 text-sm ">
          {data.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 hover:text-shadow-md">
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-gray-600 font-medium">{item.name}</span>
              <span className="ml-auto text-gray-500">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
