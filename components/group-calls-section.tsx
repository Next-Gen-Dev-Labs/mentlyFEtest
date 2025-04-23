"use client"

import { MoreVertical, ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function GroupCallsSection() {
  return (
    <motion.div
      whileHover={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-sm p-4"
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
          <h2 className="text-lg font-medium text-gray-700">Group Calls</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GroupCallCard
          title="Weekly Meeting - Product Demo Review with Testers"
          status="ongoing"
          date="Mon, Jul 30, 2024"
          time="9:00 - 11:00AM"
          groupName="UX Strategy Study group"
          image="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8c2VsbHxlbnwwfHwwfHx8MA%3D%3D"
        />

        <GroupCallCard
          title="Weekly Meeting - Product Demo Review with Testers"
          status="upcoming"
          date="Mon, Jul 30, 2024"
          time="9:00 - 11:00AM"
          groupName="UX Strategy Study group"
          image="https://plus.unsplash.com/premium_photo-1669592891582-f9ef0dbd8de8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZWtseXxlbnwwfHwwfHx8MA%3D%3D"
        />

        <GroupCallCard
          title="Weekly Meeting - Product Demo Review with Testers"
          status="ongoing"
          date="Mon, Jul 30, 2024"
          time="9:00 - 11:00AM"
          groupName="UX Strategy Study group"
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </motion.div>
  )
}

function GroupCallCard({ title, status, date, time, groupName, image }) {
  const statusColor = status === "ongoing" ? "green" : "blue"
  const statusBg = status === "ongoing" ? "bg-green-100" : "bg-blue-100"
  const statusText = status === "ongoing" ? "text-green-800" : "text-blue-800"
  const statusDot = status === "ongoing" ? "bg-green-500" : "bg-blue-500"

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-300"
    >
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={150}
          className="w-full h-[150px] object-cover"
        />
        <div className="absolute bottom-2 left-2">
          <motion.span
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1.5 }}
            className={`inline-flex items-center ${statusBg} ${statusText} text-xs px-2 py-1 rounded-full`}
          >
            <span className={`${statusDot} w-2 h-2 rounded-full mr-1`}></span>
            <span className="capitalize">{status}</span>
          </motion.span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 text-gray-800 line-clamp-2">{title}</h3>

        <div className="flex flex-wrap mb-2">
          <div className="flex items-center mr-4 mb-2">
            <Calendar size={16} className="mr-1 text-gray-500" />
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <div className="flex items-center mb-2">
            <Clock size={16} className="mr-1 text-gray-500" />
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center mb-3">
            <div className="flex items-center justify-between">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="Participant"
                width={24}
                height={24}
                className="rounded-full h-[24px] w-[24px] object-cover border-2 border-white"
              />
              <span className="text-xs text-gray-500 ml-2">{groupName}</span>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="-ml-1 first:ml-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                  alt="Participant"
                  width={24}
                  height={24}
                  className="rounded-full h-[24px] w-[24px] object-cover border-2 border-white"
                />
              </motion.div>
            ))}
          </div>
          <div className="ml-2">
            <span className="text-xs text-gray-500">Mentors</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#7c3aed] border border-[#7c3aed] rounded-md px-3 py-1 text-xs hover:bg-[#7c3aed] hover:text-white transition-colors duration-200"
          >
            View Participants
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7c3aed] text-white rounded-md px-3 py-1 text-xs flex items-center hover:bg-[#6d28d9] transition-colors duration-200"
          >
            Join Now
            <ArrowRight size={14} className="ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
