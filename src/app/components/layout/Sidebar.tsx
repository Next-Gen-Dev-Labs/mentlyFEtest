"use client";

import { useState, JSX } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import Dashboard from "../../../../public/images/icons/dashboardIcon.svg";
import Programs from "../../../../public/images/icons/programsIcon.svg";
import Bubbles from "../../../../public/images/icons/bubbleIcon.svg";
import User from "../../../../public/images/icons/userIcon.svg";
import Forum from "../../../../public/images/icons/forumIcon.svg";
import EmptyWallet from "../../../../public/images/icons/emptyWalletIcon.svg";
import Award from "../../../../public/images/icons/awardIcon.svg";
import Analytics from "../../../../public/images/icons/analyticsIcon.svg";
import Settings from "../../../../public/images/icons/settingIcon.svg";
import LogoutIcon from "../../../../public/images/icons/logoutIcon.svg";
import Menu from "../../../../public/images/icons/menuIcon.svg";
import SideLogo from "../../../../public/images/icons/SideLogo.svg";
import UserTag from "../../../../public/images/icons/usertagIcon.svg";

interface MenuItem {
  name: string;
  icon: StaticImageData | string;
  href: string;
  soon?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: Dashboard, href: "/" },
  { name: "Programs", icon: Programs, href: "/programs" },
  { name: "Activities", icon: Bubbles, href: "/activities" },
  { name: "Users", icon: User, href: "/users" },
  { name: "Forums", icon: Forum, href: "/forums" },
  { name: "Finances", icon: EmptyWallet, href: "/finances" },
  { name: "Rewards", icon: Award, href: "/rewards" },
  { name: "Analytics", icon: Analytics, href: "/analytics", soon: true },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Log Out", icon: LogoutIcon, href: "/logout" },
];

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({
  isExpanded,
  toggleSidebar,
}: SidebarProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const [isClassicMode, setIsClassicMode] = useState<boolean>(false);

  const handleLinkClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isExpanded ? "16rem" : "5rem" }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className="bg-[#340260] h-full flex flex-col text-white py-8 overflow-hidden"
    >
      {/* Logo and toggle */}
      <div className="flex items-center justify-between mb-12 px-6">
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src={SideLogo}
                  alt="techrity logo"
                  className="h-auto max-w-[120px]"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-1 hover:bg-white/10 rounded-md transition-all"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Menu}
              alt="Toggle menu"
              width={24}
              height={24}
              className="text-white"
            />
          </motion.div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`
                  relative flex items-center py-3 text-sm font-medium rounded-[10px] transition-all duration-200 relative group
                  ${isExpanded ? "px-6" : "px-3 justify-center"}
                  ${
                    activeItem === item.name
                      ? "bg-white text-[#340260]"
                      : "text-white hover:bg-white/10"
                  }
                `}
                onClick={() => handleLinkClick(item.name)}
                aria-current={activeItem === item.name ? "page" : undefined}
              >
                <div className="relative">
                  {/* Icon */}
                  <Image
                    src={item.icon}
                    alt=""
                    className="h-5 w-5 relative"
                    aria-hidden="true"
                    style={{
                      filter:
                        activeItem === item.name
                          ? "invert(13%) sepia(68%) saturate(3994%) hue-rotate(262deg) brightness(84%) contrast(125%)"
                          : "none",
                    }}
                  />
                </div>

                {/* Text - only show when expanded */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <>
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 whitespace-nowrap overflow-hidden"
                      >
                        {item.name}
                      </motion.span>
                      {/* Coming Soon indicator */}
                      {item.soon && (
                        <div className="absolute -top-2 left-1/2 transform whitespace-nowrap w-fit">
                          <span className="text-[10px] bg-[#0214BD38] px-1.5 py-0.5 rounded-full">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </AnimatePresence>

                {activeItem === item.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-[10px] bg-white z-[-1]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Help desk section - only show when expanded */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 mt-auto overflow-hidden"
          >
            <div className="bg-[#FFFFFF1F] rounded-lg p-4 mb-4">
              <div className="flex items-start mb-2">
                <Image
                  src={UserTag}
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 mt-0.5"
                />
                <p className="text-xs">
                  Got some questions, enquiries or need help?
                </p>
              </div>
              <Link
                href="/help"
                className="text-yellow-400 text-xs hover:text-yellow-300 underline"
              >
                Visit Mently Help Desk Here
              </Link>
            </div>

            {/* Classic mode toggle */}
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-sm">Switch to Classic Mode</span>
              <button
                onClick={() => setIsClassicMode(!isClassicMode)}
                className="w-10 h-5 rounded-full flex items-center px-0.5"
                style={{
                  backgroundColor: isClassicMode ? "#fff" : "#4b5563",
                }}
                aria-pressed={isClassicMode}
                aria-label="Switch to classic mode"
              >
                <motion.div
                  className={`w-4 h-4 rounded-full ${
                    isClassicMode ? "bg-[#1f0954]" : "bg-[white]"
                  }`}
                  animate={{ x: isClassicMode ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
