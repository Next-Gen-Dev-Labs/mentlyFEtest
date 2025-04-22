'use client';
import { useState } from 'react';
import { Menu, MoreVertical } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  iconUrl: string;
  iconBgColor: string;
}

export default function RecentActivities() {
  const [activities] = useState<Activity[]>([
    {
      id: '1',
      title: 'KYC Verification',
      description: '45 new persons just signed up on Mently.',
      timeAgo: '25 minutes Ago',
      iconUrl: '/api/placeholder/40/40',
      iconBgColor: 'bg-yellow-400'
    },
    {
      id: '2',
      title: 'New User Sign Up!',
      description: '45 new persons just signed up on Mently.',
      timeAgo: '25 minutes Ago',
      iconUrl: '/api/placeholder/40/40',
      iconBgColor: 'bg-orange-500'
    },
    {
      id: '3',
      title: 'Withdrawal Request',
      description: 'Mardian requested a withdrawal.',
      timeAgo: '25 minutes Ago',
      iconUrl: '/api/placeholder/40/40',
      iconBgColor: 'bg-gray-400'
    }
  ]);

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Menu size={18} className="text-gray-400 mr-2" />
          <h1 className="text-gray-400 font-medium">Recent Activities</h1>
        </div>
        <div className="flex items-center">
          <button className="text-purple-600 text-sm font-medium mr-3">
            See all
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <MoreVertical size={18} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className={`w-10 h-10 rounded-full ${activity.iconBgColor} flex items-center justify-center mr-3 flex-shrink-0`}>
              <img
                src={activity.iconUrl}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}