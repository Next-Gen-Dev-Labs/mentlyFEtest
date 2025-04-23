
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type MentorCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  onMessage: () => void;
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  avatarUrl,
  onMessage
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in">
      <div className="flex items-center gap-2 sm:gap-3">
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        
        <div>
          <h4 className="font-medium text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      
      <button 
        className="message-button hover-scale"
        onClick={onMessage}
      >
        Message
      </button>
    </div>
  );
};

export default MentorCard;
