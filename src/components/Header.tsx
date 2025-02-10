"use client";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/outline";
import { ArrowDown2 } from "iconsax-react";

const Header = () => {
  return (
    <header className="top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-6 md:px-10 h-[82px]">
      {/* Left Section: Logo or Placeholder */}
      <div className="flex items-center">
        <Image src="/man.png" alt="Logo" width={40} height={40} className="hidden md:block" />
      </div>

      {/* Right Section: Notification & Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative ">
          <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className=" flex items-center space-x-3 cursor-pointer">
          <Image
            src="/man.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Godwin Jimmy</p>
            <p className="text-xs text-gray-500">
              Free Plan <span className="text-blue-600 cursor-pointer">Upgrade</span>
            </p>
          </div>
        </div>

        <div>
          <ArrowDown2 color="grey" size="15" />
        </div>
      </div>
    </header>
  );
};

export default Header;
