"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ProgramButtons() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleDropdown = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[index] = el;
  };

  const ProgramButton = ({ index, text }: { index: number; text: string }) => (
    <button className="border-[#C2C2C2] border w-full bg-[#f1f1f1] px-4 py-3 flex justify-between items-center rounded-lg">
      <span className="font-medium basis-[75%]  text-sm vsms:text-[16px] vsms:basis-auto">
        {text}
      </span>
      <span className="flex relative items-center gap-3">
        <FaChevronUp className="text-[#777795]" />
        <div
          className="cursor-pointer"
          onClick={(e) => toggleDropdown(index, e)}
          ref={setRef(index)}
        >
          <Image
            src={"/icons/more.svg"}
            width={24}
            height={24}
            alt="more-icon"
          />
          {activeDropdown === index && (
            <div className="bg-white absolute shadow text-[#C2C2C2] px-1.5 py-2.5 grid gap-3  left-[50%] right-[50%] -translate-x-[50%] w-[80px] text-xs top-[100%] z-10">
              <div className="cursor-pointer hover:text-[#777795] ">Delete</div>
              <div className="cursor-pointer hover:text-[#777795] ">Edit</div>
            </div>
          )}
        </div>
      </span>
    </button>
  );

  return (
    <div className="mt-8 w-full grid gap-2">
      <ProgramButton index={0} text="Program Information Text 1" />
      <ProgramButton index={1} text="Program Information Text 2" />
    </div>
  );
}
