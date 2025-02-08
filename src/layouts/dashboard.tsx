"use client";
import React, { Fragment, useState } from "react";
import { useApp } from "@/context/main";
import Image from "next/image";
import {
  Award,
  Book,
  Bubble,
  ClipboardText,
  Diagram,
  EmptyWallet,
  Grid4,
  Home2,
  Icon,
  Menu,
  Notification,
  Setting2,
} from "iconsax-react";
import { cn } from "@/utils/classname";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";

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
          <Menu size={20} />
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
                <div className="flex">
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
              <div className="px-2">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 hidden lg:block"
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

                {/* theme toggle switch*/}
                {mounted && (
                  <Toggle checked={theme === "light"} onChange={toggleTheme} />
                )}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main
          className={`
          transition-all duration-300 min-h-screen
          ${isCollapsed ? "lg:pl-16" : "lg:pl-64"}
        `}
        >
          {/* Header */}
          <header className="h-16 border-b bg-white flex items-center justify-between px-4 lg:px-8">
            <h1 className="text-xl font-semibold">Program Information</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Notification size={20} />
              </button>
              {/* <UserNav /> */}
            </div>
          </header>

          {/* Page content */}
          <div className="p-4 lg:p-8">
            <div className="max-w-6xl mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default LayoutDashboard;
