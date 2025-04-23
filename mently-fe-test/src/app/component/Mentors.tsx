import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import Image from "next/image";
import React from "react";

const Mentors = () => {
  return (
    <div className="bg-[#FFF] rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <ICONS.Menu stroke="#000000" width={20} height={20} />
          <p className="text-[#B0B0B0] max-md:text-sm font-bold -mt-[2px]">
            Mentors
          </p>
        </div>
        <div className="flex items-start gap-3">
          <ICONS.PlusCircle />
          <ICONS.EllipsisVertical stroke="#000000" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 mt-3">
        <div className="flex items-center justify-between gap-3 border-b border-[#DBDBDB] pb-3 w-full">
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
              <p className="text-[#4F4F4F] text-sm font-bold">Maxwell Smith</p>
              <p className="text-[#7D8DA6] text-[10px]">Product Designer</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <Button className="!text-[12px] px-4 py-1 rounded-4xl">
              Message
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 border-b border-[#DBDBDB] pb-3 w-full">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/applications/Adeati.jpeg"
                alt="mentor"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="">
              <p className="text-[#4F4F4F] text-sm font-bold">Adeati Samuel</p>
              <p className="text-[#7D8DA6] text-[10px]">Product Designer</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <Button className="!text-[12px] px-4 py-1 rounded-4xl">
              Message
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="outlined"
        className="!text-[14px] w-full bg-[#DDD6FB] text-[#6F01D0] rounded-4xl mt-6 font-semibold border-none outline-none py-2"
      >
        See All
      </Button>
    </div>
  );
};

export default Mentors;
