'use client';

import { useState } from 'react';
import { navItems } from './navconfig';
import Image from 'next/image';

export default function Nav({ isExpanded }: { isExpanded?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={`text-white md:p-4 ${isExpanded ? 'w-full' : ''}`}>
      <ul className="flex w-full flex-col justify-center items-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`transition-all duration-700 h-12 w-full min-w-[84px] rounded-[8px] hover:bg-white hover:bg-opacity-10 flex items-center justify-center relative cursor-pointer ${
              isExpanded ? 'md:px-[2rem] justify-between' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image src={item.icon} alt={item.title} width={24} height={24} />

            {/* Slide/Fade label for expanded view */}
            <span
              className={` ml-5 absolute text-sm ${
                isExpanded ? 'opacity-100 left-14' : 'opacity-0 -left-48'
              }`}
            >
              {item.title}
            </span>

            {/* Tooltip if collapsed & hovered */}
            {!isExpanded && hoveredIndex === index && (
              <div
                className="
                  absolute
                  bottom-full
                  left-1/2
                  -translate-x-1/2
                  mb-2
                  px-2 py-1
                  bg-white
                  text-black
                  text-xs
                  rounded
                  whitespace-nowrap
                  z-10
                "
              >
                {item.title}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
