import Image from "next/image";
import { navItems } from "@/data/items";
import { BiUserPin } from "react-icons/bi";
import { TbLayoutSidebar } from "react-icons/tb";
import { CollapseProps } from "@/contexts/collapse";

export default function Sidebar({ isCollapsed, toggleCollapse }: CollapseProps) {
    return (
        <aside className={`bg-[#340260] py-6 fixed h-dvh transition-all overflow-y-auto scrollbar-hide duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-60'}`}>
            <section className="mb-6 flex items-center justify-between px-6">
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
                    {navItems.map((item) => (
                        <li
                            key={item.label}
                            className={`group flex items-center relative gap-4 py-3 px-6 rounded-lg cursor-pointer hover:text-[#1F0954] hover:bg-white transition-colors ${item.active ? 'bg-white text-[#1F0954]' : 'text-[#C2C2C2]'} ${isCollapsed ? 'justify-center' : ''}`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {!isCollapsed ? (
                                <>
                                    <span>{item.label}</span>
                                    {item.badge && (
                                        <span className="absolute py-0.5 px-1.5 top-0 right-2 rounded-4xl bg-[#0214BD38] text-[10px] text-[#EFEFF8] z-30">
                                            {item.badge}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <div className="
                                    min-w-max
                                    pointer-events-none
                                    shadow-lg whitespace-nowrap
                                    transition-opacity duration-200
                                    opacity-0 group-hover:opacity-100
                                    z-20 [box-shadow:0px_4px_10px_#00000010]
                                    absolute left-full ml-3 px-3 py-2 rounded-md
                                    bg-white text-[#1F0954] text-sm font-medium
                                ">
                                    {item.label}
                                    <div className="w-2 h-2 bg-white transform rotate-45 absolute top-1/2 -left-1 -translate-y-1/2" />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <section className="mt-6 px-6">
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
                        <div className="absolute left-full ml-3 px-3 py-2 rounded-md bg-white text-[#1F0954] text-sm font-medium shadow-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 min-w-max">
                            Help Center
                            <div className="w-2 h-2 bg-white transform rotate-45 absolute top-1/2 -left-1 -translate-y-1/2" />
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
