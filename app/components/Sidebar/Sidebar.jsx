import React from 'react';
import { SIDENAV } from '../../constants';
import Image from 'next/image';

const SidebarIcon = ({ icon, activeIcon, name, active, isExpanded,isMobile }) => {
    const showLabel = isMobile || isExpanded; // New condition

  return (
    <div className="relative group w-full">
      <button 
        className={`
          w-full p-3 rounded-lg flex items-center
          ${active 
            ? 'bg-white text-purple-900' 
            : 'text-gray-400 hover:bg-purple-800 hover:text-white'
          }
          ${showLabel ? 'justify-start px-4' : 'justify-center'}
        `}
      >
        <Image 
          src={active ? (activeIcon || icon) : icon} 
          alt={name}
          width={14}
          height={14}
          
        />
        {showLabel && (
          <span className="ml-3 text-sm font-medium">{name}</span>
        )}
        
      </button>
      {/* Tooltip - Only show on desktop when collapsed */}
      {!showLabel && !isMobile && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded 
                      invisible opacity-0 group-hover:visible group-hover:opacity-100 
                      transition-all duration-200 whitespace-nowrap z-50">
          {name}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isExpanded, isMobile, onToggleExpand }) => {
  const showLabels = isMobile || isExpanded;

  return (
    <aside className={`
      bg-purple-900 h-screen
      ${isMobile ? 'w-64' : isExpanded ? 'w-64' : 'w-20'}
      transition-all duration-300 ease-in-out
    `}>
      {/* Logo and Mascot */}
      <div className="flex flex-col items-center  mb-8 px-4">
        <Image 
          src={SIDENAV.mascot}
          alt="Mascot"
          width={22}
          height={22}
          className="rounded-full mb-2 mt-2"
        />
        {!isMobile && ( // Only show sidebar toggle on desktop
          <Image 
            src={SIDENAV.sidebar}
            alt="sidebar"
            width={22}
            height={22}
            className="rounded-full cursor-pointer"
            onClick={onToggleExpand}
          />
          
        )}
        {isExpanded && (
          <Image 
            src={SIDENAV.logo}
            alt="Logo"
            width={100}
            height={24}
          />
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 w-full flex flex-col px-2">
        {SIDENAV.navitems.map((item, index) => {
          // Assuming Programs is active for this example
          const isActive = item.name === 'Programs';
          
          
          
          return (
            <SidebarIcon 
              key={index}
              icon={item.icon}
              activeIcon={item.activeicon}
              name={item.name}
              active={isActive}
              isExpanded={isExpanded}
              isMobile={isMobile}
              tag={item.tag}
            />
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="w-full px-2 mt-auto">
        {/* Help Desk Section */}
        <div className={`
          mx-2 px-4 py-4
          border-t border-purple-800/50
          ${showLabels ? '' : 'text-center'}
        `}>
          {/* Help Icon and Text */}
          <div className="flex items-center mb-3">
            <Image 
              src={SIDENAV.help.icon}
              alt="Help"
              width={16}
              height={16}
              className={showLabels ? 'mr-3' : 'mx-auto'}
            />
            {showLabels && (
              <span className="text-xs font-medium text-gray-300">
                {SIDENAV.help.text}
              </span>
            )}
          </div>

          {/* Help Desk Link */}
          
            <div className="text-[8px] text-yellow-400 mb-4 underline">
              {SIDENAV.help.link}
            </div>
          

          {/* Mode Toggle */}
          <div className="flex items-center justify-between">
            {showLabels && (
              <span className="text-xs font-medium text-gray-300">
                {SIDENAV.mode}
              </span>
            )}
            <label className={`
              relative inline-flex items-center cursor-pointer
              ${!showLabels ? 'mx-auto' : ''}
            `}>
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-purple-800/50 
                            peer-focus:outline-none 
                            rounded-full peer 
                            peer-checked:after:translate-x-full 
                            peer-checked:after:border-white 
                            after:content-[''] 
                            after:absolute 
                            after:top-[2px] 
                            after:left-[2px] 
                            after:bg-white 
                            after:border-gray-300 
                            after:border 
                            after:rounded-full 
                            after:h-4 
                            after:w-4 
                            after:transition-all 
                            peer-checked:bg-purple-600">
              </div>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;