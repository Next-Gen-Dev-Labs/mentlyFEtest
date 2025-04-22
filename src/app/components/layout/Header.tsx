"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BellIcon } from "@heroicons/react/outline";
// import { useResponsive } from "../../hooks/useResponsive";

interface HeaderProps {
  onManageWidgets: () => void;
}

export default function Header({ onManageWidgets }: HeaderProps) {
  //   const { isMobile } = useResponsive();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6">
      <div className="flex justify-end items-center space-x-4">
        <div className="flex-1 md:hidden"></div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100"
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </motion.button>

        <div className="flex items-center space-x-2">
          <img
            src="/avatar-placeholder.png"
            alt="User avatar"
            className="h-8 w-8 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium">Techrity Foundation</p>
            <p className="text-xs text-gray-500">Member</p>
          </div>
        </div>

        <div className="hidden lg:flex space-x-3">
          <button
            className="p-2 text-gray-400 hover:text-gray-600"
            aria-label="List view"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <button className="p-2 text-gray-700" aria-label="Grid view">
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
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-50 text-purple-700 py-2 px-4 rounded-md flex items-center"
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
        </div>

        {/* {isMobile && ( */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-purple-100 text-purple-700 md:hidden"
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
        {/* )} */}
      </div>
    </header>
  );
}
