"use client"

import { useState, useEffect } from "react"
import Sidebar from "./sidebar"
import Header from "./header"
import WelcomeBar from "./welcome-bar"
import ProgramsSection from "./programs-section"
import GroupCallsSection from "./group-calls-section"
import ApplicationsSection from "./applications-section"
import MentorsSection from "./mentors-section"
import UsersSection from "./users-section"
import RecentActivitiesSection from "./recent-activities-section"
import ManageWidgetPanel from "./manage-widget-panel"
import { LayoutGrid, LayoutPanelTop } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Dashboard() {
  const [isManageWidgetOpen, setIsManageWidgetOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Set mounted state after component mounts for animations
  useEffect(() => {
    setIsMounted(true)

    // Check if mobile on mount and when window resizes
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Close mobile sidebar when switching to desktop
      if (!mobile && isMobileSidebarOpen) {
        setIsMobileSidebarOpen(false)
      }
    }

    // Initial check
    checkIfMobile()

    // Add event listener with debounce for better performance
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkIfMobile, 100)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
    }
  }, [isMobileSidebarOpen])

  // Toggle function for mobile sidebar
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Pass mobile state and toggle function to Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobile={isMobile}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onMobileToggle={toggleMobileSidebar}
      />

      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
          isManageWidgetOpen ? "blur-sm" : ""
        }`}
      >
        {/* Pass mobile toggle function to Header */}
        <Header isMobile={isMobile} onMobileMenuToggle={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50">
          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <LayoutGrid size={20} className="text-gray-500" />
              </button>
              <button
                onClick={() => setIsManageWidgetOpen(true)}
                className="flex items-center space-x-2 bg-white border border-gray-200 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
              >
                <LayoutPanelTop size={20} className="text-[#7c3aed]" />
                <span className="text-[#3a0a5e] font-semibold hidden sm:inline">Manage Widgets</span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMounted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="ml-0 md:ml-4 lg:ml-12"
              >
                <WelcomeBar />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-6">
                  <div className="lg:col-span-4 space-y-4 md:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <ProgramsSection />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <UsersSection />
                    </motion.div>
                  </div>
                  <div className="lg:col-span-8 space-y-4 md:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <GroupCallsSection />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <ApplicationsSection />
                      </motion.div>
                      <div className="space-y-4 md:space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <MentorsSection />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <RecentActivitiesSection />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <ManageWidgetPanel isOpen={isManageWidgetOpen} onClose={() => setIsManageWidgetOpen(false)} />

      {/* Overlay for mobile sidebar */}
      <AnimatePresence>
        {isMobile && isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={toggleMobileSidebar}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
