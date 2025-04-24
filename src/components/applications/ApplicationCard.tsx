import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { applications, badgeStyles } from './Applications';

const ApplicationCard = ({ user }: { user: (typeof applications[0]["list"][0]) }) => {
  return (
    <div className="w-full flex flex-col gap-2 py-4">
      <div className="flex items-center gap-3">
        <Checkbox className="" />
        <Avatar className="h-[32px] w-[32px]">
          <AvatarImage src={user.avatar} alt={user.name} />
        </Avatar>
        <div className='flex gap-1 max-sm:justify-between w-full'>
          <div className="flex-1 flex flex-col">
            <span className="text-[14px] font-bold text-[#4F4F4F]">{user.name}</span>
            <span className="text-[10px] text-[#7D8DA6] font-normal font-chivo">{user.email}</span>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 ml-2">
            <button
              className="border cursor-pointer rounded-[6.11px] w-[78px] h-[31px] border-[#D09696] text-[#D83535] bg-[#FFEDED] flex items-center justify-center font-chivo font-medium text-[9.77px]"
            >
              Reject
            </button>
            <button
              style={{
                background: "#8400e2"
              }}
              className="text-white cursor-pointer rounded-[6.11px] w-[81px] h-[31px] bg-[#6F01D0] flex items-center justify-center hover:brightness-110 font-chivo font-medium text-[9.77px]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
      {user.info && user.info.length > 0 && (
        <div className="flex w-full flex-row gap-2 mt-2">
          {user.info.map((b, i) => (
            <span 
              key={i}
              className={badgeStyles[(b.style as keyof typeof badgeStyles || "default")]}
            >
              {b.label}
          </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplicationCard;