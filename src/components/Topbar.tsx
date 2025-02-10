import { Man_Avatar } from "@/assets";
import IconNofication from "@/assets/IconComponents/IconNofication";
import IconSidebar from "@/assets/IconComponents/IconSidebar";
import Image from "next/image";
import React from "react";

const Topbar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full h-16 py-4 bg-[#FDFDFD] drop-shadow-sm border-b border-gray-200  flex items-center lg:px-[5rem] px-[2rem]">
      <div className="flex items-center gap-6">
        <div
          title="Toggle Sidebar"
          className="cursor-pointer lg:hidden"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          <IconSidebar />
        </div>
      </div>
      <div className="flex justify-end w-full items-center gap-10">
        <IconNofication />
        <div className="flex items-center gap-4">
          <Image
            src={Man_Avatar}
            alt="logo"
            className="rounded-full w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="text-sm font-[400] text-[#404040]">Godwin Jimmy</p>
            <div className="flex gap-2 items-center">
              <p className="text-xs font-normal text-[#777795]">Free Plan</p>
              <span className="text-[#2B85FE] font-[600]">Upgrade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Topbar);
