"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SIDEBAR_LINKS } from "@/contants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "../themetoogle";

export function NavMain() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col gap-2">
          {SIDEBAR_LINKS.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={index}>
                <div className="flex w-full items-center justify-between px-4">
                  <SidebarMenuButton asChild className="">
                    <Link
                      href={item.href}
                      className={`
                       flex items-center gap-8  py-5 px-8 transition-all duration-300 ease-in-out 
                      ${
                        isActive
                          ? "bg-white hover:bg-accent  ease-in-out duration-200"
                          : "text-muted-foreground "
                      }
                    `}
                    >
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.label}
                        width={24}
                        height={24}
                        className={`
                        h-6 w-6 
                        ${isActive ? "brightness-0" : ""}
                      `}
                      />
                      <span
                        className={`
                      text-base font-medium transition-colors
                      ${isActive ? "text-black" : "text-[#C2C2C2]"}
                    `}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </div>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>

      <div className="mt-auto pt-4">
        {!isCollapsed && (
          <div className="rounded-lg bg-[#FFFFFF1F] p-4 text-sm">
            <Image src="/user-tag.svg" alt="" width={24} height={24} />
            <p className="mb-2 font-medium pt-2 text-white">
              Got some questions, enquiries or need help?
            </p>
            <a href="#" className="text-xs text-[#F0C074] hover:underline">
              Visit Mentity Help Desk Here
            </a>
          </div>
        )}

        <ThemeToggle />
      </div>
    </SidebarGroup>
  );
}
