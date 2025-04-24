"use client";

import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import Cards from "./cards";
import { useState } from "react";
import { WidgetSidebar } from "./widgetsidebar";

export function DashboardContent() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [widgetSidebarOpen, setWidgetSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={
          isCollapsed
            ? "flex flex-1 flex-col gap-4 pl-4 md:pl-12 p-4 pt-0 pr-4"
            : "flex flex-1 flex-col gap-4 pl-4 lg:pl-4 p-4 pt-0 pr-4"
        }
      >
        <div className="flex items-center justify-end gap-4">
          <Image
            src="/widget1.svg"
            alt="User"
            width={24}
            height={24}
            className="h-6 w-6 cursor-pointer object-cover"
            onClick={() => setWidgetSidebarOpen(true)}
            priority
          />

          <Image
            src="/widget2.svg"
            alt="User"
            width={24}
            height={24}
            className="h-6 w-6 cursor-pointer object-cover"
            onClick={() => setWidgetSidebarOpen(true)}
            priority
          />

          <p className="font-bold text-base text-widget">Manage Widgets</p>
        </div>

        <div className="w-full px-4 sm:px-5 md:px-6 lg:px-7 py-3 bg-welcome rounded-md flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 md:gap-4">
          {/* Main Title */}
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center sm:text-left order-1">
            Welcome Aboard, Blessing 🖐
          </span>

          {/* Subtitle  */}
          <span className="hidden sm:inline-block text-sm md:text-base lg:text-lg font-medium text-[#BDBDBD] text-center flex-grow order-3 sm:order-2 px-2">
            We’re thrilled to have you join Techrity Team!
          </span>

          {/* Button  */}
          <div className="w-full sm:w-auto order-2 sm:order-3">
            <button className="bg-white w-full sm:w-auto py-2 px-4 md:py-2.5 md:px-6 rounded-md text-sm md:text-base font-bold text-[#1F0954] hover:bg-gray-50 transition-colors">
              Update Profile
            </button>
          </div>
        </div>

        <Cards />
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>

      <WidgetSidebar
        open={widgetSidebarOpen}
        onOpenChange={setWidgetSidebarOpen}
      />
    </>
  );
}
