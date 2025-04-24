import React from "react";

interface MeetingCardProps {
  title: string;
  date: string;
  time: string;
  status: "ongoing" | "upcoming";
  group: string;
  image: string;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  title,
  date,
  time,
  status,
  group,
  image,
}) => {
  return (
    <div className="bg-[#F9F7FF] rounded-lg border border-[#F9F7FF] overflow-hidden">
      <div className="relative w-full h-[64px]">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="p-3">
        <div className="mb-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              status === "ongoing"
                ? "bg-[#2AC10033] text-[#1F8B01]"
                : "bg-[#E0DDFF] text-[#1C0AE1]"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <h3 className="font-medium text-sm mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[10px] text-[#595564] mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-[10px] text-[#595564] mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{time}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-1 mb-4">
            <img
              src="/Frame 1000003208 (1).png"
              alt="image"
              className="w-4 h-4"
            />

            <div className="flex flex-col">
              <span className="text-[10px] text-[#A195C0]">Study group</span>
              <span className="text-[10px] font-bold text-[#595564]">
                {group}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-500 mb-4">
            <span className={`text-[10px]`}>Mentors</span>
            <div className="flex items-center -space-x-2">
              <img
                src="/Frame 1000003208 (1).png"
                alt="image"
                className="w-4 h-4 ring-2 ring-white"
              />
              <img
                src="/Frame 1000003208 (1).png"
                alt="image"
                className="w-4 h-4"
              />
              <img
                src="/Frame 1000003208 (1).png"
                alt="image"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <button className="text-xs bg-white border border-purple-600 text-purple-600 rounded px-3 py-1 flex-1 cursor-pointer">
            View Participants
          </button>
          <button className="text-xs bg-purple-600 text-white rounded px-3 py-1 flex items-center justify-center flex-1 cursor-pointer">
            Join Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
