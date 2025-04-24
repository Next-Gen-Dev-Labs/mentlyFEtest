import { useState } from "react";
import { programs } from "../list-items/dashboard";
import Image from "next/image";
import More from "@/assets/icons/more.svg";
import Settings from "@/assets/icons/setting.svg";
// import DownArrow from "@/assets/icons/DownArrow.svg";
import Bar from "@/assets/icons/order.svg";

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("Active");

  return (
    <div className="bg-white shadow max-h-[604px] overflow-y-auto p-4 rounded-md hidden-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bar className="mr-2" />
          <h1 className="text-base font-bold text-gray-500">Programs</h1>
        </div>

        <div className="flex items-center">
          <button className="text-purple-700 font-medium mr-4">See all</button>
          <button className="text-gray-500">
            <More />
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">Filter</span>
          <div className="relative inline-block">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="border border-gray-300 rounded-md py-1.5 px-2 bg-white text-gray-700"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </div>

      {/* Programs List */}
      <div className="space-y-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            {/* Program Image with Title */}
            <div className="relative h-24">
              <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
              <Image
                src={program.banner}
                alt={program.title}
                className="w-full h-full object-cover object-center"
                fill
              />
              <div className="p-3 flex justify-between absolute z-[1]">
                <h2 className="text-white text-base font-bold w-2/3">
                  {program.title}
                </h2>
                <div className="flex justify-end">
                  <Settings size={20} className="text-white" />
                </div>
              </div>
              <div className="px-3 pt-4 absolute bottom-2.5 z-1">
                <span className="inline-flex items-center px-3 py-.5 rounded-full text-sm font-bold bg-blue-100 text-blue-800 ">
                  <span className="mr-2 w-2 h-2 rounded-full bg-blue-500"></span>
                  {program.type}
                </span>
              </div>
            </div>

            {/* Program Type Badge */}

            {/* Program Description */}
            <div className="p-2">
              <p className="text-gray-700 text-[10px]">{program.description}</p>

              {/* Mentors or Host */}
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  {program.mentors ? (
                    <>
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-clip">
                            <Image
                              key={i}
                              src={program.mentorsList[i]}
                              alt={`Mentor ${i + 1}`}
                              className="w-full object-cover absolute"
                              fill
                            />
                          </div>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-700 text-[10px]">
                        Mentors
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 rounded-full bg-gray-300 overflow-clip relative">
                        {program.hostImage && (
                          <Image
                            src={program.hostImage}
                            alt="Host"
                            className="w-full h-full object-cover rounded-full"
                            fill
                          />
                        )}
                      </div>
                      <span className="ml-2 text-gray-700 text-[10px] max-md:w-1/2">
                        Hosted By: {""} 
                        {program.hostedBy}
                      </span>
                    </>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="px-2 py-1 lg:px-3 lg:py-2 border border-purple-600 text-purple-600 rounded-md text-[9px] lg:text-[10px] text-nowrap">
                    View Details
                  </button>
                  <button className="px-2 py-1 lg:px-3 lg:py-2 bg-purple-600 text-white rounded-md text-[9px] lg:text-[10px]">
                    {program.buttonAction}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
