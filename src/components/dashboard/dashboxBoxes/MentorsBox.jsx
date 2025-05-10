import React from "react";
import { boxes } from "@/data/dashboard.json";
import Image from "next/image";

const MentorsBox = () => {
  return (
    <div>
      {/* top */}
      <div className="flexBetween ">
        <div className="flexBetween gap-4 ">
          <Image
            className="cursor-pointer"
            src={boxes.mentors.top.outline}
            alt="outline icon"
            width={16}
            height={16}
            loading="lazy"
          />
          <button className="font-Chivo font-bold text-base text-neutral-900 ">
            {" "}
            {boxes.mentors.top.title}{" "}
          </button>
        </div>
        <div className="flexBetween gap-4 ">
          <button className="w-[24px] h-[24px] flexCenter border-[1.14px] border-[#9D92A6] rounded-full ">
            {" "}
            <Image
              className="cursor-pointer"
              src={boxes.mentors.top.btn}
              alt="outline icon"
              width={16}
              height={16}
              loading="lazy"
            />
          </button>
          <Image
            className="cursor-pointer"
            src={boxes.mentors.top.more}
            alt="more icon"
            width={16}
            height={16}
            loading="lazy"
          />
        </div>
      </div>
      {/* mentors */}
      <div className="mt-[23px] ">
        {boxes.mentors.mentors.map((each, i) => (
          <div key={i} className="mb-[24px] ">
            <div className="flexBetween">
              <div className="flexStart gap-4">
                <Image
                  className="cursor-pointer w-[32px] h-[32px] rounded-full "
                  src={each.avater}
                  alt={each.name}
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <div className="flexColStart gap-[2px] ">
                  <span className="font-Chivo font-bold text-[14.4px] text-gray-900 ">
                    {" "}
                    {each.name}{" "}
                  </span>
                  <span className="font-Chivo font-[400] text-[10px] text-gray-904 ">
                    {" "}
                    {each.profession}{" "}
                  </span>
                </div>
              </div>
              <div className="flexBetween gap-[6.11px]  ">
               <button className="w-[76px] h-[22px] bg-purple-700 text-white flexCenter rounded-[16px] font-Chivo font-[400] text-[12px] "> Message </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[264px] h-[44px] mx-auto bg-[#DDD6FB] text-[#6F01D0] rounded-[24px] font-Chivo font-semibold text-[14px] block my-[20px] "> See all</button>
      {/* recents */}
      <div className="">
        {/* top */}
              <div className="flexBetween ">
                <div className="flexBetween gap-4 ">
                  <Image
                    className="cursor-pointer"
                    src={boxes.mentors.recent.top.outline}
                    alt="outline icon"
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                  <button className="font-Chivo font-bold text-base text-neutral-900 ">
                    {" "}
                    {boxes.mentors.recent.top.title}{" "}
                  </button>
                </div>
                <div className="flexBetween gap-4 ">
                  <button className="font-Chivo font-semibold text-[12.27px] text-purple-700">
                    {" "}
                    {boxes.mentors.recent.top.btn}{" "}
                  </button>
                  <Image
                    className="cursor-pointer"
                    src={boxes.mentors.recent.top.more}
                    alt="more icon"
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                </div>
              </div>
              {/* show recents */}
              <div className="mt-[23px] ">
        {boxes.mentors.recent.data.map((each, i) => (
          <div key={i} className="mb-[24px] ">
            <div className="flexBetween">
              <div className="flexStart gap-4">
                <Image
                  className="cursor-pointer w-[32px] h-[32px] rounded-full "
                  src={each.avater}
                  alt={each.name}
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <div className="flexColStart gap-[6px] ">
                  <span className="font-Chivo font-bold text-[14px] text-[#011627] ">
                    {" "}
                    {each.name}{" "}
                  </span>
                  <span className="font-Chivo font-[400] text-[12px] text-[#707991] ">
                    {" "}
                    {each.p}{" "}
                  </span>
                  <span className="font-Chivo font-[300] text-[10px] text-[#707991] ">
                    {" "}
                    {each.time}{" "}
                  </span>
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default MentorsBox;
