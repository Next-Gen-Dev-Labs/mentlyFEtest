import React from "react";
import { CgMore, CgMoreVertical } from "react-icons/cg";

const SectionLeftHead = () => {
  return (
    <div className="flex items-center">
      <p className="text-[#6F01D0] text-[12px] font-semibold">See all</p>
      <CgMoreVertical width={18} height={18} color="#000000" />
    </div>
  );
};

export default SectionLeftHead;
