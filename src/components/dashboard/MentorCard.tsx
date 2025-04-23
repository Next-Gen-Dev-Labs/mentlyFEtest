
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
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        
        <div>
          <h4 className="font-medium text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      
      <button 
        className="message-button"
        onClick={onMessage}
      >
        Message
      </button>
    </div>
  );
};

export default MentorCard;
