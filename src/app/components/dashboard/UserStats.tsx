"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function UserStats() {
  // For a real project, we'd use a charting library like Chart.js or Recharts
  // Here I'm mocking the chart appearance with a simple component

  const data = {
    totalUsers: 240,
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Users</h2>

        <div className="relative">
          <select
            className="text-sm border rounded py-1 px-2 appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-300"
            defaultValue="all"
            aria-label="Filter users"
          >
            <option value="all">All</option>
            <option value="students">Students</option>
            <option value="mentors">Mentors</option>
            <option value="programs">Programs</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48">
          {/* Mock donut chart - in a real project, use a charting library */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#60a5fa"
              strokeWidth="20"
              strokeDasharray="209.4 251.3"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#f59e0b"
              strokeWidth="20"
              strokeDasharray="8.8 251.3"
              strokeDashoffset="-209.4"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="20"
              strokeDasharray="22 251.3"
              strokeDashoffset="-218.2"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#6b7280"
              strokeWidth="20"
              strokeDasharray="10.5 251.3"
              strokeDashoffset="-240.2"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold">{data.totalUsers}</span>
            <span className="text-sm text-gray-500">Users</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
            <span className="text-sm">Students</span>
          </div>
          <span className="text-sm font-medium">{data.students}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-sm">Mentors</span>
          </div>
          <span className="text-sm font-medium">{data.mentors}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm">Programs</span>
          </div>
          <span className="text-sm font-medium">{data.programs}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
            <span className="text-sm">Others</span>
          </div>
          <span className="text-sm font-medium">{data.others}</span>
        </div>
      </div>
    </div>
  );
}
