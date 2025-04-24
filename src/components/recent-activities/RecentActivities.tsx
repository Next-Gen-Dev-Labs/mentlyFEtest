
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { notifications } from "@/data/data";
import Image from "next/image";

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-xl shadow-sm border w-full custom-class-4 max-w-full mx-auto">
        {/* Recent Activities header */}
        <div className="flex justify-between items-center mb-3 px-3 pt-3">
            <span className="flex gap-4 items-center">
                <Image src="/SVGs/mobile.svg" width={10} height={9} alt="mobile-icon" className="cursor-pointer" />
                <h2 className="text-[16px] lg:text-[12px] leading-[16px] font-chivo font-bold text-[#B0B0B0]">Recent Activities</h2>
            </span>
            <span className="flex gap-4 items-center">
                <div className="text-[#6F01D0] lg:text-[10px] text-[14px] font-[600] font-chivo">See all</div>
                <Image src="/SVGs/seeAll.svg" width={2.25} height={13.5} alt="seeAll-icon" className="cursor-pointer" />
            </span>
        </div>
        <div className="px-4">
            <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className="flex items-start gap-3 px-2 py-3 hover:bg-gray-50 transition-colors"
                >
                    <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src={notification.avatar} alt={notification.title} />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                    <h4 className="font-bold font-chivo text-[14px] leading-[16px] text-[#011627] mb-1">
                        {notification.title}
                    </h4>
                    <p className="font-normal font-chivo text-[12px] leading-[14px] text-[#707991] mb-1">
                        {notification.description}
                    </p>
                    <span className="font-normal font-chivo text-[12px] leading-[14px] text-[#707991] mb-1">
                        {notification.timeAgo}
                    </span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}
