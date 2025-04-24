import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
    { label: 'Dashboard', icon: "/images/home.svg", alt: "dashboard", href: '/dashboard' },
    { label: 'Programs', icon: "/images/book.svg", alt: "programs", href: '/programs' },
    { label: 'Activities', icon: "/images/bubble.svg", alt: "activities", href: '/activities' },
    { label: 'Users', icon: "/images/user-outline.svg", alt: "users", href: '/users' },
    { label: 'Forums', icon: "/images/clipboard-text.svg", alt: "forums", href: '/forums' },
    { label: 'Finances', icon: "/images/empty-wallet.svg", alt: "finances", href: '/finances' },
    { label: 'Rewards', icon: "/images/award.svg", alt: "rewards", href: '/rewards' },
    { label: 'Analytics', icon: "/images/diagram.svg", alt: "analytics", href: '/analytics', comingSoon: true },
    { label: 'Settings', icon: "/images/setting-2.svg", alt: "settings", href: '/settings' },
    { label: 'Log Out', icon: "/images/logout.svg", alt: "logout", href: '/logout' },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isClassicMode, setIsClassicMode] = useState(false);

    // Check if we're on mobile when component mounts and when window resizes
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
            // Auto-collapse on small screens
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Toggle sidebar collapse
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside 
            className={`bg-[#340260] text-white min-h-screen ${
                isCollapsed ? 'w-[70px]' : 'w-[250px]'
            } p-4 flex flex-col justify-between transition-all duration-300 ${
                isMobile && !isCollapsed ? 'fixed z-50 shadow-lg' : ''
            }`}
        >
            <div>
                {/* Logo */}
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} gap-2 mt-9 ${isCollapsed ? 'ml-0' : 'ml-5'}`}>
                    {!isCollapsed && <img src="/images/logo.png" alt="Techrity Logo" className="h-6" />}
                    <img 
                        src="/images/collapse-sidebar.svg" 
                        alt="collapse sidebar" 
                        className={`h-6 cursor-pointer transform ${isCollapsed ? 'rotate-180' : ''}`}
                        onClick={toggleSidebar}
                    />
                </div>

                {/* Navigation */}
                <nav className={`flex flex-col gap-2 ${isCollapsed ? 'mt-10' : 'mt-20'}`}>
                    {navItems.map(({ label, icon, alt, comingSoon, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                href={href}
                                key={label}
                                className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-6'} ${isCollapsed ? 'px-2' : 'px-6'} py-4 rounded-lg relative ${
                                    isActive
                                        ? 'bg-white text-[#1F0954] font-semibold'
                                        : 'hover:bg-white/20 transition'
                                }`}
                                title={isCollapsed ? label : ''}
                            >
                                <img 
                                    src={icon} 
                                    alt={alt} 
                                    className={`h-6 ${
                                        isActive 
                                            ? 'filter-to-purple' 
                                            : 'filter-to-white'
                                    }`} 
                                />
                                {!isCollapsed && <span className="flex-1">{label}</span>}
                                {!isCollapsed && comingSoon && (
                                    <div className="rounded-xl bg-[rgba(2,20,189,0.22)] px-1 py-[2px] flex flex-center justify-center absolute right-0 top-0">
                                        <span className="text-[10px] text-[#EFEFF8] italic">Coming Soon</span>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Help section */}
            <div className="mt-12 text-sm">
                {!isCollapsed ? (
                    <>
                        <div className="bg-[rgba(255,255,255,0.12)] p-4 rounded-md">
                            <div className="flex items-start gap-5 flex-col">
                                <img src="/images/user-tag.svg" alt="help tag" />
                                <div>
                                    <p className="mb-6 text-xs text-white font-bold">Got some questions, enquiries or need help?</p>
                                    <Link href="/help" className="underline text-[#F0C074] text-[10px]">
                                        Visit Mently Help Desk here
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Classic Mode toggle */}
                        <div className="flex items-center justify-between mt-8">
                            <span className="text-[rgba(242,242,242,1)] text-xs font-bold">Switch to Classic Mode</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={isClassicMode}
                                    onChange={() => setIsClassicMode(!isClassicMode)}
                                />
                                <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-500 transition-all" />
                            </label>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center">
                        <Link href="/help" title="Help">
                            <img src="/images/user-tag.svg" alt="help tag" className="h-6" />
                        </Link>
                    </div>
                )}
            </div>
        </aside>
    );
}
