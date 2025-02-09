"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboardIcon,
  SettingsIcon,
  BookText,
  ClipboardList,
  ChartSplineIcon,
  PanelRight,
  Shield,
} from "lucide-react";
import { ActivityIcon, BadgeIcon, FinanceIcon, LogoutIcon } from "./icons";
import Switch from "./ui/Switch";

const sidebarItems = [
  { Icon: LayoutDashboardIcon, href: "/dashboard" },
  { Icon: BookText, href: "/programs" },
  { Icon: ActivityIcon, href: "/activities" },
  { Icon: ClipboardList, href: "/forms" },
  { Icon: FinanceIcon, href: "/finances" },
  { Icon: BadgeIcon, href: "/badges" },
  { Icon: ChartSplineIcon, href: "/analytics" },
  { Icon: SettingsIcon, href: "/settings" },
  { Icon: LogoutIcon, href: "/logout" },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 pb-11 left-0 min-h-screen w-[7.5rem] bg-sidebar-background text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 pt-9
      `}
      >
        <div className="flex items-center gap-[2.5rem] flex-col">
          <Image
            src="/ted.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="rotate-180">
            <PanelRight />
          </div>
        </div>

        <nav className="mt-16 grid place-content-center">
          {sidebarItems.map(({ Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className="p-3 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-9 px-2 mt-16">
          <div className=" bg-white/10 rounded-lg w-full">
            <div className="flex flex-col items-center gap-[29px] py-5 px-2">
              <Shield size={20} className="text-white" />
              <p className="text-[10px] text-secondary-color-3 text-left">
                Visit Mently <br /> Help Desk
                <br /> Here
              </p>
            </div>
          </div>
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
            className="data-[state=checked]:bg-[#0214bd]"
          />
        </div>
      </div>
    </>
  );
}
