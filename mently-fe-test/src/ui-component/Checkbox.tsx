"use client";

import { ICONS } from "@/assets";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type CheckboxProps = {
  check?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "rounded" | "square";
};

const Checkbox: FC<CheckboxProps> = ({
  check = false,
  onClick,
  className,
  variant = "square",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "h-8 w-8 flex items-center justify-center cursor-pointer shrink-0",
        check ? "bg-[#07C500]" : "border border-solid border-[#A5A5A5]",
        variant === "rounded" ? "rounded-full" : "rounded-[4px]",
        className
      )}
    >
      {check && <ICONS.Check stroke="white" />}
    </button>
  );
};

export default Checkbox;
