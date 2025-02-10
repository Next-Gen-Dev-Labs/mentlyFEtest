'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface props {
  icon: string;
  option1: string;
  option2: string;
  modalClass?: string;
}

const IconWithModal: React.FC<props> = ({
  icon,
  option1,
  option2,
  modalClass,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <Image
        src={icon}
        alt="setting"
        className="cursor-pointer"
        onClick={toggleModal}
        width={24}
        height={24}
      />

      {isModalOpen && (
        <div
          className={`absolute left-[-150%] w-[50px] h-[60px] top-2 mt-2 bg-white rounded shadow-sm p-2 z-10 flex flex-col justify-center ${modalClass}`}
        >
          <p className="cursor-pointer block text-[12px] text-mentlyGray mb-3">
            {option1}
          </p>
          <p className="cursor-pointer block text-[12px] text-mentlyGray">
            {option2}
          </p>
        </div>
      )}
    </div>
  );
};

export default IconWithModal;
