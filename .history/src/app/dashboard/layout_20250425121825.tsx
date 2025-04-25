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
      {/* Sidebar */}
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto z-50 w-[240px] hidden lg:block">
        {/* Adjust `top-16` and `h-[calc(100vh-4rem)]` based on navbar height */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 w-full lg:ml-[240px]">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-40">
          <Navbar onMenuClick={toggleSidebar} />
        </div>

        {/* Page content with top padding to prevent overlap */}
        <main className="pt-16 px-4">{children}</main>
      </div>
    </div>
  );
}
