"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        className="sr-only"
      />

      <motion.div
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
          isDark ? "bg-purple-800" : "bg-white"
        }`}
        layout
      >
        <motion.div
          className={`w-4 h-4  rounded-full shadow-md ${
            isDark ? "bg-white" : "bg-[#1F0954]"
          }`}
          layout
          animate={{ x: isDark ? 0 : 24 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>
    </label>
  );
}
