import Image from "next/image";
import { BiUserPin } from "react-icons/bi";
import { FiBook, FiGift, FiHome, FiUsers, FiLogOut, FiCalendar, FiSettings, FiBarChart2, FiDollarSign, FiMessageSquare } from "react-icons/fi";

const menuItems = [
    { icon: <FiHome />, label: "Dashboard", active: true },
    { icon: <FiBook />, label: "Programs" },
    { icon: <FiCalendar />, label: "Activities" },
    { icon: <FiUsers />, label: "Users" },
    { icon: <FiMessageSquare />, label: "Forums" },
    { icon: <FiDollarSign />, label: "Finances" },
    { icon: <FiGift />, label: "Rewards" },
    { icon: <FiBarChart2 />, label: "Analytics" },
    { icon: <FiSettings />, label: "Settings" },
    { icon: <FiLogOut />, label: "Logout" },
];

export default function Sidebar() {
    return (
        <aside className="w-60 bg-[#340260] text-white fixed h-screen overflow-y-auto scrollbar-hide">
            <div className="p-6 flex flex-col h-full">
                <div className="mb-8">
                    <Image src="/logo.webp" width={100} height={100} alt="Techrity Logo" />
                </div>

                <nav className="flex-1">
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li
                                key={item.label}
                                className={`flex items-center relative gap-4 py-3 px-6 rounded-lg cursor-pointer hover:text-[#1F0954] hover:bg-white transition-colors ${item.active
                                    ? "bg-white text-[#1F0954]"
                                    : "text-[#C2C2C2]"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                                {item.label === "Analytics" && (
                                    <span className="absolute py-0.5 px-1.5 top-0 right-2 rounded-4xl bg-[#0214BD38] text-[10px] text-[#EFEFF8] z-10">
                                        Coming Soon
                                    </span>
                                )}
                            </li>

                        ))}
                    </ul>
                </nav>

                <div className="pt-6">
                    <div className="p-6 grid gap-2 rounded-lg bg-[#FFFFFF1F]">
                        <span className="text-lg"><BiUserPin /></span>
                        <p className="text-white text-[12px] font-bold">Got some questions, enquiries or need help?</p>
                        <a href="#" className="text-yellow-400 underline hover:text-yellow-300 text-[10px]">
                            Visit Mently Help Desk Here
                        </a>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-[#F2F2F2] text-[12px]">Switch to Classic Mode</span>
                        <input type="checkbox" className="toggle" />
                    </div>
                </div>
            </div>
        </aside>
    );
}