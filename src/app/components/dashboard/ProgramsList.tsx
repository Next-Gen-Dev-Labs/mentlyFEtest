"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { IoChevronDown, IoSettingsOutline } from "react-icons/io5";
import { Program } from "@/app/types";
import { BiDotsVertical } from "react-icons/bi";
import Menu from "../../../../public/images/icons/programMenu.svg";
import Image from "next/image";
import Mentor1 from "../../../../public/images/images/mentor1.png";
import Mentor2 from "../../../../public/images/images/mentor2.png";
import Mentor3 from "../../../../public/images/images/maxwell.png";
import Host from "../../../../public/images/images/host.png";

export default function ProgramsList({
  viewmode,
}: {
  viewmode: "grid" | "list";
}) {
  const [activeFilter, setActiveFilter] = useState("Active");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      status: "active",
      type: "bootcamp",
      icon: IoSettingsOutline,
      image: "/images/images/program1.jpg",
      mentors: [
        { id: 1, name: "Mentor 1", avatar: Mentor1 },
        { id: 2, name: "Mentor 2", avatar: Mentor2 },
        { id: 3, name: "Mentor 3", avatar: Mentor3 },
      ],
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      status: "active",
      type: "group-call",
      image: "/images/images/program2.jpg",
      host: {
        id: 4,
        name: "Faith Obolo",
        avatar: Host,
      },
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      status: "active",
      type: "group-call",
      image: "/images/images/program2.jpg",
      host: {
        id: 5,
        name: "Sol",
        avatar: Host,
      },
    },
    {
      id: 4,
      title: "Fundamentals of User Interface & Experience",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      status: "active",
      type: "bootcamp",
      icon: IoSettingsOutline,
      image: "/images/images/program1.jpg",
      mentors: [
        { id: 1, name: "Mentor 1", avatar: Mentor1 },
        { id: 2, name: "Mentor 2", avatar: Mentor2 },
        { id: 3, name: "Mentor 3", avatar: Mentor3 },
      ],
    },
    {
      id: 5,
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      status: "active",
      type: "group-call",
      image: "/images/images/program2.jpg",
      host: {
        id: 4,
        name: "Faith Obolo",
        avatar: Host,
      },
    },
  ];

  const filteredPrograms = programs.filter(
    (program) =>
      activeFilter.toLowerCase() === "all" ||
      program.status === activeFilter.toLowerCase()
  );

  const filters = ["Active", "Completed", "Upcoming", "All"];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full mx-auto bg-white p-4 sm:p-6 rounded-lg bg-white h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Image src={Menu} alt="programs" className="h-5 w-5" />

          <h2 className="text-xl font-bold text-[#B0B0B0]">Programs</h2>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#6F01D0] text-sm font-bold transition-colors"
          >
            See all
          </a>
          <BiDotsVertical className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center mb-6 justify-end">
        <span className="text-sm text-gray-500 mr-3">Filter</span>
        <div className="relative" ref={filterRef}>
          <div
            className="flex items-center justify-between min-w-[100px] border border-gray-300 rounded-md py-2 px-3 text-sm cursor-pointer"
            onClick={toggleFilter}
            aria-expanded={isFilterOpen}
            aria-haspopup="listbox"
            role="button"
            tabIndex={0}
          >
            <span>{activeFilter}</span>
            <IoChevronDown className="h-4 w-4 ml-2 text-gray-500" />
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                role="listbox"
              >
                {filters.map((filter) => (
                  <div
                    key={filter}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      filter === activeFilter
                        ? "bg-purple-50 text-[#6F01D0] font-bold"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveFilter(filter);
                      setIsFilterOpen(false);
                    }}
                    role="option"
                    aria-selected={filter === activeFilter}
                  >
                    {filter}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div
        className={`${
          filteredPrograms.length > 3
            ? "max-h-[725px] overflow-y-auto pr-2 scrollbar-hide"
            : ""
        }`}
      >
        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              viewmode={viewmode}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
