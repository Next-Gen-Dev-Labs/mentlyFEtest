"use client";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavHeader } from "./nav-header";
import { navItems } from "@/lib/data";
import { AppSidebarFooter } from "./app-sidebar-footer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <AppSidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
