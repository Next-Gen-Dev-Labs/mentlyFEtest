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
      {/* Sidebar - Fixed position */}
      <div
        className={`${
  
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
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Navbar - Fixed position */}
        <div className="fixed top-0 left-0 right-0 z-20 lg:left-[250px] transition-all duration-300">
          <Navbar onMenuClick={toggleSidebar} />
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 mt-[82px] overflow-y-auto">
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}
