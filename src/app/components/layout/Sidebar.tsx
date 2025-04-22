"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { RiHome5Line } from "react-icons/ri";
// import { CiMemoPad, CiUser } from "react-icons/ci";
// import { PiWalletLight } from "react-icons/pi";
// import {
//   HomeIcon,
//   UserGroupIcon,
//   BookOpenIcon,
//   UserIcon,
//   CurrencyDollarIcon,
//   ChatAlt2Icon,
//   ChartBarIcon,
//   CogIcon,
//   LogoutIcon,
//   QuestionMarkCircleIcon,
// } from "@heroicons/react/outline";

import Dashboard from "../../../../public/images/assets/dashboardIcon.svg";
import Programs from "../../../../public/images/assets/programsIcon.svg";
import Bubbles from "../../../../public/images/assets/bubbleIcon.svg";
import User from "../../../../public/images/assets/userIcon.svg";
import Forum from "../../../../public/images/assets/forumIcon.svg";
import EmptyWallet from "../../../../public/images/assets/emptyWalletIcon.svg";
import Award from "../../../../public/images/assets/awardIcon.svg";
import Analytics from "../../../../public/images/assets/analyticsIcon.svg";
import Settings from "../../../../public/images/assets/settingIcon.svg";
import LogoutIcon from "../../../../public/images/assets/logoutIcon.svg";
import Image from "next/image";

const menuItems = [
  { name: "Dashboard", icon: Dashboard, href: "/" },
  { name: "Programs", icon: Programs, href: "/programs" },
  { name: "Activities", icon: Bubbles, href: "/activities" },
  { name: "Users", icon: User, href: "/users" },
  { name: "Forums", icon: Forum, href: "/forums" },
  { name: "Finances", icon: EmptyWallet, href: "/finances" },
  { name: "Rewards", icon: Award, href: "/rewards" },
  { name: "Analytics", icon: Analytics, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="bg-purple-900 w-60 flex flex-col h-full text-white">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Techrity Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">techrity</span>
        </Link>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`
                  flex items-center px-4 py-3 text-sm
                  ${
                    activeItem === item.name
                      ? "bg-purple-800 border-l-4 border-white"
                      : "hover:bg-purple-800"
                  }
                `}
                onClick={() => setActiveItem(item.name)}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="h-5 w-5 mr-3"
                />
                {/* <item.icon className="h-5 w-5 mr-3" /> */}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <Link
          href="/logout"
          className="flex items-center px-4 py-3 text-sm hover:bg-purple-800"
        >
          <Image src={LogoutIcon} alt="Log Out" className="h-5 w-5 mr-3" />
          Log Out
        </Link>

        <div className="mt-4 bg-purple-800 rounded-lg p-3">
          <p className="text-xs mb-2">
            Got some questions, enquiries or need help?
          </p>
          <Link
            href="/help"
            className="text-xs text-yellow-400 hover:underline"
          >
            Visit Mentor Help Desk Here
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm">Switch to Classic Mode</span>
          <button className="w-10 h-5 bg-gray-300 rounded-full p-1 flex items-center">
            <motion.div
              className="w-3 h-3 bg-white rounded-full"
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}
