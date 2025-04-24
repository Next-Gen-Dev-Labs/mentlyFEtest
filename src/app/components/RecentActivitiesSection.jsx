// components/RecentActivitiesSection.jsx
import React from 'react';
import { Menu, MoreHorizontal, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import recent_1 from "../../../public/recent-1.jpg"
import recent_2 from "../../../public/recent-2.png"
import studentImg from "../../../public/student.jpg";

function ActivityItem({ icon, title, description, time }) {
  return (
    <div className="flex items-center p-3 border-b border-gray-100">
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
         <Image
                 src={icon}
                 alt="Techrity Logo"
                 width={100}
                 height={100}
                 className="w-full h-full object-cover"
               />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-[700]">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
}

export default function RecentActivitiesSection() {
  const activities = [
    {
      id: 1,
      title: "KYC Verification",
      description: "42 new persons just signed up on Mentify.",
      time: "25 minutes Ago",
      icon: recent_1
    },
    {
      id: 2,
      title: "New User Sign Up!",
      description: "45 new persons just signed up on Mentify.",
      time: "25 minutes Ago",
      icon: recent_2
    },
    {
      id: 3,
      title: "Withdrawal Request",
      description: "Adeola requested a withdrawal.",
      time: "25 minutes Ago",
      icon: studentImg
    },
    {
      id: 4,
      title: "Withdrawal Request",
      description: "Adeola requested a withdrawal.",
      time: "25 minutes Ago",
      icon: recent_1
    }
  ];

  return (
    <div className="">
     <div className="flex  items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            <div className=""><Menu size={20} /></div>
          </div>
          <h2 className="text-[16px] md:text-lg text-[#B0B0B0] font-[700]">Recent Activities</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xs text-[#6F01D0] text-[12px] font-[600]">See all</button>
          <button className="text-gray-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg spce-y-4 overflow-hidden">
        {activities.map(activity => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
}