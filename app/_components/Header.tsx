"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSidebar } from "../_context/SidebarContext";

// interface PropTypes {
//   onShowSidebar: VoidFunction;
// }

export default function Header() {
  const { setShowSidebar } = useSidebar();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const toggleShowProfile = function (event: MouseEvent) {
    event.stopPropagation();
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="fixed w-full top-0 flex justify-between md:justify-end px-12 items-center  z-10 right-0 shadow-sm h-[70px]  bg-white">
      <div className="block md:hidden">
        <Image
          src={"/images/logo.png"}
          alt="mently"
          width={47}
          height={32}
          quality={100}
          onClick={() => setShowSidebar(true)}
        />
      </div>
      <div
        className="flex  md:justify-end items-center gap-6 sm:gap-9  h-full"
        onClick={toggleShowProfile}
      >
        <Image
          src={"/icons/notifications.svg"}
          width={24}
          height={24}
          quality={100}
          alt="notification"
        />
        <div className="flex gap-5 relative">
          {showProfile && (
            <div
              className="sm:hidden flex gap-2 absolute top-[25px] right-0 p-4 rounded-lg w-[200px] shadow-md bg-white"
              ref={profileRef}
            >
              <Image
                src={"/images/profile-image.png"}
                alt="profile image"
                quality={100}
                width={44}
                height={44}
                className="rounded-full"
              />
              <span>
                <div className="font-normal text-sm text-[#404040]">
                  Godwin Jimmy
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[#777795]">Free plan</span>
                  <button className="grid place-items-center">
                    <span className="text-sm text-[#2B85FE] ">Upgrade</span>
                  </button>
                </div>
              </span>
            </div>
          )}
          <div
            className={` hidden  sm:flex gap-2
            `}
            ref={profileRef}
          >
            <Image
              src={"/images/profile-image.png"}
              alt="profile image"
              quality={100}
              width={44}
              height={44}
              className="rounded-full"
            />
            <span>
              <div className="font-normal text-sm text-[#404040]">
                Godwin Jimmy
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#777795]">Free plan</span>
                <button className="grid place-items-center">
                  <span className="text-sm text-[#2B85FE] ">Upgrade</span>
                </button>
              </div>
            </span>
          </div>
          <Image
            src={"/icons/down-icon.svg"}
            width={16}
            height={16}
            alt="icon down "
          />
        </div>
      </div>
    </header>
  );
}
