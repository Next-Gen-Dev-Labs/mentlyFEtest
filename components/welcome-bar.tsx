"use client"

import { motion } from "framer-motion"

export default function WelcomeBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#7c3aed] text-white rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center shadow-md"
    >
      <div className="flex items-center mb-3 md:mb-0">
        <h1 className="text-xl font-semibold">Welcome Aboard, Blessing 👋</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <span className="text-sm md:text-base">We're thrilled to have you join Techrity Team!</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#7c3aed] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto"
        >
          Update Profile
        </motion.button>
      </div>
    </motion.div>
  )
}
