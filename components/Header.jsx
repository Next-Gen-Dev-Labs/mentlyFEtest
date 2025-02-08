import React, { useState, useEffect, useRef } from "react";
// import { SIDENAV, TOPNAV } from
import Image from "next/image";
import { SIDENAV, TOPNAV } from "@/constants/constants";

const Header = ({ isOpen, toggleSidenav }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const {
    logo,
    notification,
    userpic,
    name,
    plan,
    upgrade,
    dropdown,
    sidebar,
  } = TOPNAV;

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10 flex bg-white h-[70px] shadow-sm justify-between items-center">
      <div className="ml-3 sm:ml-7 flex gap-5 items-center">
        <div className={`flex gap-2 items-center ${isOpen ? "hidden" : ""}`}>
          <Image
            src={SIDENAV.mascot}
            width={70}
            height={100}
            alt="Mascot"
            quality={100}
            // className="w-auto"
          />
          <h1 className="my-auto text-xl text-[#1f0954]">Mently</h1>
          {/* <Image
            src={logo}
            width={1000}
            height={1000}
            alt="Logo"
            quality={100}
            className="w-12 sm:w-auto"
          /> */}
        </div>
        <Image
          src={sidebar}
          width={1000}
          height={1000}
          aria-label="Toggle Sidebar"
          alt="Sidebar Icon"
          quality={100}
          className={`w-4 h-4 sm:w-5 sm:h-5 cursor-pointer ${
            isOpen ? "hidden" : ""
          }`}
          onClick={toggleSidenav}
        />
      </div>
      <div className="flex gap-3 sm:gap-9 items-center mr-10">
        <Image
          src={notification}
          width={1000}
          height={1000}
          aria-label="Notifications"
          alt="Notification"
          quality={100}
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
        <div className="flex relative gap-5 items-center" ref={dropdownRef}>
          <div className="hidden sm:flex gap-2 items-center">
            <Image
              src={userpic}
              width={1000}
              height={1000}
              alt="User Image"
              quality={100}
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-[#404040] text-sm">{name}</p>
              <p className="text-[#777795] text-xs">
                {plan}
                <span className="ml-2 font-bold text-[#2B85FE] text-sm">
                  {upgrade}
                </span>
              </p>
            </div>
          </div>
          <Image
            src={dropdown}
            width={1000}
            height={1000}
            aria-label="Dropdown Icon"
            alt="Dropdown Icon"
            quality={100}
            className="w-4 h-4"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute right-0 top-6 bg-white shadow-md rounded-lg sm:hidden p-4 w-max">
              <div className="flex gap-2 items-center">
                <Image
                  src={userpic}
                  width={1000}
                  height={1000}
                  alt="User Image"
                  quality={100}
                  className="w-11 h-11 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-[#404040] text-sm">{name}</p>
                  <p className="text-[#777795] text-xs">
                    {plan}
                    <span className="ml-2 font-bold text-[#2B85FE] text-sm">
                      {upgrade}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
