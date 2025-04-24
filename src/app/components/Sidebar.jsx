"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  FileText,
  Activity,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,

  X,
  ChevronRight,
  ChevronLeft,
  Menu,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import Book from "./Icons/Book";
import Activities from "./Icons/Activities";
import Forums from "./Icons/Forums";
import Finances from "./Icons/Finances";
import Rewards from "./Icons/Rewards";
import Analytics from "./Icons/Analytics";
import Settings from "./Icons/Settings";
import Logout from "./Icons/Logout";
import Users from "./Icons/Users";

const SidebarItem = ({ icon, title, active, href = "#", isCollapsed }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Link href={href} className="block w-full ">
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-start"
        } px-3 py-2 gap-2 text-xs md:text-sm cursor-pointer rounded-md mx-1 my-1 transition-colors duration-200
        ${
          active
            ? "bg-white text-purple-900 font-semibold"
            : "text-white/80 hover:bg-purple-800/50"
        }`}
        onMouseEnter={() => isCollapsed && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => isCollapsed && setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        <div className={`${isCollapsed ? "w-auto" : "w-4 mr-2"}`}>{icon}</div>
        {/* Hide text when collapsed */}
        <span className={`${isCollapsed ? "hidden" : "inline-block"}`}>
          {title}
        </span>

        {/* Tooltip */}
        {isCollapsed && showTooltip && (
          <div className="absolute left-14 ml-3 bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-50">
            {title}
          </div>
        )}
      </div>
    </Link>
  );
};

export default function Sidebar({ activeTab, isOpen, setIsOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [classicMode, setClassicMode] = useState(false);
  const [showHelpTooltip, setShowHelpTooltip] = useState(false);
  const [showModeTooltip, setShowModeTooltip] = useState(false);

  // Auto-collapse on medium screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setIsCollapsed(true);
      } else if (window.innerWidth >= 1024) {
        setIsCollapsed(false);
      }
    };

    // Initial check
    handleResize();

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        !e.target.closest(".sidebar-container") &&
        !e.target.closest(".sidebar-toggle")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  const toggleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleClassicMode = () => {
    setClassicMode(!classicMode);
  };

  return (
    <>
      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          // onClick={toggleSidebar}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full 
          ${isCollapsed ? "w-16" : "w-52"} 
          bg-[#340260] text-white z-40 flex flex-col shadow-lg transition-all duration-300 sidebar-container
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end px-2 py-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-purple-800 bg-purple-100 p-1.5 rounded-md"
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Logo Header with toggle button */}
        <div className="flex items-center justify-between p-6  border-purple-800/30">
          {/* Show logo only when not collapsed */}
          {!isCollapsed && (
            <div className="h-8 w-24 relative">
              <Image
                src="/techrity-logo.png"
                alt="Techrity Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          {/* Toggle collapse button - visible on all screen sizes and centered when collapsed */}
          <button
            onClick={toggleSidebarCollapse}
            className={`text-white hover:bg-purple-700/50 p-1.5 rounded-md transition-colors ${
              isCollapsed ? "mx-auto" : "ml-auto"
            }`}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto pt-2 space-y-2 px-2 py-2 scrollbar-thin">
          <SidebarItem
            icon={<Home size={16} />}
            title="Dashboard"
            active={activeTab === "dashboard"}
            href="/dashboard"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Book  />}
            title="Programs"
            active={activeTab === "programs"}
            href="/programs"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Activities />}
            title="Activities"
            active={activeTab === "activities"}
            href="/activities"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Users  />}
            title="Users"
            active={activeTab === "users"}
            href="/users"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Forums />}
            title="Forums"
            active={activeTab === "forums"}
            href="/forums"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Finances />}
            title="Finances"
            active={activeTab === "finances"}
            href="/finances"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Rewards/>}
            title="Rewards"
            active={activeTab === "rewards"}
            href="/rewards"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Analytics />}
            title="Analytics"
            active={activeTab === "analytics"}
            href="/analytics"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Settings/>}
            title="Settings"
            active={activeTab === "settings"}
            href="/settings"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Logout size={16} />}
            title="Log Out"
            active={activeTab === "logout"}
            href="/logout"
            isCollapsed={isCollapsed}
          />
        </nav>

        {/* Help Desk + Toggle - hidden when collapsed */}
        {!isCollapsed && (
          <div className="px-3 pt-2 pb-4 border-t border-purple-800/30 mt-auto">
            <div className="bg-[#4c2173] p-2 rounded-md text-xs mb-3 hover:bg-[#5c3183] transition-colors">
              <div className="flex items-start gap-1.5">
                <HelpCircle size={12} className="mt-0.5 text-white/60" />
                <div>
                  <p className="text-white/80 leading-tight text-xs">
                    Got questions or need help?
                  </p>
                  <button className="text-yellow-400 hover:text-yellow-300 underline mt-0.5 text-xs">
                    Visit Help Desk
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-white/80">Classic Mode</span>
              <button
                className="relative w-8 h-4 bg-gray-600 rounded-full flex items-center px-0.5 focus:outline-none focus:ring-1 focus:ring-purple-500"
                onClick={toggleClassicMode}
                role="switch"
                aria-checked={classicMode}
              >
                <span
                  className={`absolute w-3 h-3 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    classicMode ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Collapsed Help Icon - only shown when collapsed */}
        {isCollapsed && (
          <div className="mt-auto pb-4 flex flex-col items-center gap-3">
            <div className="relative">
              <button
                className="text-white/70 hover:text-white p-2 rounded-full bg-[#4c2173] hover:bg-[#5c3183] transition-colors"
                aria-label="Help"
                onMouseEnter={() => setShowHelpTooltip(true)}
                onMouseLeave={() => setShowHelpTooltip(false)}
                onFocus={() => setShowHelpTooltip(true)}
                onBlur={() => setShowHelpTooltip(false)}
              >
                <HelpCircle size={16} />
              </button>

              {/* Help Tooltip */}
              {showHelpTooltip && (
                <div className="absolute left-14 top-1 bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-50">
                  Help Desk
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="text-white/70 hover:text-white p-1"
                onClick={toggleClassicMode}
                role="switch"
                aria-checked={classicMode}
                onMouseEnter={() => setShowModeTooltip(true)}
                onMouseLeave={() => setShowModeTooltip(false)}
                onFocus={() => setShowModeTooltip(true)}
                onBlur={() => setShowModeTooltip(false)}
              >
                <div className="relative w-6 h-3 bg-gray-600 rounded-full flex items-center px-0.5 mx-auto">
                  <span
                    className={`absolute w-2 h-2 bg-white rounded-full shadow-md transition-transform duration-300 ${
                      classicMode ? "translate-x-3" : "translate-x-0"
                    }`}
                  />
                </div>
              </button>

              {/* Classic Mode Tooltip */}
              {showModeTooltip && (
                <div className="absolute  top-0 bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-50">
                  Classic Mode: {classicMode ? "On" : "Off"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}