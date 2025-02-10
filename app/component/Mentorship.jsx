import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { LuCopy } from "react-icons/lu";
import { BsTelephonePlus } from "react-icons/bs";
import { LiaNewspaper } from "react-icons/lia";
import { GiLinkedRings } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { BsDot } from "react-icons/bs";

const Mentorship = () => {
  return (
    <section className="h-full">

        <div className="bg-gradient-to-r from-[#0F1013] to-[#5D6379] h-[15rem] flex flex-row items-center md:justify-between max-md:justify-evenly md:px-14">
            <div className='flex flex-row max-md:flex-col items-center md:gap-5 md:w-[40rem] w-auto h-auto md:h-full rounded-full bg-gradient-to-r from-[#0F1013] to-[#5D6379] ml-10'>
                <Image
                    src='/mentor1.png'
                    alt='Mentorship Program'
                    width={80}
                    height={80}
                    className=''
                    />
                <div className='text-white'>
                    <h2 className='font-bold md:text-3xl max-md:text-lg'>Mastering the</h2>
                    <h2 className='text-3xl font-bold md:text-3xl max-md:text-lg'>Work life Equation</h2>
                    <p className='text-sm text-[#D9E1E7] capitalize'>with nwachukwu peculiar</p>
                    <button className='bg-gradient-to-r from-[#FF0044] to-[#F6A000] px-9 rounded-lg md:mt-4 hover:scale-110 transition-all'>Masterclass</button>
                </div>
            </div>

                <div className='text-white font-bold max-md:text-sm'>
                    <h2>20TH</h2>
                    <h2>OCT,</h2>
                    <h2>2024</h2>
                    <div className='border-t-2 mt-2 py-2'>
                    <h2>2PM</h2>
                    </div>
                </div>
        </div>


                <main className='flex flex-row max-md:flex-col justify-center md:gap-52 max-md:gap-9 p-10 max-md:text-sm'>
                       <h3 className='w-[20rem] max-md:w-auto '>
                        UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started about
                        the fundamentals and how they can build a Design Career, share, document their progress on a weekly basis.
                        </h3> 

                    <div>
                        <div  className='text-[#777795]  shadow-xl  md:px-20  md:py-3 flex flex-col gap-y-7 max-md:p-2'>
                            <Link href="#" className='flex items-center gap-10'>
                                <IoSchoolSharp size={24}/>
                                <h2 className='capitalize font-semibold text-sm text-left hover:scale-125 cursor-pointer transition-all'>mentorship program</h2>
                            </Link>
                            <span className='flex items-center gap-10 '>
                                <FaRegCalendarAlt size={22}/>
                                <h2  className='capitalize font-semibold text-sm'>21/4/2024 - 21/5/2024</h2>
                            </span>
                            <span className='flex items-center gap-10 '>
                                < MdOutlinePersonPinCircle size={26}/>
                                <h2  className='capitalize font-semibold text-sm'>in person</h2>
                            </span>
                        </div>
                    </div>
                </main>

                    <main  className='border h-[18rem] bg-[#fdd99e36] text-[#FFFAF2] p-3 rounded-lg hover:scale-90 transition-all hover:shadow-xl'>
                        <h2 className='capitalize text-[#1F0954] font-bold md:text-2xl max-md:text-xl'>programme information test</h2>
                        <div className='grid grid-cols-2 gap-y-6 md:pt-12 max-md:pt-5'>
                            <span className='flex text-[#1F0954] items-center gap-2  max-md:text-sm'>
                            < GiTeamIdea size={44} className='bg-[#FEE0B1] rounded-full p-2 hover:scale-125 cursor-pointer transition-all'/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center gap-2 max-md:text-sm '>
                            < LuCopy size={44} className='bg-[#FEE0B1] rounded-full p-3 hover:scale-125 cursor-pointer transition-all'/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center max-md:text-sm '>
                            < BsTelephonePlus size={44} className='bg-[#FEE0B1] rounded-full p-3 hover:scale-125 cursor-pointer transition-all'/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center max-md:text-sm '>
                            < IoSchoolSharp size={44} className='bg-[#FEE0B1] rounded-full p-3 hover:scale-125 cursor-pointer transition-all'/>
                            <h3>Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center  max-md:text-sm'>
                            <  LiaNewspaper size={44} className='bg-[#FEE0B1] rounded-full p-2 hover:scale-125 cursor-pointer transition-all'/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center  max-md:text-sm'>
                            <  GiLinkedRings size={44} className='bg-[#FEE0B1] rounded-full p-2 hover:scale-125 cursor-pointer transition-all'/>
                            <h3 >Content</h3>
                            </span>  
                        </div>
                    </main>

                    <main  className='border h-[18rem] bg-[#fdd99e36] text-[#FFFAF2] p-3 mt-6 rounded-lg'>
                        <h2 className='capitalize text-[#1F0954] font-bold  md:text-2xl max-md:text-xl'>programme information test 2</h2>
                        <div className='flex flex-col md:pt-12 max-md:pt-5'>
                            <span className='flex text-[#1F0954] items-center '>
                            <BsDot size={28}/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center '>
                            <BsDot size={28}/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center'>
                            <BsDot size={28}/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center'>
                            <BsDot size={28}/>
                            <h3>Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center'>
                            <BsDot size={28}/>
                            <h3 >Content</h3>
                            </span>
                            <span className='flex text-[#1F0954] items-center'>
                            <BsDot size={28}/>
                            <h3 >Content</h3>
                            </span>

                            
                            
                        </div>
                    </main>

    </section>
  )
}

export default Mentorship
