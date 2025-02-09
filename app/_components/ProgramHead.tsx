import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ProgramHead() {
  return (
    <div className="flex items-center justify-between ">
      <button className="flex items-center gap-2 hover:gap-2.5 duration-100">
        <span>
          <IoIosArrowBack className="text-secondary-400" />
        </span>
        <span className="text-secondary-400">Back to Home</span>
      </button>

      <div className="flex gap-6">
        <button>
          <Image
            src={"/icons/setting-2.svg"}
            width={24}
            height={24}
            alt="settings"
          />
        </button>
        <button>
          <Image
            src={"/icons/copy.svg"}
            width={24}
            height={24}
            alt="settings"
          />
        </button>
        <button className="bg-primary-400 py-2 px-3 gap-2 rounded-3xl flex justify-between items-center text-white">
          <Image
            src={"/icons/share.svg"}
            width={15}
            height={15}
            alt="settings"
          />

          <span className="font-semibold text-sm">Share</span>
        </button>
      </div>
    </div>
  );
}
