// components/Sidebar.tsx
"use client";

import { HomeIcon, CalendarIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-[260px] bg-white shadow-md z-10">
      <div className="p-6 font-bold text-xl text-purple-600">Techrity</div>
      <nav className="mt-6 space-y-4 text-sm">
        <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-purple-50">
          <HomeIcon className="w-4 h-4" /> Dashboard
        </Link>
        <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-purple-50">
          <CalendarIcon className="w-4 h-4" /> Events
        </Link>
        <Link href="#" className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-purple-50">
          <UsersIcon className="w-4 h-4" /> Community
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;