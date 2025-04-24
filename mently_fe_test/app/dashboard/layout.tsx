"use client";
import SideNav from "@/components/Sidenav";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden relative">
      <button
        className="absolute top-6 left-4 z-50 md:hidden text-white bg-[#340260] p-3 rounded-full shadow-md transition-transform duration-300"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <BiMenu size={20} />
      </button>

      <div
        className={`transform  transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block md:w-[240px] bg-[#340260] h-full fixed top-0 left-0 z-40 shadow-md overflow-y-auto no-scrollbar`}
      >
        <SideNav />
      </div>

      <div className="w-full mx-auto overflow-y-auto overflow-x-hidden no-scrollbar pl-0 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
