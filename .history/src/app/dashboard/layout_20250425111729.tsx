"use client";
import { ReactNode, useState } from "react";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev: boolean) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Always rendered but hidden on mobile when closed */}
      <div
        className={`${
          isSidebarOpen ? "fixed lg:relative" : "hidden lg:block"
        } z-30`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay - Only for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col relative">
        {/* Navbar - Now constrained to main content area */}
        <div
          className="fixed top-0 right-0 z-20 transition-all duration-300"
          style={{ width: `calc(100% - ${isSidebarOpen ? "300px" : "0px"})` }}
        >
          <Navbar onMenuClick={toggleSidebar} />
        </div>

        {/* Children content - Pushed below navbar */}
        <main className="flex-1 mt-[82px] overflow-auto">{children}</main>
      </div>
    </div>
  );
}
