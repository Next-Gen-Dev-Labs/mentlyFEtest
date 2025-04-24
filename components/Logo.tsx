"use client";

import Image from "next/image";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function Logo() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex h-16 w-full items-center justify-between px-4">
          {!isCollapsed && (
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-7 w-28 "
              priority
            />
          )}

          <SidebarTrigger
            className={
              isCollapsed
                ? "mx-auto text-red-500 dark:text-white"
                : "text-red-500 dark:text-white"
            }
          />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
