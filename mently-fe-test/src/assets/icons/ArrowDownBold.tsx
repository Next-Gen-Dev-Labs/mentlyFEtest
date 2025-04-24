import { IconProps } from "@/types";
import React, { FC } from "react";

const ArrowDownBold: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "19"}
      height={props?.height || "19"}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1391_1707)">
        <path
          d="M8.88627 9.58032C9.31071 10.0048 9.99887 10.0048 10.4233 9.58032L12.7291 7.27451C13.012 6.99159 13.4707 6.99159 13.7537 7.27451C14.0366 7.55742 14.0366 8.01612 13.7537 8.29904L10.4233 11.6294C9.99887 12.0538 9.31071 12.0538 8.88627 11.6294L5.55591 8.29904C5.273 8.01613 5.273 7.55742 5.55591 7.27451C5.83883 6.99159 6.29753 6.99159 6.58045 7.27451L8.88627 9.58032Z"
          fill={props?.stroke || "#595564"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1391_1707">
          <rect
            width="17.3896"
            height="17.3896"
            fill="white"
            transform="translate(18.3509 0.805206) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDownBold;
