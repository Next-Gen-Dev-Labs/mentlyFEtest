import { IconProps } from "@/types";
import React, { FC } from "react";

const Check: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "24"}
      height={props?.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 12L10 17L20 7"
        stroke={props.stroke || "#354052"}
        strokeWidth={props?.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;