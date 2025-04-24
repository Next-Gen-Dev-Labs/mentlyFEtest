import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import NavLinks from "./NavLinks";
import ToggleSwitch from "./ToggleSwitch";

export default function SideNav() {
  return (
    <div className="flex bg-[#340260] overflow-y-auto no-scrollbar flex-col px-4 py-6 md:px-4 md:py-8 md:">
      <Link
        className="mb-4 flex items-center justify-start p-4 md:h-40"
        href="/"
      >
        <Image src="/logo.png" width={116} height={27} alt="techrity" />
      </Link>

      <div className="flex-grow space-y-4 overflow-y-auto md:overflow-hidden">
        <NavLinks />

        {/* Section for Help Desk or Other Info */}
        <div className="hidden md:block bg-[#FFFFFF1F] p-4 rounded-xl space-y-2">
          <BiUserCircle size={24} className="text-white" />
          <p className="text-white text-[12px] font-semibold">
            Got some questions, inquiries, or need help?
          </p>
          <p className="text-[#F0C074] text-[10px] underline">
            Visit Mently Help Desk Here
          </p>
        </div>

        {/* Switch to Classic Mode */}
        <div className="md:hidden p-4 bg-[#FFFFFF1F] rounded-xl">
          <p className="text-[#F2F2F2] text-[12px] font-semibold">
            Switch to Classic Mode
          </p>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
