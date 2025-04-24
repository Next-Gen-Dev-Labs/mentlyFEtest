import Image from 'next/image';
import React from 'react';

const ProgramCard = ({
  title,
  image,
  tag,
  host,
  description,
  profileImages,
  buttons = [],
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
      {/* Image + Title Overlay */}
      <div className="relative w-full h-[110px] rounded-md overflow-hidden">
        <Image src={image} fill alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between px-2 py-10 text-white">
          <div>
            <p className="text-[16.42px] font-bold">{title}</p>
            <div className={`flex items-center gap-1 w-fit mb-4 text-[6.57px] font-[700] px-2 rounded-full
    ${tag === 'Group Call' ? 'bg-[#D4F3D4] text-[#008000]' : 'bg-[#D4E0F3] text-[#0077FF]'}`}
>
  <span
    className={`rounded-full px-1 w-2 h-2 ${
      tag === 'Group Call' ? 'bg-[#008000]' : 'bg-[#0077FF]'
    }`}
  ></span>
  <span>{tag}</span>
</div>
           
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[10px] text-[#A3A3A3] font-[400]">{description}</p>

      
      <div className="flex items-center justify-between w-full mt-2">
  {/* Host Info */}
  <div className="flex items-center gap-1">
        <Image
          src={profileImages}
          alt="Host profile"
        
          width={20} height={70} className="rounded-full"
        />
      
    <span className="text-[7.88px] text-gray-700 font-medium">{host}</span>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-2">
    {buttons.map((btn, idx) => (
      <button
        key={idx}
        className={`px-3 py-1 text-[7.88px] rounded-sm ${
          btn.variant === 'primary'
            ? 'bg-[#6F01D0] text-white'
            : 'border border-[#6F01D0] text-[#6F01D0]'
        }`}
      >
        {btn.label}
      </button>
    ))}
  </div>
</div>
    </div>
  );
};

export default ProgramCard;
