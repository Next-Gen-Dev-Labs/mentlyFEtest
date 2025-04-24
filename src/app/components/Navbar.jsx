"use client"
import React from 'react'
import Image from 'next/image'
import logo from "@/app/images/logo.png"
import notification from "@/app/images/notifications.png"
import frame from "@/app/images/frame.png"
import { MdOutlineMenuOpen } from "react-icons/md";
import { useGlobalState } from '../context'

function Navbar() {
  const {theme, toggleTheme, showSideBar, setShowSideBar} = useGlobalState()
  return (
    <nav className=' bg-white flex dark:bg-gray-900 shadow-md w-full max-xl:ml-0 max-xl:place-content-stretch max-xl:self-stretch h-25'>
        <div className='hidden max-xl:flex place-content-start self-start mr-auto pl-10 mt-10'>
          <MdOutlineMenuOpen className='text-2xl cursor-pointer' onClick={()=>{setShowSideBar(!showSideBar)}}/>

        </div>
        <div className='flex ml-auto place-content-end self-end py-4 space-x-8 pr-10 max-xl:ml-0  max-xl:px-10 max-xl:w-full'>
            <Image src={notification} alt='image' height={28} width={28} className='object-contain max-md:hidden'/>
            <div className='rounded-full p-2 bg-[#8b72fc] h-fit w-fit mt-2'><Image src={logo} alt='image' height={25} width={25} className='object-contain'/></div>

            <div className='max-md:hidden'>
                <p className='text-xl font-light'>Techrity Foun...</p>
                <p className='text-sm font-extralight'>Member</p>
            </div>

            <Image src={frame} alt='image' height={28} width={28} className='object-contain max-md:hidden'/>

        </div>


      
    </nav>
  )
}

export default Navbar
