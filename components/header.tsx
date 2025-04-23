"use client"

import { Bell, Menu } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Header({ isMobile = false, onMobileMenuToggle }) {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4 flex items-center h-[80px]">
      {/* Mobile menu toggle button - only visible on mobile */}
      {isMobile && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onMobileMenuToggle}
          className="p-2 rounded-full hover:bg-gray-100 mr-auto"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-[#3a0a5e]" />
        </motion.button>
      )}

      <div className={`flex items-center space-x-4 ${isMobile ? "" : "ml-auto"}`}>
        <button className="p-2 rounded-full hover:bg-gray-100 relative transition-colors duration-200">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=36&width=36"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full bg-purple-500"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-medium">Techrity Foundation</div>
            <div className="text-xs text-gray-500">Member</div>
          </div>
        </div>
      </div>
    </header>
  )
}
