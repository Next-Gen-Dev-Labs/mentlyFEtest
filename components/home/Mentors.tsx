import React from 'react'
import { Icons } from '../Icons'
import Image from 'next/image'
import { mentorsdata } from '../utils/Data'
import { Separator } from '../ui/seperator'

const Mentors = () => {
  return (
    <div>
      <div className="bg-[#fff] h-full w-full rounded-xl px-4 pt-4 pb-8 ">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Icons.hamburger/>
                <p className="text-[#B0B0B0] font-chivo text-base font-bold">Mentors</p>
            </div>
            <div className="flex items-center gap-3">
               <Icons.addIcon/>
                <Icons.settingsIcon/>
            </div>
            </div>
            {mentorsdata.map((s,idx)=>(
                <div key={idx} className="mt-10">
                <div className="flex items-center justify-between w-full ">
                <div className="w-full gap-4 flex items-center">
                    <Image height={40} width={40} src={s.avatarsrc} alt='mentors-img'/>
                    <p className='text-sm font-bold text-[#4F4F4F] '>{s.name}<span className={`text-[#7D8DA6] text-[10px] font-normal block `}>{s.email}</span></p>
                </div>
                <div className="flex items-center gap-3">
                    <button className=' bg-[#6F01D0] px-5 py-2 text-[#F1EEFF] text-sm font-medium rounded-2xl '>Message</button>
                </div>
            </div>
            <Separator className='mt-4'/>
            
            </div>
            ))}
            <button className=' bg-[#DDD6FB] w-full  px-5 py-4 mt-8 font-semibold text-[#6F01D0] text-sm rounded-3xl '>See all</button>
     </div>
    </div>
  )
}

export default Mentors
