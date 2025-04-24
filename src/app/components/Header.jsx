import React from 'react';
import { Bell, MessageSquare, Menu, X } from 'lucide-react';
import Image from 'next/image';
import user_header_logo from '../../../public/user-header.png'; 
import techrity_logo from '../../../public/techrity-logo.png'; // Techrity Logo Image

export default function Header({ isSidebarOpen, onToggleSidebar }) {
  return (
    <header className="bg-white shadow-sm z-10 relative">
      <div className="flex items-center justify-between px-4 py-4 md:py-2 md:px-6 ">
        {/* Sidebar Toggle - Mobile Only */}
        <div className="md:hidden">
          <button 
            onClick={onToggleSidebar} 
            className="text-purple-800 bg-purple-100 p-2 rounded-md shadow-sm"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Logo and Title for larger screens */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Techrity Logo (Always visible) */}
          <div className="h-8 w-24 relative md:flex items-center">
            <Image 
              src={techrity_logo} 
              alt="Techrity Logo" 
              width={100} 
              height={32} 
              className="object-contain"
              priority
            />
          </div>
          























































































          
        </div>

        {/* Right Side Icons/User Info */}
        <div className="flex items-center space-x-3 md:space-x-4 ml-auto">
          {/* Notification Bell */}
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={20} className="text-gray-600" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </button>

          {/* Chat Icon - Hide on Mobile */}
          <button className="p-1 rounded-full bg-purple-100 text-purple-700 hidden sm:inline-flex">
            <MessageSquare size={16} />
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#8B72FC] flex items-center justify-center text-white">
              <Image 
                src={user_header_logo}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
            {/* Hide User Text on Mobile */}
            <div className="text-sm hidden sm:block">
              <div className="text-black font-medium leading-tight">Techrity Foundation</div>
              <div className="text-xs text-gray-500">Member</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
