"use client";

import Image from "next/image";
import Link from "next/link";

interface SideBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SideBarProps) => {
  return (
    <div
      className={`w-[260px] flex-shrink-0 bg-[#340260] transition-all duration-300 h-full ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <div className="flex flex-col h-full pt-8 lg:pb-20 gap-6">
        <div className="flex items-center justify-between px-4">
          <Image
            src="/logo.png"
            alt="Techrity Logo"
            width={100}
            height={32}
            className="h-7 ml-5"
          />
          <button onClick={toggleSidebar} className="text-white">
            <Image
              src="/toggle.png"
              alt="Techrity Logo"
              width={20}
              height={20}
              className=""
            />
          </button>
        </div>
        <div className="animate__animated animate__fadeIn py-4 mt-6 lg:mt-12 ">
          <nav className="space-y-4 lg:space-y-6 px-3">
            {[
              { name: "Dashboard", icon: "/dashboard.png" },
              { name: "Programs", icon: "/programs.png" },
              { name: "Activities", icon: "/activity.png" },
              { name: "Users", icon: "/users.png" },
              { name: "Forums", icon: "/forums.png" },
              { name: "Finances", icon: "/finances.png" },
              { name: "Rewards", icon: "/award.png" },
              {
                name: "Analytics",
                icon: "/analytics.png",
                span: "Coming Soon",
              },
              { name: "Settings", icon: "/setting-2.png" },
              { name: "Log Out", icon: "/logout.png" },
            ].map((item) => (
              <Link
                key={item.name}
                href="#"
                className={`relative flex items-center rounded-md px-3 py-3 text-sm font-medium text-white gap-8 ${
                  item.name === "Dashboard" ? "bg-white" : "hover:bg-purple-800"
                }`}
              >
                <span className="ml-4">
                  <Image
                    src={item.icon}
                    alt="Techrity Logo"
                    width={24}
                    height={24}
                    className=""
                  />
                </span>
                <span
                  className={`${
                    item.name === "Dashboard"
                      ? "text-[#1F0954]"
                      : "text-[#c2c2c2]"
                  }`}
                >
                  {item.name}
                </span>
                {item.span && (
                  <span className="text-[10px] text-[#EFEFF8] bg-[#0214BD38] rounded-[50px] absolute top-0 right-0 py-1 px-2">
                    {item.span}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="bg-[#431c65] rounded-[8px] px-2 py-4 space-y-6 mx-3 mt-4">
          <Image
            src="/user-tag.png"
            alt="Techrity Logo"
            width={24}
            height={24}
            className=""
          />
          <p className="font-bold text-sm text-[#ffffff]">
            Got some questions, enquiries or need help?
          </p>
          <p className="text-[#f0c074] text-[10px] underline">
            Visit Mently Help Desk Here
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between px-4">
          <span className="text-xs font-bold text-[#f2f2f2]">
            Switch to Classic Mode
          </span>
          <div className="h-5 w-10 rounded-full bg-[#f6f6f6] p-1">
            <div className="h-3 w-3 rounded-full bg-[#1F0954]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
