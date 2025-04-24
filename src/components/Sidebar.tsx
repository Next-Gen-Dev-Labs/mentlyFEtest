"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Sidebar Component
 *
 * Provides the main navigation sidebar for the application with
 * animated links, responsive design, and accessibility features.
 */
const Sidebar = () => {
  // State for active navigation item and animation
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Navigation items configuration
  const navItems = [
    { name: "Dashboard", icon: "/home-grey.png", active: true },
    { name: "Programs", icon: "/book.png" },
    { name: "Activities", icon: "/bubble.png" },
    { name: "Users", icon: "/users.png" },
    { name: "Forums", icon: "/clipboard.png" },
    { name: "Finances", icon: "/wallet.png" },
    { name: "Rewards", icon: "/award.png" },
    { name: "Analytics", icon: "/chart.png", comingSoon: true },
    { name: "Settings", icon: "/setting.png" },
    { name: "Log Out", icon: "/logout.png" },
  ];

  // Set loaded state after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /**
   * Handles click on navigation item
   * @param name - The name of the clicked item
   */
  const handleNavClick = (name: string) => {
    setActiveItem(name);

    // Close mobile sidebar when a navigation item is clicked
    setIsMobileOpen(false);

    // Normally would add navigation logic here
    console.log(`Navigating to ${name}`);
  };

  // Toggle mobile sidebar - using useCallback to prevent recreation on each render
  const toggleMobileSidebar = useCallback(() => {
    setIsMobileOpen((prevState) => !prevState);
  }, []);

  // Function to expose toggle to parent components
  useEffect(() => {
    // Add the toggle function to the window object so it can be called from other components
    (window as any).toggleMobileSidebar = toggleMobileSidebar;

    return () => {
      // Clean up when component unmounts
      delete (window as any).toggleMobileSidebar;
    };
  }, [toggleMobileSidebar]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-[#340260] font-['Chivo'] overflow-y-auto z-50 transition-all duration-300 ease-in-out
          ${
            isMobileOpen
              ? "w-full sm:w-80 translate-x-0"
              : "w-48 -translate-x-full lg:translate-x-0"
          }
          lg:w-48 lg:flex flex-col`}
        data-testid="sidebar"
      >
        {/* Logo Section with Mobile Close Button */}
        <div
          className="p-3 flex items-center justify-between"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <Image
            src="/logo.png"
            alt="Techrity logo"
            width={60}
            height={24}
            className="w-auto h-5"
            priority
          />

          {/* Mobile Close Button - Only visible on mobile when sidebar is open */}
          <button
            className="lg:hidden text-white p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex-1 px-3 py-4 space-y-3"
          role="navigation"
          aria-label="Main Navigation"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href="#"
              className={`flex items-center gap-6 px-3 py-2.5 rounded-lg transition-all duration-200 text-xs group relative ${
                activeItem === item.name
                  ? "bg-white text-[#340260] font-medium"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => handleNavClick(item.name)}
              aria-current={activeItem === item.name ? "page" : undefined}
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease-out ${
                  index * 0.05
                }s, transform 0.5s ease-out ${index * 0.05}s`,
              }}
            >
              <Image
                src={item.icon}
                alt=""
                width={16}
                height={16}
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeItem === item.name
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
                aria-hidden="true"
              />
              <span>{item.name}</span>
              {item.comingSoon && (
                <span
                  className="absolute -top-1 right-4 text-[8px] bg-[#0214BD] px-1.5 py-0.5 rounded-full text-white"
                  aria-label="Coming soon feature"
                >
                  Coming Soon
                </span>
              )}

              {/* Active indicator dot */}
              {activeItem === item.name && (
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#340260]"
                  aria-hidden="true"
                ></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Help Section */}
        <div
          className="p-3 bg-[#4a0388] mx-2 mb-2 rounded-lg transform transition-all duration-500"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "scale(1)" : "scale(0.95)",
            transition:
              "opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s",
          }}
        >
          <div className="flex flex-col gap-2">
            <Image
              src="/user-tag.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
              aria-hidden="true"
            />
            <p className="text-white text-[10px]">
              Got some questions, enquiries or need help?
            </p>
            <Link
              href="#"
              className="text-[#F0C074] text-[10px] hover:underline transition-colors duration-200"
              aria-label="Visit Mighty Help Desk for support"
            >
              Visit <span className="underline">Mighty Help Desk</span> here!
            </Link>
          </div>
        </div>

        {/* Classic Mode Toggle */}
        <div
          className="p-2 flex items-center justify-between"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-out 0.6s",
          }}
        >
          <span className="text-white text-[10px]">Switch to Classic Mode</span>
          <button
            className="w-10 h-5 bg-white/20 rounded-full relative focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Switch to classic mode"
            role="switch"
            aria-checked="false"
            onClick={() => console.log("Toggle classic mode")}
          >
            <div
              className="w-3 h-3 bg-white rounded-full absolute top-1 left-1 transition-transform duration-300"
              style={{
                transform: "translateX(0)",
              }}
            ></div>
          </button>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          /* Custom scrollbar styling */
          div::-webkit-scrollbar {
            width: 4px;
          }

          div::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
          }

          div::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }

          div::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    </>
  );
};

export default Sidebar;
