"use client";

import Image from "next/image";

const colorMap = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
};

const textColorMap = {
  red: "text-red-100",
  green: "text-green-100",
  blue: "text-blue-100",
  yellow: "text-yellow-100",
  purple: "text-purple-100",
};
const dotColorMap = {
  red: "bg-red-700",
  green: "bg-green-700",
  blue: "bg-blue-700",
  yellow: "bg-yellow-700",
  purple: "bg-purple-700",
};

const ProgramCard = ({ program }) => {
  const colorClass = colorMap[program.color] || "bg-gray-400";
  const textColorClass = textColorMap[program.tcolor] || "text-white";
  const dotColorClass = dotColorMap[program.color] || "bg-gray-600";

  return (
    <div className="bg-white rounded-xl h-[220px] overflow-hidden shadow-sm border border-gray-200 ">
      <div className="relative h-[75px] w-full">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-2 left-3 z-10">
          <h3 className="text-white font-semibold text-sm">{program.title}</h3>
          <div
            className={`mt-1 px-2 rounded-2xl flex gap-2 items-center text-xs font-medium w-max ${colorClass} ${textColorClass}`}
          >
            <div className={`h-3 w-3 rounded-full ${dotColorClass}`}></div>
            {program.type}
          </div>
        </div>
      </div>

      <div className="pt-1 px-4 pb-4">
        <p className="text-[11px] text-gray-700 my-1">{program.description}</p>

        <div className="flex justify-between items-center ">
          {/* Mentor Images */}
          <div className="relative flex items-center  h-[40px] w-[100px]">
            <Image
              src="/asset/program-mentor3.png"
              alt="Mentor 1"
              width={84}
              height={84}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 rounded-full border-2 border-white"
            />
            <Image
              src="/asset/program-mentor2.png"
              alt="Mentor 2"
              width={84}
              height={84}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-20 rounded-full border-2 border-white"
            />
            <Image
              src="/asset/program-mentor.png"
              alt="Mentor 3"
              width={84}
              height={84}
              className="absolute left-10 top-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-white"
            />
            {/* Mentors */}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="text-[12px] px-3 py-1.5 bg-white border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
              View Details
            </button>
            <button className="text-[12px] px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
