import { ApplicationTypeMentor, ApplicationTypeStudent } from "@/types/data";
import Image from "next/image";
import React from "react";

const ApplicationCard = ({
  app,
}: {
  app: ApplicationTypeMentor | ApplicationTypeStudent;
}) => {
  return (
    <div className="flex w-full flex-col border-b border-b-[#DBDBDB] py-6">
      <div className="flex w-full items-center gap-2 sm:gap-4">
        <input type="checkbox" name="" id="" />
        <Image
          src={app.image}
          className="w-8 h-8 rounded-full"
          width={100}
          height={100}
          alt=""
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[#4F4F4F] font-bold text-xs sm:text-sm">
            {app.name}
          </h1>
          <p className="text-[10px] text-[#7D8DA6] max-sm:w-28 max-sm:truncate">
            {app.email}
          </p>
        </div>
        <div className="flex gap-1 items-center h-8 ml-auto">
          <button className="border-[0.6px] border-[#D09696] flex justify-center items-center w-[66px] sm:w-[78px] bg-[#FFEDED] text-[#D83535] text-[10px] font-medium rounded-md h-full">
            Reject
          </button>
          <button className="border-[0.6px] border-[#6F01D0] flex justify-center items-center w-[66px] sm:w-[78px] bg-[#6F01D0] text-[#FFFFFF] text-[10px] font-medium rounded-md h-full">
            Accept
          </button>
        </div>
      </div>
      {"mentorDetails" in app && (
        <div className="flex gap-2 font-medium mt-2 sm:pl-6  h-5">
          <span className="bg-[#F3ECF9] border-[0.8px] border-[#DDCEEE] rounded-[5px] px-2 sm:x-2.5 h-full text-[8px] text-[#9985A7] font-medium flex items-center justify-center">
            {app.mentorDetails.role}
          </span>
          <span className="bg-[#E8FDFB] border-[0.8px] border-[##A1BDBA] rounded-[5px] px-2 sm:px-2.5 h-full text-[8px] text-[#58948E] font-medium flex items-center justify-center">
            {app.mentorDetails.experience}yrs experience
          </span>
          <span className="bg-[#E3ECF9] border-[0.8px] border-[#ABBEE0] rounded-[5px] px-2 sm:px-2.5 h-full text-[8px] text-[#8196B5] font-medium flex items-center justify-center">
            {app.mentorDetails.location}
          </span>

          <span className="bg-[#F4F4F4] border-[0.8px] border-[#C8C8C8] rounded-[5px] px-2 sm:px-2.5 h-full text-[8px] text-[#595564] font-medium flex items-center justify-center">
            {app.mentorDetails.GMT}
          </span>
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;
