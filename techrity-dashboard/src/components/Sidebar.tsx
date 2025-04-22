'use client';
import React, { useState } from 'react';
import {
  Home,
  Book,
  Bubbles,
  User,
  Clipboard,
  Wallet,
  Award,
  ChartLine,
  Settings,
  LogOut,
  HelpCircle,
  Menu
} from 'lucide-react';
import ClassicModeSwitch from './ToggleSwitch';
import Image from 'next/image';
import { useSidebar } from '@/context/SidebarContext';

interface SidebarProps {
  onNavItemClick?: (item: string) => void;
  activePage?: string;
  isSheet?: boolean;
  closeSheet?: () => void;
}

export default function Sidebar({
  onNavItemClick = () => {},
  activePage = "Dashboard",
  isSheet = false,
  closeSheet
}: SidebarProps) {
  // Add state to track sidebar visibility
  const { isVisible, toggleSidebar } = useSidebar();

 

  const navItems = [
    { name: "Dashboard", icon: Home },
    { name: "Programs", icon: Book },
    { name: "Activities", icon: Bubbles },
    { name: "Users", icon: User },
    { name: "Forums", icon: Clipboard },
    { name: "Finances", icon: Wallet },
    { name: "Rewards", icon: Award },
    { name: "Analytics", icon: ChartLine, badge: "Coming Soon" },
    { name: "Settings", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ];

  // If sidebar is hidden, show only the menu button to reopen it
  if (!isSheet && !isVisible) {
    return null;
  }

  return (
    <div className="h-screen w-60 flex flex-col bg-purple-900 text-white">
      {/* Logo area */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/sidebar/logo.svg" alt="Logo" width={116} height={27} />
          </div>
        </div>
        <button
          className="p-1 rounded hover:bg-purple-800"
          onClick={() => {
            if (isSheet && closeSheet) {
              closeSheet(); // Close sheet in mobile mode
            } else {
              toggleSidebar(); // Regular toggle in desktop mode
            }
          }}
        >
          <Image src="/sidebar/collapse.svg" alt="Close" width={24} height={24} />
        </button>
      </div>
      {/* Navigation items */}
      <nav className="flex-grow mt-2">
        <ul className="space-y-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.name;
            return (
              <li key={item.name}>
                <button
                  onClick={() => onNavItemClick(item.name)}
                  className={`w-full flex items-center px-4 py-3 text-sm ${
                    isActive ? "bg-white text-purple-900 rounded-md px-3" : "text-gray-200 hover:bg-purple-800"
                  }`}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  <div className='relative flex items-center w-full'>
                    <span className="ml-3">{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto text-xs absolute right-7 -top-5 text-gray-300 bg-[#0214BD38] p-1 rounded-full">{item.badge}</span>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Help section */}
      <div className="p-4 mb-2 mx-3 bg-purple-800 rounded-lg">
        <div className="flex items-center mb-2">
          <HelpCircle size={18} className="text-gray-200" />
          <span className="ml-2 text-sm">Got some questions, enquiries or need help?</span>
        </div>
        <a
          href="#"
          className="text-xs text-[#F0C074] underline hover:text-[#fac46d]"
        >
          Visit Merely Help Desk Here
        </a>
      </div>
      <ClassicModeSwitch />
    </div>
  );
}