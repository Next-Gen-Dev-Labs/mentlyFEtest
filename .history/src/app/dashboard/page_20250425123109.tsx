"use client";

import ApplicationSection from "@/components/Application/applicationSection";
import GroupSection from "@/components/groupSection";
import ProgramSection from "@/components/programSection";
import WidgetModal from "@/components/widgetModal";
import { useState } from "react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-(--purple)  w-full pt-[rem]">
        <div className="mx-6">
          {/* widget */}
          <div className="flex items-center justify-end gap-[23px] h-[26px] py-6 ">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 13.5H16.5V21H24V13.5ZM22.5 19.5H18V15H22.5V19.5ZM24 3H16.5V10.5H24V3ZM22.5 9H18V4.5H22.5V9ZM0 4.5V6H13.5V4.5H0ZM4.5 9H13.5V7.5H4.5V9ZM13.5 15H0V16.5H13.5V15ZM13.5 18H4.5V19.5H13.5V18Z"
                  fill="#A4A5B8"
                />
              </svg>
            </div>
            <div>
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="25"
                  rx="1.5"
                  fill="#6F01D0"
                  fillOpacity="0.11"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="25"
                  rx="1.5"
                  stroke="#6F01D0"
                />
                <path
                  d="M4.44446 19.0833V5.83772H17.6901V19.0833H4.44446ZM19.8977 11.3567V5.83772H25.4167V11.3567H19.8977ZM21.0015 10.2529H24.3129V6.94152H21.0015V10.2529ZM5.54826 17.9795H16.5863V6.94152H5.54826V17.9795ZM6.86399 15.666H15.2705L12.585 12.0786L10.5154 14.8381L8.99764 12.8237L6.86399 15.666ZM19.8977 19.0833V13.5643H25.4167V19.0833H19.8977ZM21.0015 17.9795H24.3129V14.6681H21.0015V17.9795Z"
                  fill="#6F01D0"
                />
              </svg>
            </div>
            <h2
              className="text-[#1F0954] font-[700] cursor-pointer text-[16px] leading-[100px]"
              onClick={() => setIsOpen(true)}
            >
              Manage Widget
            </h2>
          </div>
          {/* welcome section */}
          <div className="bg-(--primary) rounded-[4px] h-[51px] px-6 flex items-center justify-between md:flex hidden">
            <h2 className="text-[20px] leading-[140%] font-[600] text-white">
              Welcome Aboard, Blessing 👋
            </h2>
            <h3 className="text-[20px] leading-[140%] font-[600] text-(--grey)">
              We’re thrilled to have you join Techrity Team!
            </h3>
            <div>
              <button className="w-[160px] h-[39px] bg-white rounded-[8px] font-[700] text-[16px] leading-[100%]">
                Update Profile
              </button>
            </div>
          </div>
        </div>
        {/* program section */}
        <div className="flex gap-2 flex-col lg:flex-row lg:mx-6 mx-4">
          <ProgramSection />
          {/* Group section */}
          <div>
            <GroupSection />
            {/* application section */}
            <ApplicationSection />
          </div>
        </div>
      </div>
      <WidgetModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
