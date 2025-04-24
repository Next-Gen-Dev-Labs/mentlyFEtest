"use client"
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Students', value: 200 },
  { name: 'Mentors', value: 8 },
  { name: 'Programs', value: 22 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#4D8CFF', '#A2E4CE', '#F5B76B', '#C18EFF'];

const UserStatsSection = () => {
  const totalUsers = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-[#F9FAFB]  rounded-md shadow-sm w-full max-w-sm ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 w-full border p-2 rounded-t-2xl  border-b-[#E1E7EC]">
        <h2 className="text-[18px] font-600 text-[#595564]">Users</h2>
        <select className="text-[12px] text-[#595564] bg-white border border-gray-200 rounded px-2 py-1 outline-none">
          <option value="all">All</option>
        </select>
      </div>

      {/* Chart & Stats Container */}
      <div className="flex items-center justify-between relative p-4">
        {/* Donut Chart with centered label */}
        <div className="relative w-[120px] h-[120px]">
          <PieChart width={120} height={120}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>

          {/* Center label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[18px] font-bold text-[#1D1D1F]">{totalUsers}</p>
            <p className="text-[10px] text-gray-500">Users</p>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-[12px] text-[#1D1D1F] ml-4">
          {data.map((item, idx) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: COLORS[idx] }}
              ></span>
              <span>{item.name}</span>
              <span className="ml-auto font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStatsSection;
