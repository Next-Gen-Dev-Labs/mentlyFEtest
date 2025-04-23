"use client"

import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { HeaderImageIcon } from "../svgIcons/SvgIcons";

export default function Header() {
  return (
    <header className="bg-[#FDFDFD] w-full flex px-12 justify-end shadow">
      <div className=" flex items-center h-20">
        <div className="relative mr-8">
          <Bell />
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2.5 h-2.5 flex items-center justify-center">
          </div>
        </div>
        <div className="flex space-x-4 items-center gap-2">
          <div className="bg-[#8B72FC] rounded-full flex items-center justify-center w-[50px] h-[50px] ">
            <HeaderImageIcon
              className=""
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#404040] font-medium">
              Techrity Foun...
            </p>
            <p className="text-xs text-[#53547B] font-normal">Member</p>
          </div>
          <div className="bg-[#8B72FC] px-1 py-1 rounded-sm">
            <ChevronDown className="" />
          </div>
        </div>
      </div>
    </header>
  );
}
