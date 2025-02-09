"use client"
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";

const Header = () => {
    const { isSidebarOpen, setIsSidebarOpen, darktheme} = useAppContext()
    return (
        <div className={`w-full h-full flex gap-2 justify-between items-center p-4  ${darktheme ? "bg-appDeepTextBlue" : "bg-[#FDFDFD]" }`}>
            <button
                aria-expanded={isSidebarOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsSidebarOpen(true)}
                
                className={`lg:invisible ${isSidebarOpen ? "invisible" : "visible"} lg:pointer-events-none cursor-pointer relative left-0`}
                >
                <Icon icon="solar:hamburger-menu-broken" className="lg:invisible lg:pointer-events-none  cursor-pointer " width="30" height="30" aria-label="Open menu" />
            </button>
            <span className="flex gap-2">
                <Image src="notifications.svg" alt="notification icon" width={20} height={20} />
                <div className="flex gap-2 items-center h-full lg:mr-10">
                    <Image src="/profile.png" alt="profile icon" width={50} height={50} className="rounded-full" />
                    <div>
                        <p className={`${darktheme ? "text-white" : "text-[#404040] text-sm"}`}>Godwin Jimmy</p>
                        <div className="flex gap-2">
                            <p className={`${darktheme ? "text-white" : "text-[#777795]"} text-xs`}>Free Plan</p>
                            <Link className="text-[#2B85FE] font-bold text-sm" href="/">Upgrade</Link>
                        </div>
                    </div>
                    <Icon icon="mingcute:down-line" className="text-[#C2C2C2] cursor-pointer" width="24" height="24" />
                </div>
            </span>
        </div>
    );
}

export default Header;