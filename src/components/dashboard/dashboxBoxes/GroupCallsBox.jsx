import React from "react";
import { boxes } from "@/data/dashboard.json";
import Image from "next/image";
import DotIon from "@/components/dynamicSvgs/DotIon";
import MentorsIcons from "./MentorsIcons";

const GroupCallsBox = () => {
  return (
    <div className="mt-[13.16px] ">
      {/* top */}
      <div className="flexBetween gap-[7.01px]  ">
        <div className="flexBetween gap-4 ">
          <Image
            className="cursor-pointer"
            src={boxes.groupcalls.top.outline}
            alt="outline icon"
            width={16}
            height={16}
            loading="lazy"
          />
          <button className="font-Chivo font-bold text-base text-neutral-900 ">
            {" "}
            {boxes.groupcalls.top.title}{" "}
          </button>
        </div>
        <div className="flexBetween gap-4 ">
          <button className="font-Chivo font-semibold text-[12.27px] text-purple-700">
            {" "}
            {boxes.groupcalls.top.btn}{" "}
          </button>
          <Image
            className="cursor-pointer"
            src={boxes.groupcalls.top.more}
            alt="more icon"
            width={16}
            height={16}
            loading="lazy"
          />
        </div>
      </div>
      {/* cards */}
      <div className="flexStart overflow-x-scroll myScrollBar ">
        {boxes.groupcalls.cards.map((each, i) => (
          <div
            key={i}
            className="flexColStart gap-[6.47px]   max-w-[269.94px] min-w-[269.94px] max-h-[264.22px] min-h-[264.22px] bg-[#F9F7FF] rounded-[9.7px] p-[12.93px]  "
          >
            {/* img */}
            <div
              style={{
                backgroundImage: `url(${each.img.url})`,
                backgroundSize: "cover",
              }}
              className={`w-[244.07px] min-h-[68.7px] rounded-[9.7px] mx-auto    bg-no-repeat ${each.img.position}   `}
            ></div>
            {/* status */}
            <div className=" ">
              <button
                className={`py-[1.64px] px-[9.85px] rounded-[9.85px] flexCenter ${each.status["text-tail"]} font-Chivo font-bold text-[6.57px] ${each.status["bg-tail"]}  gap-x-[3.28px]  `}
              >
                <DotIon width={4.11} height={4.11} color={each.status.color} />
                <span>{each.status.text}</span>
              </button>
            </div>
            {/* h2 */}
            <h2 className="font-Chivo font-normal text-[16.81px] text-gray-800 ">
              {" "}
              {each.h2}{" "}
            </h2>
            {/* schedule */}
            <div className="grid grid-cols-2 border-t-[0.81px] border-t-neutral-200 w-[245.69px] pt-[4.03px] ">
              <div className="flexStart gap-[2.92px] ">
                <Image
                  loading="lazy"
                  alt="date icon"
                  width={8.33}
                  height={8.33}
                  src={each.schedule.date.icon}
                />
                <span className="font-Chivo font-[500] text-[8.08px] text-gray-800 ">
                  {" "}
                  {each.schedule.date.date}{" "}
                </span>
              </div>
              <div className="border-l-[0.81px] border-l-neutral-200 flexStart justify-end gap-[2.92px]">
                <Image
                  loading="lazy"
                  alt="clock icon"
                  width={8.33}
                  height={8.33}
                  src={each.schedule.time.icon}
                />
                <span className="font-Chivo font-[500] text-[8.08px] text-gray-800 ">
                  {" "}
                  {each.schedule.time.time}{" "}
                </span>
              </div>
            </div>
            {/* group */}
            <div className="flexBetween w-full ">
              <div className="flexColStart gap-[1.62px] ">
                <h5 className="font-Chivo font-[400] text-[6.47px] text-purple-400">
                  {" "}
                  {each.footer.group.text}{" "}
                </h5>
                <div className="flexStart gap-[1.62px]">
                  <MentorsIcons data={each.footer.group.mentors} />
                  <span className="font-Chivo font-[600] text-[8.08px] text-gray-800">
                    {" "}
                    {each.footer.group.label}{" "}
                  </span>
                </div>
              </div>
              <div className="flexColStart  ">
                <h5 className="font-Chivo font-[400] text-[6.47px] text-purple-400">
                  {" "}
                  {each.footer.mentors.text}{" "}
                </h5>
                <div className="flexStart gap-[3.23px] ">
                  <MentorsIcons
                    width={11.52}
                    height={11.52}
                    data={each.footer.mentors.mentors}
                  />
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="flexBetween mt-[7.34px] w-full ">
              <button
                className={`w-fit h-[32.43px] border-[0.88px] p-[14.03px] rounded-[7.01px] text-purple-700 ${each.footer.btns.bg} font-Chivo font-[500] text-[12.27px] flexCenter`}
              >
                {" "}
                {each.footer.btns.text1}{" "}
              </button>
              <button
                className={`w-fit h-[32.43px] border-[0.88px] p-[14.03px] rounded-[7.01px] text-white ${each.footer.btns.text2.bg} font-Chivo font-[500] text-[12.27px] flexBetween ms-[0.5px] `}
              >
                
                <span className="">{each.footer.btns.text2.text}</span>
                <Image
                  loading="lazy"
                  alt="clock icon"
                  width={21.04}
                  height={21.04}
                  src={each.footer.btns.text2.icon}
                />

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCallsBox;
