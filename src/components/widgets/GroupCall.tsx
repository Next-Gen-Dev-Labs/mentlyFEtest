import React from "react";
import Card from "../ui/Card";
import ButtonPurple from "../ui/ButtonPurple";
import { CalendarIcon, Clock } from "lucide-react";
import ButtonWithBorderPurple from "../ui/ButtonWithBorderPurple";
import { ChevronDown, Menu } from "lucide-react";
import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";

// You'll need to add this type or import it from your types file
type Meeting = {
  title: string;
  date: string;
  time: string;
  status: "Ongoing" | "Upcoming" | "Completed";
  studyGroup: {
    name: string;
    avatar: string;
  };
  mentors: {
    avatars: string[];
  };
};

// Sample data - you might want to move this to your database file
const meetings: Meeting[] = [
  {
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Ongoing",
    studyGroup: {
      name: "UX Strategy Study group",
      avatar: "/path/to/avatar.jpg",
    },
    mentors: {
      avatars: ["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg"],
    },
  },
  {
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Ongoing",
    studyGroup: {
      name: "UX Strategy Study group",
      avatar: "/path/to/avatar.jpg",
    },
    mentors: {
      avatars: ["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg"],
    },
  },
  {
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Ongoing",
    studyGroup: {
      name: "UX Strategy Study group",
      avatar: "/path/to/avatar.jpg",
    },
    mentors: {
      avatars: ["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg"],
    },
  },
  // Add more meetings as needed
];

const GroupCall = () => {
  return (
    <Card className="h-full relative">
      <div className="flex px-4 py-2 justify-between items-center">
          <div className="flex items-center gap-2">
            <Menu />
            <h1 className="text-[#B0B0B0] text-base font-bold">Group Calls</h1>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-[#6F01D0] font-semibold text-xs">See all</h2>
            <CiMenuKebab />
          </div>
        </div>

      <main className="absolute inset-x-0 bottom-0 top-[3rem] overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 p-4 min-w-min">
          {meetings.map((meeting, index) => (
            <Card
              key={index}
              className="p-4 bg-[#F9F7FF] min-w-[350px] max-w-[350px]"
            >
              <Image
                    src="/path/to/your/image.jpg"
                    alt="Description of the image"
                    width={500}
                    height={200}
                    className="w-full "
                  />
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                  ${
                    meeting.status === "Ongoing"
                      ? "bg-green-100 text-green-800"
                      : ""
                  }
                `}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                  {meeting.status}
                </span>
              </div>

              {/* Meeting Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {meeting.title}
              </h2>

              {/* Date and Time */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{meeting.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{meeting.time}</span>
                </div>
              </div>

              {/* Study Group and Mentors */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={meeting.studyGroup.avatar}
                      alt="Study Group"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {meeting.studyGroup.name}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Mentors</span>
                  <div className="flex -space-x-2">
                    {meeting.mentors.avatars.map((avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt={`Mentor ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <ButtonWithBorderPurple
                  className="px-2 py-2 rounded-md"
                  value="View Participants"
                />
                <ButtonPurple
                  className="px-4 py-2 rounded-md text-sm"
                  value="Join Now"
                />
              </div>
            </Card>
          ))}
        </div>
      </main>
    </Card>
  );
};

export default GroupCall;
