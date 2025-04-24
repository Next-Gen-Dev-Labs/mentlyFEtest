"use client";
import React from "react";
import ProgramsCard from "./ProgramsCard";
import UserChart from "./UserChart";
import GroupCalls from "./GroupCalls";
import Applications from "./Applications";
import MentorsGrid from "./MentorsGrid";
import Activities from "./Activities";

const GridSection = () => {
  return (
    <div className="w-full">
      <div className="grid-con min-h-[90dvh] w-full max-w-[1200px] mx-auto">
        {/* 1st grid */}
        <div className="grid-1">
          {/* programs card */}
          <div className=" w-full">
            <ProgramsCard />
          </div>

          {/* users card */}
          <div className="w-full">
            <UserChart />
          </div>
        </div>

        {/* 2nd grid */}
        <div className="grid-2 bg-white overflow-x-hidden py-4 rounded-[12.04px]">
          <GroupCalls />
        </div>

        {/* 3rd grid */}
        <div className="grid-3 w-full">
          {/* applications */}
          <Applications />

          {/* 6th grid */}
          <div className="grid3-1">
            {/* mentors grid */}
            <MentorsGrid />

            {/* activities */}
            <Activities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
