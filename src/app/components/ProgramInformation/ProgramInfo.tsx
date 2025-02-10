'use client';

import React, { useState } from 'react';
import IconWithModal from '../IconWithModal';
import Image from 'next/image';

interface props {
  title: string;
  subtitle: string;
}

const ProgramInfo: React.FC<props> = ({ title, subtitle }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className="w-full border border-mentlyGray rounded-[8px] px-[1rem] bg-[#F1F1F1] transition-all duration-300 flex flex-col justify-start items-center"
      style={{ maxHeight: isExpanded ? '150px' : '48px' }}
    >
      <div className="flex justify-between items-center w-full mt-3">
        <p className="font-[500] text-mentlyBlue">{title}</p>
        <div className="w-[60px] h-[24px] flex justify-between items-center">
          <div
            onClick={toggleExpand}
            className={`w-[24px] h-[24px] flex justify-center items-center cursor-pointer transition-transform duration-300 ${
              isExpanded ? 'rotate-0' : 'rotate-180'
            }`}
          >
            <Image
              src="/icons/chevronup.png"
              alt="Toggle details"
              className="w-full h-auto"
              width={24}
              height={24}
            />
          </div>
          <div className="w-[24px] h-[24px] flex justify-center items-center">
            <IconWithModal
              icon="/icons/more.png"
              option1="Delete"
              option2="Edit"
              modalClass="top-[100%] w-[68px] h-[64px] rounded-0 text-mentlyGray2 font-[400] shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Additional text that appears on expand */}
      <div className="mt-2">
        <p
          className={`transition-opacity duration-300 text-[12px] text-mentlyGray2 text-left ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ProgramInfo;
