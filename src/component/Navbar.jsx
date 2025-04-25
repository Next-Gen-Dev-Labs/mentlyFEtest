"use client";
import { FaBell, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import holdingHands from '../component/assets/hands.svg';
import { useSidebar } from '../context/SidebarContext';

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden mr-4 text-gray-600 dark:text-gray-300 p-2 border border-gray-300 rounded"
          type="button"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Notifications">
          <FaBell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#8B72FC] flex items-center justify-center">
            <Image src={holdingHands} alt='Profile icon' className="w-6 h-6" />
          </div>
          <div className="text-sm font-medium dark:text-white">
            Techrity Foundation
            <div className="text-xs text-gray-500 dark:text-gray-400">Member</div>
          </div>
        </div>
        <button className="ml-2 bg-purple-600 text-white rounded-lg p-1" type="button" aria-label="Expand profile menu">
          <FaChevronDown className='h-4 w-4' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;





