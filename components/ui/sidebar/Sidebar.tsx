"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { CommonDashboardContext } from "@/providers/StateContext";
import {
    UserSideBarComponent

 
} from "./SidebarNav";
import { TbLogout2 } from "react-icons/tb";
import { PanelRight } from "lucide-react";
import { RiShieldUserLine } from "react-icons/ri";
import Link from "next/link";
import { Switch } from "../switch";


const Sidebar = ({ dashboard }: { dashboard: string }) => {
  const { setConfirmLogout } = useContext(CommonDashboardContext);
  const router = useRouter();
  

  // manipulating the path values
  const path = usePathname().split("/");
  let findpath: string;
  if (path.length === 2) {
    findpath = "";
  } else {
    findpath = path[2];
  }

  return (
    <div className="flex flex-col  gap-12 bg-[#2D0052] p-4 w-[240px] text-white ">
    {/* Logo Section */}
    <div className="flex items-center justify-between mb-8">
      <Image
        className="w-[116px] h-[27px] cursor-pointer"
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        onClick={() => router.push("/")}
      />
      <PanelRight className="text-[#C2C2C2]" />
    </div>
  
    {/* Menu Items */}
    <div className="flex-1">
      {dashboard === "user" && <UserSideBarComponent findpath={findpath} />}
  
      {/* Logout */}
      <div
        onClick={() => setConfirmLogout(true)}
        className="text-[#C2C2C2] w-full py-2 px-3 cursor-pointer flex items-center gap-3 hover:bg-white/10 rounded-md mt-6 transition"
      >
        <TbLogout2 className="text-lg" />
        <p className="text-sm">Log Out</p>
      </div>
    </div>
  
    {/* Help and Switch */}
    <div className="space-y-4">
      <div className="bg-white/10 p-3 rounded-md text-sm">
        <div className="flex items-center gap-2 mb-1">
          <RiShieldUserLine className="text-white text-lg" />
          <p>Need help or have questions?</p>
        </div>
        <Link href="/" className="text-blue-300 underline text-xs">
          Visit Mently help desk
        </Link>
      </div>
  
      <div className="flex items-center justify-between text-sm">
        <p>Switch to Classic Mode</p>
        <Switch />
      </div>
    </div>
  </div>
  
  );
};

export default Sidebar;
