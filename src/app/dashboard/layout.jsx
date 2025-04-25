"use client";

import { SidebarProvider } from '../../context/SidebarContext';
import Sidebar from "@/component/Sidebar";
import Navbar from "@/component/Navbar";
import WelcomeBanner from "@/component/WelcomeBanner";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
         
          <main className="flex-1 bg-gray-50 dark:bg-gray-800 overflow-y-auto">
            <WelcomeBanner />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

