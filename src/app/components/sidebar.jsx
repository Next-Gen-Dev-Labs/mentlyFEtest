"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useGlobalState } from '../context';
import { CiLight } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import logo from "@/app/images/logo.png"
import bar from "@/app/images/bar.png"
import Link from 'next/link';;
import { sidebarData } from '../utilis';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";


function SideMenu({}) {
  const {theme, toggleTheme, showSideBar, setShowSideBar} = useGlobalState()

  const [isChecked, setIsChecked] = useState(false)  
  const handleToggle = (e) =>{
    setIsChecked(e.target.checked)
    toggleTheme()


  }
  return (
    <Sidebar
    width= {!showSideBar ? '200px'  :'100vw'}
    className={
      showSideBar ? 'scrollbar-hide top-0 left-0 z-50 max-md:w-[40px]  h-[300vh] dark:bg-[#340260] dark:text-white bg-white text-white': 
      'h-[400vh] dark:bg-[#340260] dark:text-white bg-[#340260]  scrollbar-hide text-white'}

    
    >

          <Menu className={`dark:bg-[#340260] bg-[#340260] dark:text-white text-white ${showSideBar ? 'h-[400vh]': 'h-[500vh]'}`}>
           {
            showSideBar 
              &&

              <div className='p-5 flex place-content-end self-end'>
                <MdOutlineRestaurantMenu className='text-2xl cursor-pointer' onClick={()=>{setShowSideBar(!showSideBar)}}/>

              </div> 
            }
            <MenuItem className='pt-4'  component={<Link href={"/"} />}>
              <div className='flex space-x-4'>
                <Image src={logo} alt='some' className='object-contain' height={25} width={25}/>
                <p className='text-lg'>techrity</p>
                <Image src={bar} alt='some' className='object-contain' height={19} width={19}/>


              </div>
              

            </MenuItem>

            <div className='mt-10'></div>

            {sidebarData.map((item)=>{
              return(
                <MenuItem className='mt-5' component={<Link href={"/"}/>} key={item.id}>
                  <div data-tooltip-id={item.tooltipId} className='flex space-x-6'>
                    {item.Icon ? <item.Icon className='text-xl text-white'/> : <Image src={item.image} alt='some' className='object-contain text-white' height={20} width={20}/>}
                    <Tooltip id={item.tooltipId} place="top" content={item.title} className=''/>
                    <p className='text-lg font-light'>{item.title}</p>
                  </div>
                </MenuItem>
              )
            })}


           
            
            <div className='text-center bg-[#4C2073] p-2 mt-6 space-y-4 w-fit'>
              <div className='text-center flex self-center place-content-center'>
                <MdOutlinePersonPin/>

              </div>
              <p className='text-xs'>Get some questions, enquires <br />or need some help</p>
              <p className='text-xs text-[#F0C074] underline'>Visit Montly Help Desk Here</p>
              


            </div>

            {/* <div className=' mt-10 self-center ml-3 rounded-3xl bg-white w-fit  flex flex-col 
            space-y-2 p-2 dark:bg-black h-full shadow-md'>
                <CiLight className='text-gray-500 text-2xl cursor-pointer' onClick = {() => handleToggle()}/>
                <DarkModeIcon className='text-gray-500 cursor-pointer' onClick = {() => handleToggle()}/>

            </div> */}

            <div className='flex space-x-0.5 p-1 mt-10 mx-center'>
              <p className='text-xs font-serif font-thin'>Switch to Classic Mode</p>
              <label className="inline-flex items-center cursor-pointer ml-auto text-black">
                <input 
                type="checkbox" 
                checked = {isChecked}
                onChange={(e)=>{handleToggle(e)}}
                value="" 
                className="sr-only peer"/>
                <div className="relative w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:start-[2px] after:bg-black 
                after:border-gray-300 after:border after:rounded-full after:h-5 
                after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white 
                dark:peer-checked:bg-white"></div>
                
              </label>
            </div>
            

        </Menu>

    </Sidebar>
  )
}

export default SideMenu
