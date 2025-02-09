import React from "react";
import ProgramInformation from "./ProgramInformation";
import MentorProgram from "./MentorProgram";

const ProgramPage = () => {
  return (
    <div className="grid grid-cols-2 bg-[#FFFFFF]">
      <ProgramInformation />
      <MentorProgram />
    </div>
  );
};

export default ProgramPage;
