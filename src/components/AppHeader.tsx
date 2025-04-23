import Image from "next/image";
import notification from "@/assets/notifications-icon.png";
import avatar from "@/assets/user-avatar.png";
import arrowDown from "@/assets/arrow-down.png";
const AppHeader = () => {
  return (
    <div className="bg-[#FDFDFD] sticky top-0 flex z-50 items-center gap-5 justify-start md:justify-end shadow-[0px_2px_4px_0px_#00000010] py-5 px-5 lg:px-16">
      <div>
        <Image
          src={notification}
          alt="icon"
          width={40}
          height={40}
          className="rounded-full size-6 md:size-[40px] mr-4 cursor-pointer"
        />
      </div>
      <div className="rounded-full size-8 md:size-[44px] p-1 bg-[#8B72FC] flex items-center justify-center">
        <Image
          src={avatar}
          alt="icon"
          width={40}
          height={40}
          className="size-6 md:size-[40px]"
        />
      </div>
      <div>
        <h1 className="text-[#404040] text-sm font-normal">Techrity Foun...</h1>
        <p className="text-xs font-normal">Member</p>
      </div>
      <div className="rounded size-[19]  bg-[#6F01D0] flex items-center justify-center">
        <Image
          src={arrowDown}
          alt="icon"
          width={16}
          height={16}
          className="cursor-pointer"
        />{" "}
      </div>
    </div>
  );
};

export default AppHeader;
