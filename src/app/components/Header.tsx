import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Icon icon="solar:hamburger-menu-broken" className="lg:invisible lg:pointer-events-none text-mentlyBlue cursor-pointer relative left-0" width="30" height="30" />
            <span className="flex gap-2">
                <Image src="notifications.svg" alt="notification icon" width={20} height={20} />
                <div className="flex gap-2 items-center h-full lg:mr-10">
                    <Image src="/profile.png" alt="profile icon" width={50} height={50} className="rounded-full" />
                    <div>
                        <p className="text-[#404040] text-sm">Godwin Jimmy</p>
                        <div className="flex gap-2">
                            <p className="text-[#777795] text-xs">Free Plan</p>
                            <Link className="text-[#2B85FE] font-bold text-sm" href="/">Upgrade</Link>
                        </div>
                    </div>
                    <Icon icon="mingcute:down-line" className="text-[#C2C2C2] cursor-pointer" width="24" height="24" />
                </div>
            </span>
        </>
    );
}

export default Header;