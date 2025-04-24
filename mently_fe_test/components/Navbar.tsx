import { BiBell } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="w-full  h-[78px] float-right flex flex-end end-0 justify-end items-center px-4 py-4 bg-[#FDFDFD] shadow">
      <div className="flex items-center gap-6 space-x-4">
        <div className="relative">
          <BiBell size={24} className="text-[#340260]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>

        <div className="flex flex-row items-center gap-2 justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#8B72FC] relative h-[47px] mx-auto w-[44px] rounded-full">
              <img
                src="/stone.png"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] text-[#404040]">Techrity Found...</p>
              <p className="text-[#53547B] text-[12px]">Member</p>
            </div>
          </div>
          <BsBagFill size={24} className="text-[#6F01D0]" />
        </div>
      </div>
    </nav>
  );
}
