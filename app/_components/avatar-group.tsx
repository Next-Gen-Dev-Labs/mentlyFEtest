"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TUserThumb } from "@/lib/types";

export default function AvatarGroup({ users }: { users: TUserThumb[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex -space-x-1.5">
        {users.map((user, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Avatar
                className={`transition-transform size-3.5 ${
                  activeIndex === index ? "z-10 scale-110" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent className="shadow rounded-sm">
              <p className="font-medium !text-[10px]">{user.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
