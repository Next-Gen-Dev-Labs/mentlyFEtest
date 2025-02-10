"use client";

import { useEffect, useRef, useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close if the Esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <div
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 sm:gap-4 cursor-pointer"
      >
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full">
          <Image
            width={60}
            height={60}
            src={"/images/user/user-01.png"}
            alt="User"
            className="rounded-full"
          />
        </div>

        {/* User Info - Hidden on small screens */}
        <div className="hidden sm:block text-right">
          <span className="block text-sm font-normal text-[#404040] dark:text-white">
            Godwin Jimmy
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-normal text-xs text-[#777795]">
              Free Plan
            </span>
            <span className="block font-bold text-sm text-[#2B85FE]">
              Upgrade
            </span>
          </div>
        </div>

        {/* Arrow Icon */}
        <IoIosArrowDown className="w-4 h-4" />
      </div>

      {/* Dropdown Menu */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-40 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center gap-3 py-4 px-2 text-sm font-medium duration-300 ease-in-out hover:text-[#1F0954] lg:text-base">
          <TbLogout2 className="w-4 h-4" /> Log Out
        </div>
      </div>
    </div>
  );
};

export default DropdownUser;
