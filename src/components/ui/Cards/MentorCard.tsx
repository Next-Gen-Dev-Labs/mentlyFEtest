import {
  ApplicationTypeMentor,
  ApplicationTypeStudent,
  MentorType,
} from "@/types/data";
import Image from "next/image";
import React from "react";

const MentorCard = ({ mentor }: { mentor: MentorType }) => {
  return (
    <div className="flex w-full flex-col border-b border-b-[#DBDBDB] py-3">
      <div className="flex w-full items-center gap-2">
        <Image
          src={mentor.image}
          className="w-8 h-8 rounded-full"
          width={100}
          height={100}
          alt=""
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[#4F4F4F] font-bold text-sm">{mentor.name}</h1>
          <p className="text-[10px] text-[#7D8DA6]">{mentor.role}</p>
        </div>
        <div className="flex gap-1 items-center h-[22px] ml-auto">
          <button className="border-[0.6px] border-[#6F01D0] flex justify-center items-center w-[78px] bg-[#6F01D0] text-[#F1EEFF] text-xs font-medium rounded-2xl h-full">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
