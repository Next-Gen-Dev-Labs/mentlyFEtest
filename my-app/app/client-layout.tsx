// ClientLayout.jsx or similar file
"use client";

import { useState, createContext, useContext, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";


export const SidebarContext = createContext({
  isCollapsed: false,
  toggleSidebar: () => {},
  isMobile: false
});

export const useSidebar = () => useContext(SidebarContext);

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={`flex flex-col ${isCollapsed ? 'md:ml-16' : 'md:ml-64'} w-full transition-all duration-300`}>
      <Header />
      <main className="p-4 md:p-6">{children}</main>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, isMobile }}>
      <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarContext.Provider>
  );
}