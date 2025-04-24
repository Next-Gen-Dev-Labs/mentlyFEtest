"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

const ThemeToggle = () => {
  const { state } = useSidebar();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const isCollapsed = state === "collapsed";

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("theme")) {
      setTheme("light");
    }
  }, [setTheme]);

  const isDarkMode = mounted && theme === "dark";

  const toggleTheme = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setTheme(isDarkMode ? "light" : "dark");
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div
      className={`mt-4 flex items-center cursor-pointer ${
        isCollapsed ? "justify-center px-3" : "justify-between px-4"
      }`}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-pressed={isDarkMode}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      {!isCollapsed && (
        <span className="text-sm text-white font-semibold transition-opacity duration-200">
          {mounted &&
            (isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode")}
        </span>
      )}

      <div
        className={`
          relative h-6 w-10 rounded-full p-0.5
          transition-colors duration-300 ease-out
          ${isDarkMode ? "bg-[#6B3CC9]" : "bg-[#3A1270]"}
        `}
      >
        <div
          className={`
            absolute h-5 w-5 rounded-full bg-white
            flex items-center justify-center
            transform transition-all duration-300
            ${isDarkMode ? "translate-x-4" : "translate-x-0"}
            ${isAnimating ? "scale-90" : "scale-100"}
            cubic-bezier(0.4, 0, 0.2, 1)
          `}
        >
          {mounted && (
            <>
              {isDarkMode ? (
                <Moon
                  className="h-3 w-3 text-[#3A1270] transition-opacity duration-200"
                  style={{ opacity: isAnimating ? 0.7 : 1 }}
                />
              ) : (
                <Sun
                  className="h-3 w-3 text-[#6B3CC9] transition-opacity duration-200"
                  style={{ opacity: isAnimating ? 0.7 : 1 }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
