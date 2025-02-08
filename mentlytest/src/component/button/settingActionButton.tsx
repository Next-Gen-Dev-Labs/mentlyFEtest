"use client";

import { useState } from "react";
import { Settings, Copy } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SettingActionButtons() {
  const [showSettingDropdown, setShowSettingsDropdown] = useState(false);

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSettingsDropdown(!showSettingDropdown)}
          className="text-gray-600 hover:text-gray-800 dark:text-foreground  p-2 rounded-full hover:bg-gray-100 transition-all"
        >
          <Settings className="w-5 h-5" />
        </motion.button>

        {showSettingDropdown && (
          <div className="absolute left-0 mt-2 w-fit bg-white dark:bg-background  shadow-lg rounded-md border border-gray-200">
            <ul className="text-gray-400 text-sm flex flex-col gap-2 p-2">
              <li className="  hover:bg-gray-700 cursor-pointer">delete </li>
              <li className="  hover:bg-gray-700 cursor-pointer">clear </li>
            </ul>
          </div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2  hover:bg-gray-100 transition "
      >
        <Copy className="w-5 h-5 text-gray-700 dark:text-foreground " />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="py-1 px-2 bg-[#1F0954] text-white rounded-[30px] flex items-center gap-2 hover:bg-purple-900 transition"
      >
        <Image src="/share1.svg" alt="share" width={15} height={15} />
        <span className="text-sm">Share</span>
      </motion.button>
    </div>
  );
}
