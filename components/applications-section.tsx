"use client"

import { MoreVertical } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ApplicationsSection() {
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
          <h2 className="text-lg font-medium text-gray-700">Applications</h2>
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

      <div className="space-y-4">
        <div className="flex justify-between items-center ml-4">
          <h3 className="text-sm font-medium text-gray-300">Mentors</h3>
        </div>

        <ApplicationCard
          name="Maxwell Smith"
          email="maxwellsmith@gmail.com"
          experience="4years Experience"
          role="Product Designer"
          location="Lagos, Nigeria"
          timezone="GMT +1"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />

        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

        <div className="flex justify-between items-center mt-4 ml-4">
          <h3 className="text-sm font-medium text-gray-300">Students</h3>
        </div>

        <ApplicationCard
          name="Adeati Samuel"
          email="maxwellsmith@gmail.com"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />

        <div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

        <ApplicationCard
          name="Maxwell Smith"
          email="maxwellsmith@gmail.com"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />
      </div>
    </motion.div>
  )
}

function ApplicationCard({ name, email, role, location, experience, timezone, profileImage }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#f9fafb" }}
      transition={{ duration: 0.2 }}
      className="flex-col items-center justify-center rounded-lg transition-colors duration-200"
    >
      <div className="rounded-lg p-3 flex items-center">
        <input type="checkbox" className="mr-3 h-4 w-4 accent-[#7c3aed] cursor-pointer transition-all duration-200" />
        <Image
          src={profileImage || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div className="flex-1">
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-red-500 text-red-500 rounded px-3 py-1 text-sm hover:bg-red-50 transition-colors duration-200"
          >
            Reject
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7c3aed] text-white rounded px-3 py-1 text-sm hover:bg-[#6d28d9] transition-colors duration-200"
          >
            Accept
          </motion.button>
        </div>
      </div>

      <div>
        {role && (
          <div className="flex items-center justify-between mt-1 flex-wrap">
            <span className="text-xs bg-[#f3f0ff] text-[#7c3aed] px-2 py-0.5 rounded mr-2 mb-1">{role}</span>

            {experience && (
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded mr-2 mb-1">{experience}</span>
            )}
            {location && (
              <span className="text-xs bg-blue-100 text-bue-100 px-2 py-0.5 rounded mr-2 mb-1">{location}</span>
            )}
            {timezone && <span className="text-xs bg-gray-100 text-gray-500 mb-1 px-2 py-0.5 rounded">{timezone}</span>}
          </div>
        )}
      </div>
    </motion.div>
  )
}
