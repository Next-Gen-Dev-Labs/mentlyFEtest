"use client";

import { useState, useEffect, memo } from "react";
import {
  CiHome,
  CiViewList,
  CiUser,
  CiDollar,
  CiGift,
  CiSettings
} from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { LuBookUser } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineForum } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      staggerChildren: 0.05
    }
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

const Sidebar = memo(function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: CiHome },
    { name: "Programs", icon: CiViewList },
    { name: "Activities", icon: FiActivity },
    { name: "Users", icon: CiUser },
    { name: "Forums", icon: MdOutlineForum },
    { name: "Finances", icon: CiDollar },
    { name: "Rewards", icon: CiGift },
    { name: "Analytics", icon: IoAnalytics },
    { name: "Settings", icon: CiSettings },
    { name: "Log Out", icon: HiOutlineLogout }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <motion.button
        className={`fixed top-4 left-4 z-50 lg:hidden text-purple-900`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
      >
        <BiMenuAltRight className="text-3xl" />
      </motion.button>

      <motion.div
        variants={sidebarVariants}
        initial="open"
        animate={isSidebarOpen ? "open" : "closed"}
        className={`
          fixed inset-0 min-h-screen left-0 z-40 
          w-64 bg-[#340260] text-white 
          lg:relative lg:flex lg:flex-col
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="p-4 pb-0 flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={96}
              height={96}
              className="object-cover"
            />
          </Link>
        </motion.div>

        <div className="flex-1 pt-24 overflow-x-hidden">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={menuItemVariants}
              custom={index}
              whileHover={{ x: 2 }}
              className={`flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-purple-800 ${
                activeItem === item.name ? "bg-purple-800" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <motion.div
                className="w-6 h-6 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className="ml-3">{item.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 mt-auto border-t border-purple-800"
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-fullflex items-center justify-center mr-2">
              <LuBookUser className="w-8 h-8" />
            </div>
          </div>
          <div>
            {/* <div className="text-sm">Mohammed Nasir</div> */}
            <div className="text-xs text-gray-300">
              Got some questions, enquiries or need help?
            </div>
          </div>
          <Link
            href="#"
            className="text-xs text-center text-blue-300 cursor-pointer"
          >
            Visit Mently Help Desk Here
          </Link>
          <div className="mt-4 flex items-center justify-between text-xs">
            <span>Switch to Classic Mode</span>
            <div className="w-10 h-5 bg-purple-700 rounded-full p-1 cursor-pointer">
              <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/5 backdrop-blur-sm z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default Sidebar
