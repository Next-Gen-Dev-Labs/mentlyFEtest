'use client';
import Sidebar from "../components/Sidebar";
import WelcomeBanner from "../components/WelcomeBanner";
import Programs from "../components/Programs";
import GroupCalls from "../components/GroupCalls";

import RecentActivities from "../components/RecentActivities";
import Mentors from "@/components/Mentors";
import UserPieCharts from "@/components/UserPieCharts";
import Applications from "@/components/Applications";
import Header from "@/components/Header";
import WidgetManagement from "@/components/Widgets";


import {
  defaultCalls,
  defaultMentorApplications,
  defaultPrograms,
  defaultStudentApplications,
  stats,
} from "../../mockdata";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 pb-6 overflow-y-auto">
        <Header />
        <WidgetManagement />
        <div className="px-6">
          <WelcomeBanner name="Blessing" />
          <div className="flex flex-col md:flex-row gap-2 mt-6">
            <div className="w-full md:w-1/4 space-y-6">
              <Programs programs={defaultPrograms} />
              <UserPieCharts stats={stats} />
            </div>
            <div className="w-full md:w-3/4 space-y-6">
              <GroupCalls calls={defaultCalls} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Applications
                  mentorApplications={defaultMentorApplications}
                  studentApplications={defaultStudentApplications}
                />
                <div className="space-y-6">
                  <Mentors />
                  <RecentActivities />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
