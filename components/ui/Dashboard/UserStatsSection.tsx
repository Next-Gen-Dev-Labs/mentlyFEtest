'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Students', value: 200 },
  { name: 'Mentions', value: 8 },
  { name: 'Programs', value: 22 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#62B2FD', '#9F97F7', '#FFB44F', '#F99BAB', '#9BDFC4'];

const UserStatsSection = () => {
  return (
    <div className="bg-white rounded-xl scrollbar-hide mt-4 w-[291px] shadow p-0">
      <h2 className="text-lg font-bold mb-4">Users</h2>
      <div className="flex items-center">
        {/* Increased pie chart size */}
        <div className="w-48 h-48 "> 
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}  
                outerRadius={80}  
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mr-4">
          <div className="mb-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#0088FE] rounded-full mr-2"></div>
              <span className="text-sm">Students</span>
            </div>
            <span className="text-lg font-bold ml-5">240</span>
          </div>
          <div className="space-y-2">
            {data.slice(1).map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 bg-[${COLORS[index + 1]}] rounded-full mr-2`}></div>
                <span className="text-sm">{item.name}</span>
                <span className="text-sm font-bold ml-auto">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatsSection;