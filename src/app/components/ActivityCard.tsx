// components/ActivityCard.tsx
"use client";

import { ClockIcon } from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  timeAgo: string;
}

const ActivityCard = ({ title, description, timeAgo }: ActivityCardProps) => {
  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-100">
      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
        <ClockIcon className="text-white w-4 h-4" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800 leading-tight">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
        <p className="text-[10px] text-gray-400 mt-1">{timeAgo}</p>
      </div>
    </div>
  );
};

export default ActivityCard;