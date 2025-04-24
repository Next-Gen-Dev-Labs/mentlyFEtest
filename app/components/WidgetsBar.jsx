'use client';
import React from "react";
import thumbnail from "../assets/icons/thumbnail.png"
import widget from "../assets/icons/widget.png"
import Image from "next/image";


  const WidgetsBar = ({ toggleWidget }) => {
    
    return (
      <div className="flex items-center justify-between flex-wrap  py-4 px-4 sm:px-6  ">
  
      <div className="flex items-center cursor-pointer  ml-auto " >
        
        <button className="relative cursor-pointer mr-3">
          <Image src={thumbnail } alt="thumbnail" />
        </button>

        <div  onClick={toggleWidget} className="w-12 h-12 flex items-center cursor-pointer justify-center mr-3" >
          <Image src={widget } alt="User Profile" className="w-8 h-8 " />
        </div>

        <div className="flex flex-col " >
          <span className="text-[14px] font-[400] text-[#1F0954]">Manage Widgets</span>

        </div>
      </div>
    </div>
    
     
    );
  }

  export default WidgetsBar;    
  