'use client';

import React, { useEffect, useRef, useState } from 'react';

const ProgramCard2: React.FC = () => {
  const listItems = [
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
    // 1) Capture the current ref value in a local variable
    const currentRef = cardRef.current;
    if (!currentRef) return;

    // 2) Create the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // 3) Observe the element
    observer.observe(currentRef);

    // 4) Cleanup uses the same local variable
    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full p-[1rem] max-w-[668px] md:h-[256px] bg-mentlyBgCard border border-opacity-50 border-mentlyYellow rounded-[16px] transform transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      } hover:-translate-y-1 hover:shadow-lg`}
    >
      <p className="text-mentlyBlue md:text-[20px] font-[600] mb-[1rem] md:mb-[37px]">
        Program Information Text
      </p>
      <ul className="w-[90%] list-disc flex flex-col gap-[0.2rem] ml-[1rem]">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="text-[#595564] font-[400] text-[12px] md:text-[16px]"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCard2;
