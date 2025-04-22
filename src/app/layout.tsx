"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./components/layout/Sidebar";
import "./styles/globals.css";
import { HiXMark } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
      if (window.innerWidth >= 1280) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50">
        <div className="h-screen flex overflow-hidden">
          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`fixed z-50 top-4 left-4 bg-purple-600 text-white rounded-full p-2 shadow-lg ${
                isSidebarOpen ? "left-64" : "left-4"
              }`}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              {isSidebarOpen ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </motion.button>
          )}

          {/* Sidebar */}
          <AnimatePresence>
            {(isSidebarOpen || !isMobile) && (
              <motion.div
                initial={{ x: isMobile ? -280 : 0 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 z-40 w-64 bg-purple-900 shadow-xl xl:relative"
              >
                <Sidebar />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <motion.div
            layout
            className="flex-1 flex flex-col overflow-hidden"
            style={{
              marginLeft: !isMobile && isSidebarOpen ? "16rem" : "0",
            }}
          >
            {children}
          </motion.div>

          {/* Mobile Sidebar Overlay */}
          {isMobile && isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      </body>
    </html>
  );
}
