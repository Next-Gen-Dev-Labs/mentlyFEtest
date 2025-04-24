"use client";

import Image from "next/image";
import { useState } from "react";

const TopBar = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  // Function to toggle the mobile sidebar
  const toggleMobileSidebar = () => {
    // Call the toggleMobileSidebar function from the Sidebar component
    if (typeof window !== "undefined" && (window as any).toggleMobileSidebar) {
      (window as any).toggleMobileSidebar();
    }
  };

  return (
    <div className="fixed top-0 left-0 lg:left-48 right-0 h-16 bg-white border-b border-gray-200 px-2 sm:px-4 md:px-6 flex items-center justify-between z-40 w-full max-w-full overflow-hidden">
      {/* Left Section (Mobile Menu Button) */}
      <button
        className="lg:hidden p-2 -ml-2 mr-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar menu"
      >
        {/* Basic Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Notification Icon */}
        <div className="relative">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setHasNotifications(!hasNotifications)}
          >
            <Image
              src="/notification.png"
              alt="notifications"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
          {hasNotifications && (
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></div>
          )}
        </div>

        {/* Profile Section: Hide text on smaller screens */}
        <div className="hidden sm:flex flex-col">
          <span className="text-sm font-medium text-gray-900">John Doe</span>
          <span className="text-xs text-gray-500">Administrator</span>
        </div>

        {/* Widget Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Image
            src="/widget.png"
            alt="widgets"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
