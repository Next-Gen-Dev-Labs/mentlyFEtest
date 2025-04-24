'use client';

import Image from 'next/image';
import { useState } from 'react';

const TopBar = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <div className="fixed top-0 left-48 right-0 h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-end z-10">
      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <div className="relative">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setHasNotifications(!hasNotifications)}
          >
            <Image
              src="/notification.png"
              alt="notifications"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
          {hasNotifications && (
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></div>
          )}
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#8B72FC] flex items-center justify-center overflow-hidden">
            <Image
              src="/profile-default.png"
              alt="profile"
              width={24}
              height={24}
              className="w-6 h-6 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
        </div>

        {/* Widget Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Image
            src="/widget.png"
            alt="widgets"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default TopBar; 