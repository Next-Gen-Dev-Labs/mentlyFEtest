// components/MeetingCard.jsx
import React from "react";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import study_group_logo from "../../../public/lambo.jpg";

export default function MeetingCard({
  title,
  date,
  time,
  imageSrc,
  status,
  circleColor,
  mentors = [],
  bgColor,
  textColor,
  participants = 10,
  statusColor = "green-500",
}) {
  return (
    <div className="bg-[#F9F7FF]  rounded-lg  shadow-sm p-4">
      <div className="flex flex-col justify-between items-start mb-3">
        <Image
          src={imageSrc}
          alt="Techrity Logo"
          width={100}
          height={100}
          className="w-full h-[68.7px] rounded-[9.7px] overflow-hidden object-cover mb-2"
        />
        <div>
          <div
            className="flex items-center px-3 gap-1 w-fit py-0.5 rounded-full my-2 z-10"
            style={{ backgroundColor: bgColor }}
          >
            <div
              className={`w-2 h-2 rounded-full`}
              style={{ backgroundColor: circleColor }}
            ></div>
            <span
              className="text-xs"
              style={{
                color: textColor,
              }}
            >
              {status}
            </span>
          </div>
          <div className="max-w-full border-b py-1 border-gray-200">
            <h3 className="font-medium text-[#595564] max-w-[70%]   text-sm">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs text-gray-500 mb-3">
        <div className="flex items-center mr-4">
          <Calendar size={14} className="mr-2 text-[#1F0954]" />
          <span className="text-[#595564] font-[500]">{date}</span>
        </div>
        <div className="flex items-center">
          <Clock size={14} className="mr-2 text-[#1F0954]" />
          <span className="text-[#595564] font-[500]">{time}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-xs text-gray-500">
          <Image
            src={study_group_logo}
            alt="Techrity Logo"
            width={100}
            height={100}
            className="w-6 h-6 rounded-full mt-auto overflow-hidden object-cover mb-2"
          />
          <div className="flex flex-col">
            <span>Study Group</span>
            <span>UX Strategy Study group</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <div className="flex flex-col -space-x-2">
              <span className="text-xs text-gray-500 ml-2">Mentors</span>
              <div className="flex -space-x-2">
                {mentors.length > 0 ? (
                  mentors.map((mentor, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative"
                    >
                      <Image
                        src={`https://i.pravatar.cc/150?img=${index + 1}`}
                        alt={`Mentor ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative">
                    <Image
                      src="https://i.pravatar.cc/150?img=1"
                      alt="Dummy Mentor"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-3 gap-2">
        <button className="flex-1 items-center text-xs text-purple-700 border border-purple-700 py-1 px-3 rounded-md">
          View Participants
        </button>
        <button className="flex items-center gap-2 text-xs text-white bg-purple-700 py-1 px-3 rounded-md">
          Join Now
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
