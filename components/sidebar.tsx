"use client"
import Link from "next/link"
import {
  Home,
  FileText,
  Activity,
  Users,
  Contact,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Sidebar({
  isCollapsed,
  onToggle,
  isMobile = false,
  isMobileSidebarOpen = false,
  onMobileToggle,
}) {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <AnimatePresence>
      {/* Only show sidebar on mobile if isMobileSidebarOpen is true */}
      {(!isMobile || (isMobile && isMobileSidebarOpen)) && (
        <motion.div
          initial={isMobile ? { x: -250 } : { x: 0 }}
          animate={{ x: 0 }}
          exit={isMobile ? { x: -250 } : {}}
          transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 25 }}
          className={`bg-[#340260] text-white flex flex-col h-full transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-[80px]" : "w-[250px]"
          } ${isMobile ? "fixed z-30 shadow-xl" : ""}`}
        >
          <div className="p-4 flex items-center">
            {isMobile && (
              <button
                onClick={onMobileToggle}
                className="absolute right-2 top-2 text-white p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            )}
            <div className="mr-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Techrity Logo"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-semibold whitespace-nowrap overflow-hidden"
                >
                  techrity
                </motion.span>
              )}
            </AnimatePresence>
            {!isMobile && (
              <div className="ml-auto">
                <button
                  className="text-white p-1 rounded-md hover:bg-white/10 transition-colors duration-200"
                  onClick={onToggle}
                  aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
              </div>
            )}
          </div>

          <nav className="flex-1 mt-20 ml-4 mr-4 overflow-y-auto">
            <NavItem href="/dashboard" icon={<Home size={20} />} label="Dashboard" active isCollapsed={isCollapsed} />
            <NavItem href="/programs" icon={<FileText size={20} />} label="Programs" isCollapsed={isCollapsed} />
            <NavItem href="/activities" icon={<Activity size={20} />} label="Activities" isCollapsed={isCollapsed} />
            <NavItem href="/users" icon={<Users size={20} />} label="Users" isCollapsed={isCollapsed} />
            <NavItem href="/forums" icon={<MessageSquare size={20} />} label="Forums" isCollapsed={isCollapsed} />
            <NavItem href="/finances" icon={<DollarSign size={20} />} label="Finances" isCollapsed={isCollapsed} />
            <NavItem href="/rewards" icon={<Award size={20} />} label="Rewards" isCollapsed={isCollapsed} />
            <div className="relative">
              <NavItem href="/analytics" icon={<BarChart2 size={20} />} label="Analytics" isCollapsed={isCollapsed} />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-4 [top:12%] -translate-y-1/2 text-xs bg-[#21055D] px-2 py-0.5 rounded-full"
                  >
                    Coming Soon
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <NavItem href="/settings" icon={<Settings size={20} />} label="Settings" isCollapsed={isCollapsed} />
            <NavItem href="/logout" icon={<LogOut size={20} />} label="Log Out" isCollapsed={isCollapsed} />
          </nav>

          {!isCollapsed ? (
            <div className="p-4 mt-auto">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="bg-[#4C2073] p-3 rounded-md mb-4 hover:bg-[#4A1E70] transition-colors duration-200"
              >
              
                <div>
                  <Contact size={16} className="mr-2 mb-4" />
                </div>
                <div className="flex items-center mb-2">
                  
                  <div className="text-sm text-purple-200">Got some questions, enquiries or need help?</div>
                </div>
                <Link href="/help" className="text-xs text-yellow-300 underline transition-colors duration-200">
                  Visit Mently Help Desk Here
                </Link>
              </motion.div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Switch to Classic Mode</span>
                <div className="relative inline-block w-10 align-middle select-none">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="sr-only"
                    checked={isToggled}
                    onChange={() => setIsToggled(!isToggled)}
                  />
                  <div className="block h-6 bg-purple-700 rounded-full w-10"></div>
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                      isToggled ? "left-5" : "left-1"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-2 mt-auto">
              <button className="w-full flex justify-center p-2 hover:bg-white/10 rounded-md transition-colors duration-200">
                <HelpCircle size={20} />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function NavItem({ href, icon, label, active = false, isCollapsed = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 mt-4 cursor-pointer rounded-lg text-sm ${
        active ? "bg-white text-[#3a0a5e]" : ""
      } hover:bg-white rounded-lg hover:text-[#3a0a5e] ${isCollapsed ? "justify-center" : ""} transition-all duration-200 hover:shadow-md`}
      title={isCollapsed ? label : ""}
    >
      <div className={`flex items-center justify-center ${isCollapsed ? "" : "mr-8"}`}>{icon}</div>
      <AnimatePresence>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap overflow-hidden"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  )
}
