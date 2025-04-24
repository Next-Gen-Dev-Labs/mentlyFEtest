import React from 'react';

import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Checkbox } from "@/components/ui/checkbox"
export interface MentorCardProps {
    avatar: string;
    name: string;
    email: string;
    role: string;
    experience: string;
    location: string;
    timezone: string;
    onAccept?: () => void;
    onReject?: () => void;
    className?: string;
    isMentor?: boolean;
}

const MentorCard: React.FC<MentorCardProps> = ({
    avatar,
    name,
    email,
    role,
    experience,
    location,
    timezone,
    onAccept,
    onReject,
    isMentor = true,
    className = '',
}) => {
    return (
        <div className={`
      bg-white  py-2 pb-4
      transition-all duration-300
      max-w-2xl w-full
      ${className}
    `}>
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-1">
                    <Checkbox  
                        className="size-4 rounded border-gray-300 data-[state=checked]:bg-purple-700 data-[state=checked]:border-purple-700 data-[state=checked]:text-white"
                    />
                    <Image
                        src={avatar}
                        alt={avatar}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full bg-[#8B72FC] object-cover flex-shrink-0"
                        style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                    />
                    <div>
                        <h3 className="text-gray-900 font-semibold text-xs ">{name}</h3>
                        <p className="text-gray-500 text-xs hover:underline cursor-pointer">{email}</p>
                    </div>
                </div>

                <div className="flex gap-2 ">
                    <Button
                        variant="outline"
                        onClick={onReject}
                        className="text-red-600  bg-red-50 text-xs border-red-200 hover:bg-red-50 hover:text-red-700 hover:font-medium hover:border-red-300"
                    >
                        Reject
                    </Button>
                    <Button

                        onClick={onAccept}
                        className="bg-purple-600 text-xs hover:bg-purple-700"
                    >
                        Accept
                    </Button>
                </div>
            </div>

            {isMentor && (
                <div className="mt-3  ml-7 flex flex-wrap gap-2 text-xs text-[0.60rem]">
                    <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-md border border-purple-200 ">
                        {role}
                    </span>
                    <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-md border border-green-200 ">
                        {experience}
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md border border-gray-200 flex items-center gap-1">
                        <MapPin size={14} /> {location}
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md border border-gray-200 flex items-center gap-1">
                        <Clock size={14} /> {timezone}
                    </span>
                </div>
            )}
        </div>
    );
};

export default MentorCard;