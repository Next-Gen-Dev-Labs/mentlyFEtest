import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import React from 'react';


export interface BusinessCardProps {
    profileImage: string;
    name: string;
    jobTitle: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
    profileImage,
    name,
    jobTitle,
    actionLabel = 'Message',
    onAction,
    className = '',
}) => {
    return (
        <div
            className={`
        relative px-2 pb-4 text-xs 
        bg-white flex items-center justify-between
        transition-all duration-300 hover:border-gray-400
        max-w-md w-full
        ${className}
      `}
        >
            <div className="flex items-center space-x-4">
                <Avatar className="flex items-center gap-2 rounded-full bg-[#8B72FC] p-2 py-2.5">
                    <AvatarImage src={profileImage} className="size-6" alt={name} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* <Avatar src={profileImage} alt={name} /> */}
                <div>
                    <h3 className="text-gray-900 font-semibold text-xs ">
                        {name}
                    </h3>
                    <p className="text-gray-500  mt-1 text-xs">
                        {jobTitle}
                    </p>
                </div>
            </div>

            <Button

                onClick={onAction}
                className="transform transition-transform duration-200 hover:-translate-y-0.5 hover:bg-purple-700/90 rounded-full bg-purple-800 text-xs"
            >
                {actionLabel}
            </Button>
        </div>
    );
};

export default BusinessCard;