"use client";
import { useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebarContext } from "../context/sidebar-context";
import logo from "@/assets/logo.png";
import menu from "@/assets/menu-icon.png";
import userTag from "@/assets/user-tag-icon.png";
import dashboard from "@/assets/dashboard-icon.png";
import program from "@/assets/program-icon.png";
import activities from "@/assets/activity-icon.png";
import users from "@/assets/user-icon.png";
import forums from "@/assets/forum-icon.png";
import finances from "@/assets/finance-icon.png";
import rewards from "@/assets/reward-icon.png";
import analytics from "@/assets/analytics-icon.png";
import settings from "@/assets/setting-icon.png";
import logout from "@/assets/logout-icon.png";
import SwitchComponent from "./SwitchComponent";

const sidebarItems = [
  { name: "Dashboard", icon: dashboard, path: "/" },
  { name: "Programs", icon: program, path: "#" },
  { name: "Activities", icon: activities, path: "#" },
  { name: "Users", icon: users, path: "#" },
  { name: "Forums", icon: forums, path: "#" },
  { name: "Finances", icon: finances, path: "#" },
  { name: "Rewards", icon: rewards, path: "#" },
  { name: "Analytics", icon: analytics, path: "#", comingSoon: true },
  { name: "Settings", icon: settings, path: "#" },
  { name: "Log Out", icon: logout, path: "#" },
];

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebarContext();
  const pathname = usePathname();

  const handleToggle = useCallback(() => {
    toggleSidebar();
  }, [toggleSidebar]);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar-bg text-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
        isCollapsed ? "w-16" : "w-64"
      } z-40`}
    >
      <div
        className={`flex items-center px-8 py-9  ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed && (
          <Image
            src={logo}
            alt="Logo"
            width={116}
            height={27}
            className="w-[116px] h-[27px]"
          />
        )}
        <button
          onClick={handleToggle}
          className="p-2 rounded-lg bg-white flex items-center justify-center min-w-[40px] min-h-[40px]"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Image
            src={menu}
            alt="Toggle sidebar"
            width={20}
            height={20}
            className={`transition-transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto pt-10 custom-scrollbar p-2">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.path || pathname.startsWith(`${item.path}/`);
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.path}
                  className={`flex items-center rounded-lg transition-colors ${
                    isCollapsed ? "justify-center p-3" : "px-8 py-4 space-x-8"
                  } ${
                    isActive
                      ? "bg-white text-[#1F0954]"
                      : "text-[#C2C2C2] hover:bg-gray-700"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  {!isCollapsed && (
                    <span className="flex items-center space-x-2 ">
                      <span>{item.name}</span>
                      {item.comingSoon && (
                        <span className="absolute top-0  rounded-[50px] bg-[#0214BD38] px-1 py-0.5 right-3  text-[10px] text-[#EFEFF8] font-normal">
                          Coming Soon
                        </span>
                      )}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {!isCollapsed && (
          <div>
            <div className="bg-[#FFFFFF1F] rounded-lg px-4 py-2 mt-12">
              <div>
                <Image src={userTag} alt="userTag" width={20} height={20} />
              </div>
              <h2 className="mt-5 mb-6 text-xs font-bold text-white">
                Got some questions, enquiries or need help?
              </h2>

              <p className="text-[10px] text-[#F0C074] font-normal">
                {" "}
                Visit Mently Help Desk Here
              </p>
            </div>

            <div className="flex items-center gap-8 my-8">
              <h1 className="text-[#F2F2F2] font-bold text-xs">
                Switch to Classic Mode
              </h1>
              <SwitchComponent />
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
