"use client";

import { useState } from "react";
import { cn } from "~/utils/cn";

export const Toggle = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-8 h-[18px] flex-none bg-[#F6F6F6] rounded-[18px] relative">
      <span
        className={cn(
          "size-[11px] bg-[#1F0954] rounded-full absolute top-1/2 -translate-y-1/2 cursor-pointer",
          {
            "right-0.5": isOpen,
            "left-0.5": !isOpen,
          },
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
};
