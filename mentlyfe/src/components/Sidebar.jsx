"use client";

import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "home" },
    { name: "Programs", icon: "list" },
    { name: "Activities", icon: "activity" },
    { name: "Users", icon: "users" },
    { name: "Forums", icon: "message-circle" },
    { name: "Finances", icon: "dollar-sign" },
    { name: "Rewards", icon: "gift" },
    { name: "Analytics", icon: "bar-chart-2" },
    { name: "Settings", icon: "settings" },
    { name: "Log Out", icon: "log-out" }
  ];

  return (
    <div className="w-64 min-h-screen bg-purple-900 text-white flex flex-col">
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center mr-2">
          <span className="text-xs">PB</span>
        </div>
        <span className="font-bold">techrity</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-purple-800 ${
              activeItem === item.name ? "bg-purple-800" : ""
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <div className="w-6 h-6 mr-3 flex items-center justify-center">
              <i className={`feather-${item.icon}`}></i>
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

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
  );
}
