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
      {/* Fixed Sidebar */}
      
      <div
        className="fixed top-0 left-0 h-screen overflow-y-auto z-50 "
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 lg:ml-[240px] w-full">
        {/* Fixed Navbar */}
        <div className="fixed top-0 right-0 left-0 lg:left-[240px] z-20">
          <Navbar onMenuClick={toggleSidebar} />
        </div>

        {/* Scrollable content area with padding-top to account for navbar */}
        <main className="h-[calc(100vh-82px)] ">{children}</main>
      </div>
    </div>
  );
}
