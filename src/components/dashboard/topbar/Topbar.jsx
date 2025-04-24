'use client'
import React, { useState } from "react";
import { topbar } from "@/data/dashboard.json";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/sidebarSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  return (
   <div className="flexBetween w-full ">
    {/* menu */}
    <Image onClick={() => dispatch(toggleSidebar())}  src='/svg/outline.svg' width={34} height={34} alt="menu" loading="lazy" className="flex lg:hidden " />
    {/* rest of top bar */}
    <div className="flex items-center justify-between md:justify-end gap-x-[15px] md:gap-x-[45px] pe-2 md:pe-[52.56px] w-full ">
      <Image
        loading="lazy"
        src={topbar.notification}
        alt="notification icon"
        width={24}
        height={24}
        className=" cursor-pointer"
      />
      <div className="flexBetween gap-4 ">
        {/* boxa */}
        <div className="flexBetween gap-2">
        <div className="w-[44.44px] h-[44px] rounded-full bg-purple-600 flexCenter ">
          <Image
            loading="lazy"
            src={topbar.logo}
            alt="techrity logo"
            width={32}
            height={24}
          />
        </div>
        <div className="flexColStart gap-1 ">
          <p className="font-Cheve font-normal text-[14px] text-gray-150  "> {topbar.boxa.text1} </p>
          <p className="font-Cheve font-normal text-[12px] text-purple-800"> {topbar.boxa.text2} </p>
        </div>
        </div>
        {/* dropdown */}
        <div className="relative w-[19px] h-[18px] bg-purple-800 rounded-[4px] " >
          <Image
            loading="lazy"
            src={topbar.dropdown}
            alt="dropdwon icon"
            width={16}
            height={16}
            className="absolute top-[9px] left-1 cursor-pointer "
          />

        </div>
      </div>
    </div>

    
   </div>
  );
};

export default Topbar;
