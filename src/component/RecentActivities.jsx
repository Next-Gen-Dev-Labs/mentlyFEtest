"use client"

import Image from 'next/image';
import { FaEllipsisV } from 'react-icons/fa';
import Ade from "../component/assets/Ade Sam.svg";
import KYC from "../component/assets/KYC.svg";
import newUser from "../component/assets/new user.svg";
const RecentActivities = () => {
  
  const activities = [
    {
      id: 1,
      type: "KYC Verification",
      message: "40 new persons just signed up on Mentify",
      time: "25 minutes ago",
      icon: KYC,
      iconBg: "bg-yellow-500",
    },
    {
      id: 2,
      type: "New User Sign Up!",
      message: "45 new persons just signed up on Mentify",
      time: "25 minutes ago",
      icon: newUser,
      iconBg: "bg-blue-500",
    },
    {
      id: 3,
      type: "Withdrawal Request",
      message: "Kachi has requested a withdrawal",
      time: "25 minutes ago",
      icon: Ade,
      iconBg: "bg-gray-500",
    },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-4 border-b border-dotted border-blue-200 pb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium text-gray-500">Recent Activities</h2>
        </div>
        <div className="flex items-center">
          <button className="text-purple-600 text-sm font-medium">See all</button>
          <button className="p-1 ml-2">
            <FaEllipsisV className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div
              className={`flex-shrink-0 w-8 h-8 ${activity.iconBg} text-white rounded-full flex items-center justify-center`}
            >
              <Image src={activity.icon} alt='user icon' />
              
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{activity.type}</h3>
              <p className="text-sm text-gray-600">{activity.message}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivities
