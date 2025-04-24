
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { users } from "@/data/data";

export default function MentorCard() {
  return (
    <div className="bg-white rounded-2xl shadow border w-full custom-class-4 max-w-full mx-auto">
      {/* MentorCard header */}
      <div className="flex justify-between items-center px-3 pt-3 mb-1.5">
        <span className="flex gap-4 items-center">
          <Image src="/SVGs/mobile.svg" width={10} height={9} alt="mobile-icon" className="cursor-pointer" />
          <h2 className="text-[16px] font-chivo font-semibold text-[#B0B0B0]">Mentors</h2>
        </span>
        <span className="flex gap-4 items-center">
          <Image src="/SVGs/plus.svg" width={24} height={24} alt="plus-icon" className="cursor-pointer" />
          <Image src="/SVGs/seeAll.svg" width={2.25} height={13.5} alt="seeAll-icon" className="cursor-pointer" />
        </span>
      </div>
      <div className="px-2">
        <div className="">
          {users.map((user) => (
            <>
              <div key={user.name} className="flex items-center px-2 py-2">
                <Avatar className="h-[32px] w-[32px] mr-3">
                  <AvatarImage src={user.avatar} alt={user.name} />
                </Avatar>
                <div className="flex-1">
                  <div className="font-bold text-[#4F4F4F] font-chivo text-[14px]">{user.name}</div>
                  <div className="text-[#7D8DA6] text-[10px] font-normal">{user.role}</div>
                </div>
                <button
                  className="bg-[#6F01D0] cursor-pointer text-[#F1EEFF] font-normal text-[12px] rounded-[16px] flex items-center justify-center px-2 w-[76px] h-[22px]"
                >
                  Message
                </button>
              </div>
              <Separator className="" />
            </>
          ))}
        </div>
        <div className="px-4 pb-3 pt-2">
          <button
            className="w-full cursor-pointer bg-[#DDD6FB] font-semibold rounded-[24px] text-[#6F01D0] py-3 h-[44px] font-chivo text-[14px] hover:bg-[#d6bcfa] transition"
          >
            See all
          </button>
        </div>
      </div>
    </div>
  );
}