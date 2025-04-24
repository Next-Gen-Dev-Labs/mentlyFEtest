import { cardDatas } from "@/utils/data";
import React from "react";

const GroupCalls = () => {
  return (
    <div className="">
      {/* panel */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div>
            <img src="/four-outline.svg" alt="outline" />
          </div>
          <p className="font-bold text-[#B0B0B0]">Programs</p>
        </div>

        {/* see all */}
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[12.27px] font-semibold text-[#6F01D0]">
              See all
            </p>
            <div>
              <img src="/seeall.svg" alt="See all" />
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="flex items-center gap-4 mt-2 overflow-x-auto px-4 hide-scrollbar">
        {cardDatas.map((card, index) => (
          <div
            key={card.id}
            className="bg-[#F9F7FF] w-[300px] rounded-[9.7px] p-[12.93px] flex-shrink-0"
          >
            {/* image */}
            <div>
              <div
                className="min-h-[69.8px] bg-left bg-cover bg-no-repeat rounded-[6.57px] relative overflow-hidden p-1"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              >
                <div className="absolute w-full min-h-[70px] top-0 left-0 bg-black/20" />
              </div>
            </div>

            {/* text and tag */}
            <div className="mt-2 border-b border-[#D0D5DD]">
              {/* tag */}
              <div
                className="flex items-baseline gap-1 relative rounded-full w-fit px-[19.98px] py-[2.5px]"
                style={{ backgroundColor: card.tagBgColor }}
              >
                <div>
                  <div
                    className="w-[4px] aspect-square rounded-full"
                    style={{ backgroundColor: card.tagColor }}
                  />
                </div>
                <p className="text-[9.8px]" style={{ color: card.tagColor }}>
                  {card.tag}
                </p>
              </div>
              {/* text */}
              <h1 className="text-[#595564] leading-[1.2] text-[16.81px] py-2">
                {card.title}
              </h1>
            </div>

            {/* date and time */}
            <div className="flex items-center justify-between py-2">
              {/* date */}
              <div className="flex items-center gap-1 border-r border-[#D0D5DD] pr-[7.3px]">
                {/* icon */}
                <div>
                  <img src="/date.svg" alt="Date" />
                </div>
                {/* text */}
                <p className="text-[8.08px] text-[#595564] font-medium">
                  {card.date}
                </p>
              </div>

              {/* time */}
              <div className="flex items-center gap-1">
                {/* icon */}
                <div>
                  <img src="/time.svg" alt="Time" />
                </div>
                {/* text */}
                <p className="text-[8.08px] text-[#595564] font-medium">
                  {card.time}
                </p>
              </div>
            </div>

            {/* study group */}
            <div className="grid grid-cols-2 items-center justify-between mt-2">
              {/* study */}
              <div className="">
                <div className="flex items-end gap-1">
                  {/* group-image */}
                  <div>
                    <div className="w-[11.52px] aspect-square rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover object-center"
                        src="/group.jpg"
                        alt="Group"
                      />
                    </div>
                  </div>
                  {/* group text */}
                  <div>
                    <p className="text-[6.47px] text-[#A195C0]">Study Group</p>
                    <p className="text-[8.08px] text-[#595564]">
                      {card.studyGroup}
                    </p>
                  </div>
                </div>
              </div>

              {/* mentors */}
              <div className="grid place-content-center">
                <p className="text-[6.47px] text-[#A195C0]">Mentors</p>
                <div className="flex justify-center">
                  {card.mentorImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-[11.52px] aspect-square rounded-full overflow-hidden"
                      style={{
                        marginLeft: index > 0 ? "-5px" : "0", // Overlap images
                        zIndex: card.mentorImages.length + index, // Stack order
                      }}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={`Mentor ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-2 justify-between mt-2">
              <button className="btn-group border bg-transparent text-blue border-blue">
                View Participants
              </button>
              <button
                className={`w-[98.48px] btn-group text-white flex items-center justify-between px-3 ${
                  index === 1
                    ? "bg-blue/30 border-blue/30"
                    : "border-blue border"
                }`}
              >
                <p>Join Now</p>
                <div>
                  <img src="/arrow.svg" alt="Arrow" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCalls;
