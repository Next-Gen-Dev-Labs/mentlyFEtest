'use client';

import React, { useState, useEffect } from 'react';
import CompanyLogo from './CompanyLogo';
import Nav from './Nav/Nav';
import CancelIcon from '../../../public/svg/CancelIcon';
import HamburgerIcon from '../../../public/svg/HamburgerIcon';
import Image from 'next/image';

export default function Sidebar() {
  // For desktop sidebar expansion
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  // For mobile sidebar open/close state
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const toggleWidth = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      }
    };
  
    // Check immediately on mount
    handleResize();
  
    // Listen for window resizes
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <>
      {/* Desktop Sidebar (visible on md and above) */}
      <aside
        className={`hidden md:flex bg-mentlyBlue h-screen flex-col items-center justify-between gap-[1rem] py-[36px] overflow-auto overflow-x-hidden hide-scrollbar transition-all duration-700 ${
          isExpanded ? 'w-[11rem]' : 'w-[6rem]'
        }`}
      >
        {/* Logo & Nav Toggle */}
        <div className="flex flex-col items-center justify-between gap-[1rem] h-[8rem]">
          <CompanyLogo />
          <div
            className="w-[32px] h-[32px] cursor-pointer"
            onClick={toggleWidth}
          >
            <Image
              src="/icons/navexpand.png"
              alt="Expand Sidebar"
              className="w-full h-auto object-cover"
              width={32}
              height={32}
            />
          </div>
        </div>
        {/* Navigation */}
        <Nav isExpanded={isExpanded} />
        {/* Little Banner */}
        <div className="w-[84px] h-[126px] rounded-[8px] bg-[#ffffff1F] flex flex-col justify-between items-center p-2 py-5">
          <div className="w-[20px] h-[20px]">
            <Image
              src="/icons/user-tag.png"
              alt="User Tag"
              className="w-full h-auto object-cover"
              width={20}
              height={20}
            />
          </div>
          <p className="text-[10px] underline text-[#F0C074]">
            Visit Mently Help Desk Here
          </p>
        </div>
        {/* Toggle (optional extra icon) */}
        <div>
          <Image src="/icons/Toggle.png" alt="Toggle" width={32} height={19} />
        </div>
      </aside>

      {/* Hamburger Icon for Mobile (visible below md) */}
      <div className="md:hidden fixed top-7 left-4 z-30">
        <button onClick={toggleMobileSidebar}>
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile Sidebar (visible below md) */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-full bg-mentlyBlue z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '30%' }}
      >
        {/* Close Icon */}
        <div className="flex justify-end w-full">
          <button onClick={toggleMobileSidebar}>
            <CancelIcon color="white" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-between py-[36px] overflow-auto overflow-x-hidden hide-scrollbar h-full relative">
          {/* Logo & Nav Toggle */}
          <div className="flex flex-col items-center justify-center gap-[1rem] h-fit">
            <CompanyLogo className="absolute top-0" />
            <div
              className="w-[20px] h-[20px] cursor-pointer hidden"
              onClick={toggleWidth}
            >
              <Image
                src="/icons/navexpand.png"
                alt="Expand Sidebar"
                className="w-full h-auto object-cover"
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Navigation */}
          <Nav isExpanded={isExpanded} />
          {/* Little Banner */}
          <div className="w-[84px] h-[126px] rounded-[8px] bg-[#ffffff1F] flex flex-col justify-between items-center p-2 py-5">
            <div className="w-[20px] h-[20px]">
              <Image
                src="/icons/user-tag.png"
                alt="User Tag"
                className="w-full h-auto object-cover"
                width={20}
                height={20}
              />
            </div>
            <p className="text-[10px] underline text-[#F0C074]">
              Visit Mently Help Desk Here
            </p>
          </div>
          {/* Toggle (optional extra icon) */}
          <div>
            <Image
              src="/icons/Toggle.png"
              alt="Toggle"
              width={30}
              height={20}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
