"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Students", value: 200, color: "#60a5fa" },
  { name: "Mentors", value: 8, color: "#f472b6" },
  { name: "Programs", value: 22, color: "#4ade80" },
  { name: "Others", value: 10, color: "#fbbf24" },
]

export function UsersSection() {
  const [filter, setFilter] = useState("all")

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700">Users</h3>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="h-8 w-[180px] border border-gray-200 bg-white text-gray-700">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="students">Students</SelectItem>
            <SelectItem value="mentors">Mentors</SelectItem>
            <SelectItem value="programs">Programs</SelectItem>
          </SelectContent>
        </Select>
      </div>
       <div className="flex justify-evenly items-center">
       <div className="h-[240px] w-[60%] flex items-center justify-center ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={0} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-gray-800">240</div>
          <div className="text-sm text-gray-500">Users</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 ">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm gap-2 ">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
       </div>
     
    </div>
  )
}
