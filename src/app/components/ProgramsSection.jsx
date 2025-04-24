"use client";
// components/ProgramsSection.jsx

import React from "react";
import { Menu, MoreHorizontal, MoreVertical } from "lucide-react";
import ProgramCard from "./ProgramCard";
import programs_img_1 from "../../../public/programs_1.jpg";
import programs_img_2 from "../../../public/programs_2.jpg";
import Dropdown from "./DropDown";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Fundamentals of User Interface & Experience",
      description:
        "This program is hands-on guide designed for designers who want to master user interface and dashboards apps for their designs. The practical approach.",
      status: "Bootcamp",
      category: "Precious",
      categoryColor: "pink-500",
      circleColor: "#0077FF",
      bgColor: "#D4E0F3",
      textColor: "#0077FF",
      mentors: [1, 2, 3],
      imageSrc: programs_img_1,
    },
    {
      title: "Colour Hack Practical Group Call",
      description:
        "This program is hands-on guide designed for designers who want to master user interface and dashboards apps for their designs. The practical approach.",
      status: "Group Call",
      category: "Ongoing",
      categoryColor: "blue-500",
      circleColor: "#008000",
      bgColor: "#D4F3D4",
      textColor: "#008000",
      mentors: [1],
      imageSrc: programs_img_2,
    },
    {
      title: "Colour Hack Practical Group Call",
      description:
        "This program is hands-on guide designed for designers who want to master user interface and dashboards apps for their designs. The practical approach.",
      status: "Group Call",
      category: "Ongoing",
      circleColor: "#008000",
      bgColor: "#D4F3D4",
      textColor: "#008000",
      categoryColor: "blue-500",
      mentors: [1],
      imageSrc: programs_img_2,
    },
  ];

  return (
    <div className="">
      <div className="flex  items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            <div className="">
              <Menu size={20} />
            </div>
          </div>
          <h2 className="text-lg text-[#B0B0B0] font-[700]">Programs</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xs text-[#6F01D0] text-[12px] font-[600]">
            See all
          </button>
          <button className="text-gray-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1  gap-4">
        <div className="flex items-center w-fit ml-auto justify-end mb-2">
        <Dropdown
          label="Filter:"
          options={["Active", "Inactive", "All"]}
          defaultValue="Active"
          onChange={(value) => console.log(`Selected: ${value}`)}
        />
        </div>
        
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
}
