import React from "react";
import NotificationBell from "../NotificationBell";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import Link from "next/link";
import { ArrowDown2 } from "iconsax-react";

export default function Header() {
  return (
    <header className="bg-header flex justify-end p-3 shadow-sm">
      <div className="flex gap-6 items-center sm:mr-[2em]">
        <NotificationBell />
        <div className="flex gap-3 items-center justify-start max-w-56">
          <div className="w-12 h-12 bg-white relative rounded-full overflow-hidden">
            <Image src={avatar} fill alt="headshot of godwin jimmy" />
          </div>
      
            <div className="flex flex-col">
              <p className="text-sm text-black">Godwin Jimmy</p>
              <span className="flex items-baseline gap-2">
                <small className="text-gray-500 text-xs">Free Plan</small>
                <Link
                  href="#"
                  className="font-bold text-sm text-mently-link-color"
                >
                  Upgrade
                </Link>
              </span>
            </div>
          <button className="appearance-none focus-visible:outline-1" aria-label="profile dropdown">
            <ArrowDown2 size={16} variant="Linear" aria-hidden className="stroke-icon-grey" />
          </button>
        </div>
      </div>
    </header>
  );
}
