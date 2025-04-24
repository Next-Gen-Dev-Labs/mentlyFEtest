import { IconProps } from "@/types";
import React, { FC } from "react";

const Menu: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "32"}
      height={props?.height || "32"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33594 8H26.6693M5.33594 16H26.6693M5.33594 24H26.6693"
        stroke={props?.stroke || "#340260"}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Menu;
