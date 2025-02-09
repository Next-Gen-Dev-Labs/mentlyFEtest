"use client";
import React from "react";
import ProgramInformation from "./ProgramInformation";
import MentorProgram from "./MentorProgram";
import { useMediaQuery } from "usehooks-ts";

const ProgramPage = () => {
  const isSmallScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFFF]">
      <ProgramInformation />
      {isSmallScreen && <MentorProgram />}
    </div>
  );
};

export default ProgramPage;
