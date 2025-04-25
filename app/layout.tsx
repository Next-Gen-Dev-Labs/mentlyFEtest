"use client";


import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <div className="flex flex-col h-screen">
          <div className="flex flex-1 overflow-hidden">
            <aside
              className={`fixed md:static top-0 left-0  h-full transition-transform transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 z-50`}
            >
              <Sidebar onClose={closeSidebar} />
            </aside>
            <div
              className={`flex-1 overflow-auto transition-all duration-300 ${
                isSidebarOpen ? "md:ml-64" : "md:ml-0"
              }`}
            >
              <Header toggleSidebar={toggleSidebar} />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}