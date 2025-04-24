"use client";
import React, { useState } from "react";
import SlideNav from "./SlideNav";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  return (
    <div className="w-full">
      {/* manage widget */}
      <div className="w-full grid place-content-end">
        <div className="flex items-center gap-7">
          {/* image 1 */}
          <div className="">
            <button className="cursor-pointer">
              <img src="/widget.svg" alt="" />
            </button>
          </div>

          {/* image 2 */}
          <div className="">
            <button className="cursor-pointer">
              <img src="/widget.png" alt="" />
            </button>
          </div>

          {/* text */}
          <button
            className="text-[#1F0954] font-bold cursor-pointer"
            onClick={toggle}
          >
            Manage Widgets
          </button>
        </div>
      </div>
      {/* onboard message */}
      <div className="w-full">
        <div className="bg-blue min-h-[61px] px-7 rounded-[4px] text-white flex items-center justify-between gap-4 flex-wrap py-2">
          <div className="flex lg:items-center flex-col lg:flex-row xl:gap-20 flex-wrap">
            <p className="text-sm lg:text-base xl:text-[26.21px] font-semibold">
              Welcome Aboard, Blessing 👋
            </p>
            <p className="text-sm lg:text-base xl:text-[20px] font-semibold text-[#BDBDBD]">
              We’re thrilled to have you join Techrity Team!
            </p>
          </div>
          {/* update button */}
          <div className="">
            <button className="btn-up text-[#1F0954] font-bold">
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* side bar */}
      <div>
        <SlideNav open={open} close={close} />
      </div>
    </div>
  );
};

export default Header;
