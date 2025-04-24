import React from 'react';
import Image from 'next/image';



export interface NotificationProps {
  avatar: string;
  title: string;
  message: string;
  timestamp: string;
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({
  avatar,
  title,
  message,
  timestamp,
  className = '',
}) => {
  return (
    <div className={`
      bg-white flex  gap-4 rounded-lg  py-2 
      transition-all duration-300 text-xs
      max-w-xl w-full
      ${className}
    `}>
      <Image
        src={avatar}
        alt={title}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full bg-[#8B72FC] object-cover flex-shrink-0"
        style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
      />

      <div className="flex-1">
        <h3 className="text-gray-900 font-semibold ">
          {title}
        </h3>
        <p className="text-gray-500 mt-1">
          {message}
        </p>
        <p className="text-gray-400  mt-2">
          {timestamp}
        </p>

      </div>
    </div>
  );
};

export default Notification;