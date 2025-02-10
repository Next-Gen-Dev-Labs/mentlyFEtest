"use client";
import IconShare from "@/assets/IconComponents/IconShare";
import IconText from "@/assets/IconComponents/IconText";
import { collapseData } from "@/shared/data";
import {
  CheckBox,
  CollapseItem,
  HeaderText,
  IconWithDropdown,
  InfoBox,
  Modal,
} from "@/shared/UIs/ReusedComponents";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import { IoCopyOutline, IoSettingsOutline } from "react-icons/io5";
import usePrograms from "./usePrograms";
import TextEditor from "./TextEditor";
import MentorProgram from "./MentorProgram";
import { useScreenSize } from "@/shared/hooks/useSceenSize";

const ProgramInformation = () => {
  const { expandedId, handleItemClick, isModalOpen, setIsModalOpen } =
    usePrograms();
  const isMobile = useScreenSize();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Preview Program Info"
      >
        <div className="max-h-[30rem] overflow-y-auto">
          <MentorProgram />
        </div>
      </Modal>

      <div className="p-5 bg-[#FDFDFD] drop-shadow-sm min-h-[calc(100vh-4rem)] flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link href="#">
              <div className="flex gap-3 text-[#F0C074]">
                <span>{"<"}</span>
                <span> Back to Home</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-6 items-center">
            <IconWithDropdown
              icon={<IoSettingsOutline size={24} color="#C2C2C2" />}
              items={[
                {
                  label: "Delete",
                },
                {
                  label: "Clear",
                },
              ]}
            />
            <IoCopyOutline size={24} color="#C2C2C2" />
            <div className="flex gap-2 items-center bg-mentlyBlue text-white cursor-pointer py-1 px-4 rounded-[1rem]">
              <IconShare />
              <span className="text-[0.9rem]">Share</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <HeaderText text="Program Information" />
          <p className="text-sm font-[400] text-[#828282]">
            Describe Section Title
          </p>
        </div>
        <div className="flex gap-3 items-center p-3 border border-mentlyBlue rounded-[0.4rem] justify-center">
          <div className="flex items-center gap-1">
            <IconText />
            <IoMdArrowDropdown size={30} />
          </div>
          <span className="text-sm font-[300] text-[#828282]">
            Describe Section Title e.g What you stand to learn
          </span>
        </div>
        <InfoBox message="Provide your preferred title for this section i.e What's in this Program for you?" />
        <TextEditor />
        <InfoBox message="Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.." />

        <div className="flex flex-col gap-1 items-center p-3 border border-mentlyBlue rounded-[0.4rem] justify-center hover:bg-gray-100 cursor-pointer transition-colors duration-200 ease-in-out">
          <div className="flex items-center gap-5 ">
            <FaPlus size={12} />
            <span> Add new section</span>
          </div>
          <span className="text-[0.8rem] italic font-[500] text-[#828282]">
            (maximum number of sections to add is 3)
          </span>
        </div>
        <CheckBox label="Show this section when Published" />
        <div>
          {collapseData.map((item) => (
            <CollapseItem
              key={item.id}
              id={item.id}
              label={item.label}
              isExpanded={expandedId === item.id}
              onClick={handleItemClick}
            >
              {item.children}
            </CollapseItem>
          ))}
        </div>
        <div className="flex items-center justify-end gap-[5rem] mt-5">
          <span className="text-[#A4A5B8] cursor-pointer">Go Back</span>
          <div
            className="flex gap-2 items-center bg-mentlyBlue justify-center text-white cursor-pointer py-[1rem] px-4 rounded-[0.5rem]"
            onClick={() => {
              if (!isMobile) {
                setIsModalOpen(true);
              }
            }}
          >
            <span className="text-[0.9rem]">Save & Proceed</span>
            <IoMdArrowDropdown size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramInformation;
