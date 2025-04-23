// src/components/UserStatsCard.tsx
import { FC } from 'react';

const UserStatsCard: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Users</h2>
        <select className="text-xs border rounded p-1">
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      
      <div className="flex justify-center items-center mb-4">
        <div className="relative w-44 h-44">
          {/* This would be a chart in a real app */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">240</div>
              <div className="text-xs text-gray-500">Users</div>
            </div>
          </div>
          {/* Simple placeholder for the chart */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="15" />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#8b5cf6" 
              strokeWidth="15" 
              strokeDasharray="251" 
              strokeDashoffset="63"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
          <span className="text-xs">Students</span>
          <span className="text-xs font-medium ml-auto">200</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-xs">Mentors</span>
          <span className="text-xs font-medium ml-auto">8</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <span className="text-xs">Programs</span>
          <span className="text-xs font-medium ml-auto">22</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-xs">Others</span>
          <span className="text-xs font-medium ml-auto">10</span>
        </div>
      </div>
    </div>
  );
};

export default UserStatsCard;