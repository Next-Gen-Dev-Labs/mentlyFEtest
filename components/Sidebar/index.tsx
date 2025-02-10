"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiHome5Line, RiBubbleChartLine } from "react-icons/ri";
import { TbClipboardText, TbLogout2 } from "react-icons/tb";
import {
  LuWallet,
  LuChartLine,
  LuBookText,
  LuSquareUser,
} from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BadgeCheck, Menu, X } from "lucide-react";
import { BsLayoutSidebar } from "react-icons/bs";
import { DarkModeSwitcher } from "../Global";

const menuItems = [
  { icon: <RiHome5Line className="w-4 h-4" />, label: "Home" },
  {
    icon: <LuBookText className="w-4 h-4" />,
    label: "Programs",
    href: "/",
  },
  { icon: <RiBubbleChartLine className="w-4 h-4" />, label: "Analytics" },
  { icon: <TbClipboardText className="w-4 h-4" />, label: "Tasks" },
  { icon: <LuWallet className="w-4 h-4" />, label: "Wallet" },
  { icon: <BadgeCheck className="w-4 h-4" />, label: "Achievements" },
  { icon: <LuChartLine className="w-4 h-4" />, label: "Reports" },
  { icon: <IoSettingsOutline className="w-4 h-4" />, label: "Settings" },
  { icon: <TbLogout2 className="w-4 h-4" />, label: "Logout" },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<HTMLDivElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  // Handle click outside and escape key
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (
        !sidebar.current?.contains(target as Node) &&
        !trigger.current?.contains(target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    const keyHandler = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        setSidebarOpen(false);
      }
    };

    // Only add listeners if sidebar is open
    if (sidebarOpen) {
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    }

    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const MenuItem = ({
    item,
    index,
  }: {
    item: (typeof menuItems)[0];
    index: number;
  }) => {
    const isActive = pathname === item.href;

    const handleClick = () => {
      if (!item.href) {
        // Handle non-link menu items
        console.log(`Clicked ${item.label}`);
      }
      // Close sidebar on mobile after clicking
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    return (
      <li key={index} className="w-full">
        {item.href ? (
          <Link
            href={item.href}
            className={`group flex items-center lg:justify-center rounded-md py-2 px-4 transition-colors duration-200 w-full ${
              isActive
                ? "bg-white text-[#1F0954] dark:bg-[#24243B] dark:text-[#CBD5E1]"
                : "text-white hover:bg-white hover:text-[#1F0954] dark:text-[#CBD5E1] dark:hover:bg-[#24243B] cursor-pointer"
            }`}
          >
            <span className="flex items-center gap-3">
              {item.icon}
              <span className="lg:hidden">{item.label}</span>
            </span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleClick}
            className={`group flex items-center lg:justify-center rounded-md py-2 px-4 transition-colors duration-200 w-full ${
              isActive
                ? "bg-white text-[#1F0954] dark:bg-[#24243B] dark:text-[#CBD5E1]"
                : "text-white hover:bg-white hover:text-[#1F0954] dark:text-[#CBD5E1] dark:hover:bg-[#24243B] cursor-pointer"
            }`}
          >
            <span className="flex items-center gap-3">
              {item.icon}
              <span className="lg:hidden">{item.label}</span>
            </span>
          </button>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Mobile Menu Trigger */}
      <div
        ref={trigger}
        className="fixed top-4 left-4 z-[10000] block lg:hidden cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
      >
        {sidebarOpen ? (
          <X className="h-10 w-10 text-[#1F0954] dark:text-white" />
        ) : (
          <Menu className="h-10 w-10 text-[#1F0954] dark:text-white" />
        )}
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        ref={sidebar}
        className={`fixed inset-y-0 left-0 z-[9999] flex h-screen w-full max-w-[250px] lg:w-24 flex-col overflow-hidden bg-[#1F0954] dark:bg-[#1C1C2D] transition-transform duration-300 ease-in-out lg:static 
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4 py-3">
          <Image
            width={25}
            height={25}
            src="/images/logo/logo.png"
            alt="Logo"
            unoptimized
            className="items-center self-center flex justify-center"
          />
          <BsLayoutSidebar className="text-white dark:text-[#CBD5E1] w-4 h-4 cursor-pointer" />
        </div>

        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
          <ul className="flex flex-col items-center gap-2 px-2">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-2 p-2 bg-[#A100FF] bg-opacity-10 dark:bg-[#24243B]">
          <LuSquareUser className="text-white dark:text-[#CBD5E1] w-4 h-4" />
          <p className="text-[#F0C074] dark:text-[#CBD5E1] text-xs underline">
            Visit Mently Help Desk Here
          </p>
        </div>

        <div className="flex items-center justify-center p-4">
          <DarkModeSwitcher />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
