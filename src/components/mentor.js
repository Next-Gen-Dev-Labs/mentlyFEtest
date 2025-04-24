import React from 'react'
import Icon from '@/assets/icons/Vector (3).svg'
import Menu from '@/assets/icons/Vector (1).svg'
import Add from '@/assets/icons/Frame 1321318605.svg'
import Image from 'next/image'
import { mentor } from '@/data'
export default function Mentor() {
    return(
        <div className='w-full md:w-[49%] lg:w-[280px] xl:w-[320px] bg-white p-3 xl:p-6 rounded-xl space-y-[15px]' data-testid="mentor-container">
            <div className='flex justify-between items-center '>
                <div className='flex gap-2.5 items-center'>
                    <Image src={Menu} alt="menu icon" className='h-4 w-4'/>
                    <h3 className='text-[#B0B0B0] font-bold'>Mentors</h3>
                </div>
                <div className='flex gap-2.5 items-center'>
                    <Image src={Add} alt="add icon" className='h-6 w-6 cursor-pointer'/>
                    <Image src={Icon} alt="icon" className='cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col gap-4' data-testid="mentor-list">
                {mentor.map((item)=>(
                    <div key={item.id} className='' data-testid="mentor-card">
                        <div className='flex items-center justify-between border-b border-[#F3F3F3] py-2'>
                            <div className='flex items-start gap-2'>
                                <Image src={item.img} alt={item.name}/>
                                <div>
                                    <h4 className='font-bold text-sm'>{item.name}</h4>
                                    <p className='text-[10px] text-[#7D8DA6]'>{item.role}</p>
                                </div>
                            </div>
                            <button className='bg-[#6F01D0] text-white text-xs px-3 py-1 rounded-2xl hover:bg-[#6f01d0d1] cursor-pointer'>Message</button>
                        </div>
                    </div>
                ))}
            </div>
                <button className='bg-[#DDD6FB] text-[#6F01D0] rounded-3xl py-3 font-semibold text-base w-full hover:bg-white hover:border-2 hover:border-[#6F01D0]'>See all</button>
            
        </div>
    )
}