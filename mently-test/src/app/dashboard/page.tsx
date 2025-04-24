"use client";
import React from "react";
import Programs from "@/components/dashboard/Programs";
import Applications from "@/components/dashboard/Applications";
import Mentors from "@/components/dashboard/Mentors";
import Activities from "@/components/dashboard/Activities";
import GroupCalls from "@/components/dashboard/GroupCalls";
import Chart from "@/components/dashboard/Chart";
import Grid from "@/assets/icons/grid.svg";
import Thumbnail from "@/assets/icons/thumbnail.svg";
import { useWidgets } from '@/contexts/WidgetContext'
import { WidgetSidebar } from '@/components/dashboard/WidgetSidebar'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { visibleWidgets, toggleSidebar } = useWidgets()

  return (
    <div className=" w-[95%] mx-auto">
      <WidgetSidebar />
      <div className="flex flex-col w-full mb-5">
        <div className="flex items-center gap-2 mb-5 ml-auto w-fit">
          <Thumbnail className="" />
          <Grid className="fill-purple-200" />
          <button 
            className="text-[#6F01D0]"
            onClick={toggleSidebar}
          >
            Manage Widgets
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 bg-[#6F01D0] rounded-md py-4 px-6 justify-between w-fit lg:w-auto">
          <h1 className="text-base lg:text-[26px]">Welcome Aboard, Blessing 👋</h1>
          <h1 className="text-sm lg:text-xl">
            We&apos;re thrilled to have you join Techrity Team!
          </h1>
          <button className="bg-white text-[#1F0954] px-4 w-fit py-2 rounded-lg font-bold">
            Update Profile
          </button>
        </div>
      </div>
      
      <div className="flex flex-col-reverse xl:flex-row gap-5">
        <div className="flex flex-col w-full xl:w-[35%] gap-5">
          {visibleWidgets.programs && <Programs />}
          {visibleWidgets.chart && <Chart />}
        </div>
        <div className="flex flex-col w-full xl:w-[65%] gap-5">
          {visibleWidgets.groupCalls && <GroupCalls />}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[55%]">
              {visibleWidgets.applications && <Applications />}
            </div>
            <div className="w-full lg:w-[45%] flex flex-col gap-6">
              {visibleWidgets.mentors && <Mentors />}
              {visibleWidgets.activities && <Activities />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;