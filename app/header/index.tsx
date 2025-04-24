import { Bell } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='px-9 min-h-[82px] bg-[#FDFDFD] sticky z-20 top-0 flex justify-end items-center shadow-sm'>
       <div className='flex items-center gap-4'>
        <span className='flex'><Bell /></span>
        <div className='flex items-center gap-5'>
            <div>
                <Image src="https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png" alt=""  height={44} width={44}/>
            </div>
            <div>
                <p className='text-[#404040] text-sm font-inter'> Techrity  Foun...</p>
                <p className='text-[#53547B] text-[12px]'>Member</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header