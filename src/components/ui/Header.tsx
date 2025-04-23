import React from "react";
import { RiMore2Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex w-full items-center justify-between px-5">
      <div className="flex items-center gap-4 py-2">
        <RxHamburgerMenu />
        <span className="font-bold text-[#B0B0B0]">{title}</span>
      </div>
      <div className="flex items-center gap-4 py-4">
        <span className="font-semibold text-xs text-[#6F01D0]">See all</span>
        <RiMore2Fill />
      </div>
    </div>
  );
};

export default Header;
