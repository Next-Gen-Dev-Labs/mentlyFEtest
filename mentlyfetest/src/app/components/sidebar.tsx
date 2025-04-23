"use client";
import { LineChart, Settings, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#340260] p-2 rounded text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#2C007F] text-white p-4 flex flex-col justify-between text-xs z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/techrity-logo.png"
              alt="Techrity Logo"
              width={140}
              height={120}
              className="object-full"
            />

            <Image
              src="/techrity.svg"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover ml-auto"
            />
          </div>

          <nav className="space-y-3 mb-4">
            <SidebarLink href="/" icon="/dashboard.svg" label="Dashboard" active />
            <SidebarLink href="/" icon="/programs.svg" label="Programs" />
            <SidebarLink href="/" icon="/activities.svg" label="Activities" />
            <SidebarLink href="/" icon="/user.svg" label="Users" />
            <SidebarLink href="/" icon="/forums.svg" label="Forums" />
            <SidebarLink href="/" icon="/finances.svg" label="Finances" />
            <SidebarLink href="/" icon="/rewards.svg" label="Rewards" />

            <div className="flex items-center gap-2 p-2 text-gray-400 cursor-not-allowed">
              <LineChart size={18} className="w-5 h-5" />
              Analytics (Soon)
            </div>
          </nav>

          {/* Settings and Logout */}
          <div className="space-y-2">
            <SidebarButton icon={<Settings size={18} />} label="Settings" />
            <SidebarButton icon={<LogOut size={18} />} label="Log Out" />
          </div>

          {/* Help Desk */}
          <div className="text-center mt-6 bg-white/10 p-3 rounded-lg">
            <Image
              src="/user.svg"
              alt="Help Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-cover mx-auto mb-2"
            />
            <h2 className="font-bold mb-1 text-white">
              Got some questions or need help?
            </h2>
            <Link
              href="/help-desk"
              className="text-[#F0C074] hover:underline font-medium transition-colors"
            >
              Visit Mently Help Desk Here
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({ href, icon, label, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 p-2 rounded text-sm ${
        active
          ? "bg-white text-[#2C007F] font-semibold"
          : "hover:bg-white hover:text-[#2C007F]"
      }`}
    >
      <Image
        src={icon}
        alt={`${label} Icon`}
        width={24}
        height={24}
        className="w-6 h-6 object-cover"
      />
      {label}
    </Link>
  );
}

function SidebarButton({ icon, label }) {
  return (
    <button className="w-full flex items-center gap-2 p-2 hover:bg-white hover:text-[#2C007F] rounded text-sm">
      {icon}
      {label}
    </button>
  );
}
