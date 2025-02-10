"use client";

import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image"
import MentlyLogo from "../../../public/logo.svg"
import GridIcon from "../../../public/icons/nav-icons/grid-icon.svg"
import WhiteDashboard from "../../../public/icons/nav-icons/white-dashboard.svg"
import DarkDashboard from "../../../public/icons/nav-icons/dark-dashboard.svg"
import WhiteBook from "../../../public/icons/nav-icons/white-book.svg"
import DarkBook from "../../../public/icons/nav-icons/dark-book.svg"
import WhiteActivities from "../../../public/icons/nav-icons/white-activities.svg"
import DarkActivities from "../../../public/icons/nav-icons/dark-activities.svg"
import WhiteForms from "../../../public/icons/nav-icons/white-forms.svg"
import DarkForms from "../../../public/icons/nav-icons/dark-forms.svg"
import WhiteFinances from "../../../public/icons/nav-icons/white-finances.svg";
import DarkFinances from "../../../public/icons/nav-icons/dark-finances.svg";
import WhiteBadges from "../../../public/icons/nav-icons/white-badges.svg";
import DarkBadges from "../../../public/icons/nav-icons/dark-badges.svg";
import WhiteAnalytics from "../../../public/icons/nav-icons/white-analytics.svg";
import DarkAnalytics from "../../../public/icons/nav-icons/dark-analytics.svg";
import WhiteSettings from "../../../public/icons/nav-icons/white-settings.svg";
import DarkSettings from "../../../public/icons/nav-icons/dark-settings.svg";
import WhiteLogout from "../../../public/icons/nav-icons/white-logout.svg";
import DarkLogout from "../../../public/icons/nav-icons/dark-logout.svg";
import UserIcon from "../../../public/icons/nav-icons/user-icon.svg";
import NotificationIcon from "../../../public/icons/nav-icons/notification-icon.svg";
import UserAvatar from "../../../public/icons/nav-icons/user-avatar.svg";
import CaretDownIcon from "../../../public/icons/nav-icons/caret-down-icon.svg";
import { Switch } from "@/components/ui/switch"
import Link from "next/link";

const navLinks: { name: string, href: string, whiteIcon: StaticImageData, blackIcon: StaticImageData, matchPath?: string }[] = [
    { name: 'Dashboard', href: '/main/dashboard', whiteIcon: WhiteDashboard, blackIcon: DarkDashboard },
    { name: 'Products', href: '/main/products', whiteIcon: WhiteBook, blackIcon: DarkBook },
    { name: 'Activities', href: '/main/activities', whiteIcon: WhiteActivities, blackIcon: DarkActivities },
    { name: 'Forms', href: '/main/forms', whiteIcon: WhiteForms, blackIcon: DarkForms },
    { name: 'Finances', href: '/main/finances', whiteIcon: WhiteFinances, blackIcon: DarkFinances },
    { name: 'Badges', href: '/main/badges', whiteIcon: WhiteBadges, blackIcon: DarkBadges },
    { name: 'Analytics', href: '/main/analytics', whiteIcon: WhiteAnalytics, blackIcon: DarkAnalytics },
    { name: 'Settings', href: '/main/settings', whiteIcon: WhiteSettings, blackIcon: DarkSettings },
    { name: 'Logout', href: '../', whiteIcon: WhiteLogout, blackIcon: DarkLogout },
]

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Sidebar */}
            <div className="bg-[#1F0954] py-6 sm:py-7 md:py-8 lg:py-9 w-16 sm:w-20 md:w-24 lg:w-28 px-2 sm:px-3 md:px-4 flex flex-col gap-8 sm:gap-9 md:gap-11 lg:gap-12 xl:gap-14 items-center h-full sticky top-0 bottom-0 overflow-auto">
                <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10">
                    <Image src={MentlyLogo} className="cursor-pointer w-8 sm:w-9 md:w-10 lg:w-12" alt="Mently Logo"></Image>
                    <Image src={GridIcon} className="cursor-pointer w-5 sm:w-6 md:w-7 lg:w-8" alt="Grid Icon"></Image>
                </div>

                <ul className="flex flex-col gap-1 md:gap-2 items-center">
                    {
                        navLinks.map((navLink) => {
                            const isActive = navLink.matchPath
                                ? pathname.startsWith(navLink.matchPath)
                                : pathname.includes(navLink.href);

                            return (
                                <Link href={navLink.href} key={navLink.name}>
                                    <li className={`cursor-pointer px-4 md:px-6 lg:px-8 font-semibold text-sm py-2 md:py-3 lg:py-4 rounded-lg hover:bg-white ${isActive ? 'bg-white' : 'bg-transparent'}`}>
                                        <Image src={isActive ? navLink.blackIcon : navLink.whiteIcon} width={20} alt={`${navLink.name} icon`} className="w-3 md:w-4 lg:w-5"></Image>
                                    </li>
                                </Link>
                            )
                        }
                        )
                    }
                </ul>

                <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-9">
                    <div className="bg-[#FFFFFF1F] w-full rounded-md px-0.5 sm:px-1 md:px-1.5 lg:px-2 py-2 sm:py-3 md:py-4 lg:py-5">
                        <Image src={UserIcon} width={20} className="mx-auto" alt="User Icon"></Image>

                        <Link href={''} className="text-[#F0C074] text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] underline block mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7">Visit Mently Help Desk Here</Link>
                    </div>

                    <Switch />
                </div>
            </div>

            {/* body */}
            <div className="flex-1 h-full overflow-y-auto overflow-x-hidden">
                <div className="shadow-sm py-2 sm:py-3 md:py-4 lg:py-5 px-4 md:px-16 lg:px-20 xl:px-24 mb-2 sticky top-0 bg-white z-50">
                    <div className="flex items-center justify-end gap-5 sm:gap-7 md:gap-9 lg:gap-11">
                        <Image src={NotificationIcon} className="cursor-pointer w-4 md:w-5 lg:w-6" alt="Notification Icon"></Image>
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                            <div className="flex items-center gap-1 md:gap-2">
                                <Image src={UserAvatar} className="cursor-pointer w-7 md:w-9 lg:w-11" alt="User Avatar"></Image>
                                <div>
                                    <p className="text-[#404040] text-[0.6rem] sm:text-xs md:text-sm">Godwin Jimmy</p>
                                    <p className="text-[#777795] text-[0.5rem] sm:text-[0.6rem] md:text-xs">Free Plan <span className="text-[#2B85FE] font-bold cursor-pointer">Upgrade</span></p>
                                </div>
                            </div>

                            <Image src={CaretDownIcon} className="cursor-pointer w-2 md:w-3 lg:w-4" alt="Caret Down Icon"></Image>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto">{children}</div>
            </div>
        </div>
    )
}