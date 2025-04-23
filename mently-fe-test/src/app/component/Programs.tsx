"use client";

import { ICONS } from "@/assets";
import Select from "@/ui-component/Select";
import React, { useState } from "react";
import { DummyPrograms } from "../constant";
import ProgramCard from "./ProgramCard";

const Programs = () => {
  const [filter, setFilter] = useState("Inactive");
  return (
    <div className="bg-white rounded-lg p-4 max-h-[600px] overflow-y-auto hide-scrollbar">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <ICONS.Menu stroke="#000000" width={20} height={20} />
          <p className="text-[#B0B0B0] max-md:text-sm font-bold -mt-[2px]">
            Programs
          </p>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-buttonMain max-md:text-sm font-semibold -mt-[2px]">
            See all
          </p>
          <ICONS.EllipsisVertical stroke="#000000" width={20} height={20} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-4">
        <p className="text-xs text-[#918C9C] font-medium">Filter</p>
        <Select
          options={["Inactive", "Active"]}
          setState={setFilter}
          label=""
          value={filter}
          optionsItemClass="!bg-[#FFF] hover:text-primary"
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {DummyPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* <div className="shadow-md rounded-lg p-4 mt-4 w-full">
        <div className="relative w-full h-[70px]">
          <Image
            src="/programs/colourhack.jpeg"
            alt="program"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg px-3 py-[4px]">
            <div className="flex items-start justify-between">
              <p className="text-white text-base font-bold w-3/4 leading-5">
                Colour Hack Practical Group Call
              </p>
              <ICONS.Settings />
            </div>
            <div className="bg-[#D4F3D4] rounded-2xl w-fit px-4 flex items-center gap-2 mt-1">
              <div className="bg-[#008000] rounded-full w-2 h-2" />
              <p className="text-[#008000] text-[10px] font-bold">Group Call</p>
            </div>
          </div>
        </div>
        <p className="text-[#000000] text-xs mt-2 w-full">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approach
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[#6C6C6C] text-[10px] font-semibold">Mentors</p>
          <div className="flex items-center gap-2">
            <Button variant="outlined" className="!text-[10px] rounded px-2">
              View Details
            </Button>
            <Button className="!text-[10px] rounded px-2">Analysis</Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Programs;
