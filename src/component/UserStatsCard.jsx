"use client"

import {  FaChevronDown} from 'react-icons/fa';


const UserStatsCard = () => {
  // Sample user data
  const userData = {
    total: 240,
    categories: [
      { name: "Students", count: 200, color: "#60a5fa" }, 
      { name: "Mentors", count: 7, color: "#fbbf24" }, 
      { name: "Programs", count: 22, color: "#c084fc" }, 
      { name: "Others", count: 18, color: "#4ade80" }, 
    ],
  }

  // Calculate percentages for the donut chart
  const total = userData.categories.reduce((sum, category) => sum + category.count, 0)
  const segments = userData.categories.map((category) => ({
    ...category,
    percentage: (category.count / total) * 100,
  }))

  const generateDonutSegments = () => {
    let cumulativePercentage = 0
    return segments.map((segment, index) => {
      const startAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2
      cumulativePercentage += segment.percentage
      const endAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2

      // Calculate the SVG path
      const radius = 50
      const startX = 50 + radius * Math.cos(startAngle)
      const startY = 50 + radius * Math.sin(startAngle)
      const endX = 50 + radius * Math.cos(endAngle)
      const endY = 50 + radius * Math.sin(endAngle)

      // Determine if the arc should be drawn as a large arc
      const largeArcFlag = segment.percentage > 50 ? 1 : 0

      // Create the SVG path
      const path = `
        M 50 50
        L ${startX} ${startY}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
        Z
      `

      return <path key={index} d={path} fill={segment.color} />
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium text-gray-700">Users</h2>
        <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-md">
          <span className="text-sm text-gray-600">All</span>
          <FaChevronDown className="h-4 w-4 text-gray-600" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {generateDonutSegments()}
            <circle cx="50" cy="50" r="30" fill="white" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">{userData.total}</span>
            <span className="text-sm text-gray-500">Users</span>
          </div>
        </div>

        <div className="space-y-2 -ml-4">
          {segments.map((segment, index) => (
          <div key={index} className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 mr-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: segment.color }}></div>
            <span className="text-sm text-gray-600">{segment.name}</span>
          </div>
          <span className="text-sm font-medium text-gray-800">{segment.count}</span>
        </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserStatsCard
