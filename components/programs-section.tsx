"use client"

import { MoreVertical, Settings } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProgramsSection() {
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
          <h2 className="text-lg font-medium text-gray-700">Programs</h2>
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

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Filter</span>
          <button className="flex items-center space-x-1 text-sm border rounded px-2 py-1 hover:bg-gray-50 transition-colors duration-200">
            <span>Active</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <ProgramCard
          title="Fundamentals of User interface & Experience"
          tag="Bootcamp"
          description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
          mentors={3}
          image="https://images.unsplash.com/photo-1728044849316-b42a4b25e507?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        />

        <ProgramCard
          title="Colour Hack Practical Group Call"
          tag="Group Call"
          description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
          hostName="Faith Okello"
          hostImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
          showAnalyze={true}
          image="https://images.unsplash.com/photo-1726064856060-726ff0fc6b37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProgramCard
          title="Colour Hack Practical Group Call"
          tag="Group Call"
          description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
          hostName="Self"
          hostImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
          showAssignMentor={true}
          image="https://images.unsplash.com/photo-1726064856060-726ff0fc6b37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </motion.div>
  )
}

function ProgramCard({
  title,
  tag,
  description,
  hostName,
  hostImage,
  mentors,
  image,
  showAssignMentor = false,
  showAnalyze = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-300"
    >
      <div className="relative">
        <Image src={image || ""} alt={title} width={500} height={150} className="w-full h-[100px] object-cover" />
        <div className="absolute top-2 right-2">
          <motion.button
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <Settings size={16} />
          </motion.button>
        </div>
        <div className="absolute bottom-2 left-2">
          <h3 className="font-semibold text-white mb-2">{title}</h3>
          <div className="inline-block bg-blue-500"></div>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{tag}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {hostName && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-between">
              <Image
                src={hostImage || "/placeholder.svg"}
                alt={hostName}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span className="text-xs text-gray-500">Hosted By: {hostName}</span>
            </div>
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#7c3aed] border border-[#7c3aed] rounded-md px-4 py-1 text-xs mr-4 hover:bg-[#7c3aed] hover:text-white transition-colors duration-200"
              >
                View Details
              </motion.button>
              {showAssignMentor ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#7c3aed] text-white rounded-md px-4 mr-4 py-1 text-sm hover:bg-[#6d28d9] transition-colors duration-200"
                >
                  Assign Mentor
                </motion.button>
              ) : showAnalyze ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#7c3aed] text-white rounded-md px-4 py-1 text-xs hover:bg-[#6d28d9] transition-colors duration-200"
                >
                  Analyze
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#7c3aed] text-white rounded-md px-4 py-1 text-xs hover:bg-[#6d28d9] transition-colors duration-200"
                >
                  Analysis
                </motion.button>
              )}
            </div>
          </div>
        )}

        {mentors && (
          <div className="flex items-center mb-4">
            <div className="flex -space-x-2 mr-2">
              {Array(mentors)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs"
                  >
                    {i + 1}
                  </div>
                ))}
            </div>
            <span className="text-xs text-gray-500">Mentors</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
