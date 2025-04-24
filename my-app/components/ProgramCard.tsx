import { Settings } from "lucide-react";
import React from "react";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  status: "ongoing" | "upcoming" | "completed" | "Bootcamp";
  mentors: { image: string }[];
  hosted?: { name: string; image: string };
  headerImage?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  status,
  mentors,
  hosted,
  headerImage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-4 overflow-hidden">
      <div
        className="relative p-4"
        style={{
          backgroundImage: `url("${headerImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-t-lg" />
        <div className="relative flex items-center justify-between text-white z-10">
          <h3 className="font-bold text-lg">{title}</h3>
          <button className="p-1">
            <Settings size={20} />
          </button>
        </div>
        <div className="relative mt-2 z-10">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              status === "ongoing"
                ? "bg-green-100 text-green-800"
                : status === "upcoming"
                ? "bg-blue-100 text-blue-800"
                : status === "Bootcamp"
                ? "bg-[#D4E0F3] text-[#0077FF]"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[12px] text-black mb-4 text-left">{description}</p>

        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-4">
              <div className="flex items-center -space-x-2 mr-2">
                {mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full ring-2 ring-white overflow-hidden"
                  >
                    <Image
                      src={mentor.image}
                      alt={`Mentor ${index + 1}`}
                      width={40}
                      height={40}
                      className="w-full h-full "
                    />
                  </div>
                ))}
                <span
                  className={`text-[11px] text-gray-500 ml-2 ${
                    hosted?.image ? "hidden" : "block"
                  }`}
                >
                  Mentors
                </span>
              </div>
            </div>

            {hosted && (
              <div className="flex items-center ">
                <img
                  src={hosted.image}
                  alt={hosted.name}
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-[10px]  text-gray-500 text-balance">
                  Hosted by: {hosted.name}
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button className="text-sm px-3 py-1 border border-[#6F01D0] text-[#6F01D0] rounded">
              View Details
            </button>
            <button className="text-sm px-3 py-1 bg-[#6F01D0] text-white rounded">
              Analyze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
