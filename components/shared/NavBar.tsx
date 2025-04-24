'use client'
import React, { useState } from 'react'
import { Icons } from '../Icons'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SideBarNavigation from './SideBarNavigation';
// import SideBarNavigation from './SideBarNavigation';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  
  const closeMenu =()=>{
    setOpenMenu(false)
  }
  return (
    <div className=' sticky  w-full top-0 z-50 bg-[#fff] py-5 px-6 custom-shadow '>
      <div className="flex flex-col  place-self-end">
        <div className="block lg:hidden cursor-pointer z-30 " onClick={handleOpenMenu}>
        {openMenu ? <IoIosCloseCircleOutline />  :   <RxHamburgerMenu />}
        </div>
        <div
          className={`${
            openMenu ? "translate-x-0" : "-translate-x-full"
          } w-full h-full flex flex-col items-start justify-start lg:hidden z-20 fixed transition-transform duration-300 ease-in-out top-0 left-0  `}
        >
          <SideBarNavigation closeMenu = {closeMenu}/>
        </div>
          <div className="hidden lg:flex items-center gap-10">
            <Icons.notificationBell/>
            <div className="flex items-center gap-2">
              <div className="bg-[#8B72FC] rounded-full p-2 flex flex-col items-center">
              <Image className='object-fit'  width={25} height={25} src='/icon (3).png' alt='icon'/>
              </div>
              <p className='text-[#404040] text-sm font-chivo'>Techrity  Foun... <span className='text-xs block text-[#53547B]'>Member</span></p>
              <Image className='object-fit'  width={20} height={20} src='/user-dropdown.png' alt='user-dropdown'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar
