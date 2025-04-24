"use client";

import Image from "next/image";
import { ChevronDown, EllipsisVertical, Menu } from "lucide-react";
import EclipseImage from "./EclipseImage";
import UserChart from "./PieChart";
import RightDashboard from "./RightDashboard";

interface MainProps {
  toggleSidebar: () => void;
  onManageWidgets: () => void;
}

const programs = [
  {
    heading: "Fundamentals of User",
    heading2: "interface & Experience",
    badge: "Bootcamp",
    paragraph:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    bannerImage: "/banner1.png",
    lowerImage: "/mentor.png",
    lowerText: "Mentors",
    button1: "View Details",
    button2: "Analysis",
  },
  {
    heading: "Colour Hack Practical",
    heading2: "Group Call",
    badge: "Group Call",
    paragraph:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    bannerImage: "/banner2.png",
    lowerImage: "/host.png",
    lowerText: "Hosted By: Faith Okolo",
    button1: "View Details",
    button2: "Analysis",
  },
  {
    heading: "Colour Hack Practical",
    heading2: "Group Call",
    badge: "Group Call",
    paragraph:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    bannerImage: "/banner2.png",
    lowerImage: "/host.png",
    lowerText: "Hosted By: Self",
    button1: "View Details",
    button2: "Assign Mentor",
  },
];

const Main = ({ toggleSidebar, onManageWidgets }: MainProps) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 space-y-6 bg-[#f8f4fc]">
      <header className="sticky top-0 z-10 flex h-20 items-center justify-between shadow-md bg-[#FDFDFD] px-4 md:px-6 flex-shrink-0">
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu size={20} />
        </button>
        <div className="ml-auto flex items-center space-x-12 lg:space-x-20">
          <Image
            src="/notifications.png"
            alt="notification"
            width={24}
            height={24}
            className=""
          />
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="relative h-11 w-11 bg-[#8B72FC] rounded-full px-2 pt-1">
              <Image
                src="/hands.png"
                alt="User"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="hidden text-sm md:block">
              <div className="font-medium">Techrity Foundat...</div>
              <div className="text-xs text-gray-500">Member</div>
            </div>
            <div className="bg-[#6f01d0] rounded-[4px] w-6 h-6">
              <ChevronDown className="text-[#C2C2C2] h-6 w-6" />
            </div>
          </div>
        </div>
      </header>

      <main className="py-1 px-16 space-y-8">
        <div className="animate__animated animate__slideInRight flex justify-end">
          <div className="flex gap-6 items-center">
            <Image
              src="/uncolor.png"
              alt="layout"
              width={24}
              height={24}
              className=""
            />
            <Image
              src="/color.png"
              alt="layout"
              width={24}
              height={24}
              className=""
            />
            <button
              onClick={onManageWidgets}
              className="text-[#1F0954] text-base font-bold hover:underline flex items-center"
            >
              Manage Widgets
            </button>
          </div>
        </div>
        <div className="animate__animated animate__fadeIn rounded-[4px] bg-[#6F01D0] py-2 px-6 flex items-center justify-between">
          <h1 className="text-white text-xl font-semibold">
            Welcome Aboard, Blessing 👋
          </h1>
          <p className="text-[#BDBDBD] ml-6">
            We&apos;re thrilled to have you join Techrity Team!
          </p>
          <button className="bg-[#FFFFFF] text-[#1F0954] px-6 py-[8px] rounded-[8px] text-base font-bold">
            Update Profile
          </button>
        </div>

        <div className="container-div grid lg:grid-cols-[0.5fr_1.2fr] gap-4">
          <div className="w-full space-y-4">
            <div className="animate__animated animate__fadeInUp bg-[#ffffff] rounded-[8px] py-[10px] px-6">
              <div className="flex justify-between">
                <div className="flex gap-6 items-center">
                  <button>
                    <Menu className="text-[#000000]" />
                  </button>
                  <p className="text-[#B0B0B0] font-bold text-base">Programs</p>
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
              <div className="flex justify-end mt-3">
                <div className="flex items-center gap-4">
                  <p className="text-[#918C9C]">Filter</p>
                  <div className="custom-select flex items-center justify-between">
                    <select>
                      <option>Active</option>
                      <option>Away</option>
                      <option>Inactive</option>
                    </select>
                    <ChevronDown className="text-[#595564]" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-2">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="slowfade animate__animated animate__fadeIn rounded-lg overflow-hidden shadow-md border border-gray-100 px-4  pt-3"
                  >
                    <div className="relative rounded-[6.57px]">
                      <Image
                        src={program.bannerImage || "/placeholder.svg"}
                        alt={program.heading}
                        width={400}
                        height={120}
                        className="w-full h-[100px] object-cover rounded-[6.57px]"
                      />
                      <div className="absolute inset-0 bg-black/30 p-4 flex flex-col justify-between rounded-[6.57px]">
                        <div>
                          <h3 className="text-[#ffffff] font-bold text-base lg:text-lg">
                            {program.heading} <br /> {program.heading2}
                          </h3>
                          <div
                            className={`flex items-center gap-2  ${
                              program.badge === "Bootcamp"
                                ? "bg-[#D4E0F3] text-[#0077FF]"
                                : "bg-[#D4F3D4] text-[#008000]"
                            }  text-[7px] px-4 w-24 py-1 rounded-[10px] `}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                program.badge === "Bootcamp"
                                  ? "bg-[#0077FF]"
                                  : "bg-[#008000]"
                              } ml-1`}
                            ></div>{" "}
                            {program.badge}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 space-y-4">
                      <p className="text-[#A3A3A3] text-xs mt-1 line-clamp-2">
                        {program.paragraph}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            {program.lowerImage === "/mentor.png" ? (
                              <EclipseImage />
                            ) : (
                              <Image
                                src={program.lowerImage || "/placeholder.svg"}
                                alt={program.lowerText}
                                width={50}
                                height={50}
                                className={` rounded-full`}
                              />
                            )}

                            <span className="text-[#6C6C6C] text-[8px]">
                              {program.lowerText}
                            </span>
                          </div>
                        </div>
                        <div className="space-x-2">
                          <button className="border border-[#6F01D0] text-[#6F01D0] px-4 py-2 rounded text-[8.5px] font-medium">
                            {program.button1}
                          </button>
                          <button className="bg-[#6F01D0] text-white px-6 py-2 rounded text-[8.5px] font-medium">
                            {program.button2}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <UserChart />
          </div>
          <RightDashboard />
        </div>
      </main>
    </div>
  );
};

export default Main;
