"use client";

import { BellIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  hasNotification?: boolean;
  className?: string;
}

export const Notification = ({
  hasNotification = false,
  className,
}: NotificationProps) => {
  return (
    <div className={cn("relative size-10 flex items-center justify-center", className)}>
      <BellIcon className="size-6" />
      {hasNotification && (
        <div className="absolute top-2 right-3 size-2 rounded-full bg-red-400" />
      )}
    </div>
  );
};
