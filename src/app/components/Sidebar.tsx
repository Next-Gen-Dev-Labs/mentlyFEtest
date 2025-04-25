"use client";
import {
  Home,
  BookOpen,
  Users,
  Activity,
  ClipboardList,
  Wallet,
  Gift,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/", active: true },
  { label: "Programs", icon: BookOpen, href: "/programs" },
  { label: "Activities", icon: Activity, href: "/activities" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Forums", icon: ClipboardList, href: "/forums" },
  { label: "Finances", icon: Wallet, href: "/finances" },
  { label: "Rewards", icon: Gift, href: "/rewards" },
  {
    label: "Analytics",
    icon: BarChart2,
    href: "#",
    comingSoon: true,
  },
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Log Out", icon: LogOut, href: "/logout" },
];

export default function Sidebar() {
  const [classicMode, setClassicMode] = useState(false);

  return (
    <aside className="flex flex-col justify-between h-screen w-64 bg-[#2A005E] text-white px-4 py-6 fixed">
      {/* Logo */}
      <div>
        <div className="flex items-center justify-between mb-10 px-2">
          <Image src="/assets/logo.png" alt="Techrity Logo" width={120} height={32} />
          <div className="outline-none" >
            <Image src="/assets/toggle.png" alt="Techrity Logo" width={24} height={24} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map(({ label, icon: Icon, href, comingSoon, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                active
                  ? "bg-white text-[#2A005E] font-semibold"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1">{label}</span>
              {comingSoon && (
                <span className="text-xs text-blue-300 ml-auto">Coming Soon</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-6">
        {/* Help Box */}
        <div className="bg-[#4B0A91] text-white p-4 rounded-lg mb-6">
          <div className="flex items-start gap-3 mb-2">
            <HelpCircle className="w-5 h-5 mt-1" />
            <div>
              <p className="text-sm font-medium leading-tight">
                Got some questions, enquiries or need help?
              </p>
              <Link href="#" className="text-sm text-yellow-300 underline mt-1 block">
                Visit Mently Help Desk Here
              </Link>
            </div>
          </div>
        </div>

        {/* Classic Mode Toggle */}
        <div className="flex items-center justify-between text-sm">
          <span>Switch to Classic Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={classicMode}
              onChange={() => setClassicMode(!classicMode)}
            />
            <div className="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-white relative">
              <div
                className={`absolute left-[2px] top-[2px] bg-[#2A005E] w-4 h-4 rounded-full transition-transform ${
                  classicMode ? "translate-x-[20px]" : ""
                }`}
              />
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
}