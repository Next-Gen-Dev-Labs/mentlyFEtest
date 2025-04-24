import Image from "next/image";
import { DropdownIcon, MenuIcon, NotificationIcon } from "~/assets/icons";

export const Header = () => {
  return (
    <div className="w-full sticky z-50 flex-none top-0 h-[82px] bg-[#fdfdfd] shadow-header flex justify-end items-center px-6 lg:px-13 gap-6 lg:gap-11">
      <div className="lg:hidden flex-1">
        <MenuIcon className="text-font size-5" />
      </div>
      <div className="relative size-6 ">
        <span className="size-2 bg-[#FF3E3E] rounded-full absolute top-0 right-1"></span>
        <NotificationIcon className="size-6 text-[#4D4D4D]" />
      </div>
      <div className="flex h-11 items-center gap-4 flex-none">
        <div className="flex items-center gap-2 h-full">
          <div className="size-8 lg:size-11 rounded-full flex items-center justify-center bg-[#8B72FC] flex-none">
            <Image
              src={"/images/profile.png"}
              alt="profile"
              height={26}
              width={32}
              className="object-center size-5 lg:size-8 object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-start gap-1 flex-none">
            <p className="text-sm text-[#404040]">Techrity Foun...</p>
            <p className="text-xs text-primary-3">Member</p>
          </div>
        </div>
        <div className="size-4.5 bg-[#6F01D0] rounded relative">
          <DropdownIcon className="absolute size-4 text-[#C2C2C2] -right-0.5 -bottom-2" />
        </div>
      </div>
    </div>
  );
};
