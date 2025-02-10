"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IoToggle } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";
import {
  Bubble,
  ClipboardText,
  Grid4,
  Home2,
  Book,
  EmptyWallet,
  Award,
  Diagram,
  Setting2,
  LogoutCurve,
  UserTag,
} from "iconsax-react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-[#2A1B5A] text-white flex flex-col items-center py-5 transition-all duration-300 z-40 ${
          isOpen ? "w-48" : "w-0"
        } lg:w-20 overflow-hidden`}
      >
        {/* Logo */}
        <div className="mb-8 mt-8">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full mb-4" />
          <Grid4 color="#ffff" size={24}/>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center w-full space-y-1">
          {[Home2, Book, Bubble, ClipboardText, EmptyWallet, Award, Diagram, Setting2, LogoutCurve].map(
            (Icon, index) => (
              <NavItem key={index} icon={Icon} />
            )
          )}

          {/* Help Desk */}
          <div className="w-14 h-24 rounded-lg bg-purple-500 flex flex-col items-center p-1">
            <UserTag color="#fff" size="22" className="mb-2" />
            <p className="text-[8px] text-[#F0C074] underline text-center">Visit Mently Help Desk</p>
          </div>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          className="absolute bottom-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600"
          onClick={toggleTheme}
        >
          {isDarkMode ? <IoToggle size={20} color="#FFD700" /> : <FaToggleOff size={20} />}
        </button>
      </aside>
    </>
  );
};

const NavItem = ({ icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex items-center justify-center cursor-pointer p-2 hover:bg-[#44307D] rounded-lg w-12 h-12"
  >
    <Icon size={18} color="#fff" />
  </motion.div>
);

export default Sidebar;
