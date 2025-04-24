"use client"
import Notification from "@/assets/icons/notification.svg";
import LogoWhite from "../../public/assets/images/logowhite.png";
import ArrowDown from "@/assets/icons/DownArrow.svg"
import Image from "next/image";

export default function Navbar() {
    return (
      <div className="bg-white">
        <header className="w-11/12 py-4 mx-auto flex items-center justify-between">
          {/* Add mobile menu button */}
          <div className="flex items-center space-x-2 w-fit ml-auto">
            <Notification />
            <div className="flex items-center gap-x-3">
              <Image
                src={LogoWhite}
                alt="Logo"
                className="w-11 h-11 bg-[#8B72FC] rounded-full object-cover p-2"
              />
              <span>
                <h2 className="text-base font-semibold text-gray-900 text-ellipsis w-[95%] text-nowrap overflow-hidden">Techrity Founder</h2>
                <p className="text-xs text-gray-500">Member</p>
              </span>
            </div>
            <ArrowDown className="bg-[#6F01D0] p-1 rounded-md" />
          </div>
        </header>
      </div>
    );
}