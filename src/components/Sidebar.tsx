import Image from "next/image";
import { navItems } from "@/data/items";
import { BiUserPin } from "react-icons/bi";
import { TbLayoutSidebar } from "react-icons/tb";
import { CollapseProps } from "@/contexts/collapse";

export default function Sidebar({ isCollapsed, toggleCollapse }: CollapseProps) {
    return (
        <aside className={`z-40 bg-[#340260] py-6 fixed grid h-dvh transition-all duration-300 ease-in-out md:translate-x-0 ${isCollapsed ? 'w-20' : 'w-60'} ${!isCollapsed ? 'translate-x-0' : '-translate-x-full'} overflow-visible`}>
            <section className="mb-6 flex items-center justify-between px-6">
                {!isCollapsed && <Image src="/logo.webp" width={120} height={30} alt="Techrity Logo" />}
                <button
                    onClick={toggleCollapse}
                    className="cursor-pointer border-none bg-transparent text-white hover:text-[#1F0954] hover:bg-white p-2 rounded"
                >
                    <TbLayoutSidebar />
                </button>
            </section>

            <nav className="px-4 overflow-auto scrollbar-hide">
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
                                <div className="min-w-max pointer-events-none shadow-lg whitespace-nowrap transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-50 [box-shadow:0px_2px_4px_0px_#00000010] absolute left-full ml-3 px-3 py-2 rounded-md bg-white text-[#1F0954] text-sm font-medium">
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
                        <span className="text-lg text-white"><BiUserPin /></span>
                        <p className="text-white text-[12px] font-bold">Got some questions, enquiries or need help?</p>
                        <a href="#" onClick={e => e.preventDefault()} className="text-[#F0C074] underline text-[10px]">
                            Visit Mently Help Desk Here
                        </a>
                    </div>
                ) : (
                    <div className="relative group flex justify-center py-2 cursor-pointer text-white hover:text-[#1F0954] hover:bg-white rounded">
                        <BiUserPin />
                        <div className="min-w-max pointer-events-none shadow-lg whitespace-nowrap transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-50 [box-shadow:0px_2px_4px_0px_#00000010] absolute left-full top-0 ml-3 px-3 py-2 rounded-md bg-white text-[#1F0954] text-sm font-medium">
                            Help
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
