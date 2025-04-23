"use client";

import { Bell, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavUser } from "./user";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="px-3 sm:px-6 flex items-center gap-4 justify-end bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <Bell />
      <NavUser />
    </nav>
  );
}
