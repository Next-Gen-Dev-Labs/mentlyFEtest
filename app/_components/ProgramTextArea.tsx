"use client";

import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { cmsIcons } from "../_constants/icons";
import { useState } from "react";

export default function ProgramTextArea() {
  const [content, setContent] = useState<string>("");
  return (
    <div className="mt-6 border-black border rounded-[4px] relative">
      <div className="flex flex-col sm:flex-row">
        <div className="  basis-1/10 md:max-w-[100px] flex py-1.5 px-2 gap-2 xs:gap-4    items-center justify-center   border-r-[1px] border-b-[1px] border-black rounded-br-[4px]">
          <Image
            src={"/icons/document.svg"}
            width={24}
            height={24}
            alt="document icon"
            className="max-w-[16px] xs:max-w-[24px] xs:max-h-[24px]"
          />

          <FaCaretDown className="text-black xs:text-[14px] text-xs" />
        </div>
        <div className="flex  flex-wrap xxs:flex-nowrap border-black rounded-bl-[4px] border-l-[1px] border-b-[1px] flex-1 py-1.5 px-2 gap-1 justify-start xxs:justify-between items-center">
          {cmsIcons.map((icon) => (
            <Image
              src={icon.path}
              alt={icon.name}
              width={16}
              height={16}
              key={icon.name}
            />
          ))}
        </div>
      </div>
      <textarea
        className="h-[130px] w-full p-3 placeholder:text-[#828282] placeholder:text-xs outline-none"
        placeholder="Input text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="bg-[#A100FF21] absolute bottom-[10px] left-[10px] flex  items-center justify-between px-3 py-2 gap-1 rounded-lg">
        <Image
          src={"/icons/may-icon.svg"}
          width={12}
          height={12}
          alt="may icom"
        />
        <span className="text-[#8C00E3] text-xs ">Write with may</span>
      </button>
    </div>
  );
}
