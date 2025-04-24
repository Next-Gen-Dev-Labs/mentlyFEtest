"use client";
import Image from "next/image";
import { memo } from "react";

// Using memo to prevent unnecessary re-renders
const ProgramCard = memo(function ProgramCard({ program }) {
  return (
    <div className="">
      <div className="relative h-28">
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
            {/* Overlay */}
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
          </div>
        )}
      </div>

      {/* program footer */}
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
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">
                        Hosted By: {program.host.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center relative">
                        <Image
                          src={program.host.avatar}
                          alt={`${program.host.name} avatar`}
                          className="rounded-full object-cover"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right side  */}
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
