import { cardData } from "@/utils/data";
import React from "react";

const ProgramsCard = () => {
  return (
    <div className="bg-white rounded-[12px] p-4 max-[413px]:w-[329px] w-[300px] lg:w-full max-[1024px]:w-auto">
      {/* panel */}
      <div className="flex items-center justify-between">
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

      {/* filter btn */}
      <div className="flex items-center justify-end gap-2 my-3">
        <p className="text-[11.26px] font-medium text-[#918C9C]">Filter</p>
        <div className="flex items-center justify-center gap-2 border border-[#E1E7EC] text-[11.26px] font-medium text-[#595564] h-[23px] w-[78px] rounded-[4px]">
          <p>Active</p>
          <div>
            <div>
              <img src="/drop.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white c-shadow rounded-[9.85px] p-[13.14px]"
          >
            {/* image */}
            <div>
              <div
                className="min-h-[69.8px] bg-center bg-cover bg-no-repeat rounded-[6.57px] relative overflow-hidden p-1"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              >
                <div className="absolute w-full min-h-[70px] top-0 left-0 overlay" />
                <div className="flex justify-between relative">
                  <h1 className="text-white font-bold text-[16.42px] leading-[1.2] max-w-[224px]">
                    {card.title}
                  </h1>

                  {/* setting icon */}
                  <div className="relative">
                    <div>
                      <img src="/setting.svg" alt="Settings" />
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex items-baseline gap-1 relative rounded-full w-fit bg-[#D4E0F3] px-[10px] py-[2px]">
                    <div>
                      <div className="w-[4px] aspect-square rounded-full bg-[#0077FF]" />
                    </div>
                    <p className="text-[6.57px] font-bold text-[#0077FF]">
                      {card.tag}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* text */}
            <p className="text-[10px] text-[#595564] w-full mt-2">
              {card.description}
            </p>

            {/* card base */}
            <div className="flex items-center justify-between mt-4">
              {/* profile image */}
              <div className="relative flex items-center gap-2">
                <div className="flex">
                  {card.mentorImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-[13.91px] aspect-square rounded-full overflow-hidden"
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
                <p className="text-[8.21px] font-semibold text-[#6c6c6c]">
                  {card.text}
                </p>
              </div>

              {/* buttons */}
              <div className="flex items-center gap-2">
                <button className="btn-program bg-transparent text-blue border-blue">
                  View Details
                </button>
                <button className="btn-program text-white border-blue">
                  {card.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsCard;
