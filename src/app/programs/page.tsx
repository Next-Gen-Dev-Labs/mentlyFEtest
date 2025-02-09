"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { InfoBox } from "../components/ui/InfoBox";
import { RichTextEditor } from "../components/RichTextEditor";
import CheckBox from "../components/ui/CheckBox";
import { useState } from "react";
import ProgramList from "../components/ProgramList";
import ProgramInfoBox from "../components/ProgramInfoBox";
import Dropdown from "../components/ui/DropdownMenu";

const ProgramPages = () => {

    const [showSection, setShowSection] = useState(false);

    return (
        <div className="flex flex-col bg-[#FDFDFD] gap-8 lg:flex-row">
            <div className="leftside w-full px-4 md:px-6 my-10 lg:w-[45%] lg:pl-8 ">
                <div className="flex gap-2 justify-between relative">
                    <div className="flex gap-2 items-center cursor-pointer hover:drop-shadow-lg hover:text-[#FFB53F] text-[#F0C074]">
                        <Icon icon="ph:caret-left-bold" width="20" height="20" />
                        <p>Back To Home</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Dropdown
                            icon="hugeicons:settings-01"
                            color="#C2C2C2"
                            hover="mentlyBlue"
                            menu={["Delete", "clear"]} />
                        <Icon icon="solar:copy-linear" width="20" height="20" className="cursor-pointer hover:text-mentlyBlue  text-[#C2C2C2]" />
                        <span className="flex gap-2 items-center rounded-full bg-mentlyBlue px-4 py-1 text-white text-sm font-bold">
                            <Icon icon="ph:share-fat" width="20" height="20" />
                            <p>Share</p>
                        </span>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="py-10">
                    <h1 className="text-[#06152B] text-3xl font-bold">Program Information</h1>
                    <p className="text-text text-sm">Describe Section Title</p>
                </div>

                <div>
                    <div className="border border-mentlyBlue rounded-lg overflow-hidden mb-4">
                        <div className="p-4 flex items-center gap-3">
                            <Image src="Vector.svg" alt="input-text-icon" width={50} height={50} />
                            <Icon icon="icon-park-solid:down-one" className="text-[#555555]" width="24" height="24" />
                            <input
                                type="text"
                                placeholder="Describe Section Title e.g What you stand to learn"
                                className="flex-1 outline-none text-text placeholder-text"
                            />
                        </div>
                    </div>

                    <InfoBox>
                        Provide your prefered title for this section i.e What's in this Program for you?
                    </InfoBox>

                    {/* TEXT EDITOR */}
                    <RichTextEditor />

                    <div className="mt-4">
                        <InfoBox>
                            Provide a clear and concise description/information of your program.
                            This can include objectives, goals, necessary resources, or any specific instructions..
                        </InfoBox>
                    </div>


                    <button className="text-appDeepTextBlue border border-[#000000] w-full rounded-lg p-4 text-center mb-4">
                        <span className="flex items-center justify-center gap-2 w-full ">
                            <Icon icon="iconamoon:sign-plus-bold" width="24" height="24" />
                            <span className="">Add new section</span>
                        </span>
                        <p className="italic text-xs text-gray-400 mt-1">(maximum number of sections to add is 3)</p>
                    </button>


                    <div className="flex items-center gap-2">
                        <CheckBox
                            borderColor={showSection ? "mentlyBlue" : "[#4D4D4D]"}
                            bgColor={showSection ? "mentlyBlue" : "white"}
                            isActive={showSection}
                            onChange={() => setShowSection(!showSection)}
                        />
                        <label htmlFor="show-section" className="text-sm text-[#333333]">
                            Show this section when Published
                        </label>
                    </div>

                    <ProgramList />
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-4">
                    <button className="text-[#A4A5B8] text-center hover:text-gray-900 w-[60%] font-bold">
                        Go Back
                    </button>
                    <button className="flex bg-[#1F1147] text-white hover:bg-[#2a1861] px-6 rounded-lg py-4 gap-2">
                        Save & Proceed
                        <span className="flex items-center">
                            <Icon icon="icon-park-solid:down-one" className="text-white" width="20" height="20" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="rightside w-full mt-6 px-4 md:px-6 lg:w-[55%] bg-[#FDFDFD] lg:m-4 lg:mr-14">
                <time
                    aria-label="Current local time: 13th February 2024, 12:15 PM"
                    dateTime="2024-02-13T12:15"
                    className="text-[#809FB8] flex justify-end mt-3">13th February 2024, 12:15 PM <span className="text-sm flex items-center"> (Local time).</span></time>

                <div className="my-10 py-4 px-4 mt-16 border border-[#D9E1E7]/50 rounded-[4px] ">
                    <h1 className="text-[#1C1D4E] text-3xl font-bold mb-4">Mentorship Program</h1>
                    <div className="w-full h-full">
                        {/* BANNER */}
                        <div className="bg-[url('/Banner.png')] bg-cover bg-no-repeat rounded-lg h-[297px] lg:h-[206px] w-full flex items-center px-4 md:px-10 py-2 justify-between">
                            <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                                <Image src="/mentor-profile.png" alt="mentor-profile-picture" width={120} height={120} className="rounded-lg " />
                                <div className="text-white">
                    
                                        <h1 className="text-white text-start text-2xl md:text-3xl font-bold">Mastering the <br /> work life Equation</h1>
                                        <p className="text-sm text-start">
                                            <span className="text-xs">with </span>
                                            Nwachukwu Peculiar
                                        </p>
                                

                                    <button className="r px-8 py-1 my-2 rounded-lg bg-gradient-to-r from-[#FF1B51] to-[#FFB800] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                                        Masterclass
                                    </button>
                                </div>
                            </div>
                            <time
                                dateTime="2024-10-20T14:00"
                                className="text-white h-full w-fit font-bold text-base lg:font-semibold flex flex-col items-center justify-center">
                                20TH <br />
                                OCT,<br />
                                2024 <br />
                                <span className='border-t border-t-white py-3 mt-3 text-base md:text-sm'>2 PM</span>
                            </time>
                        </div>

                        <div className="pt-6 mt-6 flex flex-col md:flex-row gap-16 justify-between ">
                            <p className="w-full md:max-w-[250px] md:h-[182px]  text-justify text-[#808080]">
                                UI/UX Design check ins with faith is a way for beginners
                                in UI/UX Design to get started about the
                                fundamentals and how they can build a Design Career,
                                share, document their progress on a weekly basis.
                            </p>

                            <ul className="text-appWarningtext w-[70%] flex flex-col px-8 mx-auto items-center md:justify-center py-2 rounded-lg shadow-md">
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
                                    <span className="font-semibold text-sm ">In Person</span>
                                </li>
                            </ul>
                        </div>

                        <ProgramInfoBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramPages;