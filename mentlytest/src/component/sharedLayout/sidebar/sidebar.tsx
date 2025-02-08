"use client";

import { ThemeToggle } from "@/component/theme-toggle";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ClipboardList,
  Wallet,
  LineChart,
  Settings,
  HelpCircle,
  Table2,
  BookText,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: BookText, label: "Book", href: "/book" },
  { icon: "/bubble.svg", label: "Dashboard", href: "/dashboard" }, //
  { icon: ClipboardList, label: "Tasks", href: "/tasks" },
  { icon: Wallet, label: "Billing", href: "/billing" },
  { icon: "/award.svg", label: "Security", href: "/security" }, //
  { icon: LineChart, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: LogIn, label: "logout", href: "/logout" },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <div className="  w-18 flex flex-col gap-[40px] items-center  bg-[#1F0954] py-8">
      <div className="flex flex-col gap-2">
        <div className="  flex items-center justify-center">
          <Image src="/logo.svg" alt="logo" width={40} height={20} />
        </div>
        <div className="text-gray-400 hover:text-white p-3 flex items-center justify-center">
          {" "}
          <Table2 size={20} />
        </div>
      </div>

      <nav className=" w-full flex flex-col items-center  gap-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative w-full flex justify-center group"
            onClick={() => setActiveItem(item.href)}
          >
            <motion.div
              className={`w-1 absolute left-0 rounded-r-lg ${
                activeItem === item.label ? "bg-white" : "bg-transparent"
              }`}
              initial={{ height: 0 }}
              animate={{ height: activeItem === item.href ? 24 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <div
              className={`p-3 rounded-lg ${
                activeItem === item.href
                  ? "bg-white text-[#1E1B4B]"
                  : "text-gray-300"
              } transition-all`}
            >
              {typeof item.icon === "string" ? (
                <Link href={item.href}>
                  {" "}
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                </Link>
              ) : (
                <Link href={item.href}>
                  <item.icon size={20} />
                </Link>
              )}{" "}
            </div>
          </Link>
        ))}
      </nav>

      <div className=" flex flex-col gap-4 items-center pb-8">
        <Link href="/help" className="text-gray-400 hover:text-white p-3">
          <HelpCircle size={20} />
        </Link>
        <div className="py-2 px-1 rounded-lg bg-[#3a2769] shadow-md flex items-end p-4">
          <a
            href="#"
            className=" flex flex-col justify-between gap-4 item-center"
          >
            <div className=" flex  justify-center  item-center">
              <Image
                src="/user-tag.svg"
                alt="hel pdesk"
                width={20}
                height={20}
              />
            </div>
            <p className="text-[8px] underline font-semibold text-[#F0C074] leading-tight">
              Visit Mently <br />
              Help Desk <br />
              Here
            </p>
          </a>
        </div>

        <button className="text-gray-400 hover:text-white p-3">
          <ThemeToggle />
        </button>
      </div>
    </div>
  );
}
