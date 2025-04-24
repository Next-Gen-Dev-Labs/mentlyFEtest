"use client";

import { AppSidebar } from "@/components/section/appsidebar";
import { DashboardContent } from "@/components/section/dashboardcontent";
import Header from "@/components/section/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { WidgetProvider } from "@/components/context/widget-context";

const Dashboard = () => {
  return (
    <WidgetProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <DashboardContent />
        </SidebarInset>
      </SidebarProvider>
    </WidgetProvider>
  );
};

export default Dashboard;
