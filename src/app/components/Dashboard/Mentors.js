import React from 'react'
import Image from 'next/image'

const Mentors = () => {
    return (
        <div className='col-start-3 col-end-4 row-start-2 row-end-3 rounded shadow-md p-4 bg-white'>
            <div className="flex justify-between items-center">
                <Image src="/menu.svg" alt="Menu" width={16} height={16} />

                <div className="flex items-center justify-between gap-[13rem]">
                    <h1 className="text-left text-[#B0B0B0] text-base font-bold">Mentors</h1>
                    <button>
                        <Image src="/add.svg" alt="add-icon" width={24} height={24} />
                    </button>
                </div>

                <Image src="/more.svg" alt="More" width={18} height={18} />
            </div>
            <div className='mt-10 my-5 bottom flex justify-around items-center'>
                <div className='flex items-center gap-3'>
                    <div>
                        <Image src='/smith.svg' alt='product designer' width={32} height={32} />
                    </div>
                    <div>
                        <p className='text-sm font-bold text-[#4F4F4F]'>Maxwell Smith</p>
                        <p className='text-[#7D8DA6] text-[10px]'>Product Designer</p>
                    </div>
                </div>
                <button className='text-[#F1EEFF] text-xs bg-[#6F01D0] rounded-full p-1 px-3'>
                    Message
                </button>
            </div>
            <div className='bottom flex justify-around items-center'>
                <div className='flex items-center gap-3'>
                    <div>
                        <Image src='/samuel.svg' alt='product designer' width={32} height={32} />
                    </div>
                    <div>
                        <p className='text-sm font-bold text-[#4F4F4F]'>Adeati Samuel</p>
                        <p className='text-[#7D8DA6] text-[10px]'>Product Designer</p>
                    </div>
                </div>
                <button className='text-[#F1EEFF] text-xs bg-[#6F01D0] rounded-full p-1 px-3'>
                    Message
                </button>
            </div>
            <button className='text-sm font-semibold mt-12 p-3 bg-[#DDD6FB] text-[#6F01D0] rounded-full w-full'>
                See All
            </button>
        </div>
    )
}

export default Mentors
