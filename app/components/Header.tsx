import { BellDot } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white h-[82px] fixed w-[80%] lg:w-[calc(100%-240px)] z-50 top-0 right-0 shadow-sm flex items-center justify-end px-2 sm:px-6">
      <div className="flex items-center gap-4 sm:gap-10 h-[82px]">
        <BellDot className="text-gray-500" />
        <div className="flex items-center gap-2">
          <div className="w-[45px] h-[45px] bg-purple-500 rounded-full flex items-center justify-center text-white">
            <span className="text-sm">
              <img src="/shake.svg" alt="" />
            </span>
          </div>
          <div>
            <div className="text-[14px] text-[#404040]">Techrity Foun...</div>
            <div className="text-[12px] text-[#53547B]">Member</div>
          </div>
          <div className="w-4.5 h-4.5 ml-4 bg-[#6F01D0] rounded-sm flex items-center justify-center text-purple-500"></div>
        </div>
      </div>
    </header>
  );
}
