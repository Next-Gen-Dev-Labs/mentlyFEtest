"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { InfoBox } from "../ui/InfoBox";
import { RichTextEditor } from "./RichTextEditor";
import CheckBox from "../ui/CheckBox";
import { useState } from "react";
import ProgramList from "./ProgramList";
import ProgramInfoBox from "./ProgramInfoBox";
import Dropdown from "../ui/DropdownMenu";
import { useAppContext } from "@/app/context/AppContent";

const RightProgramInformation = () => {

    const { darktheme } = useAppContext()

    return (
        <>
            <div className="rightside w-full mt-6 px-4 md:px-6 lg:w-[55%] lg:m-4 lg:mr-14">
                <time
                    aria-label="Current local time: 13th February 2024, 12:15 PM"
                    dateTime="2024-02-13T12:15"
                    className="text-[#809FB8] flex justify-end mt-3">
                    13th February 2024, 12:15 PM <span className="text-sm flex items-center"> (Local time).</span>
                </time>

                <div className="my-10 py-4 px-4 mt-16 border border-[#D9E1E7]/50 rounded-[4px]">
                    <h1 className={`${darktheme ? "text-white" : "text-[#1C1D4E]"} text-center lg:text-start text-3xl font-bold mb-4`}>Mentorship Program</h1>
                    <div className="w-full h-full">
                        {/* BANNER */}
                        <div className="bg-[url('/Banner.png')] bg-cover bg-no-repeat rounded-lg h-[297px] lg:h-[206px] w-full flex items-center px-4 md:px-10 py-2 justify-between">
                            <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                                <Image
                                    src="/mentor-profile.png"
                                    alt="Mentor Profile Picture"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                                <div className="text-white">
                                    <h1 className="text-white text-start text-2xl md:text-3xl font-bold">
                                        Mastering the <br /> work-life Equation
                                    </h1>
                                    <p className="text-sm text-start">
                                        <span className="text-xs">with </span>
                                        Nwachukwu Peculiar
                                    </p>
                                    <button
                                        className="px-8 py-1 my-2 rounded-lg bg-gradient-to-r from-[#FF1B51] to-[#FFB800] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                                        aria-label="Join the Masterclass"
                                    >
                                        Masterclass
                                    </button>
                                </div>
                            </div>
                            <time
                                dateTime="2024-10-20T14:00"
                                className="text-white h-full w-fit font-bold text-base lg:font-semibold flex flex-col items-center justify-center">
                                20TH <br /> OCT,<br /> 2024 <br />
                                <span className='border-t border-t-white py-3 mt-3 text-base md:text-sm'>2 PM</span>
                            </time>
                        </div>

                        <div className="pt-6 mt-6 flex flex-col md:flex-row gap-16 justify-between">
                            <p className={`w-full md:max-w-[250px] md:h-[182px] text-justify ${darktheme ? "text-white" : "text-[#808080]"}`}>
                                UI/UX Design check-ins with Faith provide beginners
                                in UI/UX Design an introduction to the fundamentals,
                                guidance on building a design career, and a platform
                                to document their progress weekly.
                            </p>

                            <ul className={`w-[70%] flex flex-col px-8 mx-auto items-center md:justify-center py-2 rounded-lg shadow-md ${darktheme ? "text-white" : "text-appWarningtext"}`}>
                                <li className="w-full flex gap-8 pb-4 items-center">
                                    <Icon icon="mynaui:briefcase" aria-hidden="true" width="24" height="24" />
                                    <span className="font-semibold text-sm">Mentorship Program</span>
                                </li>

                                <li className="w-full flex gap-8 pb-4 items-center">
                                    <Icon icon="mynaui:calendar" aria-hidden="true" width="24" height="24" />
                                    <span className="font-semibold text-sm">21/4/2024 - 21/5/2024</span>
                                </li>

                                <li className="w-full flex gap-8 pb-4 items-center">
                                    <Icon icon="proicons:location" aria-hidden="true" width="24" height="24" />
                                    <span className="font-semibold text-sm">In Person</span>
                                </li>
                            </ul>
                        </div>

                        <ProgramInfoBox />
                    </div>
                </div>
            </div>

        </>
    );
};

export default RightProgramInformation;
