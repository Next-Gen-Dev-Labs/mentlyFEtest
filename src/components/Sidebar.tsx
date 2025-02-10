"use client";
import { Logo } from "@/assets";
import IconHelpDesk from "@/assets/IconComponents/IconHelpDesk";

import IconSidebar from "@/assets/IconComponents/IconSidebar";
import IconToggle from "@/assets/IconComponents/IconToggle";
import { sidebarItems } from "@/shared/data";
import { useScreenSize } from "@/shared/hooks/useSceenSize";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({
  item,
  router,
}: {
  item: (typeof sidebarItems)[number];
  router: string;
}) => {
  const isActive = router === item.path;
  return (
    <Link href={item.isDisabled ? "#" : item.path}>
      <div
        className={`w-full flex gap-2 items-center justify-center py-3 cursor-pointer rounded-md transition-all ${
          isActive ? "bg-white text-mentlyBlue" : "text-white"
        }`}
      >
        {item.icon &&
          React.cloneElement(item.icon, {
            className: `w-5 h-5 ${isActive ? "text-mentlyBlue" : "text-white"}`,
          })}
      </div>
    </Link>
  );
};

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = usePathname();
  const isLargeScreen = useScreenSize();
  return (
    <div
      className={`w-[7.5rem] ${
        isLargeScreen ? "sticky" : "fixed"
      } top-0 left-0 bg-mentlyBlue overflow-y-auto z-20 flex flex-col items-center min-h-screen p-4`}
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center my-10 gap-7">
        <Image src={Logo} alt="logo" />
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          title="Toggle Sidebar"
        >
          <IconSidebar className="mr-1 mt-4" />
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4 w-full ">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.id} item={item} router={router} />
        ))}
      </div>

      <div className="bg-[#ffffff29] w-full mt-[2rem] flex flex-col items-center justify-between gap-2 rounded-[0.5rem] px-3 py-4">
        <div className="mt-3 cursor-pointer">
          <IconHelpDesk />
        </div>
        <span className="text-[0.6rem] mt-3 text-[#F0C074] font-[300] leading-[0.75rem] underline ">
          Visit Mently Help Desk Here
        </span>
      </div>
      <div className="mt-8 cursor-pointer">
        <IconToggle />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
