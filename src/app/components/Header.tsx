"use client";

import { Bell, ArrowDown, ArrowBigDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 w-full h-20 bg-white px-6 flex items-center justify-end shadow-sm">
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-red-500 rounded-full" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/navbarlogo.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-900 whitespace-nowrap truncate w-32">
              Techrity Foundation
            </p>
            <p className="text-sm text-gray-500">Member</p>
          </div>
        </div>

        {/* Purple Avatar Button */}
        <button className="w-6 h-6 rounded-md bg-[#6504CB] flex items-center justify-center">
          <ArrowBigDown className="w-4 h-4 text-white" />
        </button>
      </div>
    </header>
  );
}
