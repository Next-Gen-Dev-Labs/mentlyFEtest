"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ProgramHead() {
  const [showSettings, setShowSettings] = useState(false);
  const settingRef = useRef<HTMLDivElement | null>(null);

  const toggleShowSettings = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowSettings((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingRef.current &&
        !settingRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center gap-2 hover:gap-2.5 duration-100">
        <span>
          <IoIosArrowBack className="text-secondary-400" />
        </span>
        <span className="text-secondary-400">Back to Home</span>
      </button>

      <div className="flex gap-6 items-center">
        <div className="relative w-6 h-6" ref={settingRef}>
          <button className="cursor-pointer" onClick={toggleShowSettings}>
            <Image
              src={"/icons/setting-2.svg"}
              width={24}
              height={24}
              alt="settings"
            />
          </button>
          {showSettings && (
            <div className="bg-white absolute shadow text-[#C2C2C2] px-1.5 py-2.5 grid place-items-center gap-3 rounded-md left-[50%] right-[50%] -translate-x-[50%] w-[80px] text-xs">
              <div className="cursor-pointer hover:text-[#a0a0a0]">Delete</div>
              <div className="cursor-pointer hover:text-[#a0a0a0]">Clear</div>
            </div>
          )}
        </div>
        <button>
          <Image src={"/icons/copy.svg"} width={24} height={24} alt="copy" />
        </button>
        <button className="bg-primary-400 py-2 px-3 gap-2 rounded-3xl flex justify-between items-center text-white">
          <Image src={"/icons/share.svg"} width={15} height={15} alt="share" />
          <span className="font-semibold text-sm">Share</span>
        </button>
      </div>
    </div>
  );
}
