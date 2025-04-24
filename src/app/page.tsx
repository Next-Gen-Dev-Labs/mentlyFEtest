// app/page.tsx (Dashboard Index Page)
"use client";

import Sidebar from "./components/Sidebar";
import ProgramCard from "./components/ProgramCard";
import GroupCallCard from "./components/GroupCallCard";
import ApplicationCard from "./components/ApplicationCard";
import MentorCard from "./components/MentorCard";
import ActivityCard from "./components/ActivityCard";
import UserChart from "./components/UserChart";
import Header from "./components/Header";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[260px] w-full">
        <Header />
        <main className="p-6 grid gap-6 grid-cols-1 lg:grid-cols-4">
          <section className="lg:col-span-1">
            <div className="space-y-4">
              <ProgramCard title="Fundamentals of UI/UX" description="This program is a hands-on guide..." host="Faith Okoli" hostAvatar="/avatar1.png" />
              <ProgramCard title="Colour Hack Practical Group Call" description="This program is a hands-on guide..." host="Self" hostAvatar="/avatar2.png" />
            </div>
            <div className="mt-6">
              <UserChart />
            </div>
          </section>

          <section className="lg:col-span-1">
            <div className="flex gap-3 overflow-x-auto">
              <GroupCallCard title="Product Demo Review" status="Ongoing" time="Mon Jul 30" hostImage="/group1.jpg" />
              <GroupCallCard title="Product Demo Review" status="Upcoming" time="Mon Jul 30" hostImage="/group2.jpg" />
            </div>
          </section>

          <section className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-sm p-4">Applications</h3>
              <ApplicationCard name="Maxwell Smith" email="maxwell@gmail.com" role="Product Designer" location="Lagos" experience="5 years" />
            </div>
          </section>

          <section className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-sm p-4">Mentors</h3>
              <MentorCard name="Maxwell Smith" title="Product Designer" />
              <MentorCard name="Adeati Samuel" title="Product Designer" />
            </div>
            <div className="bg-white rounded-xl shadow-sm mt-4">
              <h3 className="font-semibold text-sm p-4">Recent Activities</h3>
              <ActivityCard title="KYC Verification" description="45 persons just signed up" timeAgo="25 mins ago" />
              <ActivityCard title="New User Sign Up!" description="45 new persons just joined" timeAgo="25 mins ago" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
