// src/components/MobileNav.tsx
"use client";

import { FC, useState } from 'react';
import Link from 'next/link';
import {
  Menu, X, LayoutDashboard, BookOpen, Activity, UserCircle,
  MessageCircle, Wallet, Award, BarChart2, Settings, LogOut
} from 'lucide-react';
import Image from 'next/image';

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Programs', icon: BookOpen, href: '/programs' },
    { name: 'Activities', icon: Activity, href: '/activities' },
    { name: 'Users', icon: UserCircle, href: '/users' },
    { name: 'Forums', icon: MessageCircle, href: '/forums' },
    { name: 'Finances', icon: Wallet, href: '/finances' },
    { name: 'Rewards', icon: Award, href: '/rewards' },
    { name: 'Analytics', icon: BarChart2, href: '/analytics' },
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Log Out', icon: LogOut, href: '/logout' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-purple-900 focus:outline-none"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex">
          <div className="relative bg-purple-900 text-white w-64 max-w-sm shadow-xl overflow-auto">
            <div className="flex items-center justify-between p-4 border-b border-purple-800">
              <div className="flex items-center">
                <Image 
                  src="/techrity-logo.png" 
                  alt="Techrity Logo" 
                  width={24} 
                  height={24} 
                  className="mr-2" 
                />
                <span className="font-bold text-lg">techrity</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-purple-800 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-4">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="flex items-center px-4 py-3 hover:bg-purple-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 mt-auto border-t border-purple-800">
              <div className="text-sm mb-2">Got some questions, enquiries or need help?</div>
              <Link href="#" className="text-xs text-purple-300 underline">
                Visit Mentor Help Desk page
              </Link>
              <div className="flex items-center justify-between mt-4 p-2 bg-purple-950 rounded">
                <span className="text-xs">Switch to Classic Mode</span>
                <div className="w-12 h-6 bg-purple-700 rounded-full p-1 flex items-center">
                  <div className="bg-white rounded-full w-4 h-4 shadow-md transform translate-x-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
