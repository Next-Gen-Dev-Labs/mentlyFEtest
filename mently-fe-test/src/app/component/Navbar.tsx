"use client";

import { ICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);
  
  return (
    <div className="bg-[#FDFDFD] p-4 flex lg:justify-end justify-between items-center gap-8">
      <div className="cursor-pointer lg:hidden block" data-testid="menu-icon">
        <MenuButton onClick={() => setOpenMenu(!openMenu)} />
      </div>
      <div className="flex items-center gap-8 justify-end">
        <div className="relative cursor-pointer">
          <ICONS.Notifications />
          <div className="absolute top-0 right-1 w-2 h-2 bg-[#FF3E3E] rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#8B72FC] rounded-full p-1 w-fit">
            <div className="relative w-[30px] h-[30px] cursor-pointer">
              <Image
                src={"/techrity-L.png"}
                alt="techrity_logo"
                fill
                sizes="(max-width: 768px) 100vw, 30px"
              />
            </div>
          </div>
          <div className="flex flex-col w-25">
            <p className="text-[#404040] text-sm truncate">Texhrity Founder</p>
            <p className="text-[#53547B] text-xs">Member</p>
          </div>
          <div className="bg-[#6F01D0] w-5 h-5 rounded cursor-pointer" />
        </div>
      </div>

      {openMenu && (
        <div className="fixed inset-0 bg-white/10 bg-opacity-10 backdrop-blur-sm z-500">
          <Sidebar className="!bg-primary" setMenuOpen={setOpenMenu} />
        </div>
      )}
    </div>
  );
};

const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="cursor-pointer">
    <ICONS.Menu />
  </div>
);

export default Navbar;
