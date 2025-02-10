"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function ProgramInput() {
  const [title, setTitle] = useState<string>("");
  return (
    <div className="w-full mt-2 h-16 flex justify-center py-2 xs:py-4 px-3 xs:px-6 border border-[#1F0954] rounded">
      <div className="vsms:flex gap-3 items-center  hidden">
        <Image
          src={"/icons/font-style-icon.svg"}
          width={32}
          height={32}
          alt="font-style-icon"
          className="max-h-[100%] "
        />

        <FaCaretDown />
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="placeholder:text-[#828282] placeholder:text-xs sm:placeholder:text-sm xs:px-4 px-0 vsms:px-2 flex-1 font-[inherit] outline-none"
        placeholder="Describe Section Title e.g What you stand to learn"
      />
    </div>
  );
}
