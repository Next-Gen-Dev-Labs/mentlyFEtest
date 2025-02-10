import React from "react";
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react"; // Import used icons

const MentorshipCard = () => {
  return (
    <div className='rounded-lg shadow-md p-6 w-full flex justify-between bg-neutral-300'>
      {/* Card container */}
      <div className='flex items-center mb-4'>
        {/* Title and Image */}
        <img
          src='/images/banner.png' // Replace with your image source
          alt='Mentorship Program'
          className='w-28  rounded-md mr-4' // Image styling
        />
        <div>
          <h3 className='text-xl font-bold text-gray-800'>
            Mastering the Work Life Equation
          </h3>
          <p className='text-sm text-gray-600'>with Nwachukwu Peculiar</p>
          <button className='py-1 px-4 rounded-sm bg-orange-500'>
            Masterclass
          </button>
        </div>
      </div>
      <div className=''>
        <div className='mb-4'>
          {/* Date and Time */}
          <div className='flex items-center text-gray-600'>
            <IconCalendar className='w-5 h-5 mr-2' />
            <p>20th Oct 2024</p>
          </div>
          <div className='flex items-center text-gray-600 mt-2'>
            <IconClock className='w-5 h-5 mr-2' />
            <p>2:00 PM</p>
          </div>
        </div>
        <div className='mb-4'></div>
        {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Join Now
        </button> */}
      </div>
    </div>
  );
};

export default MentorshipCard;
/**
 
<div className='flex items-center text-gray-600 mt-2'>
            <IconMapPin className='w-5 h-5 mr-2' />
            <p>Online</p> Or "In Person"
          </div>

 */
