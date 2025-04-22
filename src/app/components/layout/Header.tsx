"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  onManageWidgets: () => void;
}

export default function Header({ onManageWidgets }: HeaderProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex-1 md:hidden"></div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            aria-label="Notifications"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </motion.button>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-semibold">
              T
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Techrity Foundation</p>
              <p className="text-xs text-gray-500">Member</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="hidden lg:block p-2 text-gray-400 hover:text-gray-600"
            aria-label="List view"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <button
            className="hidden lg:block p-2 text-gray-700"
            aria-label="Grid view"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex bg-purple-50 text-purple-700 py-2 px-4 rounded-md items-center"
            onClick={onManageWidgets}
            aria-label="Manage widgets"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Manage Widgets
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-full bg-purple-100 text-purple-700"
            onClick={onManageWidgets}
            aria-label="Manage widgets"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Notification dropdown */}
      <AnimatePresence>
        {isNotificationOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-4 mt-2 w-80 bg-white shadow-lg rounded-lg z-50"
          >
            <div className="p-4 border-b">
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <div className="p-4 border-b hover:bg-gray-50">
                <p className="text-sm font-medium">New program published</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
              <div className="p-4 border-b hover:bg-gray-50">
                <p className="text-sm font-medium">New application received</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <p className="text-sm font-medium">
                  System maintenance scheduled
                </p>
                <p className="text-xs text-gray-500">Tomorrow at 2:00 AM</p>
              </div>
            </div>
            <div className="p-2 border-t text-center">
              <button className="text-sm text-purple-600 hover:underline">
                View all notifications
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
