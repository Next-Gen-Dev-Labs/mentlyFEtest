import { ICONS } from "@/assets";
import React from "react";
import GroupCallsCard from "./GroupCallsCard";
import { DummyGroupCalls } from "../constant";

const GroupCalls = () => {
  return (
    <div className="bg-[#FFF] rounded-lg p-4 overflow-x-auto hide-scrollbar">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <ICONS.Menu stroke="#000000" width={20} height={20} />
          <p className="text-[#B0B0B0] max-md:text-sm font-bold -mt-[2px]">
            Group Calls
          </p>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-buttonMain max-md:text-sm font-semibold -mt-[2px]">
            See all
          </p>
          <ICONS.EllipsisVertical stroke="#000000" width={20} height={20} />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar w-full">
        {DummyGroupCalls.map((groupCall) => (
          <GroupCallsCard key={groupCall.id} groupCall={groupCall} />
        ))}
      </div>
    </div>
  );
};

export default GroupCalls;
