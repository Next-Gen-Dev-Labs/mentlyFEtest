// components/DashboardHeader.tsx
"use client";
import { Bell } from "lucide-react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Empty left side if needed */}
      <div></div>

      {/* Right side */}
      <div className="flex items-center gap-6">
       

        <div className="relative">

       
        <Bell className="text-gray-500  relative w-5 h-5 cursor-pointer" />
        <GoDotFill className="text-[#FF3E3E] -top-[0.32rem] right-1 absolute text-[10px]"/>
       </div>
      <div className="flex   gap-2">
        <div className="w-[40px] h-[40px] p-2 place-items-center rounded-full bg-purple-600">

      
          <Image
            src="/logo-mently.png"
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full"
          />
            </div>
          <div className="text-right ">
            <p className="text-sm font-semibold text-gray-800">Techrity Foun...</p>
            <p className="text-xs text-start text-gray-500">Member</p>
          </div>
          <div className="rounded-md w-[19px] relative h-[18px] bg-purple-600 mt-4">
          <IoIosArrowDown className="absolute text-[16px] text-[#C2C2C2] -bottom-2 left-1" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar