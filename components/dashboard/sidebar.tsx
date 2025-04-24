"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Activities from "../icons/activities";
import Analytics from "../icons/analytics";
import Finances from "../icons/finances";
import Forum from "../icons/forum";
import HomeIcon from "../icons/home";
import Logout from "../icons/logout";
import Program from "../icons/program";
import Rewards from "../icons/rewards";
import Settings from "../icons/settings";
import Users from "../icons/users";
import { Badge } from "../ui/badge";
import { GetHelp } from "./get-help";

interface IconProps {
  className?: string;
  size?: number;
}
interface LinkItem {
  label: string;
  icon: FC<IconProps>;
  href: string;
  beta?: boolean;
}

const links: LinkItem[] = [
  {
    label: "Dashboard",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Programs",
    icon: Program,
    href: "#",
  },
  {
    label: "Activities",
    icon: Activities,
    href: "#",
  },
  {
    label: "Users",
    icon: Users,
    href: "#",
  },
  {
    label: "Forums",
    icon: Forum,
    href: "#",
  },
  {
    label: "Finances",
    icon: Finances,
    href: "#",
  },
  {
    label: "Rewards",
    icon: Rewards,
    href: "#",
  },
  {
    label: "Analytics",
    icon: Analytics,
    beta: true,
    href: "#",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "#",
  },
  {
    label: "Log Out",
    icon: Logout,
    href: "#",
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="bg-brand-dark-blue p-5 ">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/logo-text.svg"}
              alt="mently logo"
              width={50}
              height={50}
              className="w-[116px] h-[27px]"
            />
          </Link>
          <SidebarTrigger className="text-white sm:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-brand-dark-blue px-3 pt-5 space-y-3 scrollbar-none pb-36">
        {links.map(({ href, icon: Icon, beta, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center relative gap-4 sm:gap-8 px-2 py-3 rounded-md group hover:bg-white transition duration-300",
                active && "bg-white"
              )}
            >
              <span className="text-brand-gray  size-6 flex items-center justify-center">
                <Icon
                  className={cn(
                    "w-full h-full hover:text-black",
                    active && "text-black"
                  )}
                />
              </span>
              <span
                className={cn(
                  "font-semibold tracking-wide text-sm sm:text-lg text-brand-gray hover:text-black",
                  active && "text-black"
                )}
              >
                {label}
              </span>
              {beta && (
                <Badge className="absolute -top-1 right-0 bg-[#2C0074]">
                  Coming Soon
                </Badge>
              )}
            </Link>
          );
        })}
        <GetHelp />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
