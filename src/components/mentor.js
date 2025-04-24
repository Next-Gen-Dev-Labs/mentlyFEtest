import Icon from '@/assets/icons/Vector (3).svg'
import Menu from '@/assets/icons/Vector (1).svg'
import Add from '@/assets/icons/Frame 1321318605.svg'
import Image from 'next/image'
import { mentor } from '@/data'
export default function Mentor() {
    return(
        <div className='w-full md:w-[49%] lg:w-[280px] xl:w-[320px] bg-white p-3 xl:p-6 rounded-xl space-y-[15px]'>
            <div className='flex justify-between items-center '>
                <div className='flex gap-2.5 items-center'>
                    <Image src={Menu} alt="menu icon"/>
                    <h3 className='text-[#B0B0B0] font-bold'>Mentors</h3>
                </div>
                <div className='flex gap-2.5 items-center'>
                    <Image src={Add} alt="add icon"/>
                    <Image src={Icon} alt="icon"/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {mentor.map((item)=>(
                    <div key={item.id} className=''>
                        <div className='flex items-center justify-between border-b border-[#F3F3F3] py-2'>
                            <div className='flex items-start gap-2'>
                                <Image src={item.img} alt={item.name}/>
                                <div>
                                    <h4 className='font-bold text-sm'>{item.name}</h4>
                                    <p className='text-[10px] text-[#7D8DA6]'>{item.role}</p>
                                </div>
                            </div>
                            <button className='bg-[#6F01D0] text-white textt-xs px-3 py-1 rounded-2xl'>Message</button>
                        </div>
                    </div>
                ))}
            </div>
                <button className='bg-[#DDD6FB] text-[#6F01D0] rounded-3xl py-3 font-semibold text-base w-full'>See all</button>
            
        </div>
    )
}