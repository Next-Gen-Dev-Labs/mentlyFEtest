
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ApplicationData = {
  id?: number;
  name: string;
  email: string;
  avatarUrl: string;
  attribute?: {
    role: string;
    experience: string;
    location: {
      flagUrl: string;
      location: string;
    };
    timezone: string;
  };
};



type ApplicationCardProps = {
  onReject: () => void;
  onAccept: () => void;
} & ApplicationData


const ApplicationCard: React.FC<ApplicationCardProps> = ({
  name,
  email,
  attribute,
  avatarUrl,
  onReject,
  onAccept
}) => {
  return (
    <div className="bg-white border-b-2 py-4 px-3 sm:px-4">
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0'>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>

          <div className='w-full sm:w-auto'>
            <h4 className="font-medium text-sm sm:text-base">{name}</h4>
            <p className="text-xs text-gray-500 truncate max-w-[200px] sm:max-w-none">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end mt-2 sm:mt-0">
          {/* <button
            className="reject-button hover:scale-105 transition-transform text-sm px-3 py-1.5 rounded-md"
            onClick={onReject}
          >
            Reject
          </button> */}

          <button
            className="accept-button hover:scale-105 transition-transform text-sm px-3 py-1.5 rounded-md"
            onClick={onAccept}
          >
            Accept
          </button>
        </div>
      </div>
      {attribute && (
        <div className='flex items-center justify-start gap-2 overflow-hidden overflow-x-auto w-full scrollbar-none mt-3'>
          <p className='bg-[#9985A7]/20 text-[#9985A7] border border-[#9985A7] inline-block py-1 px-3 rounded-lg text-xs whitespace-nowrap'>{attribute.role}</p>
          {attribute.experience && (
            <p className='bg-[#9985A7]/20 text-[#9985A7] border border-[#9985A7] inline-block py-1 px-3 rounded-lg text-xs whitespace-nowrap'>{attribute.experience}</p>
          )}
          {attribute.location && (
            <p className='bg-[#9985A7]/20 text-[#9985A7] border border-[#9985A7] inline-block py-1 px-3 rounded-lg text-xs whitespace-nowrap'>{attribute.location.location}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;
