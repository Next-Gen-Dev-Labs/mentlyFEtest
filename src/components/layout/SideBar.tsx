"use client";
import { MenuItems } from "@/data/menu.items";
import { MenuItemsType } from "@/types/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Dispatch, useState } from "react";
import { BiSolidToggleRight, BiSolidToggleLeft } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { PiToggleLeftThin } from "react-icons/pi";

const SideBar = ({
  showSidebar,
  setShowSideBar,
}: {
  showSidebar: boolean;
  setShowSideBar: Dispatch<boolean>;
}) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`h-full bg-[#340260] w-[250px] fixed top-0 left-0 py-10 px-3 overflow-y-scroll max-md:absolute transition-all duration-500 ${
        showSidebar ? "max-md:translate-x-0" : "max-md:-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between pl-4">
        <Image
          src={"/icons/logo-side-bar.svg"}
          alt="techrity"
          className="h-[27px]"
          height={27}
          width={116}
        />
        <button onClick={() => setShowSideBar(!showSidebar)}>
          {showSidebar ? (
            <IoCloseOutline color="white" size={20} cursor={"pointer"} />
          ) : (
            <Image
              src={"/icons/navigation.svg"}
              alt="techrity"
              className="h-6 w-6 md:hidden"
              width={24}
              height={24}
            />
          )}
        </button>

        <Image
          src={"/icons/navigation.svg"}
          alt="techrity"
          className="h-6 w-6 max-md:hidden"
          width={24}
          height={24}
        />
      </div>
      <div className=" mt-16 mb-10 gap-2 flex flex-col">
        {MenuItems.map((item: MenuItemsType, index: number) => {
          const active = item.url == pathname;
          return (
            <div
              key={index}
              className={`w-full flex p-3 px-6 cursor-pointer gap-6 justify-start rounded-md ${
                active ? "bg-white" : "bg-transparent"
              }`}
            >
              <Image
                src={item.icon}
                alt="techrity"
                className={`h-5 text-[#C2C2C2]`}
                width={24}
                height={24}
              />
              <span
                className={`text-[] ${
                  active ? "text-[#1F0954]" : "text-[#C2C2C2]"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="bg-[#ffffff1f] rounded-[8px] w-full flex flex-col justify-between gap-6 py-3 px-4">
        <Image
          src={"/icons/user-tag.svg"}
          alt="techrity"
          className="h-5 w-5"
          width={20}
          height={20}
        />
        <p className="text-xs font-bold text-white">
          Got some questions, enquiries or need help?
        </p>
        <p className="underline text-[10px] text-[#F0C074]">
          Visit Mently Help Desk Here
        </p>
      </div>
      <div className="flex gap-6 items-center pr-1 mt-10">
        <span className="text-[#F2F2F2] text-xs font-bold">
          Switch to Classic Mode
        </span>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <BiSolidToggleRight size={32} color="white" />
          ) : (
            <PiToggleLeftThin size={32} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
