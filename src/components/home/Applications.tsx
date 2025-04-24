"use client";
import { studentData } from "@/utils/data";
import React from "react";

const Applications = () => {
  return (
    <div className=" bg-white p-4 rounded-[12.04px]">
      <div>
        {/* panel */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img src="/four-outline.svg" alt="outline" />
            </div>
            <p className="font-bold text-[#B0B0B0]">Applications</p>
          </div>

          {/* see all */}
          <div>
            <div className="flex items-center gap-5">
              <p className="text-[12.27px] font-semibold text-[#6F01D0]">
                See all
              </p>
              <button className="cursor-pointer">
                <img src="/seeall.svg" alt="See all" />
              </button>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="border-b border-[#DBDBDB] pt-5 pb-4">
          {/* mentors */}
          <div>
            <p className="text-[#7D8DA6] text-[10px] px-[24px] py-[8px]">
              Mentors
            </p>

            <div className="flex items-center justify-between pt-5">
              {/* name check */}
              <div className="flex items-center gap-3">
                {/* Custom checkbox */}
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="appearance-none w-[14px] aspect-square border border-[#A5A5A5] rounded checked:bg-[#07C500] checked:border-[#07C500] focus:outline-none"
                  />
                  <svg
                    className="absolute w-4 h-4 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </label>
                {/* profile */}
                <div>
                  <div className="w-[32px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/profile3.png"
                      alt="Maxwell Smith"
                    />
                  </div>
                </div>
                {/* name details */}
                <div>
                  <p className="text-sm text-[#4F4F4F] font-bold">
                    Maxwell Smith
                  </p>
                  <p className="text-[10px] text-[#7D8DA6]">
                    maxwellsmith@gmail.com
                  </p>
                </div>
              </div>

              {/* buttons */}
              <div className="flex items-center gap-2">
                <button className="w-[79px] h-[32px] flex items-center justify-center border-[0.61px] border-dangerborder bg-dangerfaded text-danger text-[9.77px] font-medium rounded-[6.11px] cursor-pointer">
                  Reject
                </button>
                <button className="w-[79px] h-[32px] flex items-center justify-center border-[0.61px] border-blue bg-blue text-white text-[9.77px] font-medium rounded-[6.11px] cursor-pointer">
                  Accept
                </button>
              </div>
            </div>
          </div>

          {/* mentors tags */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="py-[1px] px-[6px] bg-[#F3ECF9] border border-[#DDCEEE] text-[#9985A7] text-[8.65px] rounded-[5.19px]">
              Product Designer
            </span>
            <span className="py-[1px] px-[6px] bg-[#E8FDFB] border border-[#A1BDBA] text-[#58948E] text-[8.65px] rounded-[5.19px]">
              4 Years Experience
            </span>
            <span className="py-[1px] px-[6px] bg-[#E3ECF9] border border-[#ABBEE0] text-[#8196B5] text-[8.65px] rounded-[5.19px] flex items-center">
              <div className="mr-1">
                <img src="" alt="" />
              </div>
              Lagos, Nigeria
            </span>
            <span className="py-[1px] px-[6px] bg-[#F4F4F4] border border-[#C38C8C8] text-[#595564] text-[8.65px] rounded-[5.19px]">
              GMT +1
            </span>
          </div>
        </div>

        {/* students */}
        <div className="mt-5">
          <p className="text-[#7D8DA6] text-[10px] px-[24px] py-[8px]">
            Students
          </p>

          {studentData.map((student) => (
            <div
              key={student.id}
              className="border-b border-[#DBDBDB] pb-4 pt-6 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                {/* name check */}
                <div className="flex items-center gap-3">
                  {/* Custom checkbox */}
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="appearance-none w-[14px] aspect-square border border-[#A5A5A5] rounded checked:bg-[#07C500] checked:border-[#07C500] focus:outline-none"
                    />
                    <svg
                      className="absolute w-4 h-4 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </label>
                  {/* profile */}
                  <div>
                    <div className="w-[32px] aspect-square rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={student.profileImage}
                        alt={student.name}
                      />
                    </div>
                  </div>
                  {/* name details */}
                  <div>
                    <p className="text-sm text-[#4F4F4F] font-bold">
                      {student.name}
                    </p>
                    <p className="text-[10px] text-[#7D8DA6]">
                      {student.email}
                    </p>
                  </div>
                </div>

                {/* buttons */}
                <div className="flex items-center gap-2">
                  <button className="w-[79px] h-[32px] flex items-center justify-center border-[0.61px] border-dangerborder bg-dangerfaded text-danger text-[9.77px] font-medium rounded-[6.11px] cursor-pointer">
                    Reject
                  </button>
                  <button className="w-[79px] h-[32px] flex items-center justify-center border-[0.61px] border-blue bg-blue text-white text-[9.77px] font-medium rounded-[6.11px] cursor-pointer">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
