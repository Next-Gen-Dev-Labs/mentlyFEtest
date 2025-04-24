import React from 'react'
import Image from "next/image";
import Calendar from '@/assets/icons/mynaui_calendar.svg'
import Clock from '@/assets/icons/clock.svg'
import Host1 from '@/assets/images/man-438081_960_720.svg'
import Host2 from '@/assets/images/fine.png'
import Host3 from '@/assets/images/woman.png'
import { FaArrowRightLong } from "react-icons/fa6";
export default function GroupCard({group}) {
    const {status} = group
    const bg = status === 'Ongoing' ? 'bg-[#2AC10033]' : status === 'Upcoming' ? 'bg-[#E0DDFF]' : ''
    const span = status === 'Ongoing' ? 'bg-[#1F8B01]' : status === 'Upcoming' ? 'bg-[#1C0AE1]' : ''
    const text = status === 'Ongoing' ? 'text-[#1F8B01]' : status === 'Upcoming' ? 'text-[#1C0AE1]' : ''
    const isUpcoming = status === 'Upcoming';
    return(
        <div className="w-[270px] bg-[#F9F7FF] py-[15.79px] px-[12.93px] rounded-[9.7px] space-y-[6.47px] flex-none">
            <Image
            src={group.img}
            alt="group" className="w-full h-[68.7px] object-cover rounded-[10px]"/>
            <div className={`px-2.5 py-[2.5px] text-[10px] ${bg} rounded-[14px] w-[75.25px] flex gap-1 items-center`}><span className={`h-1.5 w-1.5 rounded-full ${span}`}></span><p className={`${text}`}>{group.status}</p></div>
            <h3 className="text-[#595564] text-[16.81px] pr-3">{group.title}</h3>
            <div className="grid grid-cols-2 text-[#595564] border-t pt-[6.47px] gap-3">
                <div className="flex gap-[5.66px] text-[10px] font-medium">
                    <Image src={Calendar} alt="calendar icon"/>
                    <p>{group.date}</p>
                </div>
                <div className="flex gap-[5.66px] text-[10px] font-medium">
                    <Image src={Clock} alt="clock icon"/>
                    <p>{group.time}</p>
                </div>
                <div>
                    <p className="text-[#A195C0] text-[8px]">Study Group</p>
                    <div>
                        {/* <Image/> */}
                        <p className="text-[10px] font-semibold">{group.group}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                <p className="text-[#A195C0] text-[8px]">Mentor</p>
                <div className="flex -space-x-2 w-[50.26px]">
          
            <Image src={Host1} alt="host" className="h-6 w-6 rounded-full " />
            <Image src={Host2} alt="host" className="h-6 w-6 rounded-full " />
            <Image src={Host3} alt="host" className="h-6 w-6 rounded-full " />
        
          </div>
                    
                   
                </div>
            </div>
            <div className="flex justify-between text-xs font-medium">
                <button className="p-3 border border-[#6F01D0] text-[#6F01D0] rounded-md hover:bg-white cursor-pointer">View Participants</button>
                <button
                    className={`p-3 flex items-center gap-2 rounded-md ${
                        isUpcoming ? 'bg-[#6F01D04D] text-white cursor-not-allowed' : 'bg-[#6F01D0] text-white hover:bg-[#6f01d0d1] cursor-pointer'
                    }`}
                    disabled={isUpcoming}
                >
                    Join Now <FaArrowRightLong className="text-white" />
                </button>
            </div>
        </div>
    )
}