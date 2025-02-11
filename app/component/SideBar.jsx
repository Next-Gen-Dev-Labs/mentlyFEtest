"use client";
import {
  RiHome5Line,
  RiPoliceBadgeLine,
  RiShieldUserLine,
} from "react-icons/ri";
import { LuBookText } from "react-icons/lu";
import { TbDroplets, TbBuildingBank } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { BsLayoutSidebar } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const pathname = usePathname();

  const isActiveLink = (path) => pathname === path;

  return (
    <main className="h-[100rem] bg-[#1F0954]">
         <div className="flex flex-col items-center justify-center gap-10 pt-10">
          <Image
            src="/ted.png"
            alt="mently"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <button
            className="text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BsLayoutSidebar size={25} />
          </button>
        </div>

      <div
        className={`w-36 h-dvh text-white flex flex-col items-center transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
       

        <nav className="flex flex-col space-y-6 items-center pt-28">
          {[
            { href: "/", icon: RiHome5Line },
            { href: "/programs", icon: LuBookText },
            { href: "/activities", icon: TbDroplets },
            { href: "/forms", icon: FaWpforms },
            { href: "/finance", icon: TbBuildingBank },
            { href: "/badges", icon: RiPoliceBadgeLine },
            { href: "/analytics", icon: GoGraph },
            { href: "/settings", icon: IoSettingsOutline },
            { href: "/logout", icon: BiLogOut },
          ].map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center py-3 px-4 rounded-lg cursor-pointer transition-all ${
                isActiveLink(href)
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black hover:scale-125"
              }`}
            >
              <Icon size={24} />
            </Link>
          ))}
        </nav>

        <section className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-8 rounded-lg p-3 justify-between bg-indigo-900 gap-6 mt-10">
            <Link href="/help-desk" className="hover:text-gray-300">
              <RiShieldUserLine size={24} />
            </Link>
            <h2 className="w-24 text-[#F0C074] underline">
              Visit Mently Help Desk Here
            </h2>
          </div>
          <div>
            <Switch {...label} defaultChecked />
          </div>
        </section>
      </div>

      

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </main>
  );
}
