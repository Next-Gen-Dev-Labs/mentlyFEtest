import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';


// Icons
import {
    HomeIcon,
    DocumentTextIcon,
    PuzzlePieceIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon,
    BanknotesIcon,
    GiftIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
    QuestionMarkCircleIcon,
    UserPlusIcon,
} from '@heroicons/react/24/outline';
import { FiSidebar } from "react-icons/fi";

export default function Sidebar() {
    const router = useRouter();
    const [isClassicMode, setIsClassicMode] = useState(false);

    const menuItems = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
        { name: 'Programs', href: '/', icon: DocumentTextIcon },
        { name: 'Activities', href: '/', icon: PuzzlePieceIcon },
        { name: 'Users', href: '/', icon: UserGroupIcon },
        { name: 'Forums', href: '/', icon: ChatBubbleLeftRightIcon },
        { name: 'Finances', href: '/', icon: BanknotesIcon },
        { name: 'Rewards', href: '/', icon: GiftIcon },
        { name: 'Analytics', href: '/', icon: ChartBarIcon, comingSoon: true },
        { name: 'Settings', href: '/', icon: Cog6ToothIcon },
        { name: 'Log Out', href: '/', icon: ArrowRightOnRectangleIcon },
    ];

    return (
        <div className="w-64 lg:w-64 md:w-64 h-screen bg-primaryDark flex flex-col text-white overflow-scroll mb-12 pb-12 ">
            {/* Logo */}
            <div className="p-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative w-auto h-auto">
                        <Image src="/logo.png" alt="Techrity Logo" width="96" height="36" />
                    </div>
                    {/* <span className="text-xl font-semibold">techrity</span> */}
                </Link>
                <button className="hidden md:flex">
                    <FiSidebar className="w-8 h-8 text-gray-400 " />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 mt-8">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={clsx(
                                    "flex items-center p-4 hover:bg-white hover:text-black transition-colors",
                                    {
                                        "bg-white text-black border border-gray-50 outline-none rounded": item.href === '/dashboard' || router.pathname === item.href,
                                        "relative": item.comingSoon
                                    }
                                )}
                            >
                                <item.icon className="w-5 h-5 mr-4" />
                                <span>{item.name}</span>
                                {item.comingSoon && (
                                    <span className="absolute right-4 text-xs bg-white/20 px-2 py-0.5 rounded">
                                        Coming Soon
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Help Section */}
            <div className="p-4 bg-gray-300/50 m-4 rounded-lg">
            <UserPlusIcon className="w-6 h-6 mb-2" />    
                <div className="flex items-center space-x-2 mb-2">
                    
                    <p className="text-sm">Got some questions, enquiries or need help?</p>
                </div>
                <a
                    href="https://mently.help"
                    className="text-xs text-yellow-300 hover:underline"
                >
                    Visit Mently Help Desk Here
                </a>
            </div>

            {/* Mode Toggle */}
            <div className="p-4 flex items-center justify-between">
                <span className="text-sm">Switch to Classic Mode</span>
                <button
                    onClick={() => setIsClassicMode(!isClassicMode)}
                    className={clsx(
                        "w-12 h-6 rounded-full p-1 transition-colors",
                        isClassicMode ? "bg-white" : "bg-gray-600"
                    )}
                >
                    <div
                        className={clsx(
                            "w-4 h-4 rounded-full bg-primary transition-transform",
                            isClassicMode ? "translate-x-6" : ""
                        )}
                    />
                </button>
            </div>
        </div>
    );
}