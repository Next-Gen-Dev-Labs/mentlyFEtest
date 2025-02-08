import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="rounded-lg bg-white pb-10">
            <Navbar />
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
