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
        <div className="" data-testid="programs-filter-select">
          <Select
            options={["Inactive", "Active"]}
            setState={setFilter}
            label=""
            value={filter}
            optionsItemClass="!bg-[#FFF] hover:text-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {DummyPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Programs;
