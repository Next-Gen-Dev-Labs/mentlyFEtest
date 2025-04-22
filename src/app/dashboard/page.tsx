"use client";
import { Alert } from "@/components/Alert";
import { Checkbox } from "@/components/CheckBox";
import { Editor } from "@/components/Editor";
import MentorshipCard from "@/components/MentorshipCard";
import { Navbar } from "@/components/SideBar";
import { ContentSection } from "@/components/ContentSection";
import { MainLayout } from "@/layouts/main";
import {
  IconBriefcase,
  IconCalendarWeek,
  IconCaretDown,
  IconCaretDownFilled,
  IconCertificate,
  IconChevronLeft,
  IconChevronUp,
  IconCircleDashedLetterT,
  IconCopy,
  IconDotsVertical,
  IconInfoCircle,
  IconMapPin,
  IconPhonePlus,
  IconPlus,
  IconSend,
  IconSettings,
  IconUserPentagon,
  IconUsersGroup,
} from "@tabler/icons-react";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  {
    /* <IconArrowLeft /> */
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="p-4 w-full md:w-1/2">
          <div className="flex justify-between">
            <p className="text-yellow-500 flex gap-1 items-center">
              <IconChevronLeft size={20} />
              <span className="text-base">Back to home</span>
            </p>
            <div className="flex gap-2 items-center">
              <IconSettings size={25} className="text-neutral-400" />
              <IconCopy size={25} className="text-neutral-400" />
              <button className="bg-primary rounded-3xl py-1 px-2 text-white flex gap-2 text-sm">
                <IconSend size={20} />
                Share
              </button>
            </div>
          </div>
          <div className="">
            <div className="text-primary text-xl font-bold">
              Program Information
            </div>
          </div>
          {/* INPUT */}
          <div className="">
            <p className="">Describe Section Title</p>
            <div className="relative">
              {" "}
              <input
                type="text"
                className={classNames(
                  "w-full py-3 pl-10 pr-10 border border-gray-300 rounded-md ",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500",
                  "placeholder:text-neutral-400 placeholder:font-semibold"
                )}
                placeholder={
                  "Describe Section Title eg What you stand to learn"
                }
              />
            </div>
          </div>
          <Alert
            message="Provide your prefered title for this section i.e What's in this
              Program for you?"
          />
          <div className="">
            <Editor />
          </div>
          <Alert message="Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.." />
          <div className="border border-neutral-500 rounded-lg flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex gap-1">
              <IconPlus size={20} />
              <p className="text-neutral-500 text-base font-semibold">
                Add new sections
              </p>
            </div>
            <div className="text-sm text-center text-neutral-400 italic">
              (Maximum number of sections to add is 3)
            </div>
          </div>
          <div className="mt-4">
            <Checkbox label="Show this section when Published " />
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <div className="rounded-md border border-neutral-200 border-solid bg-neutral-200 p-3 flex justify-between">
              <p className="text-primary text-lg">Program Information Text 1</p>
              <div className="flex gap-3">
                <IconChevronUp size={25} />
                <IconDotsVertical size={25} />
              </div>
            </div>
            <div className="rounded-md border border-neutral-200 border-solid bg-neutral-200 p-3 flex justify-between">
              <p className="text-primary text-lg">Program Information Text 2</p>
              <div className="flex gap-3">
                <IconChevronUp size={25} />
                <IconDotsVertical size={25} />
              </div>
            </div>
          </div>

          <div className="flex gap-6 justify-end mt-4">
            <button className="text-gray-500 hover:text-gray-700 font-semibold">
              Go Back
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md inline-flex items-center">
              Save & Proceed
              <IconCaretDown size={25} />
            </button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="p-4 w-full md:w-1/2">
          <div className="flex justify-end">
            <p className="">
              13th February 2024, 12:15PM <span className="">(Local Time)</span>
            </p>
          </div>

          <div className="text-2xl font-bold">Mentorship Program</div>
          <div className="">
            <MentorshipCard />
          </div>
          <ContentSection />
        </div>
      </div>
    </div>
  );
}
