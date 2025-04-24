 import React from "react";
import logo from "../assets/icons/Group 448.png"
import nofification from "../assets/icons/notification.png"
import userProfileArrowDown from "../assets/icons/Frame 1321318580.png"
import Image from "next/image";
import { ClosingBar } from "../assets/icons/sideBarIcons";


  const Topbar = ({ isOpen, toggleSidebar }) => {
    return (
      <div className="flex items-center justify-between flex-wrap bg-[#FDFDFD] h-auto py-4 px-4 sm:px-6 shadow-lg sticky top-0 z-50">
        <button onClick={toggleSidebar} className={`${isOpen ? 'hidden' : 'block'}`} >
          <ClosingBar />
        </button>
      <div className="flex items-center gap-4 ml-auto">
        
        <div className="relative cursor-pointer mr-5">
          
          <Image src={nofification} alt="Notification" className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-[#FF3E3E] text-white text-xs leading-none rounded-full px-1 w-3 h-3">
            
          </span>
        </div>
    
     
        <div className="w-12 h-12 rounded-full bg-[#8B72FC] flex items-center justify-center">
          <Image src={logo} alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
    
      
        <div className="flex flex-col ">
          <span className="text-[14px] font-[400] text-[#53547B]">Techrify Founder...</span>
          <span className="text-[12px] font-[400] text-[#53547B]">Member</span>
        </div>
    
        
        <div className="relative cursor-pointer">
          <Image src={userProfileArrowDown} alt="Arrow" className="w-[20px] h-[25px]" />
        </div>
      </div>
    </div>
    
     
    );
  }

  export default Topbar;    
  