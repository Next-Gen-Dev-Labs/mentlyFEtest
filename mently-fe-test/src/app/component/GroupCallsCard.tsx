import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";
import { IGroupCall } from "../constant";
import { twMerge } from "tailwind-merge";
import { Thumbnails } from "./Thumbnail";
import Button from "@/ui-component/Button";

const GroupCallsCard = ({ groupCall }: { groupCall: IGroupCall }) => {
  return (
    <div>
      <div className="bg-[#F9F7FF] shadow-md rounded-lg p-4 mt-4 w-70">
        <div className="relative w-full lg:h-[70px] h-[100px]">
          <Image
            src={groupCall.bannerImage}
            alt="program"
            fill
            className="object-cover rounded-lg brightness-[0.65]"
          />
        </div>
        <div
          className={twMerge(
            "rounded-2xl w-fit px-2 flex items-center gap-2 mt-1",
            groupCall.status === "ongoing" ? "bg-[#D4F3D4]" : "bg-[#E0DDFF]"
          )}
        >
          <div
            className={twMerge(
              "rounded-full w-2 h-2",
              groupCall.status === "ongoing" ? "bg-[#008000]" : "bg-[#1C0AE1]"
            )}
          />
          <p
            className={twMerge(
              "text-[10px] font-normal",
              groupCall.status === "ongoing"
                ? "text-[#008000]"
                : "text-[#1C0AE1]"
            )}
          >
            {groupCall.status}
          </p>
        </div>
        <p className="max-lg:text-sm text-[#595564] mt-1">{groupCall.title}</p>
        <hr className="border border-[#D0D5DD] mt-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ICONS.Calender />
            <p className="text-[#595564] text-[10px] font-medium">
              {groupCall.date}
            </p>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <ICONS.Time />
            <p className="text-[#595564] text-[10px] font-medium">
              {groupCall.time}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-3 h-3 rounded-full">
              <Image
                src={"/group-calls/ux-strategy.jpeg"}
                alt="mentor"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-[#A195C0] text-[8px]">
                {groupCall.group.type}
              </p>
              <p className="text-[#595564] font-semibold text-[10px]">
                {groupCall.group.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-0">
              <p className="text-[#A195C0] text-[8px]">Mentors</p>
              <Thumbnails groupCalls={groupCall} imgSize="w-[12px] h-[12px]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <Button variant="outlined" className="!text-xs px-2">
            View Participants
          </Button>
          <Button
            variant="primary"
            className="!text-xs flex items-center gap-1 px-2"
            disabled={groupCall.status === "upcoming"}
          >
            Join Now
            <ICONS.ArrowRight width={16} height={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroupCallsCard;
