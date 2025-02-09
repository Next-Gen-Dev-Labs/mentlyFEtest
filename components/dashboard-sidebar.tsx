"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { paths } from "@/constants/paths";
import { sidebarItems } from "@/constants/side-links";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ClassicMode } from "./classic-mode";
import { EnquiryCard } from "./enquiry-card";
import { Logo } from "./logo";

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();
  const toggleOnMobile = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible={"icon"} {...props}>
      <SidebarHeader>
        <SidebarMenu className={cn("space-y-2 pt-3", !isCollapsed && "px-1.5")}>
          <SidebarMenuItem className="flex items-center justify-between">
            <Logo
              showText={!isCollapsed}
              href={paths.private.home}
              linkClassName={cn(isCollapsed ? "w-full justify-center" : "ml-1")}
            />
            {!isCollapsed && <SidebarTrigger className="text-white" />}
          </SidebarMenuItem>

          {isCollapsed && (
            <SidebarMenuButton
              size={"lg"}
              asChild
              className={cn(
                "h-10 px-3 text-white active:bg-white",
                isCollapsed && "mx-auto",
              )}
            >
              <SidebarTrigger className="text-white" />
            </SidebarMenuButton>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent
            className={cn("h-full pt-5", !isCollapsed && "px-1.5")}
          >
            <SidebarMenu className="gap-2">
              {sidebarItems.map((item) => (
                <SidebarMenuItem className="w-full" key={item.label}>
                  <SidebarMenuButton
                    size={"lg"}
                    asChild
                    tooltip={item.label}
                    className={cn(
                      "h-10 px-3 text-white active:bg-white",
                      isCollapsed &&
                        "flex items-center justify-center group-data-[collapsible=icon]:!w-full",
                    )}
                    onClick={toggleOnMobile}
                    isActive={pathname === item.path}
                    data-testid={`sidebar-button-${item.label.toLowerCase()}`}
                  >
                    <Link
                      scroll={false}
                      href={item?.path as string}
                      data-testid={`nav-link-${item.label.toLowerCase()}`}
                    >
                      <span data-testid={`${item.label.toLowerCase()}-icon`}>
                        <item.icon />
                      </span>
                      {!isCollapsed && (
                        <span data-testid={`${item.label.toLowerCase()}-label`}>
                          {item.label}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <EnquiryCard isCollapsed={isCollapsed} />
              <ClassicMode isCollapsed={isCollapsed} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <span className="sr-only">sidebar</span>
    </Sidebar>
  );
}
