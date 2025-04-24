import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { DashboardSidebar } from "./sidebar";
export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-[100%]">{children}</main>
    </SidebarProvider>
  );
};
