import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import Checkbox from "@/ui-component/Checkbox";
import Image from "next/image";
import React from "react";
import { StudentsApplication } from "../constant";

const Application = () => {
  return (
    <div className="bg-[#FFF] rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <ICONS.Menu stroke="#000000" width={20} height={20} />
          <p className="text-[#B0B0B0] max-md:text-sm font-bold -mt-[2px]">
            Applications
          </p>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-buttonMain max-md:text-sm font-semibold -mt-[2px]">
            See all
          </p>
          <ICONS.EllipsisVertical stroke="#000000" width={20} height={20} />
        </div>
      </div>
      <div className="my-8 border-b border-[#DBDBDB] pb-4">
        <p className="text-[10px] text-[#7D8DA6] ml-6 mb-8">Mentors</p>
        <div className="flex sm:flex-row flex-col max-sm:items-start items-center justify-between gap-3 mt-3">
          <div className="flex items-center gap-3">
            <Checkbox className="w-4 h-4" />
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/programs/mentor3.png"
                  alt="mentor"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-sm font-bold">
                  Maxwell Smith
                </p>
                <p className="text-[#7D8DA6] text-[10px]">
                  maxwellsmith@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-2 max-sm:ml-6">
            <Button className="bg-[#FFEDED] text-[#D83535] border-[#D09696] !text-[10px] px-5 py-[6px] hover:bg-[#D83535] hover:text-[#FFF]">
              Reject
            </Button>
            <Button className="!text-[10px] px-5 py-[6px]">
              Accept
            </Button>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col max-sm:items-start items-center justify-center max-md:justify-start my-2 gap-2 max-md:mt-4 max-sm:ml-6">
          <div className="bg-[#F3ECF9] text-[#9985A7] border border-[#DDCEEE] w-fit rounded text-[8px] px-2 py-[2px]">
            Product Designer
          </div>
          <div className="bg-[#E8FDFB] text-[#58948E] border border-[#A1BDBA] w-fit rounded text-[8px] px-2 py-[2px]">
            4years Experience
          </div>
          <div className="bg-[#E3ECF9] text-[#8196B5] border border-[#ABBEE0] w-fit rounded text-[8px] px-2 py-[2px] flex items-center gap-1">
            <ICONS.NG width={14} height={9} /> Lagos, Nigeria
          </div>
          <div className="bg-[#F4F4F4] text-[#595564] border border-[#C8C8C8] w-fit rounded text-[8px] px-2 py-[2px]">
            GMT +1
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-[10px] text-[#7D8DA6] ml-6 mb-8">Students</p>
        {StudentsApplication.map((student, index) => (
          <div
            className={`flex sm:flex-row flex-col max-sm:items-start items-center gap-3 justify-between mt-3 ${
              index < 2 ? "border-b border-[#DBDBDB]" : ""
            } pb-4`}
            key={index}
          >
            <div className="flex items-center gap-3">
              <Checkbox className="w-4 h-4" />
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image
                    src={student.img}
                    alt="mentor"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="">
                  <p className="text-[#4F4F4F] text-sm font-bold">
                    {student.name}
                  </p>
                  <p className="text-[#7D8DA6] text-[10px]">
                    {index === 2 ? <u>{student.email}</u> : student.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2 max-sm:ml-6">
              <Button className="bg-[#FFEDED] text-[#D83535] border-[#D09696] !text-[10px] px-5 py-[6px] hover:bg-[#D83535] hover:text-[#FFF]">
                Reject
              </Button>
              <Button className="!text-[10px] px-5 py-[6px]">Accept</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
