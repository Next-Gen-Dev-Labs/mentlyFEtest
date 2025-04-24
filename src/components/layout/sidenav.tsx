"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
// import { FaRegUser } from "react-icons/fa6";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import {
  LuBookText,
  LuChartLine,
  LuNotebookText,
  LuWallet,
} from "react-icons/lu";
import { MdOutlineBubbleChart } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const navlinks = [
  {
    title: "Dashboard",
    path: "/",
    icon: IoHomeOutline,
  },
  {
    title: "Programs",
    path: "/programs",
    icon: LuBookText,
  },
  {
    title: "Activities",
    path: "/activities",
    icon: MdOutlineBubbleChart,
  },
  {
    title: "Users",
    path: "/users",
    icon: AiOutlineUser,
  },
  {
    title: "Forums",
    path: "/forums",
    icon: LuNotebookText,
  },
  {
    title: "Finances",
    path: "/finances",
    icon: LuWallet,
  },
  {
    title: "Rewards",
    path: "/rewards",
    icon: LiaAwardSolid,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: LuChartLine,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: IoSettingsOutline,
  },
  {
    title: "Log Out",
    // path: "/",
    icon: TbLogout2,
  },
];

function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClassic, setIsClassic] = useState(false);

  const toggleIsClassic = () => {
    setIsClassic((curr) => !curr);
  };

  const toggleOpenSidenav = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <aside
      className={`transition-all duration-300 ease-in-out grid row-span-full sticky top-0 left-0 h-screen shadow-lg bg-[var(--bg-secondary)] z-1000 ${
        isOpen ? "w-[220px]" : "w-16"
      }`}
    >
      <div className="h-full gap-y-2 flex flex-col">
        {/*logo */}
        <div
          className={`flex w-full gap-x-3 h-fit py-5 top-0 sticky items-center ${
            !isOpen ? "px-2 justify-center" : "justify-between px-3.5"
          }  z-10 bg-[var(--bg-secondary)]`}
        >
          <span
            className={`transition-all duration-500 ease-in-out ${
              !isOpen ? "invisible opacity-0" : " opacity-100 visible ml-6"
            }`}
          >
            <Image
              src="./techrity-logo.svg"
              className="rounded-full object-cover "
              alt="user"
              width={116}
              height={27}
            />
          </span>
          {/*collapser */}
          {/* <div onClick={toggleOpenSidenav} className="h-6 w-6"> */}
          <Image
            src="./collapse.svg"
            className="cursor-pointer hidden md:block"
            alt=""
            width={24}
            height={24}
            onClick={toggleOpenSidenav}
          />
          {/* </div> */}
        </div>

        {/*nav */}
        <nav className="max-h-96 overflow-y-auto scrollbar-hide">
          <ul className={`space-y-2.5 ${isOpen ? "px-3.5" : "px-2"} `}>
            {navlinks.map(({ title, path, icon: Icon }) => (
              <li key={title}>
                <Link
                  href={`${path || "#"}`}
                  className={`flex items-center transition-all duration-300 ease-in-out text-sm rounded-lg py-2.5 px-2.5 gap-7
                    
                    ${isOpen ? "px-8 justify-start" : "px-2.5 justify-center"}  
                  
                  ${
                    pathname === path
                      ? "bg-white text-[#1f0954] hover:bg-white"
                      : "text-[var(--text-neutral)] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span
                    className={`duration-500 transition-all whitespace-nowrap ease-in-out  ${
                      !isOpen && "hidden"
                    } truncate`}
                  >
                    {title}
                  </span>
                  {/* {isOpen && title} */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 absolute w-full bottom-0 transition-all duration-500 ease-in-out pb-5">
          {/*enquiries */}
          {isOpen && (
            <div
              className={`rounded-md py-2 mx-3.5 px-4 bg-white/10  flex flex-col gap-y-2.5 text-xs transition-all duration-500 ease-in-out `}
            >
              <p className="font-medium text-white line-clamp-2">
                Got some questions, enquiries or need help?
              </p>
              <p className="text-[var(--text-secondary)] whitespace-nowrap underline truncate">
                Visit Mently Help Desk Here
              </p>
            </div>
          )}
          {/*switch */}
          <div
            className={`flex  ${
              isOpen ? "mx-3.5 justify-between" : "mx-2 justify-center"
            } items-center `}
          >
            {isOpen && (
              <p
                className={`text-white text-xs font-medium  transition-all duration-200 ease-in-out whitespace-nowrap truncate`}
              >
                Switch to Classic Mode
              </p>
            )}

            <div
              className={`w-6.5 h-3.5 cursor-pointer relative rounded-full ${
                isClassic ? "bg-white" : "bg-white/50"
              }`}
              onClick={toggleIsClassic}
            >
              <span
                className={`absolute transition-transform duration-300 ease-in-out rounded-full top-1/2 -translate-y-1/2  h-3 w-3 bg-[var(--bg-secondary)] ${
                  isClassic ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
