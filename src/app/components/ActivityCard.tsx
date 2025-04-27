import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  timeAgo: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, timeAgo }) => {
  return (
    <div className="flex items-start gap-3 border-b py-3">
      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
      <div className="text-sm">
        <h4 className="font-medium">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
        <span className="text-xs text-gray-400">{timeAgo}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
