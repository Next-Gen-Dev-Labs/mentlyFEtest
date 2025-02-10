import React from 'react';
import Image from 'next/image';

const NoticeBanner = ({ message }: { message: string }) => {
  return (
    <div className="w-full h-fit min-h-[55px] bg-[#CEE1FB] p-2 text-[#777795] text-[12px] font-[400] flex items-center gap-2">
      <div className="w-[24px] h-[24px] min-w-[24px]">
        <Image
          src="/icons/info-circle.png"
          alt="info-circle"
          className="w-full h-auto object-cover"
          width={24}
          height={24}
        />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default NoticeBanner;
