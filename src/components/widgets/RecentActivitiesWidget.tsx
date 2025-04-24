'use client';

import Image from 'next/image';
import Link from 'next/link';

const RecentActivitiesWidget = () => {
  const activities = [
    {
      id: 1,
      title: 'KYC Verification',
      description: 'Sarah Johnson has completed her KYC verification',
      time: '25 minutes Ago',
      icon: 'https://api.dicebear.com/7.x/avataaars/png?seed=sarah',
    },
    {
      id: 2,
      title: 'New User Sign Up!',
      description: 'Michael Chen has joined the platform',
      time: '1 hour Ago',
      icon: 'https://api.dicebear.com/7.x/avataaars/png?seed=michael',
    },
    {
      id: 3,
      title: 'Withdrawal Request',
      description: 'Emma Wilson has requested a withdrawal',
      time: '2 hours Ago',
      icon: 'https://api.dicebear.com/7.x/avataaars/png?seed=emma',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-full border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
            <button className="text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
              </svg>
            </button>
            <h2 className="text-md font-semibold text-gray-400">Recent Activities</h2>
          </div>
        <div className="flex items-center gap-2">
          <Link href="#" className="text-[#8B72FC] hover:text-[#6F01D0] text-sm font-bold">
            See all
          </Link>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={activity.icon}
                  alt={activity.title}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-700">{activity.title}</h3>
                <p className="text-[10px] text-gray-500">{activity.description}</p>
                <p className="text-[10px] text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
            <div className="h-px bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivitiesWidget; 