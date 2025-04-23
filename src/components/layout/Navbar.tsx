import Image from "next/image";
import React, { Dispatch } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({
  setShowSideBar,
  showSideBar,
}: {
  setShowSideBar: Dispatch<boolean>;
  showSideBar: boolean;
}) => {
  return (
    <nav className="h-[82px] w-full bg-[#FDFDFD] shadow-md flex  justify-between md:justify-end items-center px-10">
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        {showSideBar ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>

      <div className="flex items-center gap-10">
        <Image
          className="w-6 h-6"
          src={"/icons/notification.svg"}
          alt=""
          width={100}
          height={100}
          priority
        />
        <div className="flex gap-2 items-center">
          <div className="w-11 h-11 rounded-full bg-[#8B72FC] p-1 flex items-center justify-center">
            <Image
              className="w-full"
              src={"/icons/logo-nav.svg"}
              alt=""
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-start w-[106px]">
            <p className="text-sm text-[#404040] truncate w-full">
              Techrity Founder
            </p>
            <p className="text-xs text-[#53547B]">Member</p>
          </div>
          <Image
            className="w-[19px] h-[18px]"
            src={"/icons/nav-frame.svg"}
            alt=""
            width={19}
            height={18}
            priority
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
