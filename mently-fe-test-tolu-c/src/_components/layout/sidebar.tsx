import { UserTagIcon } from "~/assets/icons";
import { Toggle } from "../ui";
import { Navlinks } from "./navlinks";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="w-60 flex-none h-full bg-bg-main text-white flex flex-col items-center py-9 px-4 gap-12">
      <Link href={"/"}>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          height={27}
          width={116}
          className="object-center object-cover"
          loading="lazy"
        />
      </Link>

      <Navlinks />
      <div className="w-full h-31.5 bg-white/12 rounded-lg flex flex-col items-start justify-between py-2.5 px-4">
        <UserTagIcon className="text-white size-5" />
        <p className="text-xs font-bold text-white">
          Got some questions, enquiries or need help?
        </p>
        <p className="text-[10px] underline text-secondary-3">
          Visit Mently Help Desk Here
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        <p className="text-xs font-bold text-in-neutral-def-light">
          Switch to Classic Mode
        </p>
        <Toggle />
      </div>
    </div>
  );
};
