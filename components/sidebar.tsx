"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PanelRight, ShieldUser, CircleCheckBig, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SidebarProps {
  onClose: () => void;
}

const sidebarItems = [
  {
    icon: "/home.svg",
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: "/program.svg",
    label: "Programs",
    href: "/programs"
  },
  {
    icon: "/activities.svg",
    label: "Activities",
    href: "/activities"
  },
  {
    icon: "/users.svg",
    label: "Users",
    href: "/users"
  },
  {
    icon: "/forums.svg",
    label: "Forums",
    href: "/forums"
  },
  {
    icon: "/finance.svg",
    label: "Finances",
    href: "/finances"
  },
  {
    icon: "/rewards.svg",
    label: "Rewards",
    href: "/rewards"
  },
  {
    icon: "/analytics.svg",
    label: "Analytics",
    href: "/analytics",
    comingSoon: true
  },
  {
    icon: "/settings.svg",
    label: "Settings",
    href: "/settings"
  },
  {
    icon: "/logout.svg",
    label: "Log Out",
    href: "/logout"
  },
];

const Sidebar = ({ onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-[#2A0D4F] justify-start h-screen px-4 py-6 gap-6">
      {/* Header Section */}
      <div className="font-bold w-full justify-between text-xl flex flex-row items-center text-white">
        <div className="flex gap-2">
          <Image
            src="/techrity-logo.png"
            alt="Techrity Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <PanelRight onClick={onClose} className="w-5 h-5 cursor-pointer text-white" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col relative w-full gap-1">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={index}
              variant="ghost"
              className={`justify-start w-full gap-3 rounded-lg relative py-6 px-4 text-sm uppercase ${isActive
                ? "bg-white text-[#2A0D4F] hover:bg-white"
                : "text-white hover:bg-[#3A1B6F]"
                }`}
              asChild
            >
              <Link href={item.href}>
                <div className="relative w-5 h-5">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={20}
                    height={20}
                    className={isActive ? "opacity-100" : "opacity-80"}
                  />
                </div>
                <span className="text-left flex-1">{item.label}</span>
                {item.comingSoon && (
                  <span className="text-[.6em] bg-blue-600 absolute top-0 right-0 text-white px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* Separator */}
      <Separator className="my-4 bg-gray-500" />
      <div className="flex flex-col gap-2">
        {/* Help Section */}
        <div className="relative flex flex-col items-start justify-between gap-4 text-sm text-gray-300 bg-[#3A1B6F] p-4 w-full rounded-lg">
          <ShieldUser className="size-7 text-white" />
          <p className="font-semibold text-white">
            Got some questions, enquiries or need help?
          </p>
          <Link href="#" className="text-[#FFD700] underline">
            Visit Mently Help Desk Here
          </Link>
        </div>

        {/* Switch to Classic Mode */}
        <div className="flex items-center justify-start mt-auto text-white gap-4 px-2 w-full text-xs">
          <Label htmlFor="switch-mode">Switch to Classic Mode</Label>
          <Switch
            className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
            checkedIcon={<CircleCheckBig size={16} color="black" className="ml-1 mt-1 bg-black text-white" />}
            uncheckedIcon={<CircleX size={16} color="gray" className="ml-1 mt-1 bg-white text-black" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
