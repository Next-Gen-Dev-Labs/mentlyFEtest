import Image from "next/image";
import Link from "next/link";
import {
  BiLogOut,
  BiToggleRight,
  BiUserCircle,
  BiVector,
} from "react-icons/bi";
import NavLinks from "./NavLinks";
import ToggleSwitch from "./ToggleSwitch";

export default function SideNav() {
  return (
    <div className="flex bg-[#340260] h-screen overflow-y-auto no-scrollbar flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md  p-4 md:h-40"
        href="/"
      >
        <Image src="/logo.png" width={116} height={27} alt="techrity" />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md md:block"></div> */}
        <div className="hidden md:block space-y-2 flex-col  p-2 bg-[#FFFFFF1F] w-[220px] mx-auto rounded-xl h-[126px]">
          <BiUserCircle />
          <p className="text-[#FFFFFF] flex gap-10 text-[12px] font-bold">
            Got some questions, enquiries or need help?
          </p>
          <p className="text-[#F0C074] text-[10px] underline">
            Visit Mently Help Desk Here
          </p>
        </div>
        <div className="flex items-center justify-between p-2">
          <p className="text-[#F2F2F2] text-[12px] font-bold">
            Switch to Classic Mode
          </p>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
