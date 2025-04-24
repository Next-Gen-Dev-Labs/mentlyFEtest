import React from 'react';
import Image from 'next/image';
import Setting from '/src/assets/icons/setting-2.svg';
export default function ProgramCard({program}) {
    return(
        <div className='w-[291px] md:w-[271px] xl:w-[291px] p-1.5 xl:p-3 rounded-[10px] bg-[#FFFFFF] shadow-lg space-y-1.5 flex-none' data-testid="program-card">
            <div className='relative'>
            <Image
            src={program.progImg}
            alt='Programs'
            className='w-full h-full object-cover'
            // style={{
            //     background: 'linear-gradient(178.73deg, rgba(12, 12, 12, 0.552) 0.9%, rgba(0, 0, 0, 0.69) 98.73%)'}}
            />
            <div className='absolute top-1 left-2.5 right-2'>
                <div className='flex justify-between items-start'>
                    <h2 className='text-white font-bold text-[16.42px]'>{program.title}</h2>
                    <Image 
                    src={Setting} 
                    alt='setting icon'
                    className='h-3.5 w-3.5 mt-1' 
                    />
                </div>
                <div className={`px-2.5 py-0.5 ${program.bg} flex gap-1 items-center w-[69.1px] rounded-[10px]`}><span className={`w-1.5 h-1.5 rounded-full ${program.span}`}></span><p className={`text-[7px] font-bold ${program.text}`}>{program.program}</p></div>
            </div>
            </div>
            <div className='space-y-1.5'>
                <p className='text-[10.5px]'>{program.desc}</p>
                <div className='flex justify-between items-center '>
                    <div className='flex items-center gap-2'>
                        <Image src={program.hostImg} alt={program.host}/>
                        <p className='text-[8.34px] font-semibold'>Hosted by: {program.host}</p>
                    </div>
                    <div className='text-[8px] flex gap-[5.26px]'>
                        <button className='border border-[#6F01D0] text-[#6F01D0] px-4 py-1.5 rounded hover:bg-[#F9F7FF] cursor-pointer'>View Details</button>
                        <button className='bg-[#6F01D0] text-white px-4 py-1.5 rounded hover:bg-[#6f01d0d1] cursor-pointer'>Analysis</button>
                    </div>
                </div>
            </div>
        </div>
    )
}