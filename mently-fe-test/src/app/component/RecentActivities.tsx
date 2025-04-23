import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const RecentActivities = () => {
  return (
    <div className="bg-[#FFF] rounded-lg p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <ICONS.Menu stroke="#000000" width={20} height={20} />
          <p className="text-[#B0B0B0] max-md:text-sm font-bold -mt-[2px]">
            Recent Activities
          </p>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-buttonMain max-md:text-sm font-semibold -mt-[2px]">
            See all
          </p>
          <ICONS.EllipsisVertical stroke="#000000" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 mt-3">
        <div className="flex items-start gap-3 border-b border-[#DBDBDB] pb-3 w-full">
          <div className="relative w-8 h-8">
            <Image
              src="/recent/recent1.jpeg"
              alt="mentor"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="">
            <p className="text-[#011627] text-sm font-bold">KYC Verification</p>
            <p className="text-[#707991] text-[12px]">
              45 new persons just signed up on Mently.
            </p>
            <p className="text-[#707991] text-[12px] font-[300]">
              25 minutes Ago
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 border-b border-[#DBDBDB] pb-3 w-full">
          <div className="relative w-8 h-8">
            <Image
              src="/recent/recent2.png"
              alt="mentor"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="">
            <p className="text-[#011627] text-sm font-bold">
              New User Sign Up!
            </p>
            <p className="text-[#707991] text-[12px]">
              45 new persons just signed up on Mently.
            </p>
            <p className="text-[#707991] text-[12px] font-[300]">
              25 minutes Ago
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 pb-3 w-full">
          <div className="relative w-8 h-8">
            <Image
              src="/applications/Adeati.jpeg"
              alt="mentor"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="">
            <p className="text-[#011627] text-sm font-bold">
              Withdrawal Request
            </p>
            <p className="text-[#707991] text-[12px]">
              Mardian requested a withdrawal.
            </p>
            <p className="text-[#707991] text-[12px] font-[300]">
              25 minutes Ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
