'use client';

import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#3B82F6', '#10B981', '#F472B6', '#FBBF24'];

const data = [
  { name: 'Students', value: 200, color: COLORS[0] },
  { name: 'Mentors', value: 8, color: COLORS[1] },
  { name: 'Programs', value: 22, color: COLORS[2] },
  { name: 'Others', value: 10, color: COLORS[3] },
];

const totalUsers = data.reduce((sum, item) => sum + item.value, 0);

const UserChart: React.FC = () => {
  return (
    <div className="p-3 rounded-2xl bg-[#FAF9FC] shadow-sm w-[290px] max-w-[340px]">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Users</h3>
        <div className="px-2 py-0.5 border rounded-md text-xs text-gray-600 border-gray-200 cursor-pointer">
          All ▾
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 gap-2">
        {/* Smaller Donut Chart */}
        <div className="relative w-[100px] h-[100px]">
          <PieChart width={100} height={100}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={45}
              paddingAngle={1}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h4 className="text-base font-bold text-gray-900">{totalUsers}</h4>
            <p className="text-[10px] text-gray-500">Users</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 flex-1">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
              <span className="text-xs font-medium text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserChart;
