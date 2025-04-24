'use client';

import React from "react";

export function Users() {
  const total = 240;
  const breakdown = {
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md w-full mt-5">
      <h2 className="text-xl font-bold text-purple-900 mb-4">Users</h2>

      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        {/* Animated Pie Chart */}
        <div className="relative w-40 h-40 rounded-full animate-spin-slow">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(#62B2FD_0%_83.3%,#FFB44F_83.3%_87.5%,#F99BAB_87.5%_96.7%,#9BDFC4_96.7%_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center text-purple-900 text-sm font-semibold text-center px-2 opacity-0 animate-fade-in">
            {total} <br />Users
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 sm:mt-0 sm:ml-6 space-y-2 text-sm text-gray-700">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: '#62B2FD' }} />
            Students: {breakdown.students}
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: '#9BDFC4' }} />
            Mentors: {breakdown.mentors}
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: '#F99BAB' }} />
            Programs: {breakdown.programs}
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: '#FFB44F' }} />
            Others: {breakdown.others}
          </div>
        </div>
      </div>
    </div>
  );
}
