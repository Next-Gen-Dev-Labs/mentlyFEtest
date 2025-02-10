import React from "react";
import HoverDropdown from "./HoverDropdown";
import DropdownIcon from "../assets/icons/DropdownIcon";
import { HoverDropdownProps } from "../types";
import ThreeDotsIcon from "../assets/icons/ThreeDotsIcon";

const ProgramInfoTextDisplay: React.FC<
  HoverDropdownProps & { text: string }
> = ({ onClickItem, text }) => {
  return (
    <div className="flex items-center w-full rounded-lg border border-greyBorder justify-between py-3 px-4 bg-greyBg">
      <span className="text-midnightPurple font-medium">{text}</span>
      <div className="flex items-center gap-3">
        <DropdownIcon className="rotate-180" />
        <HoverDropdown
          list={["Delete", "Edit"]}
          icon={<ThreeDotsIcon />}
          onClickItem={onClickItem}
        />
      </div>
    </div>
  );
};

export default ProgramInfoTextDisplay;
