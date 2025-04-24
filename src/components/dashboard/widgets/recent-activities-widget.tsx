"use client"

import { History, MoreVertical, Menu } from "lucide-react"
import { useWidgets } from "../widgets-context"

interface Activity {
  id: string
  title: string
  description: string
  time: string
  icon: string
  iconBg: string
  iconColor: string
  image?: string;

}

const activities: Activity[] = [
  {
    id: "1",
    title: "KYC Verification",
    description: "45 new users just signed up on Mentify",
    image: 'assets/images/programs/pro-icon1.jpg',
    time: "25 minutes Ago",
    icon: "shield",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    id: "2",
    title: "New User Sign Up!",
    description: "45 new users just signed up on Mentify",
    time: "25 minutes Ago",
    icon: "user-plus",
    iconBg: "bg-blue-100",
    image: 'assets/images/programs/pro-icon2.jpg',
    iconColor: "text-blue-500",
  },
  {
    id: "3",
    title: "Withdrawal Request",
    description: "Mentify requested a withdrawal",
    time: "25 minutes Ago",
    icon: "log-out",
    iconBg: "bg-red-100",
    image: 'assets/images/programs/pro-icon3.jpg',
    iconColor: "text-red-500",
  },
]

export default function RecentActivitiesWidget() {
  const { widgets } = useWidgets()

  if (!widgets.recentActivities) return null

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
        <Menu className="w-6 h-6 text-gray-700" />
          <h3 className="font-medium text-gray-500">Recent Activities</h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-purple-900 cursor-pointer">See all</span>
          <MoreVertical className="text-gray-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex items-start ${index < activities.length - 1 ? "mb-4 pb-4 border-b" : ""}`}
          >
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-10 h-8 rounded-full object-cover"
                />
              </div>
            <div>
              <div className="font-medium">{activity.title}</div>
              <div className="text-sm text-gray-600">{activity.description}</div>
              <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
