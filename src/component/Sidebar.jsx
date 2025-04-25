"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaHome, FaGift, FaChartBar, FaCog, FaSignOutAlt, FaUsers, FaComments,
  FaClipboardList, FaMoneyBillWave, FaRocket, FaTimes
} from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useSidebar } from '@/context/SidebarContext';
import { usePathname } from 'next/navigation';
import techrity from '@/component/assets/techrity.svg';
import gridBag from '@/component/assets/grid-4.svg';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1440);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const menuItems = [
    { icon: <FaHome />, label: 'Dashboard', href: '/dashboard' },
    { icon: <FaRocket />, label: 'Programs', href: '/programs' },
    { icon: <FaClipboardList />, label: 'Activities', href: '/activities' },
    { icon: <FaUsers />, label: 'Users', href: '/users' },
    { icon: <FaComments />, label: 'Forums', href: '/forums' },
    { icon: <FaMoneyBillWave />, label: 'Finances', href: '/finances' },
    { icon: <FaGift />, label: 'Rewards', href: '/rewards' },
    { icon: <FaChartBar />, label: 'Analytics', href: '/analytics', comingSoon: true },
    { icon: <FaCog />, label: 'Settings', href: '/settings' },
    { icon: <FaSignOutAlt />, label: 'Log Out', href: '/logout' },
  ];

  return (
    <>
      <aside
        className={`bg-[#340260] dark:bg-gray-900 text-[#C2C2C2] w-56 p-4 flex flex-col justify-between fixed h-full z-40 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}
      >
        <div>
          <div className="text-2xl font-bold mb-8 flex justify-between items-center">
            <Image src={techrity} alt="Techrity logo" />
            {isMobile && (
              <button onClick={toggleSidebar} className="lg:hidden text-white p-1" aria-label="Close sidebar" type="button">
                <FaTimes size={20} />
              </button>
            )}
            {!isMobile && <Image src={gridBag} alt="grid icon" />}
          </div>
          <ul className="space-y-4">
            {menuItems.map(({ icon, label, href, comingSoon }, index) => {
              const currentPath = pathname === '/' ? '/dashboard' : pathname;
              const isActive = currentPath === href;
              return (
                <li key={index}>
                  <a
                    href={href}
                    className={`flex items-center space-x-4 text-sm p-2 rounded-md transition-colors cursor-pointer
                      ${isActive
                        ? 'bg-white text-purple-700 font-semibold rounded-xl'
                        : 'hover:bg-purple-700 hover:text-white text-[#C2C2C2]'
                      }`}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="flex items-center">
                      {label}
                      {comingSoon && <span className="ml-2 text-xs text-gray-300 italic">(Coming Soon)</span>}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-2 text-sm mb-[14rem]">
          <div className="bg-purple-700 dark:bg-purple-900 p-3 rounded-lg">
            <p className="mb-2 text-white font-semibold text-lg">Got some questions, enqiuries or need help?</p>
            <a href="#" className="text-yellow-500 underline">Visit Mently help Desk here</a>
          </div>
          <div className="flex items-center justify-between">
            <span className='text-white font-semibold text-lg'>{isDarkMode ? 'Switch to Classic Mode' : 'Switch to Dark Mode'}</span>
            <button
              onClick={() => setIsDarkMode(prev => !prev)}
              className="w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1"
              type="button"
              aria-label="Toggle dark mode"
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 transform shadow-md flex items-center justify-center ${
                isDarkMode ? 'bg-purple-900 translate-x-5' : 'bg-purple-700 translate-x-0'
              }`}>
                {isDarkMode ? <MdLightMode size={10} className="text-white" /> : <MdDarkMode size={10} className="text-white" />}
              </div>
            </button>
          </div>
        </div>
      </aside>

      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
