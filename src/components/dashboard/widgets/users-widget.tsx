"use client"

import { ChevronDown } from "lucide-react"
import { useWidgets } from "../widgets-context"

interface UserStat {
  label: string
  count: number
  color: string
}

const userStats: UserStat[] = [
  {
    label: "Students",
    count: 200,
    color: "bg-yellow-400",
  },
  {
    label: "Mentors",
    count: 8,
    color: "bg-blue-400",
  },
  {
    label: "Programs",
    count: 22,
    color: "bg-green-400",
  },
  {
    label: "Others",
    count: 10,
    color: "bg-red-400",
  },
]

export default function UsersWidget() {
  const { widgets } = useWidgets()

  if (!widgets.users) return null

  const totalUsers = userStats.reduce((sum, stat) => sum + stat.count, 0)

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h3 className="font-medium">Users</h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded px-3 py-1 text-sm flex items-center">
            All <ChevronDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f0f0f0" strokeWidth="10"></circle>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#FFD700"
                strokeWidth="10"
                strokeDasharray="167"
                strokeDashoffset="42"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#4299E1"
                strokeWidth="10"
                strokeDasharray="167"
                strokeDashoffset="209"
                transform="rotate(125 50 50)"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#48BB78"
                strokeWidth="10"
                strokeDasharray="167"
                strokeDashoffset="230"
                transform="rotate(170 50 50)"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#F56565"
                strokeWidth="10"
                strokeDasharray="167"
                strokeDashoffset="245"
                transform="rotate(210 50 50)"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">{totalUsers}</div>
                <div className="text-sm text-gray-500">Users</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {userStats.map((stat) => (
            <div key={stat.label} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${stat.color} mr-2`}></div>
              <span className="text-sm">{stat.label}</span>
              <span className="ml-auto font-medium">{stat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
