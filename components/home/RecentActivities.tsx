import React from 'react'
import { Separator } from '../ui/seperator'
import Image from 'next/image'
import { Icons } from '../Icons'
import { activitydata } from '../utils/Data'

const RecentActivities = () => {
  return (
    <div>
        <div>
             <div className="bg-[#fff] w-full h-full rounded-xl px-4 pt-4 pb-8 ">
                   <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                       <Icons.hamburger/>
                       <p className="text-[#B0B0B0] font-chivo text-base font-bold">Recent Activities</p>
                   </div>
                   <div className="flex items-center gap-3">
                       <p className="text-[#6F01D0] font-chivo text-xs font-semibold">See all</p>
                       <Icons.settingsIcon/>
                   </div>
                   </div>
                   {activitydata.map((s,idx)=>(
                       <div key={idx} className="mt-5">
                       <div className="flex items-center justify-between w-full ">
                       <div className="w-full gap-4 flex items-center">
                           <Image height={40} width={40} src={s.avatarsrc} alt='mentors-img'/>
                           <div className="">
                                <p className='text-sm font-bold text-[#011627] '>{s.title}</p>
                                <p className='text-[#707991] text-xs font-normal block'>{s.info}</p>
                                <p className='text-[#707991] text-xs font-light block mb-1'>{s.time}</p>
                           </div>
                       </div>
                   </div>
                   {
                       idx === activitydata.length-1? '': <Separator className='mb-2'/>
                   }
                   </div>
                   ))}
            </div>
           </div>
    </div>
  )
}

export default RecentActivities
