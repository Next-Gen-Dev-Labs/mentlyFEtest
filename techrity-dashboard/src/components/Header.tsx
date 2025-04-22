import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  memberName?: string;
  memberStatus?: string;
}

export default function Header({ 
  memberName = "Techrity Foundation", 
  memberStatus = "Member" 
}: HeaderProps) {
  return (
    <header className="w-full py-2 px-4 flex justify-between items-center bg-white">
      <div className="flex-1"></div>
      
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </div>
        
        {/* Member Info */}
        <div className="flex items-center rounded-md overflow-hidden border-gray-200">
          <div className="px-2 py-1">
            <div className="text-sm text-purple-700 font-medium truncate">{memberName}</div>
            <div className="text-xs text-gray-500">{memberStatus}</div>
          </div>
          <div className="h-8 w-8 bg-purple-700 rounded-lg flex items-center justify-center">
            {/* <span className="text-white text-xs font-bold">
              {memberName.charAt(0)}
            </span> */}
            <ChevronDown  className="text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}