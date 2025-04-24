import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserProfileAvatarProps {
  src?: string,
  className?: string;
}

export const UserProfileAvatar = ({src, className}: UserProfileAvatarProps) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={src || '/man-1.svg'} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
