"use client";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import { useAppContext } from "../../context/AppContext";
import HelpDesk from "./HelpDesk";
import ToggleSwitch from "../ui/ToggleSwitch";
import { Icon } from "@iconify/react";

/**
 * Navbar component that handles navigation, branding, and sidebar toggling.
 */
const Navbar = () => {
    const { isCollapsed, isSidebarOpen, setIsCollapsed, setIsSidebarOpen } = useAppContext();

    return (
        <div className="bg-mentlyBlue">
            {/* Close Sidebar Button for Mobile */}
            <button
                aria-expanded={isSidebarOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsSidebarOpen(false)}
                className="block lg:hidden rounded-full p-2 bg-mentlyBlue relative top-0 left-[95%]"
                aria-label="Close sidebar"
            >
                <Icon icon="ion:close" width="25" height="25" className="text-[#fff]" aria-hidden="true" />
            </button>

            {/* Logo and Sidebar Toggle */}
            <div className="flex flex-col gap-8 pt-5 items-center">
                <Link href="/" className="flex gap-2" aria-label="Home">
                    <Image src="logo.svg" alt="Mently logo" width={47} height={32} />
                    {!isCollapsed && <p className="font-bold flex items-center text-2xl">Mently</p>}
                </Link>

                {/* Sidebar Collapse Toggle */}
                <button
                    aria-expanded={!isCollapsed}
                    aria-controls="mobile-menu"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="invisible lg:visible flex gap-2 cursor-pointer"
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <Image src="grid.svg" alt="Toggle sidebar" width={25} height={25} />
                    {!isCollapsed && <p className="font-semibold flex items-center text-xs">{isCollapsed ? "Expand" : "Collapse"}</p>}
                </button>
            </div>
            
            {/* Navigation Links */}
            <div className="pt-16">
                <Menu />
                <HelpDesk />
                <ToggleSwitch />
            </div>
        </div>
    );
}

export default Navbar;