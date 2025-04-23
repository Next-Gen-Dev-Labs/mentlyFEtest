
import React from 'react';
import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProgramCardProps = {
  image: string;
  title: string;
  description: string;
  instructors: {
    name: string;
    avatarUrl: string;
  }[];
  timeAgo: string;
  status: 'ongoing' | 'upcoming';
  participantsCount: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  image,
  title,
  description,
  instructors,
  timeAgo,
  status,
  participantsCount
}) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in hover:scale-[1.03] hover-scale">
      <div 
        className="h-32 sm:h-36 w-full rounded-lg bg-cover bg-center mb-3 relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`absolute top-2 left-2 inline-block ${status === 'ongoing' ? 'badge-ongoing' : 'badge-upcoming'}`}>
          {status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
        </div>
      </div>
      
      <h3 className="font-bold text-xs sm:text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-3">{description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex -space-x-2">
          {instructors.map((instructor, index) => (
            <Avatar key={index} className="h-6 w-6 border-2 border-white">
              <AvatarImage src={instructor.avatarUrl} />
              <AvatarFallback>{instructor.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-xs text-gray-500">{timeAgo}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <button className="view-button animate-fade-in hover-scale">
          View Participants
        </button>
        
        <button className="join-button flex items-center gap-1 hover:scale-105 transition-transform animate-fade-in">
          <span>Join Now</span>
        </button>
      </div>
      
      <div className="flex items-center justify-end mt-2 text-xs text-gray-500">
        <Users size={12} className="mr-1" />
        <span>{participantsCount} participants</span>
      </div>
    </div>
  );
};

export default ProgramCard;
