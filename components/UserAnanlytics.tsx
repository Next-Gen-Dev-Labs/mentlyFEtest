// components/UsersStats.jsx
import React from 'react';

const UserStats = () => {
  // Static data for the user categories
  const userData = {
    total: 240,
    categories: [
      { name: 'Students', count: 200, color: 'bg-blue-400', textColor: 'text-blue-400' },
      { name: 'Mentors', count: 8, color: 'bg-orange-300', textColor: 'text-orange-300' },
      { name: 'Programs', count: 22, color: 'bg-pink-300', textColor: 'text-pink-300' },
      { name: 'Others', count: 10, color: 'bg-green-300', textColor: 'text-green-300' },
    ]
  };

  // Calculate the percentage for each category to determine segment sizes
  const calculatePercentage = (count:any) => {
    return (count / userData.total) * 100;
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-gray-700 font-medium">Users</h3>
        <div className="flex items-center space-x-1 bg-gray-50 rounded px-2 py-1">
          <span className="text-xs text-gray-500">All</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Chart and Stats */}
      <div className="flex justify-between items-center">
        {/* Donut Chart - We'll implement this with CSS */}
        <div className="relative w-36 h-36">
          {/* SVG for the donut chart */}
          <svg viewBox="0 0 36 36" className="w-full h-full">
            {/* Background circle */}
            <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#f1f5f9" strokeWidth="3"></circle>
            
            {/* Colored segments - We'll add strokes with different colors and dasharray values */}
            {/* Students segment (blue) */}
            <circle 
              cx="18" 
              cy="18" 
              r="15.91549430918954" 
              fill="transparent" 
              stroke="#60a5fa" 
              strokeWidth="3" 
              strokeDasharray={`${calculatePercentage(userData.categories[0].count)} 100`}
              strokeDashoffset="25"
            ></circle>
            
            {/* Mentors segment (orange) */}
            <circle 
              cx="18" 
              cy="18" 
              r="15.91549430918954" 
              fill="transparent" 
              stroke="#fcd34d" 
              strokeWidth="3" 
              strokeDasharray={`${calculatePercentage(userData.categories[1].count)} 100`}
              strokeDashoffset={`${100 - calculatePercentage(userData.categories[0].count) + 25}`}
            ></circle>
            
            {/* Programs segment (pink) */}
            <circle 
              cx="18" 
              cy="18" 
              r="15.91549430918954" 
              fill="transparent" 
              stroke="#f9a8d4" 
              strokeWidth="3" 
              strokeDasharray={`${calculatePercentage(userData.categories[2].count)} 100`}
              strokeDashoffset={`${100 - calculatePercentage(userData.categories[0].count) - calculatePercentage(userData.categories[1].count) + 25}`}
            ></circle>
            
            {/* Others segment (green) */}
            <circle 
              cx="18" 
              cy="18" 
              r="15.91549430918954" 
              fill="transparent" 
              stroke="#86efac" 
              strokeWidth="3" 
              strokeDasharray={`${calculatePercentage(userData.categories[3].count)} 100`}
              strokeDashoffset={`${100 - calculatePercentage(userData.categories[0].count) - calculatePercentage(userData.categories[1].count) - calculatePercentage(userData.categories[2].count) + 25}`}
            ></circle>
          </svg>
          
          {/* Total number in the center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold">{userData.total}</span>
            <span className="text-xs text-gray-500">User's</span>
          </div>
        </div>
        
        {/* Stats Breakdown */}
        <div className="space-y-2">
          {userData.categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-2 w-2 rounded-full ${category.color} mr-2`}></div>
                <span className="text-xs text-gray-600">{category.name}</span>
              </div>
              <span className={`text-xs font-medium ml-4 ${category.textColor}`}>{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStats;