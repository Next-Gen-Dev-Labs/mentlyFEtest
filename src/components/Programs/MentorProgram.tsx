import { Woman_Avatar } from "@/assets";
import { programData, programInfoData } from "@/shared/data";
import { HeaderText } from "@/shared/UIs/ReusedComponents";
import Image from "next/image";
import React, { JSX } from "react";

const IconWithText = ({
  icon,
  text,
  isProgramInfo,
}: {
  icon: JSX.Element;
  text: string;
  isProgramInfo?: boolean;
}) => {
  return (
    <>
      {isProgramInfo ? (
        <div className={`flex items-center gap-3 mt-[1rem]`}>
          {icon}
          <span className="text-[#595564] font-[400] text-[0.9rem]">
            {text}
          </span>
        </div>
      ) : (
        <div className={`flex items-center gap-8 `}>
          <div className="">{icon}</div>
          <span className="text-[#777795] font-[600] text-[0.9rem]">
            {text}
          </span>
        </div>
      )}
    </>
  );
};

const ProgramInnfoContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-[#FFFAF2] rounded-[1rem] p-4 border border-[#FEE0B1]">
      <span className="text-mentlyBlue font-[500] text-[1.3rem]">{title}</span>
      <div className="">{children}</div>
    </div>
  );
};
const MentorProgram = () => {
  return (
    <div className="p-6 flex-col flex gap-5">
      <span className="text-[#809FB8] text-[0.9rem] text-right">
        13th February 2024, 12:15 PM (Local time).
      </span>

      <div className="flex flex-col gap-2">
        <HeaderText text="Mentorship Program." />
        <div className="relative flex items-center justify-between w-full max-w-3xl lg:px-[2rem] px-[1.3rem] lg:py-[3rem] py-[1.5rem] bg-gradient-to-r from-black to-gray-700 rounded-xl text-white shadow-lg gap-1">
          {/* Background Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-4/6 h-full bg-black opacity-40 rounded-full 
            left-1/2 
              top-1/2 
              transform 
             -translate-x-1/2 
              -translate-y-1/2 
              aspect-[2/1]"
            ></div>
          </div>

          {/* Speaker Image */}
          <div className="relative z-10 flex items-center">
            <Image
              src={Woman_Avatar}
              alt="Speaker"
              className=" rounded-lg object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="relative z-10 flex flex-col flex-1 ml-4">
            <h2 className="lg:w-52 w-36 lg:leading-7 leading-5 lg:text-[1.45rem] text-[1rem] font-bold">
              Mastering the work life Equation
            </h2>
            <div className="flex items-center gap-2 lg:mt-1">
              <p className="text-[0.95rem] mt-1 text-gray-300 font-meow-script">
                with
              </p>
              <span className="font-[300] text-[0.7rem]">
                Nwachukwu Peculiar
              </span>
            </div>

            {/* Badge */}
            <div className="mt-1 w-full">
              <span className="px-3 py-[0.1rem] text-[0.4rem] w-[4rem] font-semibold text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-[0.2rem]">
                Masterclass
              </span>
            </div>
          </div>

          {/* Date & Time */}
          <div className="relative z-10 text-left text-sm text-white font-[500]">
            <p>20TH</p>
            <p>OCT,</p>
            <p>2024</p>
            <hr className="mt-2" />
            <p className="mt-1 text-[0.8rem]">2PM</p>
          </div>
        </div>
        <div className="grid 1xl:grid-cols-2 lg:grid-cols-1 gap-[2rem] mt-2">
          <p className="text-justify text-[0.9rem] text-[#808080] font-[300] leading-6">
            UI/UX Design check ins with faith is a way for beginners in UI/UX
            Design to get started about the fundamentals and how they can build
            a Design Career, share, document their progress on a weekly basis.
          </p>
          <div className="flex gap-3 flex-col shadow-lg justify-center items-center p-3">
            <div className="flex flex-col gap-3">
              {programData.map((item, index) => (
                <IconWithText key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-[1.3rem]">
          <ProgramInnfoContainer title="Program Information Text">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
              {programInfoData.map((item, index) => (
                <IconWithText
                  isProgramInfo
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </ProgramInnfoContainer>
          <ProgramInnfoContainer title="Program Information Text 2">
            <ul className="list-disc pl-4 flex flex-col gap-2 mt-5-">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <li key={index} className="text-[#595564]">
                    Content
                  </li>
                ))}
            </ul>
          </ProgramInnfoContainer>
        </div>
      </div>
    </div>
  );
};

export default MentorProgram;
