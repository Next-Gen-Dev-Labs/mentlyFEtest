'use client'

import ProgramBanner from "@/components/ProgramBanner";
import {ArrowLeft2, Setting2,Briefcase,Calendar2,Location, ArrowDown2, More, Import } from "iconsax-react";
import Link from "next/link";
import { IoCopyOutline, IoArrowDown } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiWarningCircle } from "react-icons/pi";
import { RiShareForwardLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { programInfo } from "./programs";
import { useState, useRef } from "react";
import { CgMoreVertical } from "react-icons/cg";



export default function ProgramPage() {
 
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('bold');
  const dropdownRef = useRef(null);

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    setDropdownOpen(false); // Close dropdown after selection
  };


  const getTextStyleClass = () => {
    switch (selectedStyle) {
      case 'bold':
        return 'font-extrabold';
      case 'italic':
        return 'italic';
      case 'underline':
        return 'underline';
      default:
        return 'font-normal';
    }
  };
    return (
      <div className="mt-2">
        <div className="flex justify-end md:hidden ">
    <p className="text-[#809FB8] text-md">13th February 2024, 12:15 PM <span className="text-sm">(Local time).</span></p>
</div>
     <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] ">
            <div className="col bg-[#FDFDFD] dark:bg-black p-3 md:p-6 ">
            <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
  <ArrowLeft2 size={20} color="#F0C074" />
  <h4 className="text-tertiary font-semibold text-[14px] md:text-[16px]">Back to Home</h4>
</Link>
<div className="flex items-center gap-6">
    <Setting2 size={24} color="#C2C2C2" />
    <IoCopyOutline style={{color:"#C2C2C2", fontSize:'1.5rem'}} />
  
    <button   className="flex items-center bg-primary py-1 px-2 gap-2 text-white rounded-full">  <RiShareForwardLine style={{color:"#ffffff", fontSize:'1rem'}}/>Share</button>
</div>
</div>
<div className="mt-4 md:mt-8">
  <h1 className="text-[#06152B] dark:text-white text-[24px] md:text-[32px] font-bold">Program Information</h1>
  <p className="text-[#828282] dark:text-white">Describe Section Title</p>
  <div className="mt-3">
  <div className="flex items-center border-2 border-[#1F0954] dark:border-[#ffffff] rounded-lg p-3 w-full max-w-md gap-4">
  <div className="relative flex">
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-14 text-[28px] h-10 border-2 border-dashed border-[#2E1D5F] text-[#2E1D5F] rounded-md ${getTextStyleClass()}`}
      >
        T
      </div>
   
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center  cursor-pointer rel"
      >
        
        <TiArrowSortedDown
          size={24}
          color="
#555555"
          className={`transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"} cursor-pointer`}
          ref={dropdownRef}
        />
      </div>
   {dropdownOpen && (
        <div className="absolute -right-20 top-10 w-30 bg-white shadow-lg rounded-lg py-2 transform transition-all duration-200 ease-out scale-95 opacity-100 animate-fadeInSlide">
          <button
            onClick={() => handleStyleChange('normal')}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-[#2E1D5F] hover:text-white"
          >
            Normal
          </button>
          <button
            onClick={() => handleStyleChange('bold')}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-[#2E1D5F] hover:text-white"
          >
            Bold
          </button>
          <button
            onClick={() => handleStyleChange('italic')}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-[#2E1D5F] hover:text-white"
          >
            Italic
          </button>
          <button
            onClick={() => handleStyleChange('underline')}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-[#2E1D5F] hover:text-white"
          >
            Underline
          </button>
        </div>
      )}
      </div>

     
      <input
        type="text"
        placeholder="Describe Section Title e.g What you stand to learn"
        className="flex-1 border-none outline-none text-gray-500 bg-transparent px-2"
      />
    </div>
    <div className="mt-2 flex items-center gap-2 bg-[#CEE1FB] p-3">
    <div>
      <PiWarningCircle color="#086BED" size={26}/>
      </div>
      <p className="text-[12px] text-[#777795]">Provide your prefered title for this section i.e What’s in this Program for you?</p>
    </div>
    
  </div>
  <div>
  <div className="mt-2 flex items-center gap-2 bg-[#CEE1FB] p-3">
    <div>
      <PiWarningCircle color="#086BED" size={26}/>
      </div>
      <p className="text-[12px] text-[#777795]">Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions..</p>
    </div>
  </div>
  <div className="flex flex-col mt-3 items-center border border-[#000000] dark:border-[#ffffff] rounded-lg p-2 w-full max-w-md gap-2">
    <div className="flex gap-3 items-center">
      <GoPlus size={16} color='#494A71'/>
      <h6 className="text-[#494A71] font-semibold">Add new section</h6>
    </div>
    <p className="text-[10px] md:text-[12px] italic text-[#777795]">(maximum number of sections to add is 3)</p>
  </div>
</div>
<div className="mt-5 flex flex-col gap-4">
{programInfo.map((program) => (
        <div key={program.id}  className={`border ${selectedProgram?.id === program.id ? "border-[#FEE0B1] bg-[#FFFAF2]" : "border-[#C2C2C2] bg-[#F1F1F1]"} rounded-lg p-4 shadow-md cursor-pointer`}
             >
          <div className="flex justify-between items-center cursor-pointer text-dark dark:text-white" >
            <p className="text-[#1F0954] font-semibold">{program.sectionTitle}</p>
            <div className="flex gap-3" items-center>
            <ArrowDown2
  size="20"
  color="#777795"
  className={`transition-transform duration-300 ${
    selectedProgram?.id === program.id ? "rotate-180" : "rotate-0"
  } cursor-pointer`}
  onClick={(e) => {
    e.stopPropagation(); // Prevents triggering the parent div's onClick
    setSelectedProgram(selectedProgram?.id === program.id ? null : program);
  }}
/>

                         <CgMoreVertical style={{color:'#777795'}} />
                         </div>
          </div>
        
        </div>
      ))}
      </div>
</div>
<div className="p-3 md:p-6">
<div className="md:flex justify-end mb-[20px] md:mb-[70px] hidden ">
    <p className="text-[#809FB8] text-md">13th February 2024, 12:15 PM <span className="text-sm">(Local time).</span></p>
</div>
<div className=" px-3 py-2" style={{border: '1px solid #D9E1E780'}}>
<h1 className="text-[#1C1D4E] dark:text-white font-black text-[20px] md:text-[32px] mb-2">Mentorship Program</h1>
<ProgramBanner/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-4 md:mt-8 pt-0 md:pt-4">
  <div>
    <p className="text-[#808080] text-md">UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started about the fundamentals and how they can build a Design Career, share, document their progress on a weekly basis.

</p>
  </div>
  <div className="shadow-[0px_6px_16px_0px_#0000000F] px-3 py-3 md:px-6 md:py-8 flex flex-col gap-4 md:gap-6
">
  <div className="flex items-center gap-10">
    <Briefcase size={24} color="#777795" />
    <h6 className="text-[#777795] font-bold">Mentorship Program</h6>
  </div>
  <div className="flex items-center gap-10">
    <Calendar2 size={24} color="#777795" />
    <h6 className="text-[#777795] font-bold">21/4/2024-21/5/2024</h6>
  </div>
  <div className="flex items-center gap-10">
    <Location size={24} color="#777795" />
    <h6 className="text-[#777795] font-bold">In Person</h6>
  </div>
</div>
</div>
<div className="mt-5 flex flex-col gap-4">
{selectedProgram &&
        <div className="border border-[#FEE0B1]  bg-[#FFFAF2] rounded-lg p-5 shadow-md">
         <h3 className="text-[#1F0954] font-semibold text-[20px]">{selectedProgram.sectionTitle}</h3>
         <h4 className="text-[#595564] mt-3 md:mt-8">{selectedProgram?.description}</h4>
        </div>
      }
      </div>
</div>
</div>
        </div>
      </div>
    );
  }
  