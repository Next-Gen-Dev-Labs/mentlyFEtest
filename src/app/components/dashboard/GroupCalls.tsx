"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import Menu from "../../../../public/images/icons/programMenu.svg";
import Image, { StaticImageData } from "next/image";
import Call1 from "../../../../public/images/images/program2.jpg";
import Call2 from "../../../../public/images/images/call2.jpg";
import Call3 from "../../../../public/images/images/call3.jpg";
import Mentor1 from "../../../../public/images/images/mentor1.png";
import Mentor3 from "../../../../public/images/images/mentor3.png";
import Mentor2 from "../../../../public/images/images/maxwell.png";
import { BiDotsVertical } from "react-icons/bi";

type Call = {
  id: number;
  title: string;
  date: string;
  time: string;
  status: "ongoing" | "upcoming";
  group: string;
  imageSrc: StaticImageData;
  imgPosition:
    | "top"
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "left-top"
    | "right-top"
    | "left-bottom"
    | "right-bottom";
  participants: {
    count: number;
    avatars: StaticImageData[];
  };
};

export default function GroupCalls() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const calls: Call[] = [
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00 - 10:00AM",
      status: "ongoing",
      group: "UX Strategy Study group",
      imageSrc: Call1,
      imgPosition: "center",
      participants: {
        count: 3,
        avatars: [Mentor1, Mentor2, Mentor3],
      },
    },
    {
      id: 2,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00 - 11:00AM",
      status: "upcoming",
      group: "UX Strategy Study group",
      imageSrc: Call2,
      imgPosition: "top",
      participants: {
        count: 3,
        avatars: [Mentor1, Mentor2, Mentor3],
      },
    },
    {
      id: 3,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00 - 10:00AM",
      status: "ongoing",
      group: "UX Strategy Study group",
      imageSrc: Call3,
      imgPosition: "top",
      participants: {
        count: 3,
        avatars: [Mentor1, Mentor2, Mentor3],
      },
    },
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00 - 10:00AM",
      status: "ongoing",
      group: "UX Strategy Study group",
      imageSrc: Call1,
      imgPosition: "center",
      participants: {
        count: 3,
        avatars: [Mentor1, Mentor2, Mentor3],
      },
    },
  ];

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const objectPositionMap: Record<string, string> = {
    top: "object-top",
    bottom: "object-bottom",
    center: "object-center",
    left: "object-left",
    right: "object-right",
    "left-top": "object-left-top",
    "right-top": "object-right-top",
    "left-bottom": "object-left-bottom",
    "right-bottom": "object-right-bottom",
  };
  return (
    <div className="bg-white pt-6 pb-2 w-full h-full mx-auto rounded-lg">
      <div className="flex justify-between items-center mb-6 px-6">
        <div className="flex items-center gap-4">
          <Image src={Menu} alt="programs" className="h-5 w-5" />

          <h2 className="text-xl font-bold text-[#B0B0B0]">Group Calls</h2>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#6F01D0] text-sm font-bold transition-colors"
          >
            See all
          </a>
          <BiDotsVertical className="h-5 w-5" />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide mx-auto items-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {calls.map((call) => (
          <motion.div
            key={call.id}
            className="bg-[#f9f7ff] rounded-lg overflow-hidden min-w-[380px] max-w-[400px] flex flex-col gap-4 items-center p-4"
            variants={item}
            initial="hidden"
            animate="show"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            {/* Image Section */}
            <div className=" relative overflow-hidden flex items-center gap-4 flex-col w-full">
              <div className="w-full">
                {call.imageSrc && (
                  <Image
                    src={call.imageSrc}
                    alt={call.title}
                    className={`w-full h-[100px] object-cover rounded-[9.7px] ${
                      objectPositionMap[call.imgPosition]
                    }`}
                  />
                )}
              </div>
              <div className="w-full">
                <span
                  className={`
                    inline-flex items-center px-2 py-1 rounded-full text-xs font-bold
                    ${
                      call.status === "ongoing"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }
                  `}
                >
                  <span className="w-2 h-2 rounded-full mr-1.5 bg-current"></span>
                  {call.status === "ongoing" ? "Ongoing" : "Upcoming"}
                </span>
              </div>
            </div>

            <div className="w-full">
              <h3 className="font-bold text-[#595564] mb-2 text-lg">
                {call.title}
              </h3>
              {/* Divider line */}
              <div className="h-px bg-[#D0D5DD] my-3"></div>

              <div className="flex items-center gap-8 text-gray-500 text-xs mb-3">
                <div className="w-full">
                  <div className="w-fit flex items-center border-r border-r-[#D0D5DD] pr-4 border-solid">
                    <IoCalendarOutline className="w-4 h-4 mr-1" />
                    <span>{call.date}</span>
                  </div>
                </div>

                <div className="w-full flex items-center">
                  <LuClock3 className="w-4 h-4 mr-1" />
                  <span>{call.time}</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-full flex flex-col items-start mb-3">
                  <span className="text-xs text-[#A195C0] mr-2">
                    Study Group
                  </span>
                  <span className="text-[12px] font-medium text-[#595564]">
                    {call.group}
                  </span>
                </div>
                <div className="w-full flex flex-col items-start mb-4">
                  <span className="w-full text-xs text-[#A195C0]">Mentors</span>
                  <div className="w-full flex -space-x-2 mr-2">
                    {call.participants.avatars.map((avatar, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden"
                      >
                        {/* <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500"></div> */}
                        <Image
                          src={avatar}
                          alt={call.title}
                          loading="lazy"
                          className="h-6 w-6 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-xs font-medium text-[#6F01D0] border border-[#6F01D0] rounded-md hover:bg-purple-50 transition-colors flex-1"
                  aria-label="View participants"
                >
                  View Participants
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-xs font-medium text-white bg-[#6F01D0] rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center flex-1"
                  aria-label="Join call now"
                >
                  Join Now
                  <BsArrowRight className="h-3 w-3 ml-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
