"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SidebarLink } from "@/utils/SidebarLinks";
import { motion } from "framer-motion";
import { links } from "@/utils/data";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true); // Default to open on larger screens
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile
  const pathname = usePathname();

  // Handle sidebar state and screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 960;
      setIsMobile(mobile);
      setOpen(!mobile); // Collapse on mobile, open on larger screens
    };

    // Set initial state based on screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (!isMobile) {
      setOpen((prev) => !prev); // Toggle only if not on mobile
    }
  };

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen overflow-y-auto shrink-0 bg-primary text-textnotactive transition-all duration-300 shadow-lg pb-10 z-50"
      style={{
        width: open ? "240px" : "55px",
        minWidth: open ? "55px" : "55px", // Ensure minimum width for content
      }}
    >
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={handleToggle} // Use the conditional toggle handler
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* logo icon */}
          <div className="grid shrink-0">
            <img src="/Logo.svg" alt="logo" />
          </div>
        </button>
        {open &&
          !isMobile && ( // Only show the close button if open and not on mobile
            <motion.button
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              onClick={handleToggle}
              className="bg-transparent border-none cursor-pointer"
            >
              <img src="/close.png" alt="Close" className="w-6 h-6" />
            </motion.button>
          )}
      </div>
      <div className="px-2 mt-4">
        {links.map((link) => (
          <SidebarLink
            key={link.id}
            link={link}
            isActive={pathname === link.href}
            onClick={() => {}}
            open={open}
            notifs={link.notifs}
          />
        ))}
      </div>

      {open && (
        <div className="max-w-[220px] mx-auto p-4 rounded-[8px] bg-blue/25">
          <div>
            <img src="/user-tag.png" alt="" />
          </div>

          <p className="text-xs font-bold py-6 text-white">
            Got some questions, enquiries or need help?
          </p>

          <a href="" className="text-[10px] text-[#F0C074] underline">
            Visit Mently Help Desk Here
          </a>
        </div>
      )}
    </motion.nav>
  );
};
