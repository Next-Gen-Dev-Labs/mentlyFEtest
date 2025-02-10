'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const ProgramCard1: React.FC = () => {
  const gridItems = [
    { icon: '/icons/content1.png', text: 'Content' },
    { icon: '/icons/content2.png', text: 'Content' },
    { icon: '/icons/people.png', text: 'Content' },
    { icon: '/icons/note-2.png', text: 'Content' },
    { icon: '/icons/phonecall.png', text: 'Content' },
    { icon: '/icons/stackpaper.png', text: 'Content' },
  ];

  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = cardRef.current; // 1) Copy to a local variable
    if (!currentRef) return;           // 2) Exit if no ref

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // 3) Observe the currentRef
    observer.observe(currentRef);

    // 4) Cleanup
    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full p-[1rem] max-w-[668px] md:h-[256px] bg-mentlyBgCard border border-opacity-50 border-mentlyYellow rounded-[16px] transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      } hover:-translate-y-1 hover:shadow-lg`}
    >
      <p className="text-mentlyBlue md:text-[20px] font-[600] mb-[1rem] md:mb-[37px]">
        Program Information Text
      </p>

      <div className="w-full grid grid-cols-2 gap-[1.6rem]">
        {gridItems.map((item, index) => (
          <div key={index} className="flex items-center gap-[1rem]">
            <div className="md:w-[34px] md:h-[34px] w-[24px] h-[24px] bg-[#FFECCC] rounded-full flex justify-center items-center">
              {/* Using Next.js Image */}
              <Image
                src={item.icon}
                alt="content.icon"
                width={24}
                height={24}
              />
            </div>
            <p
              className="text-[#595564] text-[12px] md:text-[16px] font-[400]"
              style={{ lineHeight: '19.04px' }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCard1;
