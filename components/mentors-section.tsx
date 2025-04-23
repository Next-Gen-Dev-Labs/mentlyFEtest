"use client"

import { MoreVertical, Plus } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function MentorsSection() {
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
          <h2 className="text-lg font-medium text-gray-700">Mentors</h2>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors duration-200"
          >
            <Plus size={16} />
          </motion.button>

          <button className="hover:bg-gray-100 p-1 rounded-full transition-colors duration-200">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <MentorCard
          name="Maxwell Smith"
          role="Product Designer"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />

        <MentorCard
          name="Adeati Samuel"
          role="Product Designer"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
        />
      </div>

      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#f3f0ff] text-[#7c3aed] rounded-md py-2 text-sm font-medium hover:bg-[#ede9fe] transition-colors duration-200"
        >
          See all
        </motion.button>
      </div>
    </motion.div>
  )
}

function MentorCard({ name, role, profileImage }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#f9fafb" }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between p-2 rounded-lg"
    >
      <div className="flex items-center">
        <Image
          src={
            profileImage ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
          }
          alt={name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#7c3aed] text-white rounded-full px-3 py-1 text-sm hover:bg-[#6d28d9] transition-colors duration-200"
      >
        Message
      </motion.button>
    </motion.div>
  )
}
