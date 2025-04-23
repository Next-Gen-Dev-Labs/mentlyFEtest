import React from "react";
import { MdWidgets } from "react-icons/md";
import { PiVectorThree } from "react-icons/pi";

const SubNav = () => {
  return (
    <div className="text-black p-4">
      <div className="flex gap-4 justify-end">
        <div className="flex gap-4">
          <PiVectorThree className="text-[#A4A5B8]" />
          <MdWidgets className="bg-[#6F01D0]" />
        </div>
        <h3 className="text-[#1F0954] text-[16px] font-bold">Manage Widgets</h3>
      </div>
    </div>
  );
};

export default SubNav;
