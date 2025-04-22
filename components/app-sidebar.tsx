import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { HomeIcon } from "./icons/HomeIcon";
import { ProgramIcon } from "./icons/ProgramIcon";
import { ActivitiesIcon } from "./icons/ActivitiesIcon";
import { FormsIcon } from "./icons/FormsIcon";
import { BadgesIcon } from "./icons/BadgesIcon";
import { WalletIcon } from "./icons/WalletIcon";
import { AnalyticsIcon } from "./icons/AnalyticsIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { LogoutIcon } from "./icons/LogoutIcon";
import { Switch } from "./ui/switch";
import { HelpIcon } from "./icons/HelpIcon";

const nav = [
  {
    title: "Home",
    icon: HomeIcon,
    url: "#",
  },
  {
    title: "Programs",
    icon: ProgramIcon,
    url: "#",
    isActive: true,
  },
  {
    title: "Activities",
    icon: ActivitiesIcon,
    url: "#",
  },
  {
    title: "Forms",
    icon: FormsIcon,
    url: "#",
  },
  {
    title: "Wallet",
    icon: WalletIcon,
    url: "#",
  },
  {
    title: "Awards",
    icon: BadgesIcon,
    url: "#",
  },
  {
    title: "Analytics",
    icon: AnalyticsIcon,
    url: "#",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    url: "#",
  },
  {
    title: "Logout",
    icon: LogoutIcon,
    url: "#",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} collapsible="icon" className="bg-primary py-4">
      <SidebarHeader className="px-6 gap-4">
        <Image src="/ted.png" alt="Dash Logo" width={48} height={32} />
        <SidebarTrigger className="text-white" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} className="px-6 py-5">
                    <a href={item.url} className="text-white">
                      <item.icon />
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="flex flex-col items-center p-2 gap-4">
          <div className="flex flex-col items-center gap-4 py-4 px-2 bg-[#3A2769] rounded-lg">
            <HelpIcon />
            <small className="text-[10px] text-secondary underline cursor-pointer">
              Visit Mently Help Desk Here
            </small>
          </div>
          <Switch />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
