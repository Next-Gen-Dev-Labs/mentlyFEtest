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
      <div className="fixed o">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="w-full lg:w-none overflow-hidden">
        <Navbar
          onMenuClick={toggleSidebar}
        />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
