"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { navItems } from "@/constants";
import Image from "next/image";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  // Add state for collapsed sidebar
  const [collapsed, setCollapsed] = useState(false);

  // Toggle collapsed state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "h-screen fixed overflow-y-auto scrollbar-hide inset-y-0 left-0 z-50 bg-[#340260] text-[#C2C2C2] transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:z-auto",
          open ? "translate-x-0" : "-translate-x-full",
          collapsed ? "w-[70px]" : "w-[230px]"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Close button - mobile only */}
          <div className="lg:hidden absolute right-4 top-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-white hover:bg-purple-800 "
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo */}
          <div className="flex items-center px-3 py-6">
            <div className="flex items-center gap-2 justify-between w-full">
              {!collapsed && (
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full w-[116px] h-[27px]"
                />
              )}
              <button
                onClick={toggleCollapse}
                className={cn(
                  "rounded-full size-6 flex items-center justify-center transition-transform",
                  collapsed ? "mx-auto rotate-180" : ""
                )}
              >
                <Image
                  src="/images/collapse.png"
                  alt="Collapse"
                  width={100}
                  height={100}
                  className="rounded-full size-6  lg:flex hidden"
                />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center py-3 text-sm font-medium rounded-lg",
                  collapsed ? "justify-center px-2" : "px-3",
                  item.active
                    ? "bg-white text-purple-900"
                    : "text-white hover:bg-purple-800"
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon
                  className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")}
                />
                {!collapsed && <span>{item.name}</span>}
                {!collapsed && item.comingSoon && (
                  <span className="ml-auto text-xs bg-purple-800 text-white px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                )}
              </Link>
            ))}
            {/* Bottom section - only show when not collapsed */}
            {!collapsed && (
              <div className="w-full">
                <div className="rounded-lg p-4 text-sm bg-purple-800">
                  <p>Got some questions, enquiries or need help?</p>
                  <Button
                    variant="link"
                    className="text-[#F0C074] p-0 h-auto mt-1 text-sm underline"
                  >
                    Visit Mighty Help Desk Here
                  </Button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm">Switch to Classic Mode</span>
                  <Switch />
                </div>
              </div>
            )}

            {/* Simplified bottom section when collapsed */}
            {collapsed && (
              <div className="p-2 flex flex-col items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-purple-800"
                  title="Help"
                >
                  <span className="text-lg">?</span>
                </Button>
                <Switch />
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
