"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import {
  CiHome,
  CiViewList,
  CiUser,
  CiDollar,
  CiGift,
  CiSettings
} from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import { MdOutlineForum } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  return (
    <>
      {/* Mobile Toggle Button - Show only on small/medium screens */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden text-purple-900"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <BiMenuAltRight className="text-3xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-purple-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:flex lg:flex-col`}
      >
        {/* Logo section */}
        <div className="p-4 pb-0 flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Menu Items */}
        <div className="flex-1 pt-24">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-purple-800 ${
                activeItem === item.name ? "bg-purple-800" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <item.icon />
              </div>
              <span className="ml-3">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Footer section */}
        <div className="p-4 mt-auto border-t border-purple-800">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
              <span className="text-xs">MN</span>
            </div>
            <div>
              <div className="text-sm">Mohammed Nasir</div>
              <div className="text-xs text-gray-300">
                Got some questions, enquiries or need help?
              </div>
            </div>
          </div>
          <div className="text-xs text-center text-blue-300 cursor-pointer">
            Visit Mently Help Desk Here
          </div>
          <div className="mt-4 flex items-center justify-between text-xs">
            <span>Switch to Classic Mode</span>
            <div className="w-10 h-5 bg-purple-700 rounded-full p-1 cursor-pointer">
              <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile - show when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
