'use client';

import Image from "next/image";
import { BiUserPin } from "react-icons/bi";
import { LuBookText } from "react-icons/lu";
import { FiGift, FiSettings } from "react-icons/fi";
import { RiHome5Line, RiLineChartLine } from "react-icons/ri";
import { IoPersonOutline, IoWalletOutline } from "react-icons/io5";
import { TbLogout2, TbChartBubble, TbClipboardText, TbLayoutSidebar } from "react-icons/tb";

const menuItems = [
    { icon: <RiHome5Line />, label: "Dashboard", active: true },
    { icon: <LuBookText />, label: "Programs" },
    { icon: <TbChartBubble />, label: "Activities" },
    { icon: <IoPersonOutline />, label: "Users" },
    { icon: <TbClipboardText />, label: "Forums" },
    { icon: <IoWalletOutline />, label: "Finances" },
    { icon: <FiGift />, label: "Rewards" },
    { icon: <RiLineChartLine />, label: "Analytics" },
    { icon: <FiSettings />, label: "Settings" },
    { icon: <TbLogout2 />, label: "Logout" },
];

export default function Sidebar({
    isCollapsed,
    toggleCollapse
}: {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}) {
    return (
        <aside className={`bg-[#340260] py-6 fixed h-dvh overflow-y-auto scrollbar-hide transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-60'}`}>
            <section className="mb-8 flex items-center justify-between px-6">
                {!isCollapsed && <Image src="/logo.webp" width={120} height={30} alt="Techrity Logo" />}
                <button
                    onClick={toggleCollapse}
                    className="cursor-pointer border-none bg-transparent text-white hover:text-[#1F0954] hover:bg-white p-2 rounded"
                >
                    <TbLayoutSidebar />
                </button>
            </section>

            <nav className="flex-1 px-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            className={`
                                group flex items-center relative gap-4 py-3 px-6 rounded-lg cursor-pointer 
                                hover:text-[#1F0954] hover:bg-white transition-colors
                                ${item.active ? 'bg-white text-[#1F0954]' : 'text-[#C2C2C2]'}
                                ${isCollapsed ? 'justify-center' : ''}
                            `}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {!isCollapsed ? (
                                <>
                                    <span>{item.label}</span>
                                    {item.label === "Analytics" && (
                                        <span className="absolute py-0.5 px-1.5 top-0 right-2 rounded-4xl bg-[#0214BD38] text-[10px] text-[#EFEFF8] z-10">
                                            Coming Soon
                                        </span>
                                    )}
                                </>
                            ) : (
                                // Hover tooltip for collapsed state
                                <div className="
                                    absolute left-full ml-2 px-3 py-2 rounded-md
                                    bg-[#340260] text-white text-sm font-medium
                                    shadow-lg whitespace-nowrap
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-200
                                    pointer-events-none
                                    z-20
                                ">
                                    {item.label}
                                    <div className="absolute top-1/2 right-full -translate-y-1/2 w-2 h-2">
                                        <div className="w-2 h-2 bg-[#340260] transform rotate-45" />
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <section className="pt-6 px-6">
                {!isCollapsed ? (
                    <div className="p-4 grid gap-2 rounded-lg bg-[#FFFFFF1F]">
                        <span className="text-lg"><BiUserPin /></span>
                        <p className="text-white text-[12px] font-bold">Got some questions, enquiries or need help?</p>
                        <a href="#" className="text-yellow-400 underline hover:text-yellow-300 text-[10px]">
                            Visit Mently Help Desk Here
                        </a>
                    </div>
                ) : (
                    <div className="relative flex justify-center py-2 cursor-pointer text-white hover:text-[#1F0954] hover:bg-white rounded">
                        <BiUserPin />
                        <div className="
                            absolute left-full ml-2 px-3 py-2 rounded-md
                            bg-[#340260] text-white text-sm font-medium
                            shadow-lg whitespace-nowrap
                            opacity-0 hover:opacity-100
                            transition-opacity duration-200
                            pointer-events-none
                            z-20
                        ">
                            Help Center
                            <div className="absolute top-1/2 right-full -translate-y-1/2 w-2 h-2">
                                <div className="w-2 h-2 bg-[#340260] transform rotate-45" />
                            </div>
                        </div>
                    </div>
                )}

                <div className={`mt-4 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    {!isCollapsed && <span className="text-[#F2F2F2] text-[12px]">Switch to Classic Mode</span>}
                    <input type="checkbox" className="toggle" />
                </div>
            </section>
        </aside>
    );
}
