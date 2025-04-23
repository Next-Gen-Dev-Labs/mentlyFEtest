// src/components/Header.tsx
import { FC } from 'react';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import MobileNav from './MobileNav';

const Header: FC = () => {
  return (
    <header className="bg-white p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        <MobileNav />
        <div className="ml-0 md:ml-4">
          <h1 className="text-lg md:text-xl font-bold text-purple-900 flex items-center">
            Welcome Aboard, Blessing <span className="text-yellow-400 ml-1">👋</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-500 hidden md:block">
            We&apos;re thrilled to have you join Techrity Team!
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="/images/rpp12.jpg"
              alt="User avatar"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Techrity Team</p>
            <p className="text-xs text-gray-500">Member</p>
          </div>
        </div>
        <button className="bg-purple-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:bg-purple-700">
          Update Profile
        </button>
      </div>
    </header>
  );
};

export default Header;