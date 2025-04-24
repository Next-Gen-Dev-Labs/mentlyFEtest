import { IconProps } from "@/types";
import React, { FC } from "react";

const X: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "20"}
      height={props?.height || "20"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={props?.stroke || "#C2C2C2"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default X;
