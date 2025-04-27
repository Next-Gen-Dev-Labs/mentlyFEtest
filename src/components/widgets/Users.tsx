"use client";

import React, { useState, useMemo } from 'react'
import Card from '@/components/ui/Card'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { CiMenuKebab } from "react-icons/ci"

const initialData = [
  { name: 'Students', value: 200, color: '#36A2EB' },
  { name: 'Mentors', value: 8, color: '#7BC67E' },
  { name: 'Programs', value: 22, color: '#FF6384' },
  { name: 'Others', value: 10, color: '#FFCE56' },
]

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded border">
        <p className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Users = () => {
  const [filter, setFilter] = useState('All')
  
  const filteredData = useMemo(() => {
    if (filter === 'All') return initialData;
    return initialData.filter(item => item.name === filter);
  }, [filter]);

  const totalUsers = useMemo(() => {
    return filteredData.reduce((sum, item) => sum + item.value, 0)
  }, [filteredData])

  return (
    <Card className="h-full relative">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-[#B0B0B0] text-base font-bold">Users</h1>
        <div className="flex items-center gap-2">
          <select 
            className="text-sm border border-gray-300 py-2 px-1 rounded-md bg-transparent outline-none text-gray-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Students</option>
            <option>Mentors</option>
            <option>Programs</option>
            <option>Others</option>
          </select>
          <CiMenuKebab />
        </div>
      </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] -left-5 overflow-y-auto scrollbar-hide p-1">
        <div className="flex items-center justify-center space-x-3">
          {/* Chart container */}
          <div className="relative w-[200px] h-[200px]">
            <PieChart width={200} height={200}>
              <Pie
                data={filteredData}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                startAngle={50}
                endAngle={-380}
              >
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-semibold">{totalUsers}</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
          </div>

          {/* Legend container */}
          <div className="flex flex-col gap-4">
            {filteredData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-sm font-semibold ml-2">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Card>
  )
}

export default Users
