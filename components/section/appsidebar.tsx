"use client";

import * as React from "react";

import { NavMain } from "./navmain";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Logo } from "../Logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebarStyle = {
    "--sidebar-width-icon": "5rem",
  } as React.CSSProperties;
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      style={sidebarStyle}
      className="h-screen items-center flex flex-col z-50"
    >
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="py-5 flex flex-col items-center scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <NavMain />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
