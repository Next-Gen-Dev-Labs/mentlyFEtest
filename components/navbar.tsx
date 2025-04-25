import Image from "next/image";

export default function NavbarHeader() {
  return (
    <div className="bg-white shadow-sm overflow-hidden lg:flex hidden justify-end h-[82px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 gap-4">
        <Image
          src="/images/notifications.png"
          alt="Logo"
          width={100}
          height={100}
          className="hidden sm:block size-6"
        />
        <div className="size-11 bg-[#8B72FC] rounded-full relative">
          <Image
            src="/images/component.png"
            alt="comp"
            width={100}
            height={100}
            className="absolute right-[6px] w-[32px] h-[24px] top-[8px]"
          />
          <Image
            src="/images/clip.png"
            alt="comp"
            width={100}
            height={100}
            className="absolute right-[6px] w-[32px] h-[24px] top-[8px]"
          />
        </div>
        <div className="flex flex-col items-start text-right text-gray-500 w-[95px] text-clip ">
          <span className="text-xs font-semibold truncate w-full">
            Techrity Foundation
          </span>
          <span className="text-xs">Member</span>
        </div>
        <div className="bg-[#6F01D0] w-[19px] h-[18px] rounded-md flex items-center justify-center relative">
          <Image
            alt="arrowdown"
            src="/images/arrowdown.png"
            width={100}
            height={100}
            className="w-[10px] h-[4px] absolute top-[16px]"
          />
        </div>
      </div>
    </div>
  );
}
