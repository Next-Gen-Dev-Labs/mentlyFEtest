"use client"

import { Bell, ChevronDown } from "lucide-react";
import { HeaderImageIcon } from "@/components/svgIcons/SvgIcons";
import { useWidget } from "@/context/WidgetContext";
import { ChevronLeft } from 'lucide-react';

export default function Header() {
  const { toggleWidget, isWidgetVisible } = useWidget();

  return (
    <header className="bg-[#FDFDFD] w-full flex px-12 justify-end shadow">
      <div className=" flex items-center h-20">
        <div className="relative block sm:mr-8 mr-2">
          <Bell />
          <div className="absolute -top-1 -right-[-3px] bg-red-500 rounded-full w-2.5 h-2.5 flex items-center justify-center">
          </div>
        </div>
        <div className="flex space-x-4 items-center gap-2">
          <div className="bg-[#8B72FC] rounded-full flex items-center justify-center sm:w-[50px] w-[40px] h-[40px] sm:h-[50px] p-1 ">
            <HeaderImageIcon
              className=" sm:w-full sm:h-full  w-[30px] h-[30px]"
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
          <button 
            onClick={toggleWidget}
            className="bg-[#8B72FC] px-1 py-1 rounded-sm cursor-pointer"
          >
            {isWidgetVisible && <ChevronDown className="" />}
            {!isWidgetVisible && <ChevronLeft className="" />}
          </button>
        </div>
      </div>
    </header>
  );
}
