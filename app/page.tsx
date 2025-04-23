"use client";

import { Header } from "@/app/components/Header";
import { DashboardControls } from "@/app/components/DashboardControls";
import { WelcomeBanner } from "@/app/components/WelcomeBanner";
import { ProgramsSection } from "@/app/components/ProgramsSection";
import { GroupCallsSection } from "@/app/components/GroupCallsSection";
import { ApplicationsSection } from "@/app/components/ApplicationsSection";
import { UsersSection } from "@/app/components/UsersSection";
import { MentorsSection } from "@/app/components/MentorsSection";
import { ActivitiesSection } from "@/app/components/ActivitiesSection";
import { motion } from "motion/react";

export default function Dashboard() {
  return (
    <motion.div
      initial={{
        x: "100%",
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="flex-1 flex flex-col overflow-auto w-full lg:w-[calc(100%-240px)] lg:ml-[240px] pb-4"
    >
      {/* Header */}
      <Header />

      {/* Dashboard Controls */}
      <DashboardControls />

      {/* Welcome Banner */}
      <section aria-label="Welcome Banner" className="px-4">
        <WelcomeBanner name="Blessing" />
      </section>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          {/* Programs Section */}
          <ProgramsSection />

          {/* Bottom Row */}
          <UsersSection />
        </div>

        {/* Right Column */}
        <div className="space-y-4 2xl:col-span-2">
          {/* Group Calls Section */}
          <GroupCallsSection />

          <div className="grid 2xl:grid-cols-2 gap-4">
            {/* Applications Section */}
            <ApplicationsSection />

            <div className="flex flex-col gap-4">
              {/* Mentors Section */}
              <MentorsSection />

              {/* Recent Activities */}
              <ActivitiesSection />
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
