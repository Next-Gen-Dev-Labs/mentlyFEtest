"use client";
import Image from "next/image";
import { memo } from "react";

// Using memo to prevent unnecessary re-renders
const ProgramCard = memo(function ProgramCard({ program }) {
  return (
    <div className="">
      <div className="relative h-24">
        {program.title && (
          <div className="relative w-full h-full">
            <Image
              src={program.image}
              alt="Program image"
              className="rounded-t-lg"
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            {/* Overlay with absolute positioning */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40 bg-opacity-50 z-10">
              <div className="absolute top-3 left-4">
                <h3 className="text-white text-xl font-bold">
                  {program.title}
                </h3>
              </div>
            </div>
            {program.type && (
              <div className="absolute bottom-3 left-4 flex items-center">
                <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full flex items-center">
                  {program.type === "Bootcamp" && (
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  )}
                  {program.type === "Group Call" && (
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  )}
                  <span>{program.type}</span>
                </div>
              </div>
            )}
            {/* Settings icon */}
            {/* {program.highlighted && (
              <div className="absolute top-3 right-3">
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.755 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            )} */}
          </div>
        )}
      </div>

      {/* Updated footer section */}
      <div className="p-4">
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {program.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left side - Mentors/Host info with label on top */}
          <div className="flex flex-col space-y-2">
            {program.mentors && program.mentors.length > 0 && (
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 mb-1">
                  {program.mentorsLabel}
                </span>
                <div className="flex -space-x-2">
                  {program.mentors.map((mentor, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-300 border border-white overflow-hidden relative"
                    >
                      <Image
                        src={mentor}
                        alt={`Mentor ${i + 1}`}
                        className="rounded-full object-cover"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {program.host && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col space-y-2">
                  {program.host.avatar && (
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-1">
                        Hosted By: {program.host.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden relative">
                        <Image
                          src={program.host.avatar}
                          alt={`${program.host.name} avatar`}
                          className="rounded-full object-cover"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right side - Action buttons with improved alignment */}
          <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
            {program.actions?.map((action, i) => (
              <button
                key={i}
                className={`
                  whitespace-nowrap px-3 py-1.5 text-sm rounded-md font-medium 
                  transition-colors duration-200
                  ${
                    action === "View Details"
                      ? "border border-purple-600 text-purple-600 hover:bg-purple-50"
                      : ""
                  }
                  ${
                    action === "Analysis"
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : ""
                  }
                  ${
                    action === "Assign Mentor"
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : ""
                  }
                `}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProgramCard;
