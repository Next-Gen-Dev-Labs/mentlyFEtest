"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoSettingsOutline, IoCopyOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { ShareButton } from "./ShareButton";

interface HeaderDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HeaderDropdown = ({ isOpen, setIsOpen }: HeaderDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        divRef.current &&
        !divRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  const onClearSuccess = () => {
    toast.success("Content successfully cleared");
    setIsOpen(false);
  };

  const onDelSuccess = () => {
    toast.success("Content successfully deleted");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        ref={divRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <IoSettingsOutline className="w-6 h-6 text-[#777795] dark:text-[#A0A0A0]" />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-30 rounded-lg bg-white dark:bg-[#1C1C2D] 
                   shadow-lg z-10  dark:border-gray-700"
        >
          <button
            onClick={onDelSuccess}
            className="block w-full px-4 py-2 text-sm text-left text-text
                     dark:text-white hover:bg-gray dark:hover:bg-gray"
          >
            Delete
          </button>
          <button
            onClick={onClearSuccess}
            className="block w-full px-4 py-2 text-sm text-left text-text
                     dark:text-white hover:bg-gray dark:hover:bg-gray"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-start 
                   sm:items-center pb-8 w-full gap-4"
    >
      <button
        className="text-base font-semibold text-[#F0C074] hover:opacity-80 
                       transition-opacity"
      >
        &lt; Back to Home
      </button>

      <div className="flex gap-6 items-center text-sm font-bold text-white">
        <HeaderDropdown isOpen={dropdownOpen} setIsOpen={setDropdownOpen} />
        <button className="hover:opacity-80 transition-opacity">
          <IoCopyOutline className="w-5 h-5 text-[#C2C2C2]" />
        </button>
        <ShareButton />
      </div>
    </div>
  );
};

export default Header;
