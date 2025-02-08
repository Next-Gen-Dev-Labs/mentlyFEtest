"use client";

import { motion } from "framer-motion";
import { Bell, ChevronDown } from "lucide-react";
import React from "react";

export function NavBar() {
  return (
    <div className="bg-background ">
      <header className="flex items-center justify-between px-8 lg:px-24 py-4 border-b dark:border-zinc-800">
        <div className="flex items-center gap-2"></div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </motion.button>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Godwin Jimmy</p>
              <p className="text-xs text-gray-500">
                Free Plan <span className="text-blue-500 font-bold">Upgrade</span>
              </p>
            </div>
          </div>
          <div>
          <ChevronDown className="w-5 h-5 text-gray-500" />

          </div>
        </div>
      </header>
    </div>
  );
}
