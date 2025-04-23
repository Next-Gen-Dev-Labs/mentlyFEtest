"use client";
import React from "react";
import AppLayout from "@/components/layout/AppLayout";

// sections
import Welcome from "@/components/sections/Welcome";
import Programs from "@/components/sections/Programs";
import Users from "@/components/sections/Users";
import Widgets from "@/components/sections/Widgets";
import Calls from "@/components/sections/Calls";
import Applications from "@/components/sections/Applications";
import Mentors from "@/components/sections/Mentors";
import Activities from "@/components/sections/Activities";

const Dashboard = () => {
  return (
    <AppLayout>
      <main className="w-full h-full">
        <Widgets />

        <Welcome />
        {/*  Dashboard Grid */}
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 gap-4 items-start">
          <section className="col-span-1 w-full max-lg:order-last">
            <Programs />
            <Users />
          </section>
          <section className="col-span-2 w-full">
            <Calls />
            <div className="w-full grid-cols-1 grid lg:grid-cols-7 gap-2 items-start mt-4">
              <div className="col-span-4">
                <Applications />
              </div>
              <div className="col-span-3 space-y-5">
                <Mentors />
                <Activities />
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  );
};

export default Dashboard;
