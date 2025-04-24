'use client'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full z-[2] bg-white shadow-md p-4 flex justify-end items-center pr-9">
            <div className="flex justify-between items-center gap-4 md:gap-7">
                <button>
                    <Image
                        src="/notifications.svg"
                        alt="Notification Icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                    />
                </button>

                <div className="flex justify-between items-center gap-4">
                    <div className="bg-[#8B72FC] p-1 rounded-full">
                        <Image src="/member-logo.svg" alt="Company Icon" width={24} height={24} className='w-[20px] md:w-[24px] h-[20px] md:h-[24px]' />
                    </div>
                    <div className="leading-tight">
                        <p className="text-xs md:text-sm">Techrity Foun...</p>
                        <p className="text-gray-500 text-[10px] md:text-[12px]">Member</p>
                    </div>
                    <div className='flex items-center w-[19px] h-[19px] bg-[#6F01D0] rounded-md'>
                        <div >
                            <Image src="/user profile drop down.svg" alt="User Dropdown" width={24} height={24} className='absolute left-[86%] md:left-[93%] lg:left-[96%]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
