"use client";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "@/app/context/AppContent";
import HelpDesk from "../HelpDesk";
import ToggleSwitch from "../ui/ToggleSwitch";

const Navbar = () => {

 const {isCollapsed, setIsCollapsed } = useAppContext();

    return (
        <div className="bg-mentlyBlue">
            <div className="flex flex-col gap-8 pt-5 items-center">
                <Link href="/">
                    <Image src="logo.svg" alt="logo" width={47} height={32} />
                </Link>

                <div onClick={() => setIsCollapsed(!isCollapsed)} className="cursor-pointer">
                    <Image src="grid.svg" alt="logo" width={25} height={25} />
                </div>
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