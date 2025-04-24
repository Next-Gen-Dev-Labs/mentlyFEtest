"use client";

import { ICONS } from "@/assets";
import Switch from "@/ui-component/Switch";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ISidebar {
  className?: string;
  setMenuOpen?: (open: boolean) => void;
  isCollapsed?: boolean;
  setisCollpased?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const sidebarItem = [
  { label: "Dashboard", icon: ICONS.Home, path: "/" },
  { label: "Programs", icon: ICONS.Book, path: "/dashboard/programs" },
  { label: "Activities", icon: ICONS.Bubble, path: "/dashboard/activities" },
  { label: "Users", icon: ICONS.User, path: "/dashboard/users" },
  { label: "Forums", icon: ICONS.ClipboardText, path: "/dashboard/forums" },
  { label: "Finances", icon: ICONS.Wallet, path: "/dashboard/finances" },
  { label: "Rewards", icon: ICONS.Award, path: "/dashboard/rewards" },
  { label: "Analytics", icon: ICONS.Chart, path: "/dashboard/analytics" },
  { label: "Settings", icon: ICONS.Settings, path: "/dashboard/settings" },
  { label: "Log Out", icon: ICONS.Logout, path: "/dashboard/logout" },
];

const Sidebar: FC<ISidebar> = ({
  className,
  setMenuOpen,
  isCollapsed,
  setisCollpased,
}) => {
  const pathname = usePathname();
  const [classicMode, setClassicMode] = useState(false);

  return (
    <div
      className={twMerge(
        `bg-primary z-50 ${
          isCollapsed ? "w-32" : "w-60"
        } h-screen fixed p-6 overflow-y-scroll transition-all duration-300 custom-scroll`,
        className
      )}
    >
      <div className="flex justify-between items-center w-full">
        {!isCollapsed ? (
          <div className="flex gap-2 items-center">
            <div className="relative w-[120px] h-[26px]">
              <Image
                src={"/techrity.png"}
                alt="techrity_logo"
                fill
                sizes="(max-width: 768px) 100vw, 120px"
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src={"/techrity-L.png"}
                alt="techrity_logo"
                fill
                sizes="(max-width: 768px) 100vw, 30px"
              />
            </div>
          </div>
        )}
        <div
          className="hidden lg:block cursor-pointer ml-auto"
          onClick={() => setisCollpased && setisCollpased(!isCollapsed)}
        >
          <ICONS.MenuGrid stroke="white" />
        </div>
        <div
          className="lg:hidden block cursor-pointer"
          onClick={() => setMenuOpen && setMenuOpen(false)}
        >
          <ICONS.X stroke="white" />
        </div>
      </div>

      <div className="mt-8">
        {sidebarItem.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            onClick={() => setMenuOpen && setMenuOpen(false)}
            className={twMerge(
              "flex items-center py-3 px-5 rounded-lg mb-3 transition-all duration-300",
              pathname === item.path
                ? "bg-white text-primary"
                : "hover:bg-[#D3D2D3]/10 text-white",
              isCollapsed ? "justify-center" : "gap-4"
            )}
          >
            <item.icon
              stroke={pathname === item.path ? "#1F0954" : "#C2C2C2"}
            />
            {!isCollapsed && (
              <div className="flex items-center gap-2 relative">
                <p>{item.label}</p>
                {item.label.toLowerCase() === "analytics" && (
                  <span className="  absolute -top-6 left-12 text-[10px] text-[#EFEFF8] w-full rounded bg-[#0214BD38] p-1">
                    Coming Soon
                  </span>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>

      {!isCollapsed && (
        <div className="bg-[#FFFFFF1F] flex flex-col gap-6 rounded-lg p-4 my-6">
          <ICONS.UserTag />
          <p className="text-white font-bold text-sm">
            Got some questions, enquiries or need help?
          </p>
          <Link href={"#"} className="text-[#F0C074] underline text-xs">
            Visit Mently Help Desk Here
          </Link>
        </div>
      )}

      <div
        className={twMerge(
          "flex items-center",
          isCollapsed ? "justify-center" : "justify-between"
        )}
      >
        {!isCollapsed && (
          <p className="text-white font-bold text-xs">Switch to Classic Mode</p>
        )}
        <div className="" data-testid="switch">
          <Switch checked={classicMode} onChange={setClassicMode} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
