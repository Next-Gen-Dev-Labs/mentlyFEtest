import React from "react";
import { GrMoreVertical } from "react-icons/gr";

const SectionLeftHead = () => {
  return (
    <div className="flex  items-center">
      <p className="text-[#6F01D0] text-[12px] font-semibold">See all</p>
      <GrMoreVertical color="#000000" />
    </div>
  );
};

export default SectionLeftHead;
