import { mentorData } from "@/utils/data";
import React from "react";

const MentorsGrid = () => {
  return (
    <div className="bg-white p-4 rounded-[12.04px]">
      <div>
        {/* panel */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img src="/four-outline.svg" alt="outline" />
            </div>
            <p className="font-bold text-[#B0B0B0]">Mentors</p>
          </div>

          {/* see all */}
          <div>
            <div className="flex items-center gap-5">
              <div>
                <div className="flex items-center justify-center w-[24px] aspect-square rounded-full border border-[#9D92A6]">
                  <img src="/plus.svg" alt="Add mentors" />
                </div>
              </div>
              <div>
                <img src="/seeall.svg" alt="See all" />
              </div>
            </div>
          </div>
        </div>

        {/* list of mentors */}
        <div className="px-2 mt-6">
          {mentorData.map((mentor) => (
            <div
              key={mentor.id}
              className="flex items-center justify-between pt-5 border-b border-[#F3F3F3] pb-4 last:border-b-0"
            >
              {/* name details */}
              <div className="flex items-center gap-3">
                {/* profile */}
                <div>
                  <div className="w-[32px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={mentor.profileImage}
                      alt={mentor.name}
                    />
                  </div>
                </div>
                {/* name details */}
                <div>
                  <p className="text-sm text-[#4F4F4F] font-bold">
                    {mentor.name}
                  </p>
                  <p className="text-[10px] text-[#7D8DA6]">{mentor.email}</p>
                </div>
              </div>

              {/* buttons */}
              <div className="flex items-center gap-2">
                <button className="w-[76px] h-[22px] flex items-center justify-center border-[0.61px] border-blue bg-blue text-[#F1EEFF] text-xs font-medium rounded-[16px] cursor-pointer">
                  Message
                </button>
              </div>
            </div>
          ))}

          {/* see all button */}
          <div className="w-full flex items-center justify-center mt-6">
            <button className="w-full rounded-[24px] max-w-[264px] min-h-[44px] text-blue bg-[#DDD6FB] flex items-center justify-center cursor-pointer">
              See all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsGrid;
