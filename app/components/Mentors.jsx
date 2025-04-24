import Image from 'next/image';
import React from 'react';
import { CountryImage } from '../assets/icons/sideBarIcons';

const Mentors = ({
    name,
    jobTitle,
    profileImage,  
    buttons,
  }) => {
    return (
    


      <div className="bg-white shadow-md rounded-lg p-4 space-y-3 w-full">
          {/* Header */}
        {/*checkbox and profileImage name and email sin col with two buttton all flex row  */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
           
            <Image src={profileImage} alt="Profile" width={20} height={70} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-[14.4px] font-[700] text-[#4F4F4F]">{name}</span>
              <span className="text-[10px] text-[#7D8DA6]">{jobTitle}</span>
            </div>
          </div>
          {/* Add more elements here if needed */}
          <div className="flex gap-2">
            <button className='px-3 py-1 text-[7.88px] rounded-sm bg-[#6F01D0] text-[#FFFFFF]'>{buttons}</button>
    
    </div>
   
    </div>

     
       
   
   
  </div>
     
    );
  };
  
  export default Mentors;
  