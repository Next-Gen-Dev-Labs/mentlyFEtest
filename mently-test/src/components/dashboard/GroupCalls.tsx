import React from "react";
import Image from "next/image";
import Clock from "@/assets/icons/time.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Right from "@/assets/icons/arrow-right.svg";
import { meetings } from "../list-items/dashboard";
import Bar from "@/assets/icons/order.svg";
import More from "@/assets/icons/more.svg";
import { Meeting } from "../list-items/types";

const MeetingCard = ({ meeting }: { meeting: Meeting }) => {
  const isOngoing = meeting.status === "ongoing";
  const isUpcoming = meeting.status === "upcoming";

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow mb-4 w-fit max-w-[300px] flex-shrink-0">
      <div className="h-24">
        <Image
          src={meeting.image}
          alt="Meeting header"
          className={`w-full h-full object-cover ${meeting.id!== 1 ? "object-[25%_12%]": "object-center"}`}
        />
      </div>

      <div className="px-4 mt-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
            isOngoing
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              isOngoing ? "bg-green-500" : "bg-blue-500"
            }`}
          ></span>
          {isOngoing ? "Ongoing" : "Upcoming"}
        </span>
      </div>

      <div className="px-4 mt-2">
        <h2 className="text-base font-medium text-gray-700 border-b-1 border-gray-200">{meeting.title}</h2>
      </div>

      <div className="px-4 flex items-center space-x-8 mb-4 text-gray-600">
        <div className="flex items-center border-r-1 pr-5 mt-3 border-gray-200">
          <Calendar className="mr-2" />
          <p className="text-[9px] md:text-xs">{meeting.date}</p>
        </div>
        <div className="flex items-center mt-3">
          <Clock className="mr-2" />
          <p className="text-[9px] md:text-xs">{meeting.time}</p>
        </div>
      </div>

      <div className="px-4 flex justify-between items-center mb-4">
        <div>
          <p className="text-[10px] text-[#A195C0]">Study Group</p>
          <div className="flex items-center">
            <div className="bg-gray-800 rounded-full w-6 h-6 mr-2"></div>
            <p className="text-xs text-[#595564]">{meeting.group}</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[#A195C0] text-left">Mentors</p>
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full border-2 border-white overflow-clip"
                >
                  <Image
                    key={i}
                    src={meeting.mentorsList[i]}
                    alt={`Mentor ${i + 1}`}
                    className="w-full object-cover absolute"
                    fill
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 flex justify-between gap-2">
        <button className="border-2 border-purple-600 text-purple-600 rounded-md py-2 px-2 lg:px-4 flex-1  text-xs font-medium">
          View Participants
        </button>
        <button
          className={`flex items-center justify-center rounded-md py-2 px-2 lg:px-4 flex-1 font-medium text-xs text-white ${
            isUpcoming
              ? "bg-[#6F01D04D] opacity-30"
              : "bg-purple-600"
          }`}
        >
          Join Now
          <Right className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const GroupCalls = () => {
  return (
    <div className="mx-auto bg-white max-md:max-w-[320px] max-lg:max-w-[500px]">
      <div className="flex justify-between items-center p-4 sticky top-0 bg-white border-b">
        <div className="flex items-center">
          <Bar className="text-gray-500 mr-4" />
          <h1 className="text-2xl font-medium text-gray-400">Group Calls</h1>
        </div>
        <div className="flex items-center">
          <button className="text-purple-600 mr-4">See all</button>
          <More className="text-gray-500" />
        </div>
      </div>

      <div className="p-4 flex items-center justify-between gap-x-4 overflow-x-auto hidden-scrollbar">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
};

export default GroupCalls;
