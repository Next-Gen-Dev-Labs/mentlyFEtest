"use client";

import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Image from "next/image";
import ManageWidgetModal from './ManageWidgetModal';

const Header: React.FC = () => {
  const [isManageWidgetModalOpen, setIsManageWidgetModalOpen] = useState(false);

  const openManageWidgetModal = () => {
    setIsManageWidgetModalOpen(true);
  };

  const closeManageWidgetModal = () => {
    setIsManageWidgetModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <button className="text-gray-500 focus:outline-none md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative hover:text-gray-700 focus:outline-none">
              <Bell size={24} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-4">
                <div>
                  <Image src="/Frame 1171276830.png" width={158} height={44} alt="member" />
                </div>
                <div>
                  <Image src="/Frame 1321318580.png" width={19} height={18} alt="member" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end items-center px-4 pb-4 hidden">
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="bg-purple-100 text-purple-800 p-2 rounded focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
            </button>
            <button 
              className="text-sm font-medium"
              onClick={openManageWidgetModal}
            >
              Manage Widgets
            </button>
          </div>
        </div>
      </header>

     {/* Manage Widget Modal */}
      < ManageWidgetModal 
        isOpen={isManageWidgetModalOpen} 
        onClose={closeManageWidgetModal} 
      />
    </>
  );
};

export default Header;