'use client'
import { Bell, ChevronDown, Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [notification, setNotification] = useState(true)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [profileDropOpen, setProfileDropOpen] = useState(false)
    const profileDropRef = useRef(null)
    const sidebarRef = useRef(null)
    const isNotificationOpenRef = useRef(null)

    const toggleNotification = (e) =>{
        e.stopPropagation()
        setIsNotificationOpen((prev) => !prev)
    }

    const toggleProfileDrop = (e) =>{
        e.stopPropagation()
        setProfileDropOpen((prev) => !prev)
    }

    const toggleSidebar = (e) =>{
        e.stopPropagation()
        setIsSidebarOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (profileDropRef.current && !profileDropRef.current.contains(event.target)) {
            setProfileDropOpen(false)
          }
          if (isNotificationOpenRef.current && !isNotificationOpenRef.current.contains(event.target)) {
            setIsNotificationOpen(false)
          }
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false)
          }
        }
    
        document.addEventListener("click", handleClickOutside)
        return () => {
          document.removeEventListener("click", handleClickOutside)
        }
      }, [])

    const fullName = "Godwin Jimmy"
    const plan = "Free Plan"

  return (
    <header className="flex justify-between laptop:justify-end items-center p-4 border-b shadow-[#00000010]">
        <div ref={sidebarRef} onClick={toggleSidebar} className='block laptop:hidden hover:bg-[#1F0954] hover:bg-opacity-10 p-1 hover:rounded-md'>
            <Image
                src="/icons/panelright.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="object-cover size-8"
            />
        </div>
        {isSidebarOpen && (<Sidebar />)}

        <div className="flex items-center justify-center gap-3 laptop:gap-6 laptop:mr-24">
            <div ref={isNotificationOpenRef} onClick={toggleNotification} className='relative'>
                <Bell size={24} />
                <div className={`${notification ? "block" : "hidden"} absolute -top-3.5 -right-2.5 z-10`}>
                    <Dot size={35} color='red'  />
                </div>
                {isNotificationOpen && (
                    <div className='flex justify-center items-center z-10 w-auto laptop:w-[300px] p-6 h-auto rounded-md shadow-md bg-white absolute top-8 right-0'>
                        <p className='font-normal text-base '>notifications</p>
                    </div>
                )}
            </div>
            <div className="size-[44px] rounded-full bg-slate-400 flex justify-center items-center">
                <Image src={'/images/man.png'} alt={`${fullName} image`} width={1000} height={1000} className='object-cover rounded-full' />
            </div>
            <div className='flex flex-col ml-0 laptop:-ml-4'>
                <p className='font-normal text-sm cursor-default'>{fullName}</p>
                <div className='flex gap-1 items-center justify-center'>
                    <p className='font-normal text-xs text-[#777795] cursor-default'>{plan}</p>
                    <Link href={'/'} className='font-[700] text-sm text-[#2B85FE] hover:text-opacity-85 font-inter'>Upgrade</Link>
                </div>
            </div>
            <div ref={profileDropRef} onClick={toggleProfileDrop} className='relative'>
                <ChevronDown size={16} />
                {profileDropOpen && (
                    <div className='flex justify-center items-center z-10 w-[150px] p-2 h-40 rounded-sm shadow-md bg-white absolute top-8 right-0'>
                        <p className='font-normal text-base '>Profile Links</p>
                    </div>
                )}
            </div>
        </div>
    </header>
  )
}

export default Navbar