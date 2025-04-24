"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileHeader from "./ProfileHeader";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

export default function WidgetPanel() {
  const [isWidgetPanelOpen, setIsWidgetPanelOpen] = useState(false);

  const toggleWidgetPanel = () => {
    setIsWidgetPanelOpen(!isWidgetPanelOpen);
  };

  const widgetOptions = [
    { id: "programs", name: "Programs", enabled: true },
    { id: "groupCalls", name: "Group Calls", enabled: true },
    { id: "mentors", name: "Mentors", enabled: true },
    { id: "recentActivities", name: "Recent Activities", enabled: true },
    { id: "application", name: "Application", enabled: true },
    { id: "earnings", name: "Earnings", enabled: false },
    { id: "forum", name: "Forum", enabled: false },
    { id: "programAnalysis", name: "Program Analysis", enabled: false }
  ];

  const [widgets, setWidgets] = useState(widgetOptions);

  const toggleWidget = (id) => {
    setWidgets(
      widgets.map((widget) =>
        widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
      )
    );
  };

  const resetToDefault = () => {
    setWidgets(widgetOptions);
  };

  const saveChanges = () => {
    // Save logic would go here
    setIsWidgetPanelOpen(false);
  };

  return (
    <div className="relative">
      <motion.div
        animate={{
          opacity: 1,
          filter: isWidgetPanelOpen ? "blur(4px)" : "blur(0px)"
        }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0 }}
      >
        <ProfileHeader toggleWidgetPanel={toggleWidgetPanel} />
      </motion.div>

      <AnimatePresence>
        {isWidgetPanelOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50"
          >
            <div className="h-full overflow-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-800">
                  Manage Widget
                </h2>
                <button
                  onClick={toggleWidgetPanel}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <IoCloseOutline className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-8">
                Personalize your dashboard by managing widgets: add, remove, or
                reorder them to fit your workflow.
              </p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {widgets.map((widget, index) => (
                  <motion.div
                    key={widget.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center">
                      <FiMenu className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{widget.name}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={widget.enabled}
                        onChange={() => toggleWidget(widget.id)}
                      />
                      <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded peer-checked:bg-green-500 peer-checked:border-green-500 flex items-center justify-center">
                        {widget.enabled && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </label>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={saveChanges}
                  className="flex-1 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={resetToDefault}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reset to Default
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isWidgetPanelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
            onClick={toggleWidgetPanel}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
