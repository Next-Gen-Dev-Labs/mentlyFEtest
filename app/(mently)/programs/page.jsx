"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { VscBell } from 'react-icons/vsc';
import { MdOutlineKeyboardArrowLeft, MdOutlineArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineContentCopy } from 'react-icons/md';
import { FaShare } from 'react-icons/fa';
import ProgramInfo from '@/app/component/ProgramInfo';
import { GoDotFill } from "react-icons/go";
import Mentorship from '@/app/component/Mentorship';

const Page = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <main>

      <div className='flex items-center gap-6 justify-end w-full border py-5 md:pr-64 fixed bg-white z-0 '>

        <div className='relative'>
          <VscBell size={24} />

          <GoDotFill color='red' className=' absolute -top-2 right-0' />
        </div>
        <div className='flex items-center max-md:hidden'>
          <Image
            src='/godwin.png'
            alt='godwin jimmy'
            width={60}
            height={100}
            className='rounded-full'
          />
          <div>
            <h2>Godwin Jimmy</h2>
            <h3 className='text-[#777795]'>
              Free Plan <span className='text-[#2B85FE] text-md font-bold'>Upgrade</span>
            </h3>
          </div>
        </div>

        <MdOutlineArrowForwardIos className='max-md:hidden'/>

      </div>


      <section className='flex max-md:flex-col pt-24 h-[calc(100vh-80px)] relative z-10 '>
        <main className='w-[33rem] md:p-4 md:ml-5 max-md:w-auto'>
          <div className='flex justify-around mb-10'>
            <Link href='/' className='text-[#F0C074] flex items-center gap-8 hover:text-[#1F0954]'>
              <MdOutlineKeyboardArrowLeft size={25} />
              <h2 className='text-xl'>Back to Home</h2>
            </Link>

            <div className='flex items-center gap-3'>
              <div className='relative'>
                <IoSettingsOutline
                  size={24}
                  onClick={toggleDropdown}
                  className='cursor-pointer hover:text-gray-400 hover:scale-125  transition-all'
                />
                {showDropdown && (
                  <div className='absolute right-0 bg-white text-black shadow-md w-20 mt-2 rounded-md'>
                    <ul className='py-2'>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Delete</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Clear</li>
                    </ul>
                  </div>
                )}
              </div>
              <MdOutlineContentCopy size={20} className='hover:scale-125 cursor-pointer transition-all' />
              <div className='flex items-center gap-2 bg-[#1F0954] text-white rounded-full py-1 px-3 hover:scale-125 cursor-pointer transition-all'>
                <FaShare />
                <h2>Share</h2>
              </div>
            </div>
          </div>

          <div>
            <h2 className='capitalize font-bold text-4xl max-md:text-xl'>program information</h2>
            <p className='capitalize mt-2 text-sm'>Describe section title</p>
          </div>

          <ProgramInfo />
        </main>

        <main className='w-full p-10 h-full max-md:w-auto max-md:h-auto'>
          <h3 className='text-[#809FB8] text-end max-md:text-sm'>13th February 2024, 12:15 PM <span className='text-sm'>(Local time)</span></h3>

          <div className='border  mt-16 p-5'>
            <h1 className='text-[#1F0954] capitalize font-extrabold text-4xl max-md:text-2xl '>mentorship program</h1>
            <Mentorship />
          </div>

        </main>








      </section>
    </main>
  );
};

export default Page;
