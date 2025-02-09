"use client";
import { Logo } from "@/assets";
import IconSidebar from "@/assets/IconComponents/IconSidebar";
import { sidebarItems } from "@/shared/data";
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

const Sidebar = () => {
  const router = usePathname();

  return (
    <div className="w-[7.5rem] bg-mentlyBlue flex flex-col items-center h-screen p-4">
      {/* Logo Section */}
      <div className="flex flex-col items-center my-10 gap-7">
        <Image src={Logo} alt="logo" />
        <IconSidebar className="mr-1" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4 w-full ">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.id} item={item} router={router} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
