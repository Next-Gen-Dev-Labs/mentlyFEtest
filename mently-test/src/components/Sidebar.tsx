"use client"
import { sidebarItems } from "./list-items/sidebar";
import { useState, useEffect } from "react";
import Logo from "../../public/assets/icons/logo.png";
import GridIcon from "@/assets/icons/pane.svg";
import Image from "next/image";
import Tag from "@/assets/icons/user-tag.svg";

export default function Sidebar() {
  const [isMinimised, setIsMinimised] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMinimise = () => {
    setIsMinimised(!isMinimised);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed bottom-4 right-4 z-40 bg-[#340260] text-white p-3 rounded-full shadow-lg md:hidden"
          aria-label="Toggle sidebar"
        >
          {isMobileOpen ? "✕" : <GridIcon className="stroke-white" />}
        </button>
      )}
      {/* Sidebar */}
      <aside
        className={`
          ${isMobile ? 'fixed' : 'relative'} 
          ${isMobileOpen ? 'translate-x-0' : isMobile ? '-translate-x-full' : 'translate-x-0'}
          ${isMinimised && !isMobile ? 'w-fit' : 'w-[240px]'} 
          bg-[#340260] text-white p-4 h-100vh z-40
          transition-all duration-300 ease-in-out
        `}
      >
        <span className={`mb-20 flex items-center justify-between w-11/12 mx-auto ${isMinimised ? "pl-3" : ""}`}>
          <Image
            src={Logo}
            alt="Techrity logo"
            priority
            className={`mr-2 ${isMinimised ? "hidden" : "block"}`}
          />
          {!isMobile && (
            <div>
              <GridIcon 
                className="stroke-white cursor-pointer" 
                onClick={toggleMinimise}
                aria-label={isMinimised ? "Expand sidebar" : "Minimize sidebar"}
              />
            </div>
          )}
        </span>

        <nav className="space-y-9">
          {sidebarItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.path}
                className="flex items-center justify-start px-5 py-3 rounded-md text-white hover:bg-white hover:text-[#1F0954] transition-colors"
              >
                <item.icon className={`w-6 h-6 ${isMinimised && !isMobile ? 'mr-0' : 'mr-7'} stroke-white hover:stroke-[#1F0954]`} />
                <span className={`${(isMinimised && !isMobile) ? "hidden" : "block"}`}>
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-y-4 mt-20 w-full p-4 mx-auto backdrop-invert-[.1] rounded-lg shadow">
          <Tag />
          <h1 className="text-white">Got some questions, enquiries or need help?</h1>
          <p className="text-xs text-[#F0C074] underline">Visit Mently Help Desk Here</p>
        </div>
      </aside>
    </>
  );
}