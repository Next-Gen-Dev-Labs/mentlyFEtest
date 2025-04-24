"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface UsersChartProps {
  data: {
    total: number
    categories: {
      name: string
      count: number
      color: string
    }[]
  }
}

export function UsersPieChart({ data }: UsersChartProps) {
  const chartData = data.categories.map((category) => ({
    name: category.name,
    value: category.count,
  }))

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-2">
        <h3 className="text-3xl font-bold">{data.total}</h3>
        <p className="text-xs text-muted-foreground">Users</p>
      </div>

      <div className="w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={data.categories[index].color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
        {data.categories.map((category, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
            <span className="text-xs">{category.name}</span>
            <span className="text-xs font-medium">{category.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
