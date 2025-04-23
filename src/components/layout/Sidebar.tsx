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

  return (
    <div className={`bg-[#340260] h-screen text-white transition-all duration-300 ease-in-out 
      md:relative fixed
      ${isCollapsed ? 'md:w-20 -translate-x-full md:translate-x-0' : 'w-60 translate-x-0'}
      px-4 flex flex-col`}>
      <div className={isCollapsed ? "text-2xl mx-auto flex justify-between mt-9 mb-10 font-bold items-center" : "text-2xl flex justify-between mt-9 mb-10 font-bold items-center"}>
        <Image 
          className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0' : 'w-[116px] opacity-100'} h-[27px]`} 
          src={TechrityLogo} 
          alt="Logo" 
        />
        <Image
          src={ToggleSidebarIcon}
          alt="ToggleSidebarIcon"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center justify-between group hover:bg-white 
              ${isCollapsed ? 'px-4' : 'px-8'} py-3 rounded cursor-pointer transition-all duration-200 ease-in-out
              ${pathname === item.path ? "bg-white text-[#1F0954]" : "text-[#C2C2C2]"}`}
          >
            <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : 'space-x-8'}`}>
              <span
                className={`text-lg transition-colors h-[20px] w-[20px] duration-200 ease-in-out ${
                  pathname === item.path ? "text-[#1F0954]" : ""
                } group-hover:text-[#1F0954]`}
              >
                {item.icon}
              </span>
              {!isCollapsed && (
                <span
                  className={`text-base transition-colors duration-200 ease-in-out
                    ${pathname === item.path ? "text-[#1F0954]" : ""} 
                    group-hover:text-[#1F0954]`}
                >
                  {item.name}
                </span>
              )}
            </div>
            {item.comingSoon && !isCollapsed && (
              <span className="text-xs absolute -mt-8 ml-23 bg-[#251974] text-[#EFEFF8] rounded px-1 py1">
                Coming Soon
              </span>
            )}
          </Link>
        ))}
      </nav>

      {!isCollapsed && (
        <>
          <div className="mt-10 bg-[#4c2073] px-5 py-2.5 rounded-lg h-32">
            <SquareUser />

            <div className="space-y-5 mt-3">
              <p className="text-xs font-bold">
                Got some queationa, enquiries or need help?
              </p>
              <p className="text-[10px] text-[#F0C074] underline">
                <a href="mailto:support@techrity.com">
                  Visit Mently Help Desk Here
                </a>
              </p>
            </div>
          </div>

          <div className="text-sm flex items-center space-x-4 text-purple-300 mt-8 ">
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
  );
}
