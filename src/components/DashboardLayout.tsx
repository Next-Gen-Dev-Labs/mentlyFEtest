"use client";

import AppHeader from "@/components/AppHeader";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider, useSidebarContext } from "@/context/sidebar-context";

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <div
      className={`ml-16 transition-all duration-300 ${
        isCollapsed ? "ml-16" : "ml-64"
      }`}
    >
      <AppHeader />
      <main className="overflow-auto">{children}</main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
}
