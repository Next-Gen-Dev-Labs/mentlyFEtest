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
        className={`fixed lg:static h-screen z-30 ${
          isSidebarOpen ? "block" : "hidden lg:block"
        }`}
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
      <div className="flex-1 flex flex-col lg:ml-[250px]">
        {" "}
        {/* Adjust ml value to match sidebar width */}
        {/* Fixed Navbar */}
        <div className="fixed top-0 right-0 left-0 lg:left-[250px] z-20">
          <Navbar onMenuClick={toggleSidebar} />
        </div>
        {/* Scrollable content */}
        <main className="mt-[82px] flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
