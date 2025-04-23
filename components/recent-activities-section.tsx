"use client"

import { MoreVertical } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function RecentActivitiesSection() {
  return (
    <motion.div
      whileHover={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-sm p-4 mt-4"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M4 6H20M4 12H20M4 18H12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-lg font-medium text-gray-700">Recent Activities</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-[#7c3aed] text-sm font-medium hover:underline transition-all duration-200">
            See all
          </button>
          <button className="hover:bg-gray-100 p-1 rounded-full transition-colors duration-200">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-0">
        <ActivityItem
          title="KYC Verification"
          description="45 new persons just signed up on Mently."
          time="25 minutes Ago"
          icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />

        <div className="border-b border-gray-100 my-3"></div>

        <ActivityItem
          title="New User Sign Up!"
          description="45 new persons just signed up on Mently."
          time="25 minutes Ago"
          icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />

        <div className="border-b border-gray-100 my-3"></div>

        <ActivityItem
          title="Withdrawal Request"
          description="Mardian requested a withdrawal."
          time="25 minutes Ago"
          icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />
      </div>
    </motion.div>
  )
}

function ActivityItem({ title, description, time, icon }) {
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-start">
      <div className="mr-3">
        <Image src={icon || "/placeholder.svg"} alt={title} width={40} height={40} className="rounded-full" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </motion.div>
  )
}
