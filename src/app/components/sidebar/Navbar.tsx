"use client";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "@/app/context/AppContent";
import HelpDesk from "./HelpDesk";
import ToggleSwitch from "../ui/ToggleSwitch";
import { Icon } from "@iconify/react";

const Navbar = () => {
    const { isCollapsed, isSidebarOpen, setIsCollapsed, setIsSidebarOpen } = useAppContext();

    return (
        <div className="bg-mentlyBlue">
            <button
                aria-expanded={isSidebarOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsSidebarOpen(false)}
                className={`block lg:hidden rounded-full p-2 bg-mentlyBlue relative top-0 left-[95%]`}
            >
                <Icon icon="ion:close" width="25" height="25" className="text-[#fff]" />
            </button>
            <div className="flex flex-col gap-8 pt-5 items-center">
                <Link href="/" className="flex gap-2">
                    <Image src="logo.svg" alt="logo" width={47} height={32} />
                    {!isCollapsed && <p className="font-bold flex items-center text-2xl">Mently</p>}
                </Link>

                <button
                    aria-expanded={isCollapsed}
                    aria-controls="mobile-menu"
                    onClick={() => setIsCollapsed(!isCollapsed)} 
                    className="invisible lg:visible  flex gap-2 cursor-pointer">
                    <Image src="grid.svg" alt="logo" width={25} height={25} />
                    {!isCollapsed && <p className="font-semibold flex items-center text-xs">{isCollapsed ? "Expand" : "Collapse"}</p>}
                </button>
            </div>
            <div className="pt-16">
                <Menu />
                <HelpDesk />

                <ToggleSwitch />
            </div>
        </div>
    );
}

export default Navbar;