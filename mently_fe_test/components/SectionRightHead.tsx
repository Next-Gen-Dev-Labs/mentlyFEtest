import React from "react";
import { BiMenu } from "react-icons/bi";

const SectionRightHead = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2">
      <BiMenu color="#000000" />
      <p className="text-[#B0B0B0] font-bold text-[16px]">{title}</p>
    </div>
  );
};

export default SectionRightHead;
