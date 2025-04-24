"use client";

import LogoImg from "@/assets/images/logo.png";
import Award from "@/assets/svg/award";
import Book from "@/assets/svg/book";
import Bubble from "@/assets/svg/bubble";
import Clipboard from "@/assets/svg/clipboard";
import Diagram from "@/assets/svg/diagram";
import Home from "@/assets/svg/home";
import Logo from "@/assets/svg/logo";
import LogoutIcon from "@/assets/svg/logout";
import Settings from "@/assets/svg/settings";
import User from "@/assets/svg/user";
import UserTag from "@/assets/svg/user-tag";
import Wallet from "@/assets/svg/wallet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Switch from "./switch";
import { ChevronRight } from "lucide-react";

const nav_items = [
  { icon: Home, item: "Dashboard", href: "/" },
  { icon: Book, item: "Programs", href: "/programs" },
  { icon: Bubble, item: "Activities", href: "/activities" },
  { icon: User, item: "Users", href: "/users" },
  { icon: Clipboard, item: "Forums", href: "/forums" },
  { icon: Wallet, item: "Finances", href: "/finances" },
  { icon: Award, item: "Rewards", href: "/rewards" },
  { icon: Diagram, item: "Analytics", href: "/analytics" },
  { icon: Settings, item: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <aside
      className={`${
        openSidebar ? "w-[240px]" : "w-[72px] sm:w-[88px]"
      }  xl:w-[240px] overflow-auto duration-300 bg-[var(--primary-bg)] z-40 fixed h-full min-h-screen`}
    >
      <span
        className={`xl:hidden absolute cursor-pointer top-20 -right-0 hover:border-white border border-transparent rounded-full ${
          openSidebar ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleSidebar}
      >
        <ChevronRight className="stroke-white size-8" />
      </span>
      <div className="flex justify-between flex-col min-h-screen h-full px-3 py-9 w-full">
        <div className="flex flex-col items-center justify-center gap-[5.625rem] w-full">
          <div className="flex items-center gap-4 xl:self-start xl:pl-9">
            <Image
              src={LogoImg}
              alt="Logo"
              className={`${!openSidebar && "hidden xl:block"}`}
            />
            {!openSidebar && <Logo className="xl:hidden" />}
          </div>

          <ul className="flex flex-col gap-2 justify-center w-full">
            <>
              {nav_items.map((link, i) => (
                <Link href={link.href} key={i}>
                  <li
                    key={i}
                    className={`flex items-center ${
                      !openSidebar
                        ? "justify-center py-2.5 px-4"
                        : "justify-start py-4 px-8"
                    } xl:justify-start rounded-lg gap-8 hover:bg-white xl:py-4 xl:px-8 group relative ${
                      pathname === link.href ? "bg-white" : ""
                    }`}
                    onClick={toggleSidebar}
                  >
                    <span>
                      <link.icon
                        className={`size-6
                            ${
                              pathname === link.href
                                ? "stroke-[var(--primary)]"
                                : "stroke-[var(--grey-4)] group-hover:stroke-[var(--primary)]"
                            }
                          `}
                      />
                    </span>
                    <p
                      className={`text-base/[1] font-normal ${
                        !openSidebar && "hidden"
                      } xl:block ${
                        pathname === link.href
                          ? "text-[var(--primary)]"
                          : "text-[var(--grey-4)] group-hover:text-[var(--primary)]"
                      } `}
                    >
                      {link.item}
                    </p>
                  </li>
                </Link>
              ))}
              <li
                className={`flex items-center ${
                  !openSidebar
                    ? "justify-center py-2.5 px-4"
                    : "justify-start py-4 px-8"
                } xl:justify-start rounded-lg gap-8 hover:bg-white xl:py-4 xl:px-8 group relative cursor-pointer`}
              >
                <span>
                  <LogoutIcon className="size-6 stroke-[var(--grey-4)] group-hover:stroke-[var(--primary)]" />
                </span>
                <p
                  className={`text-base/[1] font-normal ${
                    !openSidebar && "hidden"
                  } xl:block text-[var(--grey-4)] group-hover:text-[var(--primary)]`}
                >
                  Logout
                </p>
              </li>
            </>
          </ul>
        </div>
        <div
          className={`${!openSidebar && "hidden"} xl:block space-y-14 py-12`}
        >
          <div className="bg-white/[12%] rounded-lg px-4 py-2.5 space-y-5">
            <UserTag />
            <p className="text-white text-xs/[100%] font-bold">
              Got some questions, enquiries or need help?
            </p>
            <p className="underline cursor-pointer text-[#F0C074] text-[10px]/[12px]">
              Visit Mently Help Desk Here
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-white text-xs font-bold">
              Switch to Classic Mode
            </p>
            <Switch />
          </div>
        </div>
      </div>
    </aside>
  );
}
