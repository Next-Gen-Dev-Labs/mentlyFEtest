import { EllipsisVertical, Menu } from "lucide-react";
import React from "react";
import Mentors from "./Mentors";
import RecentActivities from "./RecentActivities";
import Image from "next/image";

const spanItems = [
  {
    title: "Product Designer",
    bg: "bg-[#F3ECF9] border-[#DDCEEE]",
    color: "text-[#9985A7]",
  },
  {
    title: "4years Experience",
    bg: "bg-[#E8FDFB] border-[#A1BDBA]",
    color: "text-[#58948E]",
  },
  {
    title: "Lagos, Nigeria",
    bg: "bg-[#E3ECF9] border-[#ABBEE0]",
    color: "text-[#8196B5]",
  },
  {
    title: "GMT +1",
    bg: "bg-[#F4F4F4] border-[#C8C8C8]",
    color: "text-[#595564]",
  },
];

const students = [
  {
    name: "Adeati Samuel",
    img: "/ade.jpg",
  },
  {
    name: "Maxwell Smith",
    img: "/max.png",
  },
  {
    name: "Adeati Samuel",
    img: "/ade.jpg",
  },
  {
    name: "Maxwell Smith",
    img: "/max.png",
  },
];

const Applications = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4">
      <section className="animate__animated animate__slideInUp col-span-1 row-span-2 bg-[#ffffff] rounded-[8px] space-y-6 px-4 py-6">
        <div className="flex justify-between  rounded-[8px]">
          <div className="flex gap-6 items-center">
            <button>
              <Menu className="text-[#000000]" />
            </button>
            <p className="text-[#B0B0B0] font-bold text-base">Applications</p>
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
        <div>
          <div className="border-b border-[#DBDBDB] pb-4 space-y-8">
            <h2 className="text-[#7D8DA6] text-[10px] pl-6">Mentors</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 px-2">
                <input
                  type="checkbox"
                  className="border border-[#A5A5A5] rounded-[2px]"
                />
                <Image
                  src="/max.png"
                  alt="avatar"
                  width={34}
                  height={34}
                  className={`rounded-full h-8 w-8`}
                />
                <div className="">
                  <h1 className="text-[#4F4F4F] font-bold text-[14.4px]">
                    Maxwell Smith
                  </h1>
                  <p className="text-[#7D8DA6] text-[10px]">
                    maxwellsmith@gmail.com
                  </p>
                </div>
              </div>
              <div className="space-x-3">
                <button className="bg-[#FFEDED] border-[0.61px] border-[#D09696] rounded-[6.11px] px-6 py-3 text-[#D83535] text-[9.77px] font-medium">
                  Reject
                </button>
                <button className="bg-[#D83535]  rounded-[6.11px] px-6 py-3 text-[#FFFFFF] text-[9.77px] font-medium">
                  Accept
                </button>
              </div>
            </div>
            <div className="flex justify-between flex-wrap px-8">
              {spanItems.map((items) => (
                <span
                  key={items.title}
                  className={`border-[0.86px] ${
                    items.title === "Lagos, Nigeria" &&
                    "flex items-baseline gap-1"
                  } ${items.bg} ${
                    items.color
                  } text-center rounded-[5.19px] px-6 py-1 text-[8.65px] font-medium`}
                >
                  {items.title === "Lagos, Nigeria" && (
                    <Image
                      src="/flag.png"
                      alt="avatar"
                      width={34}
                      height={34}
                      className={` h-2 w-3`}
                    />
                  )}{" "}
                  {items.title}
                </span>
              ))}
            </div>
          </div>
          <div className=" pb-4 space-y-6 mt-8">
            <h2 className="text-[#7D8DA6] text-[10px] pl-6">Students</h2>

            {students.map((student, index) => (
              <div
                key={index}
                className={`${
                  index === students.length - 1
                    ? ""
                    : "border-b border-[#DBDBDB]"
                } pb-4 space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5 px-2">
                    <input
                      type="checkbox"
                      className="border border-[#A5A5A5] rounded-[2px]"
                    />
                    <Image
                      src={student.img}
                      alt={student.name}
                      width={34}
                      height={34}
                      className={`rounded-full h-8 w-8`}
                    />
                    <div className="">
                      <h1 className="text-[#4F4F4F] font-bold text-[14.4px]">
                        {student.name}
                      </h1>
                      <p className="text-[#7D8DA6] text-[10px]">
                        maxwellsmith@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="space-x-3">
                    <button className="bg-[#FFEDED] border-[0.61px] border-[#D09696] rounded-[6.11px] px-6 py-3 text-[#D83535] text-[9.77px] font-medium">
                      Reject
                    </button>
                    <button className="bg-[#D83535]  rounded-[6.11px] px-6 py-3 text-[#FFFFFF] text-[9.77px] font-medium">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Mentors />
      <RecentActivities />
    </section>
  );
};

export default Applications;
