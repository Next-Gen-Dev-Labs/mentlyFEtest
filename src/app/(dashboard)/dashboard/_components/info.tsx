import Animate from "@/components/common/animate";
import { InfoCircle } from "iconsax-react";
import React from "react";

interface InfoProps {
  text: string;
}

function Info({ text }: InfoProps) {
  return (
    <Animate className="bg-[#CEE1FB] rounded-sm py-[14px] px-2 flex items-center gap-2">
      <div className="">
        <InfoCircle size={20} className="stroke-[#3B82F6]" />
      </div>
      <p className="text-sm text-[#777795] leading-none">{text}</p>
    </Animate>
  );
}

export default Info;
