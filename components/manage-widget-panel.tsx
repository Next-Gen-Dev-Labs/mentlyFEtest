"use client"

import { X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ManageWidgetPanel({ isOpen, onClose }) {
  const [widgets, setWidgets] = useState({
    programs: true,
    groupCalls: true,
    mentors: true,
    recentActivities: true,
    application: true,
    earnings: false,
    forum: false,
    programAnalysis: false,
  })

  const handleToggleWidget = (widget) => {
    setWidgets((prev) => ({
      ...prev,
      [widget]: !prev[widget],
    }))
  }

  const handleSaveChanges = () => {
    // Save widget preferences
    onClose()
  }

  const handleResetToDefault = () => {
    setWidgets({
      programs: true,
      groupCalls: true,
      mentors: true,
      recentActivities: true,
      application: true,
      earnings: false,
      forum: false,
      programAnalysis: false,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={onClose}></div>
          <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white h-full w-full shadow-xl"
            >
              <div className="h-full flex flex-col p-4 sm:p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#7c3aed]">Manage Widget</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Close panel"
                  >
                    <X size={24} />
                  </button>
                </div>

                <p className="text-gray-600 mb-6">
                  Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  {Object.entries(widgets).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <WidgetOption
                        label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                        checked={value}
                        onChange={() => handleToggleWidget(key)}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSaveChanges}
                    className="flex-1 bg-[#7c3aed] text-white py-3 rounded-md font-medium hover:bg-[#6d28d9] transition-colors duration-200"
                  >
                    Save Changes
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleResetToDefault}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Reset to Default
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function WidgetOption({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
      <div className="flex items-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path
            d="M4 6H20M4 12H20M4 18H12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{label}</span>
      </div>
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} id={`widget-${label}`} />
        <label
          htmlFor={`widget-${label}`}
          className={`block w-6 h-6 rounded border ${
            checked ? "bg-green-500 border-green-500" : "bg-white border-gray-300"
          } cursor-pointer transition-colors duration-200`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </label>
      </div>
    </div>
  )
}
