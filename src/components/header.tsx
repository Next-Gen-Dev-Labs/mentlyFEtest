import Bell from "@/assets/svg/bell";
import Logo from "@/assets/svg/logo";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <nav className="w-full max-w-screen-2xl sm:py-5 p-4 sm:px-8 md:px-13 h-[82px] flex items-center justify-center">
      <div className="flex gap-4 items-center justify-end w-full">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer relative group">
            <span className="bg-red-500 absolute -top-0.5 right-0 size-2 rounded-full" />
            <Bell />
            <div className="hidden group-hover:flex absolute md:-translate-x-[300px] translate-y-4 top-5 items-center justify-center rounded-lg bg-white shadow-sm p-4 w-80 h-80">
              <p className="text-black text-base font-medium">
                You have no new notifications
              </p>
            </div>
          </div>
          <div className="cursor-pointer flex items-center gap-2 sm:gap-4 relative">
            <span className="size-[44px] shrink-0 flex items-center justify-center rounded-full bg-[#8B72FC]">
              <Logo />
            </span>
            <div className="">
              <p className="text-[#404040] text-xs sm:text-sm">
                Techrity Founder
              </p>
              <p className="text-[var(--primary-3)] text-[10px] sm:text-xs">
                Member
              </p>
            </div>
            <span className="p-1 rounded-sm bg-[var(--primary-light)] peer">
              <ChevronDown className="stroke-[#C2C2C2] size-4" />
            </span>
            <div className="peer-hover:block absolute hidden right-0 top-[100%] p-4 rounded-lg shadow-sm bg-white">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
