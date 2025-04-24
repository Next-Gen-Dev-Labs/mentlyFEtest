"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, MoreVertical } from "lucide-react";

const programs = [
  {
    id: 1,
    image: "/images/programsbg.jpg",
    title: "Fundamentals of User interface & Experience",
    subtitle:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      status: "ongoing",
    mentors: [
      "/images/woman2.png",
      "/images/woman.png",
      "/images/man.png",
    ],
    mentorsText: "Mentors",
  },
  {
    id: 2,
    image: "/images/programsbg2.jpg",
    title: "Colour Hack Practical Group Call",
    subtitle:
      "This program is a hands-on guide designed for designers who want to master UI/UX fundamentals and confidently apply them to real-world projects.",
      status: "ongoing",
    mentors: [
      "/images/man2.png",
     
    ],
    mentorsText: "Hosted By: Faith Okolo",
  },
  {
    id: 3,
    image: "/images/programsbg2.jpg",
    title: "Colour Hack Practical Group Call",
    subtitle:
      "This program is a hands-on guide designed for designers who want to master UI/UX fundamentals and confidently apply them to real-world projects.",
      status: "ongoing",
    mentors: [
      "/images/man2.png",
 
    ],
    mentorsText: "Hosted By: Self",
  },
];

export function ProgramsSection() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-between">
        <Menu className="h-5 w-5 text-gray-700" />
        <h2 className="text-xl font-semi-bold text-gray-900">Programs</h2>
        </div>
        <div className="flex items-center justify-between">
        <span className="text-purple-700 font-medium cursor-pointer text-sm">
          See all
        </span>
        <MoreVertical className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Filter + Active Dropdown */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <span className="text-sm text-gray-500">Filter</span>
        <button className="text-sm border border-gray-300 px-3 py-1 rounded-md flex items-center gap-1">
          Active <span className="text-xs">▾</span>
        </button>
      </div>

      {/* Program Cards */}
      <div className="flex flex-col gap-4">
        {programs.map((program) => (
          <Card
            key={program.id}
            className="w-full max-w-xl bg-white rounded-2xl shadow-md"
          >
            <CardContent className="p-4 space-y-3">
              {/* Image section */}
              <div
                className="relative bg-cover bg-center h-28 w-full p-3 rounded-xl"
                style={{ backgroundImage: `url(${program.image})` }}
              >
            
                <div className="absolute inset-0 bg-black/40 z-10 rounded-xl" />
                <div className="relative z-20 items-center justify-center h-full">
                  <h1 className="text-white text-lg font-bold text-center">
                    {program.title}
                  </h1>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
              {program.status}
            </span>
                </div>
               
              </div>

              {/* Subtitle */}
              <p className="text-sm text-gray-700">{program.subtitle}</p>
              
              {/* Mentors & Buttons Row */}
              <div className="flex justify-between items-center">
                {/* Mentors section */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {program.mentors.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="mentor"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">{program.mentorsText}</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="text-xs border border-purple-700 text-purple-700 px-3 py-1"
                  >
                    View Details
                  </Button>
                  <Button className="bg-purple-700 text-white text-xs px-3 py-1 hover:bg-[#6F01D04D]">
                    Analysis
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
