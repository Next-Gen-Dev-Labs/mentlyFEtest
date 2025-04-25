import React from "react";
import { SideBar } from "@/components/SideBar";
import { TopBar } from "@/components/TopBar";
import { ProgramsSection } from "@/components/Programs";
import { ApplicationsSection } from "@/components/Applications";
import { MentorsSection } from "@/components/Mentors";
import { RecentActivities } from "@/components/RecentActivities";
import { Users } from "@/components/UsersChart";
import GroupCalls from "@/components/GroupCalls";

export default function MentorsDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        <aside className="lg:col-span-2 mb-4 lg:mb-0">
          <SideBar />
        </aside>

        <main className="lg:col-span-10 space-y-6">
          <TopBar />

  
          <div className="flex flex-col lg:flex-row gap-4">

            <div className="w-full lg:w-[35%] space-y-4">
              <ProgramsSection />
              <Users />
            </div>

      
            <div className="w-full lg:w-[65%] space-y-4">
              <GroupCalls />

        
<div className="flex flex-col lg:flex-row gap-4">
  <div className="w-full lg:w-2/3">
    <ApplicationsSection />
  </div>


  <div className="w-full lg:w-1/3 space-y-4">
    <MentorsSection />
    <RecentActivities />
  </div>
</div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
