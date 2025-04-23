
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
        className="w-full mx-auto h-24 rounded-2xl bg-cover bg-center mb-3 relative"
      >
        <img src={image} alt={title} className="object-cover w-full h-full p-1 rounded-xl" />
        <div className={`absolute bottom-2 left-2 inline-block ${status === 'ongoing' ? 'badge-ongoing' : 'badge-upcoming'}`}>
          {status === 'ongoing' ? 'Upcoming' : 'Group Call'}
        </div>
        <div className="w-full h-full absolute top-0 bottom-0 left-0 ring-0 rounded-2xl  p-4">
          <h3 className="font-bold text-xl  text-white ">{title}</h3>
        </div>
      </div>

      {/* <h3 className="font-bold text-xs sm:text-sm mb-1">{title}</h3> */}
      <p className="text-sm text-black/80 mb-3">{description}</p>

      <div className="flex justify-between items-center">

        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {instructors.map((instructor, index) => (
              <Avatar key={index} className="h-6 w-6 border-2 border-white">
                <AvatarImage src={instructor.avatarUrl} />
                <AvatarFallback>{instructor.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2 font-bold">{'Mentor'}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 justify-between">
          <button className="view-button text-xs py-1 px-2 animate-fade-in hover-scale">
            View Details
          </button>

          <button className="join-button text-xs py-1 px-2 flex items-center justify-center gap-1 hover:scale-105 transition-transform animate-fade-in">
            <span>Analysis</span>
          </button>
        </div>
      </div>
      {/*       
      <div className="flex items-center justify-end mt-2 text-xs text-gray-500">
        <Users size={12} className="mr-1" />
        <span>{participantsCount} participants</span>
      </div> */}
    </div>
  );
};

export default ProgramCard;
