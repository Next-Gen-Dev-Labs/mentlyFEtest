// src/components/RecentActivitiesSection.tsx
import { FC } from 'react';

const RecentActivitiesSection: FC = () => {
  const activities = [
    {
      id: 1,
      type: 'KYC Verification',
      user: 'Max',
      action: 'has signed up on Mentify',
      time: '25 minutes ago',
      icon: '🔒'
    },
    {
      id: 2,
      type: 'New User Sign Up!',
      user: 'Ade',
      action: 'has signed up on Mentify',
      time: '1 hour ago',
      icon: '🎉'
    },
    {
      id: 3,
      type: 'Withdrawal Request',
      user: 'Manfred',
      action: 'requested a withdrawal',
      time: '25 minutes ago',
      icon: '💸'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Activities</h2>
        <button className="text-sm text-purple-600 hover:underline">See all</button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mr-3">
              <span className="text-lg">{activity.icon}</span>
            </div>
            <div>
              <div className="font-medium text-sm">{activity.type}</div>
              <div className="text-xs text-gray-500">
                {activity.user} {activity.action}
              </div>
              <div className="text-xs text-gray-400">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivitiesSection;