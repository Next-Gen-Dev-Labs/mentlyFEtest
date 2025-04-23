import type { ReactNode } from "react";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  image: string;
}

export function ActivityItem({
  title,
  description,
  time,
  image,
}: ActivityItemProps) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-200">
        <img src={image} alt="" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-[#011627] text-[14px] leading-[16px]">
          {title}
        </div>
        <div className="text-[12px] text-[#011627] leading-[14px]">
          {description}
        </div>
        <div className="text-[12px] text-[#707991] font-light">{time}</div>
      </div>
    </div>
  );
}
