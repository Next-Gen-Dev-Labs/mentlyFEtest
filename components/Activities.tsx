import React from 'react';

const activitiesData = [
  {
    id: 1,
    type: 'KYC Verification',
    description: '15 new persons just signed up on Mently.',
    time: '20 minutes Ago',
    iconBg: 'bg-yellow-400',
    initial: 'K'
  },
  {
    id: 2,
    type: 'New User Sign Up!',
    description: '15 new persons just signed up on Mently.',
    time: '25 minutes Ago',
    iconBg: 'bg-blue-500',
    initial: 'N'
  },
  {
    id: 3,
    type: 'Withdrawal Request',
    description: 'Mardian requested a withdrawal.',
    time: '25 minutes Ago',
    iconBg: 'bg-gray-400',
    initial: 'W'
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-xs shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-gray-500 text-sm font-medium">Recent Activities</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-indigo-600 text-xs font-medium">
            See all
          </button>
          <button className="text-gray-400 p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Activities List */}
      <div className="space-y-4">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`relative h-8 w-8 overflow-hidden rounded-full flex items-center justify-center ${activity.iconBg}`}>
              <div className="text-white font-bold text-xs">
                {activity.initial}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium">{activity.type}</h3>
              <p className="text-xs text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;