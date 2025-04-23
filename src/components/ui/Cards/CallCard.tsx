import { CallCardType } from "@/types/data";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi";

const CallCard = ({ details }: { details: CallCardType }) => {
  return (
    <div className="w-[270px] bg-[#F9F7FF] rounded-[10px] py-[16px] px-[13px] flex flex-col gap-2">
      <Image
        src={details.image}
        className="w-full rounded-[10px] h-[68px] object-cover"
        width={100}
        alt={details.group}
        height={100}
      />

      <div className="flex justify-start">
        <div
          className={`flex justify-center h-[18px] gap-1 text-[10px] items-center rounded-[15px] py-[2.5px] pr-5 pl-2.5 ${
            details.status == "Ongoing"
              ? "bg-[#2AC10033] text-[#1F8B01]"
              : "bg-[#E0DDFF] text-[#1C0AE1]"
          }`}
        >
          <GoDotFill size={16} />
          {details.status}
        </div>
      </div>
      <p className="text-[#595564] text-[17px]">{details.title}</p>
      <div className="w-full h-[0.8px] bg-[#D0D5DD]"></div>
      <div className="flex justify-between items-center">
        <p className="text-[8px] text-[#595564] font-semibold flex gap-2 items-center">
          <Image
            src={"/icons/date.svg"}
            alt="date"
            width={11}
            height={11}
            className="w-[11px] h-[11px]"
          />
          {details.date}
        </p>
        <div className="h-full w-[0.8px] bg-[#D0D5DD]"></div>
        <p className="text-[8px] text-[#595564] font-semibold flex gap-2 items-center">
          <Image
            src={"/icons/clock.svg"}
            alt="time"
            width={11}
            height={11}
            className="w-[11px] h-[11px]"
          />
          {details.time}
        </p>
      </div>
      <div className="flex justify-start gap-12 items-center">
        <div className=" flex flex-col">
          <span className="pl-4 text-[#A195C0] text-[8px]">Study Group</span>
          <div className="flex items-center gap-1">
            <Image
              src={"/icons/study-group.svg"}
              className="w-3 h-3 rounded-full object-cover"
              width={12}
              height={12}
              alt="study group"
            />
            <p className="text-[8px] text-[#595564] font-semibold">
              {details.group}
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col">
          <span className="text-[#A195C0] text-[8px]">Mentors</span>
          <div className="flex w-full items-center relative mt-2">
            <Image
              src={"/images/mentors/mentor-one.svg"}
              className="w-full absolute left-0"
              width={14}
              height={14}
              alt="study group"
            />
            <Image
              src={"/images/mentors/mentor-two.svg"}
              className="w-full absolute left-2"
              width={14}
              height={14}
              alt="study group"
            />
            <Image
              src={"/images/mentors/mentor-three.svg"}
              className="w-full absolute left-4"
              width={14}
              height={14}
              alt="study group"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-[34px] mt-2">
        <button className="text-[#6F01D0] cursor-pointer border-[#6F01D0] border h-full px-4 rounded-lg text-xs font-medium">
          View Participants
        </button>
        <button
          className={`bg-[#6F01D0] flex items-center gap-2 border-[#6F01D0] text-white border h-full px-[14px] rounded-lg text-xs font-medium ${
            details.status == "Ongoing"
              ? "opacity-100 cursor-pointer"
              : "opacity-40 cursor-not-allowed"
          }`}
        >
          Join Now
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CallCard;
