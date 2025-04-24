import React from 'react'
import Image from 'next/image'
import { ProgramsDataProps } from '@/lib/index.types'

const ProgramCard = ({id, title, tag, description, image, instructor, settings, buttonText}: ProgramsDataProps) => {
  return (
    <>
        <div key={id} className="border rounded-lg overflow-hidden shadow-sm p-3">
            <div 
                style={{ backgroundImage: `url('/SVGs/${image}')` }}
                className="flex justify-between p-3.5 rounded-[6.57px] bg-cover bg-no-repeat bg-center">
                <div className="w-[80%] flex flex-col gap-3">
                    <h4 className='font-chivo font-bold text-[16.4px] text-white'>{title} </h4>
                    <div className={`flex gap-1.5 items-center justify-center w-[60px] h-[15px] ${tag === "Bootcamp" ? "bg-[#D4E0F3]" : "bg-[#D4F3D4]"} rounded-[9.85px]`}>
                        <span className={`w-[5px] h-[5px] flex items-center text-[5px] rounded-full ${tag === "Bootcamp" ? "bg-[#0077FF] text-[#0077FF]" : "bg-[#008000] text-[#008000]" } `}>0</span>
                        <h5 className={`${tag === "Bootcamp" ? "text-[#0077FF]" : "text-[#008000]"} font-chivo font-bold text-[7px]`}>{tag}</h5>
                    </div>
                </div>
                {
                    settings && (
                        <div className="flex flex-col items-start">
                            <Image src="/SVGs/settings.svg" alt='settings-icon' width={13.14} height={13.14} />
                        </div>
                    )
                }
            </div>
            <p className="font-chivo font-normal text-[10px] text-[#242323] mt-2">
                {description}
            </p>
            <div className="flex mt-3 justify-between">
                <div className="flex gap-1.5 items-center">
                    <Image src={`/SVGs/${instructor.avatar}`} alt='mentor-icon' width={33} height={14} />
                    {
                        instructor.name === "mentors" ? (
                            <h4 className="text-[#6C6C6C] font-chivo font-bold text-[10px]">{instructor.name}</h4>
                        ) : (
                            <h4 className="text-[#6C6C6C] font-chivo font-normal text-[8px]">Hosted By: {instructor.name}</h4> 
                        )
                    }
                </div>
                <div className="flex gap-2 items-center">
                    <button className="border-[#6F01D0] cursor-pointer text-[8px] text-[#6F01D0] rounded-[3px] border-[0.7px] w-[66px] h-[22px] bg-transparent flex items-center justify-center">
                        View Details
                    </button>
                    <button className="border-none cursor-pointer rounded-[3px] text-white text-[8px] w-[66px] h-[22px] bg-[#6F01D0] flex items-center justify-center">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProgramCard