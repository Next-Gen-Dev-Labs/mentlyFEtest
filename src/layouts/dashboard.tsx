"use client";
import React, { Fragment, useState } from "react";
import { useApp } from "@/context/main";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDown2,
  Award,
  Book,
  Bubble,
  ClipboardText,
  Diagram,
  EmptyWallet,
  Grid4,
  Home2,
  Icon,
  Logout,
  Menu,
  Notification,
  Setting2,
  UserTag,
} from "iconsax-react";
import { cn } from "@/utils/classname";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import { DropdownMenu } from "@/components/common/dropdown";

interface menuItem {
  icon: Icon;
  title: string;
  href: string;
}

const menus: menuItem[] = [
  {
    icon: Home2,
    title: "Dashboard",
    href: "/",
  },
  {
    icon: Book,
    title: "Programs",
    href: "/programs",
  },
  {
    icon: Bubble,
    title: "Activities",
    href: "/activities",
  },
  {
    icon: ClipboardText,
    title: "Forms",
    href: "/forms",
  },
  {
    icon: EmptyWallet,
    title: "Finances",
    href: "/finances",
  },
  {
    icon: Award,
    title: "Badges",
    href: "/badges",
  },
  {
    icon: Diagram,
    title: "Analytics",
    href: "/analytics",
  },
  {
    icon: Setting2,
    title: "Settings",
    href: "/settings",
  },
];

function LayoutDashboard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { data, updateData, toggleTheme, theme, mounted } = useApp();
  const { isCollapsed, isMobileMenuOpen } = data;

  const setIsCollapsed = (value: boolean) => {
    updateData({ isCollapsed: value });
  };

  const setIsMobileMenuOpen = (value: boolean) => {
    updateData({ isMobileMenuOpen: value });
  };

  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        >
          <Menu size={20} color="#777795" />
        </button>

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-0 left-0 z-40 h-full bg-primary border-gray-200 transition-all duration-300",
            isCollapsed ? "w-[120px]" : "w-64",
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center justify-between px-4">
              {!isCollapsed ? (
                <div className="flex gap-2">
                  <Image
                    src="/img/logo.png"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                  <span className="text-xl font-semibold">Mently</span>
                </div>
              ) : (
                <Image src="/img/logo.png" width={40} height={40} alt="logo" />
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              <div className="px-2 mb-[70px] flex items-center">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className={cn(
                    "p-1.5 rounded-lg  hidden lg:flex w-full items-center justify-start",
                    isCollapsed && "justify-center"
                  )}
                >
                  <Grid4
                    size={20}
                    className={`transform transition-transform duration-300 stroke-grey ${
                      isCollapsed ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <ul className="space-y-1 px-2">
                {menus.map((item, index) => {
                  const link =
                    item.href === "/" ? "/dashboard" : `/dashboard${item.href}`;
                  return (
                    <li key={index}>
                      <Link
                        href={link}
                        className={cn(
                          "flex items-center px-2 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 ease-in-out hover:text-primary",
                          isCollapsed && "justify-center",
                          pathname === link
                            ? "bg-purple-50 text-primary"
                            : "text-white"
                        )}
                      >
                        <span className={cn(!isCollapsed && "min-w-[32px]")}>
                          {React.createElement(item.icon, {
                            size: 20,
                            className: cn(
                              "text-lg stroke-grey",
                              pathname === link && "stroke-primary"
                            ),
                          })}
                        </span>
                        {!isCollapsed && (
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}

                {/* logut */}
                <li className="">
                  <button
                    onClick={() => console.log("Logout")}
                    className={cn(
                      "flex items-center px-2 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 ease-in-out hover:text-primary w-full",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <span className={cn(!isCollapsed && "min-w-[32px]")}>
                      <Logout size={20} className="text-lg stroke-grey" />
                    </span>

                    {!isCollapsed && (
                      <span className="text-sm font-medium">Logout</span>
                    )}
                  </button>
                </li>

                <li className="mt-16 transition-all duration-300">
                  {/* help desk */}
                  <div>
                    <button
                      onClick={() => console.log("Help")}
                      className={cn(
                        "flex justify-center flex-col items-center px-2 py-4 rounded-lg bg-[#FFFFFF1F] transition-colors duration-200 ease-in-out hover:text-primary w-full",
                        isCollapsed && "justify-center"
                      )}
                    >
                      <UserTag size={30} className="text-lg stroke-white" />

                      <span className="text-sm font-medium underline text-[10px] text-[#F0C074] leading-none mt-4">
                        Visit Mently Help Desk Here
                      </span>
                    </button>
                  </div>

                  {/* theme toggle switch*/}
                  {mounted && (
                    <div
                      className={cn(
                        "px-2 py-4 flex items-center transition-colors duration-200 ease-in-out w-full",
                        isCollapsed && "justify-center"
                      )}
                    >
                      <Toggle
                        checked={theme === "light"}
                        onChange={toggleTheme}
                      />

                      {!isCollapsed && (
                        <span className="text-sm font-medium text-white ml-2">
                          {theme === "light" ? "Light" : "Dark"}
                        </span>
                      )}
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main
          className={cn(
            "transition-all duration-300 min-h-screen relative",
            isCollapsed ? "lg:pl-[120px]" : "lg:pl-64"
          )}
        >
          {/* Header */}
          <header className="h-16 border-b bg-white sticky left-0 right-0 top-0 z-40 flex items-center max-lg:px-4 dark:bg-[#1E2139] dark:border-[#3A3D4A]">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-end">
              <div className="flex items-center gap-4">
                <div className="">
                  <Notification size={20} color="#777795" />
                </div>

                <DropdownMenu
                  dropdownClassName="w-48"
                  trigger={
                    <div className="flex items-center gap-2">
                      <div className="">
                        <Image
                          src="/img/avatar.png"
                          width={32}
                          height={32}
                          alt="avatar"
                          className="rounded-full"
                        />
                      </div>

                      <div className="flex flex-col items-start">
                        <h4 className="text-[#404040] text-sm">Godwin Jimmy</h4>
                        <p className="text-sm text-[#777795]">
                          Free plan{" "}
                          <span className="font-bold text-[#2B85FE]">
                            Upgrade
                          </span>
                        </p>
                      </div>
                      <ArrowDown2 size={20} color="#777795" />
                    </div>
                  }
                  items={[
                    {
                      label: "Profile",
                      onClick: () => console.log("Profile"),
                    },
                    {
                      label: "Settings",
                      onClick: () => console.log("Settings"),
                    },
                    {
                      label: "Logout",
                      onClick: () => console.log("Logout"),
                    },
                  ]}
                />
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="p-4 lg:p-8 !pt-[50px]">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default LayoutDashboard;
