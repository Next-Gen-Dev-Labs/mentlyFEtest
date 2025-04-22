"use client";

import { useState } from "react";

export default function UserSection() {
  const [chartData, setChartData] = useState({
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
    total: 240
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Users</h2>
        <div className="border border-gray-200 rounded px-2 py-1 text-sm">
          All
          <svg
            className="w-4 h-4 inline-block ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-48 h-48 mb-6 md:mb-0">
          {/* This would be a pie chart in a real implementation */}
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-green-300"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">{chartData.total}</div>
            <div className="text-sm text-gray-500">Users</div>
          </div>
        </div>

        <div className="flex-1 pl-0 md:pl-10 space-y-3">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
            <span className="text-sm">Students</span>
            <span className="ml-auto text-sm font-medium">
              {chartData.students}
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
            <span className="text-sm">Mentors</span>
            <span className="ml-auto text-sm font-medium">
              {chartData.mentors}
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
            <span className="text-sm">Programs</span>
            <span className="ml-auto text-sm font-medium">
              {chartData.programs}
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            <span className="text-sm">Others</span>
            <span className="ml-auto text-sm font-medium">
              {chartData.others}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
