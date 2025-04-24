import Image from 'next/image';
import React from 'react';
import { CountryImage } from '../assets/icons/sideBarIcons';

const ApplicationCard = ({
    name,
    email,
    profileImage,  
    buttons = [],
  }) => {
    return (
    


      <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
          {/* Header */}
        {/*checkbox and profileImage name and email sin col with two buttton all flex row  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <Image src={profileImage} alt="Profile" width={20} height={70} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-[14.4px] font-[700] text-[#4F4F4F]">{name}</span>
              <span className="text-[10px] text-[#7D8DA6]">{email}</span>
            </div>
          </div>
          {/* Add more elements here if needed */}
          <div className="flex gap-2">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 text-[7.88px] rounded-sm ${
            btn.variant === 'primary'
              ? 'bg-[#6F01D0] text-[#FFFFFF]'
              : 'border border-[#D09696] text-[#D83535]'
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
   
    </div>

     {/* flex container with 4 botton for job title, expearience year, location , time all with borders and radius */}
     <div className="flex gap-1 mt-1">
        <div className="border border-[#DDCEEE]  bg-[#F3ECF9] rounded-md px-2 py-1 text-[8.65px] text-[#9985A7] will-change-contents">Product Designer</div>
        <div className="border border[#A1BDBA] bg-[#E8FDFB] rounded-md px-2 py-1 text-[8.65px] text-[#58948E]">4years Experience</div>
        <div className="flex  border border-[#ABBEE0] rounded-md px-2 py-1 text-[8.65px] text-[#8196B5]"> <CountryImage/> Lagos, Nigeria</div>
        <div className="border border-[#C8C8C8] rounded-md px-2 py-1 text-[8.65px] text-[#595564]">GMT +1</div>
      <div/>
      </div>
       
   
   
  </div>
     
    );
  };
  
  export default ApplicationCard;
  