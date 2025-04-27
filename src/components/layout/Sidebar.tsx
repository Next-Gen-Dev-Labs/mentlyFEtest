"use client";
import {
  Home,
  BookOpen,
  CalendarClock,
  Users,
  MessageSquare,
  Wallet,
  Gift,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TechrityLogo from "@/components/assets/T4G23 Style Guide V2_Updated 2 (1).png";
import ToggleSidebarIcon from "@/components/svgIcons/grid-4.svg";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home />, path: "/" },
  { name: "Programs", icon: <BookOpen />, path: "/programs" },
  { name: "Activities", icon: <CalendarClock />, path: "/activities" },
  { name: "Users", icon: <Users />, path: "/users" },
  { name: "Forums", icon: <MessageSquare />, path: "/forums" },
  { name: "Finances", icon: <Wallet />, path: "/finances" },
  { name: "Rewards", icon: <Gift />, path: "/rewards" },
  {
    name: "Analytics",
    icon: <BarChart3 />,
    path: "/analytics",
    comingSoon: true,
  },
  { name: "Settings", icon: <Settings />, path: "/settings" },
  { name: "Log Out", icon: <LogOut />, path: "/logout" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-20 md:hidden"
      >
        <Image
          src={ToggleSidebarIcon}
          alt="Menu"
          className="w-6 cursor-pointer h-6 mt-3 md:mt-0"
        />
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`bg-[#340260] h-screen text-white transition-all duration-300 ease-in-out 
        fixed md:relative z-40
        ${isCollapsed ? 'md:w-20' : 'md:w-60'} 
        ${isMobileMenuOpen ? 'w-[280px] translate-x-0' : 'w-0 -translate-x-full md:translate-x-0'} 
        overflow-hidden
        px-4 flex flex-col`}>
        
        <div className="text-2xl flex justify-between mt-9 mb-10 font-bold items-center">
          <Image 
            className={`transition-all duration-300 ${isCollapsed && !isMobileMenuOpen ? 'w-0 opacity-0' : 'w-[116px] opacity-100'} h-[27px]`} 
            src={TechrityLogo} 
            alt="Logo" 
          />
          <div className={`${isCollapsed && !isMobileMenuOpen ? 'flex gap-4 mx-auto' : 'flex gap-4'}`}>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="text-white cursor-pointer text-xl border-1 border-white rounded-md p-1" />
            </button>
            <Image
              src={ToggleSidebarIcon}
              alt="ToggleSidebarIcon"
              className="w-6 h-6 cursor-pointer hidden md:block"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          </div>
        </div>

        <nav className={`${isCollapsed && !isMobileMenuOpen ? 'space-y-6' : 'space-y-1'}`}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between group hover:bg-white 
                ${isCollapsed && !isMobileMenuOpen ? 'px-4' : 'px-8'} py-2 2xl:py-3 rounded cursor-pointer transition-all duration-200 ease-in-out
                ${pathname === item.path ? "bg-white text-[#1F0954]" : "text-[#C2C2C2]"}`}
            >
              <div className={`flex items-center ${isCollapsed && !isMobileMenuOpen ? 'justify-center w-full' : 'space-x-8'}`}>
                <span
                  className={`text-lg transition-colors h-[20px] w-[20px] duration-200 ease-in-out ${
                    pathname === item.path ? "text-[#1F0954]" : ""
                  } group-hover:text-[#1F0954]`}
                >
                  {item.icon}
                </span>
                {(!isCollapsed || isMobileMenuOpen) && (
                  <span
                    className={`text-base transition-colors duration-200 ease-in-out
                      ${pathname === item.path ? "text-[#1F0954]" : ""} 
                      group-hover:text-[#1F0954]`}
                  >
                    {item.name}
                  </span>
                )}
              </div>
              {item.comingSoon && (!isCollapsed || isMobileMenuOpen) && (
                <span className="text-xs absolute -mt-8 ml-23 bg-[#251974] text-[#EFEFF8] rounded px-1 py1">
                  Coming Soon
                </span>
              )}
            </Link>
          ))}
        </nav>

        {(!isCollapsed || isMobileMenuOpen) && (
          <>
            <div className="mt-5 lg:mt-5 bg-[#4c2073] px-5 py-2 rounded-lg md:h-32 lg:h-28">
              <SquareUser />
              <div className="space-y-5 mt-3">
                <p className="text-xs font-bold">
                  Got some questions, enquiries or need help?
                </p>
                <p className="text-[10px] text-[#F0C074] underline">
                  <a href="mailto:support@techrity.com">
                    Visit Mently Help Desk Here
                  </a>
                </p>
              </div>
            </div>

            <div className="text-sm flex items-center space-x-4 text-purple-300 mt-5 lg:mt-2">
              <p className="text-xs font-bold text-white">Switch to Classic Mode</p>
              <div className="">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                </label>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
