import Applications from "@/components/Applications";
import BodyNav from "@/components/BodyNav";
import GroupCalls from "@/components/GroupCall";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import RecentActivities from "@/components/RecentActivities";
import SubNav from "@/components/SubNav";
import Users from "@/components/Users";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SubNav />
      <div className="p-8">
        <BodyNav />

        <main className="flex-1 p-4 overflow-auto space-y-4">
          <Programs />
          <Users />
          <GroupCalls />
          <div className="grid grid-cols-2 gap-4">
            <Applications />
            <Mentors />
          </div>
          <RecentActivities />
        </main>
      </div>
    </div>
  );
};

export default page;
