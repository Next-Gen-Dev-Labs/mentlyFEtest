import Image from 'next/image';
import React from 'react';
import { DateIcon, TimeIcon } from '../assets/icons/sideBarIcons';

const GroupCallCard = ({
  title,
  image,
  tag,
  arrow,
  profileImages = [],
  buttons = [],
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-1 min-w-[350px] md:min-w-[400px] xl:min-w-[270px]">
      
      {/* Image */}
      <div className=" ">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Title */}
      <p className="text-base font-[400] text-[#595564]">{title}</p>

      {/* Tag Badge */}
      <div className={`flex items-center gap-1 w-fit px-2 py-1 text-xs font-bold rounded-full 
        ${tag === 'Upcoming' ? 'bg-green-100 text-[#1F8B01]' : 'bg-blue-100 text-[#1C0AE1]'}`}>
        <span className={`w-2 h-2 rounded-full ${tag === 'Upcoming' ? 'bg-green-600' : 'bg-blue-600'}`}></span>
        <span className='text-[9.99px] font-[400]'>{tag}</span>
      </div>

      {/* Date and Time - Row Flex */}
      <div className="flex justify-between items-center  text-[#595564] text-[8.08px] font-[500]">
        <div className="flex items-center gap-2">
          <DateIcon />
          <span className=''>12th March 2023</span>
        </div>
        <div className="flex items-center gap-2">
          <TimeIcon />
          <span>10:00 AM - 12:00 PM</span>
        </div>
      </div>

      {/* Group & Mentor Info */}
      <div className="flex justify-between items-center text-sm text-[#595564] text-[8.08px] font-[500]">
        <div className="flex items-center gap-2">
          <Image
            src={profileImages[0]}
            width={24}
            height={24}
            alt="Profile"
            className="rounded-full"
          />
          <span>Study Group</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={profileImages[1] || profileImages[0]}
            width={24}
            height={24}
            alt="Mentor"
            className="rounded-full"
          />
          <span>Mentor</span>
        </div>
      </div>

      {/* Buttons - Row */}
      <div className="flex gap-3 justify-between">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={`flex gap-1 px-4 py-2 text-xs rounded-md transition-all duration-200 ${
              btn.variant === 'primary'
                ? 'bg-purple-700 text-white hover:bg-purple-800'
                : 'border border-purple-700 text-purple-700 hover:bg-purple-100'
            }`}
          >
            {btn.label} <span>{btn.arrow}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GroupCallCard;
