import Image from 'next/image';
import React from 'react';
import { CountryImage } from '../assets/icons/sideBarIcons';

const ActivitiesCard = ({
    title,
    activity,
    profileImage,  
    timeposted,
  }) => {
    return (
    


      <div className="bg-white shadow-md rounded-lg p-4 space-y-3 w-full">
          {/* Header */}
        {/*checkbox and profileImage name and email sin col with two buttton all flex row  */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
           
            <Image src={profileImage} alt="Profile" width={20} height={70} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-[14.4px] font-[700] text-[#4F4F4F]">{title}</span>
              <span className="text-[10px] text-[#7D8DA6]">{activity}</span>
              <span className="text-[10px] text-[#7D8DA6]">{timeposted}</span>
            </div>
          </div>
          {/* Add more elements here if needed */}
          
   
    </div>

     
       
   
   
  </div>
     
    );
  };
  
  export default  ActivitiesCard;
  