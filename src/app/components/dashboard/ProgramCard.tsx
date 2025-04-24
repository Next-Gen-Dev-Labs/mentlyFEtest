"use client";

import { Program } from "@/app/types";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProgramCard({
  program,
  viewmode = "grid",
}: {
  program: Program;
  viewmode: "grid" | "list";
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 },
    },
  };

  const getBadgeColor = (type?: string) => {
    switch (type) {
      case "bootcamp":
        return "bg-blue-100 text-blue-600";
      case "group-call":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  const getDotColor = (type?: string) => {
    switch (type) {
      case "bootcamp":
        return "bg-blue-600";
      case "group-call":
        return "bg-green-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`flex w-full gap-4 ${
        viewmode === "list" ? "md:flex-row" : "flex-col"
      } h-full p-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <div
        className={`${
          viewmode === "list" ? "md:min-h-50" : ""
        } w-full relative rounded-md p-4 flex items-start justify-between overflow-hidden h-full`}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${program.image}) center/cover no-repeat`,
        }}
      >
        <div
          className={`${
            viewmode === "list" ? "h-50" : ""
          }relative z-10 flex flex-col items-start justify-between h-full`}
        >
          <h3 className="font-semibold text-lg text-white mb-1">
            {program.title}
          </h3>
          <span
            className={` flex text-xs px-4 py-1 rounded-full font-bold w-fit items-center gap-[6px] ${getBadgeColor(
              program.type
            )}`}
          >
            <span
              className={`rounded-full h-[8.11px] w-[8.11px] block ${getDotColor(
                program.type
              )}`}
            ></span>
            <span>
              {program.type === "bootcamp" ? "Bootcamp" : "Group Call"}
            </span>
          </span>
        </div>

        {program.icon && (
          <button
            className="relative z-10 text-white hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="icon"
          >
            <program.icon className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">
          {program.description}
        </p>

        <div className="w-full flex justify-between items-center mt-auto">
          <div className="flex items-center w-full ">
            {program.mentors && program.mentors.length > 0 ? (
              <div className="flex -space-x-2 mr-2 flex-wrap items-center w-full">
                <div className="flex -space-x-2 mr-2 flex-wrap">
                  {program.mentors.slice(0, 3).map((mentor, idx) => (
                    <div
                      key={mentor.id}
                      className="w-7 h-7 rounded-full overflow-hidden"
                      style={{ zIndex: 3 + idx }}
                    >
                      <Image
                        src={
                          mentor.avatar ||
                          `https://ui-avatars.com/api/?name=${mentor.name}`
                        }
                        alt={mentor.name}
                        loading="lazy"
                        className="w-7 h-7 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${mentor.name}`;
                        }}
                      />
                    </div>
                  ))}
                  {program.mentors.length > 3 && (
                    <div
                      className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                      style={{ zIndex: 0 }}
                    >
                      +{program.mentors.length - 3}
                    </div>
                  )}
                </div>
                <span className="text-xs text-gray-600 align-base">
                  Mentors
                </span>
              </div>
            ) : program.host ? (
              <div className="flex items-center flex-wrap">
                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden mr-2">
                  <Image
                    src={
                      program.host.avatar ||
                      `https://ui-avatars.com/api/?name=${program.host.name}`
                    }
                    alt={program.host.name}
                    loading="lazy"
                    className="w-7 h-7 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${program.host?.name}`;
                    }}
                  />
                </div>
                <span className="text-xs text-gray-600">Hosted By:&nbsp;</span>
                <span className="text-xs text-gray-600">
                  {program.host.name}
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex w-full gap-2 justify-end flex-wrap items-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-3 py-1.5 text-xs font-medium text-[#6F01D0] border border-[#6F01D0] rounded-[2.63px] hover:bg-purple-50 transition-colors"
            >
              View Details
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#6F01D0] rounded-[2.63px] hover:bg-purple-700 transition-colors"
            >
              Analysis
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
