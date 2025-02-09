"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { InfoBox } from "../ui/InfoBox";
import CheckBox from "../ui/CheckBox";
import { useState } from "react";
import ProgramList from "./ProgramList";
import ProgramInfoBox from "./ProgramInfoBox";
import Dropdown from "../ui/DropdownMenu";
import { RichTextEditor } from "./RichTextEditor";
import { useAppContext } from "@/app/context/AppContext";

const LeftProgramInformation = () => {
    // State to manage visibility of a section
    const [showSection, setShowSection] = useState(false);

    const { darktheme } = useAppContext()

    return (
      <>
            {/* Left Section */}
            <div id="left-side" className="w-full min-h-screen px-4 md:px-6 mt-10 lg:w-[45%] lg:pl-8 shadow-[0_2px_4px_rgba(0,0,0,0.0622)]">
                {/* Navigation and Action Icons */}
                <div className="flex gap-2 justify-between relative">
                    {/* Back Button*/}
                    <button 
                        aria-label="Go back to home page" 
                        className="flex gap-2 items-center cursor-pointer hover:drop-shadow-lg hover:text-[#FFB53F] text-[#F0C074]"
                    >
                        <Icon icon="ph:caret-left-bold" width="20" height="20" />
                        <span>Back To Home</span>
                    </button>
                    
                    {/* Settings and Share Actions */}
                    <div className="flex gap-4 items-center">
                        <Dropdown 
                            icon="hugeicons:settings-01" 
                            color="#C2C2C2" 
                            hover="mentlyBlue" 
                            menu={["Delete", "Clear"]} 
                            aria-label="Settings menu"
                        />
                        <button aria-label="Copy content" className="cursor-pointer hover:text-mentlyBlue text-[#C2C2C2]">
                            <Icon icon="solar:copy-linear" width="20" height="20" />
                        </button>
                        
                        <button aria-label="Share program" className="flex gap-2 items-center rounded-full bg-mentlyBlue px-4 py-1 text-white text-sm font-bold">
                            <Icon icon="ph:share-fat" width="20" height="20" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="py-10">
                    <h1 className={`${darktheme ? "text-white" : "text-[#06152B]"} text-3xl font-bold`}>Program Information</h1>
                    <p className="text-text text-sm">Describe Section Title</p>
                </div>

                {/* Input Fields*/}
                <div>
                    <div className="border border-mentlyBlue rounded-lg overflow-hidden mb-4">
                        <div className="p-4 flex items-center gap-3">
                            <Image src="Vector.svg" alt="Input field icon" width={50} height={50} />
                            <Icon icon="icon-park-solid:down-one" className="text-[#555555]" width="24" height="24" />
                            <input
                                type="text"
                                placeholder="Describe Section Title e.g What you stand to learn"
                                className="flex-1 outline-none text-text placeholder-text bg-transparent"
                                aria-label="Describe Section Title Input"
                            />
                        </div>
                    </div>

                    <InfoBox>
                        Provide your preferred title for this section i.e. What's in this Program for you?
                    </InfoBox>

                    {/* Rich Text Editor */}
                    <RichTextEditor />

                    <div className="mt-4">
                        <InfoBox>
                            Provide a clear and concise description of your program, including objectives, goals, necessary resources, or any specific instructions.
                        </InfoBox>
                    </div>

                    {/* Button for Adding New Section */}
                    <button 
                        className={` ${darktheme ? "text-white" : "text-appDeepTextBlue"} border border-[#000000] w-full rounded-lg p-4 text-center mb-4`} 
                        aria-label="Add new section (Maximum allowed is 3)"
                    >
                        <span className="flex items-center justify-center gap-2 w-full">
                            <Icon icon="iconamoon:sign-plus-bold" width="24" height="24" />
                            <span>Add new section</span>
                        </span>
                        <p className="italic text-xs text-gray-400 mt-1">(Maximum number of sections to add is 3)</p>
                    </button>

                    {/* Checkbox */}
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
      </>
    );
};

export default LeftProgramInformation;
