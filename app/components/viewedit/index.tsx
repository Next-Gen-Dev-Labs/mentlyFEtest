"use client";
import hooks from "@/app/utils/hooks";
import React from "react";
import bannerTemplate from "@/app/assets/images/BannerTemplate.png";
import Image from "next/image";
import BriefcaseIcon from "@/app/assets/icons/BriefcaseIcon";
import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import LocationIcon from "@/app/assets/icons/LocationIcon";
import ProgramInfoTextCard from "./ProgramInfoTextCard";
import { programItemIcons } from "@/app/utils/constants";

const ViewEdit = () => {
  const { currentTime } = hooks.useCurrentTime();
  return (
    <div className="lg:w-[56.6%] w-full flex flex-col">
      <span className="ml-auto mt-10 mr-3.5 text-dateTimeText">
        {currentTime} <small className="text-xs">(Local time)</small>
      </span>
      <div className="w-full flex flex-col border border-greyBorder/50 mt-10 gap-4 px-3.5 py-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-[900] text-32px text-midnightPurple">
            Mentorship Program
          </h1>
          <Image
            src={bannerTemplate}
            alt={""}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <p className="lg:w-[47%] w-full text-gray-500">
            UI/UX Design check ins with faith is a way for beginners in UI/UX
            Design to get started about the fundamentals and how they can build
            a Design Career, share, document their progress on a weekly basis.
          </p>

          <div className="lg:w-[53%] w-full shadow-programInfoShadow p-8">
            <ul className="flex flex-col gap-5">
              <li className="flex items-center text-slateLavendar text-sm font-bold">
                <BriefcaseIcon className="mr-10" /> Mentorship Program
              </li>
              <li className="flex items-center text-slateLavendar text-sm font-bold">
                <CalendarIcon className="mr-10" /> 21/4/2024-21/5/2024
              </li>
              <li className="flex items-center text-slateLavendar text-sm font-bold">
                <LocationIcon className="mr-10" /> In Person
              </li>
            </ul>
          </div>
        </div>
        <ProgramInfoTextCard
          title={"Program Information Text"}
          content={
            <ul className="flex flex-wrap gap-y-8">
              {programItemIcons.map((item, index) => (
                <li key={index} className="w-1/2 gap-2 flex items-center">
                  <span className="w-8 aspect-square rounded-full flex items-center justify-center bg-iconWrapperBg">
                    {item}
                  </span>
                  <span className="text-gray-700">Content</span>
                </li>
              ))}
            </ul>
          }
        />
        <ProgramInfoTextCard
          title={"Program Information Text 2"}
          content={
            <ul className="list-disc list-inside ">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className="text-gray-600 font-semibold">
                  Content
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default ViewEdit;
