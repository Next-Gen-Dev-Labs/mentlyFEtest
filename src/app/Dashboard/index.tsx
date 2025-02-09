"use client";

import { useState } from "react";
import { MainNav, Sidebar } from "@/components";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1">
        <MainNav onMenuClick={toggleSidebar} />

        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <p>left column</p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[400px] space-y-6">
            <p>right column</p>
          </div>
        </div>
      </div>
    </div>
  );
}
