import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import Image from "next/image";
import React from "react";
import { IProgram } from "../constant";
import { Thumbnails } from "./Thumbnail";

const ProgramCard = ({ program }: { program: IProgram }) => {
  return (
    <div>
      <div className="shadow-md rounded-lg p-4 mt-4 w-full">
        <div className="relative w-full lg:h-[70px] h-[100px]">
          <Image
            src={program.background}
            alt="program"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg px-3 py-[4px] flex flex-col justify-between">
            <div className="flex items-start justify-between max-lg:gap-10">
              <p className="text-white text-base font-bold leading-5">
                {program.title}
              </p>
              <ICONS.Settings />
            </div>
            <div
              className="rounded-2xl w-fit px-4 flex items-center gap-2 mt-1"
              style={{ backgroundColor: program.badgeBg }}
            >
              <div
                className="rounded-full w-2 h-2"
                style={{ backgroundColor: program.badgeColor }}
              />
              <p
                className={`text-[${program.badgeColor}] text-[10px] font-bold`}
                style={{ color: program.badgeColor }}
              >
                {program.badge}
              </p>
            </div>
          </div>
        </div>
        <p className="text-[#000000] text-xs mt-2 w-full">
          {program.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thumbnails program={program} />
            <p className="text-[#6C6C6C] text-[10px] font-semibold">
              {program.hostedBy}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={program.actions[0].variant}
              className="!text-[10px] rounded px-2"
            >
              {program.actions[0].label}
            </Button>
            <Button
              variant={program.actions[1].variant}
              className="!text-[10px] rounded px-2"
            >
              {program.actions[1].label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
