"use client";

import { useState } from "react";
// import { useResponsive } from "./hooks/useResponsive";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Sidebar from "./components/layout/Sidebar";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isMobile, isTablet } = useResponsive();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="h-screen flex overflow-hidden">
        {/* Mobile Menu Button */}
        {/* {(isMobile || isTablet) && ( */}
        <button
          className={`fixed z-50 top-4 left-4 bg-purple-600 text-white rounded-full p-2 shadow-lg xl:hidden ${
            isSidebarOpen ? "left-64" : "left-4"
          }`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
        {/* )} */}

        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen ? (
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-all duration-300 ease-in-out max-xl:hidden ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:relative lg:translate-x-0`}
            >
              <Sidebar />
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">{children}</div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </body>
    </html>
  );
}
