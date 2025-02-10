import React from 'react';
import Image from 'next/image';

const Details = () => {
  const detailInfo = [
    { icon: '/icons/briefcase.png', text: ' Mentorship Program' },
    { icon: '/icons/calendar-2.png', text: '21/4/2024-21/5/2024' },
    { icon: '/icons/location.png', text: 'In Person' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-[1rem] md:gap-0 justify-between">
      <div>
        <p
          className="md:max-w-[286px] font-[400] text-[#808080] text-[12px]"
          style={{ lineHeight: '18px', wordSpacing: '1px' }}
        >
          UI/UX Design check ins with faith is a way for beginners in UI/UX
          Design to get started about the fundamentals and how they can build a
          Design Career, share, document their progress on a weekly basis.
        </p>
      </div>
      <div className="shadow-custom w-full h-[180px] md:w-[320px] p-[34px] flex flex-col justify-between">
        {detailInfo.map((detail, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-[2rem]"
          >
            <div className="w-[24px] h-[24px]">
              <Image
                src={detail.icon}
                alt="detail.icon"
                // className="w-full h-auto"
                width={24}
                height={24}
              />
            </div>
            <p
              className="text-[#777795] text-[13px] font-[700] flex-1 text-nowrap"
              style={{ lineHeight: '22px', letterSpacing: '-1%' }}
            >
              {detail.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
