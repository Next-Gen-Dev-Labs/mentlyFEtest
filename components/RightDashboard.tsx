import React from "react";
import Applications from "./Applications";
import { ArrowRight, EllipsisVertical, Menu } from "lucide-react";
import EclipseImage from "./EclipseImage";
import Image from "next/image";

const groups = [
  {
    badge: "Ongoing",
    bannerImage: "/rec1.png",
    button: "bg-[#6F01D0]",
  },
  {
    badge: "Upcoming",
    bannerImage: "/rec2.png",
    button: "bg-[#6F01D04D]",
  },
  {
    badge: "Ongoing",
    bannerImage: "/rec3.png",
    button: "bg-[#6F01D0]",
  },
];

const RightDashboard = () => {
  return (
    <div className="w-full space-y-4 ">
      <div className="bg-[#ffffff] rounded-[8px] animate__animated animate__slideInRight">
        <div className="flex justify-between  py-[10px] px-6  h">
          <div className="flex gap-6 items-center">
            <button>
              <Menu className="text-[#000000]" />
            </button>
            <p className="text-[#B0B0B0] font-bold text-base">Group Calls</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="font-semibold text-[#6F01D0] text-[12.27px]">
              See all
            </p>
            <button>
              <EllipsisVertical className="text-[#000000]" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2 bg-[#ffffff] py-3 rounded-lg">
          {groups.map((group, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#f5f1fe] overflow-hidden shadow-md border border-gray-100 px-4 pb-3 pt-4"
            >
              <div className="relative rounded-[6.57px]">
                <Image
                  src={group.bannerImage}
                  alt={group.bannerImage}
                  width={400}
                  height={150}
                  className="w-full h-[110px] object-cover rounded-[6.57px]"
                />
                <div className="absolute inset-0 bg-black/5 p-4 flex flex-col justify-between rounded-[6.57px]"></div>
              </div>
              <div
                className={`flex items-center gap-2  ${
                  group.badge === "Bootcamp"
                    ? "bg-[#D4E0F3] text-[#0077FF]"
                    : "bg-[#D4F3D4] text-[#008000]"
                }  text-[7px] px-4 w-24 py-1 rounded-[10px] mt-2`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    group.badge === "Bootcamp" ? "bg-[#0077FF]" : "bg-[#008000]"
                  } ml-1`}
                ></div>{" "}
                {group.badge}
              </div>
              <div className=" p-3 space-y-5">
                <p className="text-[#595564] text-base mt-2 line-clamp-2 border-b-[0.81px] border-[#D0D5DD] pb-1">
                  Weekly Meeting - Product <br />
                  Demo Review with Testers
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 border-r-[0.81px] border-[#D0D5DD] items-center pr-8">
                    <Image
                      src="/calendar.png"
                      alt="calendar"
                      width={50}
                      height={50}
                      className={`h-4 w-4 `}
                    />{" "}
                    <span className="text-[#595564] font-medium text-xs">
                      Mon. Jul 30, 2024
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/time.png"
                      alt="time"
                      width={50}
                      height={50}
                      className={`h-5 w-5 `}
                    />{" "}
                    <span className="text-[#595564] font-medium text-xs">
                      9:00 - 11:00AM
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/lambo.png"
                      alt="time"
                      width={34}
                      height={34}
                      className={`rounded-full `}
                    />
                    <div>
                      <h2 className="text-[#A195C0] text-sm lg:text-[7.47px]">
                        Study Group
                      </h2>
                      <h2 className="text-[#595564] text-base lg:text-[9.08px] font-semibold">
                        UX Strategy Study group
                      </h2>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-[#A195C0] text-[7.47px]">Mentors</h2>
                    <EclipseImage />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button className="border border-[#6F01D0] text-[#6F01D0] px-4 py-3 rounded-[7.01px] text-xs font-medium">
                    View Participants
                  </button>
                  <button
                    className={`${group.button} text-white px-6 py-3 rounded-[7.01px] text-xs font-medium flex gap-1 items-center`}
                  >
                    Join Now{" "}
                    <span>
                      <ArrowRight className="text-[#ffffff] w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Applications />
    </div>
  );
};

export default RightDashboard;
