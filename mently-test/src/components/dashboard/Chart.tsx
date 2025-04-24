import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function Chart() {
  const [filterValue, setFilterValue] = useState('All');
  
  // Users data for the chart
  const userData = [
    { name: 'Students', value: 200, color: '#64B5F6' },
    { name: 'Mentors', value: 8, color: '#A5D6A7' },
    { name: 'Programs', value: 22, color: '#F48FB1' },
    { name: 'Others', value: 10, color: '#FFB74D' }
  ];
  
  // Calculate total users
  const totalUsers = userData.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-[#E7DDFF4D] rounded-3xl p-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-700">Users</h2>
        <div className="flex justify-end mb-4">
        <div className="flex items-center w-min">
          <span className="text-gray-500 mr-2">Filter</span>
          <div className="relative inline-block">
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-2 w-[80px] bg-white text-gray-700"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </div>
      </div>
      
      <hr className="border-gray-200 mb-6" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-3/4 h-64 relative mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
              >
                {userData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <p className="text-4xl font-bold">{totalUsers}</p>
            <p className="">Users</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 w-2/5">
          {userData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
              <span className="font-semibold ml-3 text-black">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}