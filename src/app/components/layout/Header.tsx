"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../../public/images/icons/HeaderLogo.svg";
import MenuIcon from "../../../../public/images/icons/menuIcon.svg";
import BellIcon from "../../../../public/images/icons/bellIcon.svg";
import { BsChevronDown } from "react-icons/bs";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarExpanded: boolean;
}

export default function Header({
  toggleSidebar,
  isSidebarExpanded,
}: HeaderProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const mainContentRef = useRef<HTMLElement | null>(null);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isNotificationOpen &&
        !target.closest("[data-notification-container]")
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  // Find main content element and track scroll position
  useEffect(() => {
    mainContentRef.current = document.querySelector("main");

    const handleScroll = () => {
      if (mainContentRef.current) {
        // For the main element's scroll position
        setIsAtTop(mainContentRef.current.scrollTop <= 20);
      } else {
        // Fallback to window scroll
        setIsAtTop(window.scrollY <= 20);
      }
    };

    // Initial check
    handleScroll();

    // Add event listener to the right element
    const scrollElement = mainContentRef.current || window;
    scrollElement.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (mainContentRef.current) {
        mainContentRef.current.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollToggle = () => {
    const mainContent =
      mainContentRef.current || document.querySelector("main");

    if (mainContent) {
      if (isAtTop) {
        mainContent.scrollTo({
          top: mainContent.scrollHeight,
          behavior: "smooth",
        });
      } else {
        mainContent.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      // Fallback to window scroll
      if (isAtTop) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 md:px-6 sticky top-0 z-20 shadow-sm">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        {/* Left side - Menu toggle */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSidebar}
            className="p-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
            aria-label={
              isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"
            }
          >
            <motion.div
              animate={{ rotate: isSidebarExpanded ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={MenuIcon}
                alt="Toggle menu"
                width={24}
                height={24}
                className="text-gray-600"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Right side - Notifications and profile */}
        <div className="flex items-center space-x-4 ml-auto">
          <motion.div className="relative" data-notification-container>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-200"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              aria-label="Notifications"
              aria-expanded={isNotificationOpen}
              aria-controls="notification-dropdown"
            >
              <Image
                src={BellIcon}
                alt="Notifications"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
            </motion.button>

            {/* Notification dropdown */}
            <AnimatePresence>
              {isNotificationOpen && (
                <motion.div
                  id="notification-dropdown"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200"
                  style={{ transformOrigin: "top right" }}
                >
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">
                      Notifications
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      3 New
                    </span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <motion.div
                      className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                      whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                    >
                      <div className="flex items-start">
                        <div className="h-2 w-2 mt-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            New program published
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            2 minutes ago
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                      whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                    >
                      <div className="flex items-start">
                        <div className="h-2 w-2 mt-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            New application received
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            1 hour ago
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="p-4 hover:bg-gray-50 cursor-pointer"
                      whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                    >
                      <p className="text-sm font-medium text-gray-800">
                        System maintenance scheduled
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Tomorrow at 2:00 AM
                      </p>
                    </motion.div>
                  </div>
                  <div className="p-3 border-t border-gray-100 text-center bg-gray-50">
                    <button className="text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-[#8b72fc] flex items-center justify-center overflow-hidden">
              <Image
                src={Logo}
                alt="Techrity logo"
                className="h-auto w-auto p-1"
                width={32}
                height={32}
              />
            </div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm font-medium text-gray-800">
                Techrity Foundation
              </p>
              <p className="text-xs text-gray-500">Member</p>
            </motion.div>

            {/* Scroll button with animation */}
            <motion.button
              className="p-2 bg-[#6F01D0] text-white rounded-md hover:bg-purple-700"
              onClick={handleScrollToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
            >
              <motion.div
                animate={{ rotate: isAtTop ? 0 : 180 }}
                transition={{ duration: 0.4 }}
              >
                <BsChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}

// <div className="flex items-center space-x-3">
//   <button
//     className="hidden lg:block p-2 text-gray-400 hover:text-gray-600"
//     aria-label="List view"
//   >
//     <svg
//       className="h-5 w-5"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M4 6h16M4 12h16M4 18h16"
//       />
//     </svg>
//   </button>

//   <button
//     className="hidden lg:block p-2 text-gray-700"
//     aria-label="Grid view"
//   >
//     <svg
//       className="h-5 w-5"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M4 6h16M4 10h16M4 14h16M4 18h16"
//       />
//     </svg>
//   </button>

//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="hidden md:flex bg-purple-50 text-purple-700 py-2 px-4 rounded-md items-center"
//     onClick={onManageWidgets}
//     aria-label="Manage widgets"
//   >
//     <svg
//       className="h-5 w-5 mr-2"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 4v16m8-8H4"
//       />
//     </svg>
//     Manage Widgets
//   </motion.button>

//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="md:hidden p-2 rounded-full bg-purple-100 text-purple-700"
//     onClick={onManageWidgets}
//     aria-label="Manage widgets"
//   >
//     <svg
//       className="h-5 w-5"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 4v16m8-8H4"
//       />
//     </svg>
//   </motion.button>
// </div>;
