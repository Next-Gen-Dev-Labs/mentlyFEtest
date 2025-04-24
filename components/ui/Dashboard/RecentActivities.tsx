import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const activities = [
  {
    icon: '/avatar-7.jpg', 
    title: 'KYC Verification',
    description: '45 new persons just signed up on Mently.',
    time: '25 minutes Ago'
  },
  {
    icon: '/avatar-8.png', 
    title: 'New user sign Up!',
    description: '45 new persons just signed up on Mently.',
    time: '25 minutes Ago'
  },
  {
    icon: '/avatar-6.jpg', 
    title: 'Withdrawal Request',
    description: 'Mardian requested a withdrawal.',
    time: '25 minutes Ago'
  },
  
];

const RecentActivitiesSection = () => {
  return (
    <div className="bg-white rounded-xl mt-4 shadow p-4">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2">
               <GiHamburgerMenu className="w-4 h-4 inline text-gray-500" />
               <h2 className="text-base inline font-bold">Applications</h2>
             </div>
             <div className="flex items-center space-x-2">
               <button className="text-purple-600 text-sm font-medium">See all</button>
               <EllipsisVertical className="w-5 h-5 text-gray-500" />
             </div>
             </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 border-b pb-4 last:border-b-0 last:pb-0">
            <div className="relative w-9 h-9 mt-1">
              <Image 
                src={activity.icon}
                alt={activity.title}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <h4 className="font-medium">{activity.title}</h4>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivitiesSection