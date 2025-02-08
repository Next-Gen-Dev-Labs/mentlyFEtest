import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full top-0   z-10 right-0 shadow-sm h-[70px]  bg-white">
      <div className="flex justify-end items-center gap-9 mr-12 h-full">
        <Image
          src={"/icons/notifications.svg"}
          width={24}
          height={24}
          quality={100}
          alt="notification"
        />
        <div className="flex gap-5">
          <div className="flex gap-2 ">
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
