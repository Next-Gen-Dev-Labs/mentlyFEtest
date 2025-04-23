import React from "react";
import UsersPieChart from "./Userstats";
import GroupCard from "./groupCard";
import Program from "./Program";
import Applications from "./ApplicationCard";
import MentorsCard from "./MentorsCard";

const ProgramAndGroupCallsCard = () => {
  return (
    <div className="flex flex-row shadow-lg rounded-lg p-6 gap-6">
      {/* Left column: Program above UsersPieChart */}
      <div className="flex flex-col gap-6">
        <Program />
        <UsersPieChart />
      </div>

      {/* Right column: GroupCard above Applications */}
      <div className="flex flex-col gap-6">
        <GroupCard />
       

        {/* Flex row to display two Applications side by side */}
        <div className="flex flex-row gap-6">
          <Applications />
          <MentorsCard />
        </div>
      </div>
    </div>
  );
};

export default ProgramAndGroupCallsCard;
