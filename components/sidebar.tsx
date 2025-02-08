"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Book,
  Bubble,
  ClipboardText,
  Setting2,
  LogoutCurve,
  Diagram,
  Award,
  EmptyWallet,
  SidebarLeft,
  TagUser,
} from "iconsax-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "../public/logo.png";

const sidebarItems = [
  {
    icon: Home,
    href: "/",
    label: "Home",
  },
  {
    icon: Book,
    href: "/courses",
    label: "Courses",
  },
  {
    icon: Bubble,
    href: "/community",
    label: "Community",
  },
  {
    icon: ClipboardText,
    href: "/resources",
    label: "Resources",
  },
  {
    icon: EmptyWallet,
    href: "/payment",
    label: "Payment",
  },
  {
    icon: Award,
    href: "/certificates",
    label: "Certificates",
  },
  {
    icon: Diagram,
    href: "/analytics",
    label: "Analytics",
  },
  {
    icon: Setting2,
    href: "/settings",
    label: "Settings",
  },
  {
    icon: LogoutCurve,
    href: "/login",
    label: "LogOut",
  },
];

function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="flex h-10 w-full items-center justify-center rounded-md text-white/60 hover:bg-white/10 hover:text-white transition-colors mb-2"
      aria-label="Toggle sidebar"
    >
      <SidebarLeft size="26" color="#AAAAAA" aria-hidden="true" />
    </button>
  );
}
function MobileSidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-white/60 hover:bg-white/10 hover:text-white transition-colors"
      aria-label="Toggle mobile sidebar"
    >
      <SidebarLeft size="26" color="#AAAAAA" aria-hidden="true" />
    </button>
  );
}
export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <MobileSidebarToggle />
      <ShadcnSidebar
        className="w-64 transition-all duration-300 ease-in-out group-data-[state=collapsed]:w-[120px]"
        collapsible="icon"
        role="navigation"
        aria-label="Main navigation"
      >
        <SidebarHeader className="h-[60px] mb-2 flex items-center justify-center">
          <Image src={logo} width={47} height={32} alt="logo of Mently" />
        </SidebarHeader>

        <SidebarContent>
          <div className="px-2 mb-2">
            <SidebarToggle />
          </div>
          <SidebarMenu className="px-2 mb-4 flex group-data-[state=collapsed]:items-center ">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    className="group-data-[state=collapsed]:w-96 "
                    asChild
                    isActive={isActive}
                    tooltip={item.label}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center mb-2  ${
                        isActive ?? "w-[148px]"
                      } ${isActive ?? "text-[#1F0954]"} ${
                        isActive && "bg-[#FFFFFF]"
                      }`}
                    >
                      <Icon
                        className={`h-20 hover:text-[#1F0954] w-20 shrink-0  ${
                          isActive ? "text-[#1F0954]" : "text-[#C2C2C2]"
                        }`}
                      />
                      <span
                        className={`ml-3 hover:text-[#1F0954]  ${
                          isActive ? "text-[#1F0954]" : "text-[#C2C2C2]"
                        } `}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
          <div className="flex items-center justify-enter flex-col px-4 space-y-4 mt-6">
            <div className="group-data-[state=collapsed]:w-[84px] text-[10px] w-full h-[126px] p-4 bg-white/5 rounded-lg mx-2 flex flex-col items-center justify-between ">
              <div className="flex justify-center">
                <TagUser color="#c2c2c2" />
              </div>
              <Link
                href={"/"}
                className="text-[10px] text-[#F0C074] underline text-cener mt-auto"
              >
                Visit Mently Help Desk Here
              </Link>
            </div>

            <div className="w-full px-2 pb-4">
              <button
                className="w-full h-6 flex items-center justify-center"
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
                aria-label="Toggle dark mode"
              >
                <div className="w-8 h-4 bg-white/20 rounded-full relative transition-colors">
                  <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </SidebarContent>
      </ShadcnSidebar>
    </>
  );
}
