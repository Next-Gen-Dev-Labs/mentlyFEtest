import { BellIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-4 px-4 py-2 shadow-sm border-b">
      <div className="relative w-5 h-5">
        <BellIcon className="w-5 h-5 text-gray-600" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
      </div>

      <div className="flex gap-2 items-center">
        <div className="w-7 h-7 rounded-full bg-[#8B72FC] flex items-center justify-center">
          <Image
            src="/asset/nav-profile.png"
            alt="Mently Logo"
            width={80}
            height={30}
            priority
          />
        </div>
        <div className="flex flex-col">
            <p className="text-[12px] text-gray-500 p-0 m-0">Techrity Foun...</p>
            <small className="text-gray-500 text-[10px]">Member</small>
        </div>
      </div>
    </div>
  );
}
