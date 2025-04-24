"use client";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  BookmarkIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
  GiftIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  IdentificationIcon,
  Bars3Icon,
  XMarkIcon,
  ClockIcon, // Heroicon for Recent Posts
  StarIcon, // Heroicon for Popular Posts
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isClassic, setIsClassic] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Update isDesktop based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Set to true for desktop view
    };
    handleResize(); // Initialize based on the current window size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Dashboard", icon: <HomeIcon className="h-4 w-4" />, href: "/" },
    {
      label: "Programs",
      icon: <BookOpenIcon className="h-4 w-4" />,
      href: "/programs",
    },
    {
      label: "Activities",
      icon: <BookmarkIcon className="h-4 w-4" />,
      href: "/activities",
    },
    { label: "Users", icon: <UserIcon className="h-4 w-4" />, href: "/user" },
    {
      label: "Forum",
      icon: <ChatBubbleLeftRightIcon className="h-4 w-4" />,
      href: "/forum",
    },
    {
      label: "Finances",
      icon: <BanknotesIcon className="h-4 w-4" />,
      href: "/finances",
    },
    {
      label: "Rewards",
      icon: <GiftIcon className="h-4 w-4" />,
      href: "/rewards",
    },
    {
      label: "Analytics",
      icon: <ChartBarIcon className="h-4 w-4" />,
      href: "/analytics",
      comingSoon: true,
    },

    {
      label: "Settings",
      icon: <Cog6ToothIcon className="h-4 w-4" />,
      href: "/settings",
    },
    {
      label: "Logout",
      icon: <ArrowRightOnRectangleIcon className="h-4 w-4" />,
      href: "/logout",
    },
  ];

  return (
    <>
   <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#340260] via-purple-800 to-[#340260] shadow-lg">
  <div className="flex items-center gap-2">
    <Image
      src="/asset/mently-logo.png"
      alt="Mently Logo"
      width={110}
      height={30}
      priority
      className="transition-all duration-300 hover:scale-105"
    />
    {/* <span className="text-xs font-light italic text-gray-300">your smart space</span> */}
  </div>
  <button
    onClick={() => setSidebarOpen(true)}
    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
  >
    <Bars3Icon className="h-7 w-7 text-white" />
  </button>
</div>


      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-[#340260] text-white transform
        ${sidebarOpen || isDesktop ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out
        w-[70%] max-w-xs  // Mobile: 80% width
        md:w-64 md:relative md:translate-x-0 md:flex md:flex-col
      `}
      >
        {/* Top section for desktop with toggle button */}
        <div className="flex justify-between items-center px-6 py-6 md:py-8">
          <Image
            src="/asset/mently-logo.png"
            alt="Mently Logo"
            width={106}
            height={27}
            priority
          />
          {/* Desktop Collapse Button */}
          {/* <button
            onClick={() => setSidebarOpen(true)}
            className="md:flex hidden"
          >
            <Bars3Icon className="h-8 w-8 text-white" />
          </button> */}
          {/* Close button only on mobile */}
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4 p-2 rounded-md text-white hover:bg-white hover:text-[#340260] transition duration-300
                sm:gap-3 sm:p-1.5"
              onClick={() => setSidebarOpen(false)} // close menu when item clicked on mobile
            >
              {item.icon}
              <div className="flex items-center -space-y-2 -space-x-1 gap-1">
                <span className="text-[12px] sm:text-[10px]">{item.label}</span>
                {item.comingSoon && (
                  <span className="text-[10px] sm:text-[8px] bg-purple-900 text-white px-1 py-[1px] rounded-sm">
                    Coming Soon
                  </span>
                )}
              </div>
            </Link>
          ))}
        </nav>

        {/* Help box */}
        <div className="w-[220px] mt-6 bg-purple-500 rounded-md flex justify-center mx-auto md:mt-8 md:w-[200px] sm:w-[180px]">
          <div className="flex flex-col gap-2 items-start justify-between py-2 px-4">
            <IdentificationIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <p className="text-[12px] sm:text-[10px] leading-tight">
              Got some questions, enquiries or need help?
            </p>
            <small className="text-[#F0C074] text-[11px] sm:text-[9px]">
              Visit Mently Help Desk Here
            </small>
          </div>
        </div>

        {/* Switch */}
        <div className="flex items-center space-x-3 mx-auto mt-6">
          <label
            htmlFor="classic"
            className="text-gray-300 text-[12px] sm:text-[10px] cursor-pointer"
          >
            Switch to Classic Mode
          </label>
          <div className="relative h-4 w-9 sm:h-3.5 sm:w-8">
            <input
              type="checkbox"
              id="classic"
              checked={isClassic}
              onChange={() => setIsClassic(!isClassic)}
              className="h-4 w-8 sm:h-3.5 sm:w-7 cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors checked:bg-blue-600 focus:outline-none"
            />
            <div
              className={`absolute top-[5px] left-[3px] h-3 w-3 sm:h-2.5 sm:w-2.5 transform rounded-full bg-white transition ${
                isClassic ? "translate-x-4 sm:translate-x-3" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </aside>

      {/* Overlay background */}
      {sidebarOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-white bg-opacity-10 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
