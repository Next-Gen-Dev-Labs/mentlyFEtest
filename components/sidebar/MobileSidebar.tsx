"use client";

import {
  Award,
  Book,
  Bubble,
  ClipboardText,
  EmptyWallet,
  Home,
  Setting2,
  Diagram,
  LogoutCurve,
  CloseCircle,
  HambergerMenu,
} from "iconsax-react";
import { Fragment, useState } from "react";
import { NavItem } from "./Nav";
import Bottom from "./Bottom";
import mently from "@/public/ted_1.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  Home,
  Book,
  Bubble,
  ClipboardText,
  EmptyWallet,
  Award,
  Diagram,
  Setting2,
  LogoutCurve,
];

export default function MobileSidebar() {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <>
      <button
        className="sm:hidden fixed top-5 left-12 "
        name="navigation"
        onClick={() => setNavMenu((prev) => !prev)}
      >
        <HambergerMenu
          size={24}
          variant="Linear"
          aria-hidden
          className="stroke-mently-blue"
        />
      </button>
      <aside
        className={cn(
          "sm:hidden fixed h-screen bg-mently-blue z-30 flex flex-col gap-8 p-6 transform transition-transform duration-200 ease-in-out w-[50%] origin-left",
          navMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between">
          <Image src={mently} width={40} height={40} alt="logo" className="" />
          <button onClick={() => setNavMenu((prev) => !prev)}>
            <CloseCircle variant="Linear" size={24} color="white" />
          </button>
        </div>
        <nav role="navigation">
          <ul className="gap-6 flex flex-col w-fit">
            {navItems.map((Icon, index) => (
              <Fragment key={index}>
                <NavItem classname="w-10 flex-center p-[2px]">
                  <Icon
                    aria-hidden="true"
                    size={24}
                    variant="Linear"
                    color="currentColor"
                  />
                </NavItem>
              </Fragment>
            ))}
          </ul>
        </nav>
        <Bottom />
      </aside>
    </>
  );
}
