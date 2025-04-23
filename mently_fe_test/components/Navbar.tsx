// components/Navbar.tsx
import Image from "next/image";
import { BiBell, BiShoppingBag } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="w-full h-[82px] float-right flex flex-end end-0 justify-end items-center px-4 py-3 bg-[#FDFDFD] shadow">
      <div className="flex items-center gap-6 space-x-4">
        <div className="relative">
          <BiBell size={24} className="text-[#340260]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>

        <div className="flex flex-row items-center gap-2 justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#8B72FC] h-[44px] w-[44px] rounded-full"></div>
            <div className="flex flex-col">
              <p className="text-[14px] text-[#404040]">Techrity Found...</p>
              <p className="text-[#53547B] text-[12px]">Member</p>
            </div>
          </div>

          <BiShoppingBag size={24} className="text-[#6F01D0]" />
        </div>
      </div>
    </nav>
  );
}
