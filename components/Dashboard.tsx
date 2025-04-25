"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Sidebar from "./sidebar";
import MobileHeader from "./mobile-header";
import WelcomeHeader from "./welcome-header";
import ProgramsSection from "./programs-section";

import UsersSection from "./users-section";
import GroupCallsSection from "./group-calls-section";

import RecentActivitiesSection from "./recent-activities-section";
import NavbarHeader from "./navbar";
import ManageWidget from "./manage-widget";
import ApplicationsSection from "./applicationsSection";
import MentorsSection from "./mentorsSection";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex h-screen bg-gray-50 scrollbar-hide">
      {/* Sidebar - visible on desktop or when toggled on mobile */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden scrollbar-hide">
        {/* Mobile Header - only visible on mobile */}
        {!isDesktop && (
          <MobileHeader onMenuClick={() => setSidebarOpen(true)} />
        )}

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 pb-10">
                  <NavbarHeader />
                  
          <ManageWidget />
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <WelcomeHeader />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 mt-2">
              {/* Left Column */}
              <div className="space-y-8">
                <ProgramsSection />
                <UsersSection />
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <GroupCallsSection />

                {/* Three-column layout for Applications, Mentors, and Recent Activities */}
                <div className="flex gap-4 lg:flex-row flex-col">
                  <div>
                    <ApplicationsSection />
                  </div>
                  <div className="flex flex-col gap-4">
                    <MentorsSection />
                    <RecentActivitiesSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
