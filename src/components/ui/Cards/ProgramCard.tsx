import { ProgramType } from "@/types/data";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const ProgramCard = ({ program }: { program: ProgramType }) => {
  return (
    <div className="w-full bg-white shadow-xl p-[13px] rounded-[10px]">
      <div className="w-full h-[74px] relative rounded-md">
        <Image
          src={program.background}
          alt=""
          width={100}
          height={100}
          className="absolute w-full h-full rounded-md top-0 left-0 object-cover"
        />
        <div className="bg-black absolute top-0 w-full h-full opacity-70 rounded-md left-0"></div>
        <div className="absolute w-full h-full top-0 left-0 space-y-1 z-10 px-2 py-1">
          <h1 className="font-bold text-white w-[200px] leading-tight">
            {program.title}
          </h1>
          <div className="flex justify-start">
            <div
              className={`flex justify-center h-[18px] font-bold gap-[2px] text-[7px] items-center rounded-[15px] py-[1.5px] pr-2.5 pl-2.5 ${
                program.program == "Group Call"
                  ? "bg-[#D4F3D4] text-[#1F8B01]"
                  : "bg-[#E0DDFF] text-[#1C0AE1]"
              }`}
            >
              <GoDotFill size={16} />
              {program.program}
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] tetx-[#A3A3A3] mt-1 tracking-[-2%]">
        {program.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="text-[8.2px] text-[#4F4F4F] flex capitalize items-center">
          <div className="flex w-10 items-center relative h-full">
            <Image
              src={"/images/mentors/mentor-one.svg"}
              className="w-full h-10 absolute -left-2"
              width={14}
              height={14}
              alt="study group"
            />
            <Image
              src={"/images/mentors/mentor-two.svg"}
              className="w-full absolute left-0"
              width={14}
              height={14}
              alt="study group"
            />
            <Image
              src={"/images/mentors/mentor-three.svg"}
              className="w-full absolute  left-1"
              width={14}
              height={14}
              alt="study group"
            />
          </div>
          {program.hostedBy !== "mentors"
            ? `Hosted By: ${program.hostedBy}`
            : `${program.hostedBy}`}
        </div>

        <div className="flex items-center h-[22px] gap-2">
          <button className="text-[#6F01D0] cursor-pointer border-[#6F01D0] border h-full px-4 rounded-xs text-[8px] font-medium">
            View Details
          </button>
          <button
            className={`bg-[#6F01D0] flex items-center cursor-pointer gap-2 border-[#6F01D0] text-white border h-full w-[66px] text-center justify-center rounded-xs text-[8px] font-medium`}
          >
            {program.hostedBy !== "self" ? "Analysis" : "Assign Mentor"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
