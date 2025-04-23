import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Students",
    value: 200,
    color: "#62B2FD",
  },
  {
    name: "Mentors",
    value: 8,
    color: "#9BDFC4",
  },
  {
    name: "Programs",
    value: 22,
    color: "#F99BAB",
  },
  {
    name: "Others",
    value: 10,
    color: "#FFB44F",
  },
];

export function UserChart() {
  return (
    <div className="p-4 flex justify-center">
      <div className="relative w-64 h-64">
        <ResponsiveContainer width={250} height={250}>
          <PieChart width={320} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
            >
              {data.map((e, i) => (
                <Cell key={i} fill={e.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex inset-0 items-center justify-center flex-col">
          <div className="text-[24px] font-bold text-[#222529]">240</div>
          <div className="text-[12px] text-[#595564]">Users</div>
        </div>
      </div>
    </div>
  );
}
