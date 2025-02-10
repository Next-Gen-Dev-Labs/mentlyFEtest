"use client";

import React from "react";
import MentorshipHeader from "./MentorshipHeader";
import MentorshipImage from "./MentorshipImage";
import MentorshipDetails from "./MentorshipDetails";
import ProgramInfo from "./ProgramInfo";
import ProgramInfoList from "./ProgramInfoList";

export const MentorshipProgram = () => {
  return (
    <div className="pt-6">
      <MentorshipHeader />
      <article className="flex overflow-hidden flex-col px-3.5 pt-4 pb-20 bg-white dark:bg-[#24243B] rounded border border-solid border-stroke dark:border-[#2E2F6E] shadow-default dark:shadow-lg border-opacity-50 max-w-[697px] mx-auto">
        <h1 className="self-start text-3xl font-black leading-none text-[#1C1D4E] dark:text-[#F0F0F0]">
          Mentorship Program
        </h1>
        <MentorshipImage />
        <MentorshipDetails />
        <ProgramInfo />
        <ProgramInfoList />
      </article>
    </div>
  );
};
