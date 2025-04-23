
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ActivityItemProps = {
  title: string;
  description: string;
  timeAgo: string;
  iconUrl: string;
  icon?: React.ReactNode;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  description,
  timeAgo,
  iconUrl,
  icon
}) => {
  return (
    <div className="flex gap-2 sm:gap-3 mb-4 animate-fade-in">
      <Avatar className="h-8 w-8">
        {icon ? (
          <div className="flex items-center justify-center w-full h-full bg-techrity-purple-light/20 text-techrity-purple">
            {icon}
          </div>
        ) : (
          <>
            <AvatarImage src={iconUrl} />
            <AvatarFallback>A</AvatarFallback>
          </>
        )}
      </Avatar>
      
      <div className="flex-1">
        <h4 className="font-medium text-xs sm:text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{timeAgo}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
