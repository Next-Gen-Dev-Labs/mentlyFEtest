"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  // SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Ted from "@/public/ted.png";
import Link from "next/link";

import {
  AwardIcon,
  BookIcon,
  BubbleIcon,
  ClipboardIcon,
  GraphIcon,
  HomeIcon,
  LogoutIcon,
  ProfilePinIcon,
  SettingsIcon,
  WalletIcon,
} from "@/lib/Icons";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/dashboard", icon: HomeIcon },
  { name: "Programs", path: "/dashboard/program", icon: BookIcon },
  { name: "Chat", path: "#", icon: BubbleIcon },
  { name: "Clipboard", path: "#", icon: ClipboardIcon },
  { name: "Wallet", path: "#", icon: WalletIcon },
  { name: "Award", path: "#", icon: AwardIcon },
  { name: "Analytics", path: "#", icon: GraphIcon },
  { name: "Settings", path: "#", icon: SettingsIcon },
  { name: "Logout", path: "#", icon: LogoutIcon },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar className="">
      <SidebarHeader className="py-8 pb-6">
        <Image src={Ted} alt="Ted" width={45} height={45} className="mx-auto" />
      </SidebarHeader>
      <SidebarContent className="p-2">
        {/* <SidebarGroup className="w-full mb-5 md:flex hidden">
          <div className="flex flex-col justify-center items-center">
            <SidebarTrigger className="m-0 p-0 grid place-content-center" />
          </div>
        </SidebarGroup> */}
        <SidebarGroup>
          <ul className="flex flex-col gap-4 justify-center items-center w-full">
            {navItems.map(({ name, path, icon: Icon }) => (
              <li key={name}>
                <Link
                  href={path}
                  aria-label={name}
                  className={cn(
                    "text-white p-4 px-8 block",
                    pathname === path && "bg-white text-sidebar rounded-md"
                  )}
                >
                  <Icon />
                </Link>
                <span className="sr-only">{name}</span>
              </li>
            ))}
          </ul>
        </SidebarGroup>
        <SidebarGroup className="mt-6">
          <button className="bg-white/10 flex flex-col justify-center items-center p-4 px-2 rounded-lg gap-4">
            <ProfilePinIcon />
            <span className="text-xs underline text-[#F0C074] font-semibold">
              Vist Mently Help Desk Here
            </span>
          </button>
        </SidebarGroup>
        <SidebarGroup className="mt-4">
          <div className="flex items-center space-x-2 justify-center">
            <Switch
              id="theme"
              color="hsl(258, 81%, 18%)"
              checked={theme === "dark"}
              onCheckedChange={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
            <span className="sr-only">Theme Switch</span>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
