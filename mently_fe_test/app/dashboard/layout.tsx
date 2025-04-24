"use client";

import Navbar from "@/components/Navbar";
import SideNav from "@/components/Sidenav";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden relative">
      <button
        className="absolute top-6 left-4 z-50 md:hidden text-white bg-[#340260] p-2 rounded"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <BiMenu size={14} />
      </button>

      <div
        className={`fixed top-0 left-0 z-40 h-full w-[240px] transform bg-[#340260] transition-transform duration-300 ease-in-out
        ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <SideNav />
      </div>
      <div className="w-full overflow-scroll no-scrollbar">{children}</div>
    </div>
  );
}
