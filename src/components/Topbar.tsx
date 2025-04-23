import Image from "next/image";
import { IoChevronDown, IoNotificationsOutline } from "react-icons/io5";

export default function Topbar() {
    return (
        <header className="sticky pr-8 gap-4 top-0 bg-[#FDFDFD] h-18 w-full [box-shadow:0px_4px_10px_#00000010] flex items-center justify-end">
            <span className="relative text-[#4D4D4D] text-lg">
                <IoNotificationsOutline />
                <i className="bg-[#FF3E3E] absolute rounded-full -top-0.5 right-0.5 w-2 h-2" />
            </span>
            <div className="items-center gap-2 flex">
                <div className="bg-[#8B72FC] rounded-full w-10 h-10 grid place-items-center">
                    <Image src="/profile.webp" width={32} height={26} alt="User Profile" />
                </div>
                <div className="h-full grid">
                    <p className="text-sm text-[#404040]">Techrity Foun...</p>
                    <span className="text-[12px] text-[#53547B]">Member</span>
                </div>
                <button className="bg-[#6F01D0] text-[#C2C2C2] w-5 h-5 rounded-sm grid place-items-center border-none">
                    <IoChevronDown />
                </button>
            </div>
        </header>
    );
}
