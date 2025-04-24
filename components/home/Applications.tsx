import React from 'react'
import { Icons } from '../Icons'
import Image from 'next/image'
import { Separator } from '../ui/seperator'
import { studentdata } from '../utils/Data'

const Applications = () => {
  return (
    <div>
        <div className="bg-[#fff]  h-screen  w-full rounded-xl px-4 pt-4 pb-9 ">
           <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Icons.hamburger/>
                 <p className="text-[#B0B0B0] font-chivo text-base font-bold">Applications</p>
              </div>
              <div className="flex items-center gap-3">
                 <p className="text-[#6F01D0] font-chivo text-xs font-semibold">See all</p>
                <Icons.settingsIcon/>
              </div>
           </div>
           <div className="">
            <MentorsCard/>
            <div className="">
            <p className='text-[10px] text-[#7D8DA6] py-10 capitalize'>students</p>
                {studentdata.map((s,idx)=>(
                     <div key={idx} className="">
                     <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <div className="w-full gap-4 flex items-center">
                             <input type='checkbox'/>
                             <Image height={40} width={40} src={s.avatarsrc} alt='mentors-img'/>
                             <p className='text-sm font-bold text-[#4F4F4F] '>{s.name}<span className={`text-[#7D8DA6] text-[10px] font-normal block ${idx === studentdata.length-2 ?'underline ' :''} `}>{s.email}</span></p>
                        </div>
                         <div className="flex items-center gap-3 mt-2 sm:mt-0">
                             <button className='border-[#D09696] border bg-[#FFEDED] px-5 py-2 text-[#D83535] text-[10px] font-medium rounded-md '>Reject</button>
                             <button className=' bg-[#6F01D0] px-5 py-2 text-[#fff] text-[10px] font-medium rounded-md '>Accept</button>
                         </div>
                     </div>
                     {
                        idx === studentdata.length-1? '': <Separator className='my-5'/>
                     }
                 </div>
                ))}
            </div>
           </div>
        </div>
    </div>
  )
}


export default Applications

const MentorsCard = ()=>{
    return (
        <>
        <div className="">
            <p className='text-[10px] text-[#7D8DA6] py-12 capitalize'>mentors</p>
            <div className="flex items-center flex-col sm:flex-row justify-between w-full ">
               <div className="w-full gap-4 flex  items-center">
                    <input type='checkbox'/>
                    <Image height={40} width={40} src='/mentors-image.png' alt='mentors-img'/>
                    <p className='text-sm font-bold text-[#4F4F4F] '>Maxwell Smith <span className='text-[#7D8DA6] text-[10px] font-normal block '>maxwellsmith@gmail.com</span></p>
               </div>
                <div className="flex items-center gap-3">
                    <button className='border-[#D09696] border bg-[#FFEDED] px-5 py-2 text-[#D83535] text-[10px] font-medium rounded-md '>Reject</button>
                    <button className=' bg-[#6F01D0] px-5 py-2 text-[#fff] text-[10px] font-medium rounded-md '>Accept</button>
                </div>
            </div>
            <div className="flex flex-col w-full place-items-end">
                <div className="flex mt-3 flex-wrap gap-2  ml-6">
                <button className='border-[#DDCEEE] border bg-[#F3ECF9] px-3 py-1 text-[#9985A7] text-[9px] font-medium rounded-md '>Product Designer</button>
                <button className='border-[#A1BDBA] border bg-[#E8FDFB] px-3 py-1 text-[#58948E] text-[9px] font-medium rounded-md '> 4years Experience</button>
                <button className='border-[#ABBEE0] flex items-center border bg-[#E3ECF9] px-3 py-1 text-[#8196B5] text-[9px] font-medium rounded-md '>  <span className='pr-1'> <Icons.flag/> </span> Lagos, Nigeria </button>
                <button className='border-[#C8C8C8] border bg-[#F4F4F4] px-2 py-1 text-[#595564] text-[9px] font-medium rounded-md '> GMT +1</button>
                </div>

            </div>
            <Separator className='mt-7'/>
        </div>
        </>
    )
}
