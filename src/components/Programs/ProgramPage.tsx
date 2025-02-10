"use client";
import React from "react";
import ProgramInformation from "./ProgramInformation";
import MentorProgram from "./MentorProgram";
import { useScreenSize } from "@/shared/hooks/useSceenSize";

const ProgramPage = () => {
  const isLargeScreen = useScreenSize();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFFF]">
      <ProgramInformation />
      {isLargeScreen && <MentorProgram />}
    </div>
  );
};

export default ProgramPage;
