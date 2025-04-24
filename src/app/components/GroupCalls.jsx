"use client"
import React, { useState } from 'react'
import ux from "@/app/images/ux.png"
import { CiCalendarDate } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import program1 from "@/app/images/program1.png"
import program2 from "@/app/images/program2.png"
import program3 from "@/app/images/program3.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { groupCalls } from '../utilis';
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image';

function GroupCalls() {
    const [click, setClick] = useState(false)

    const items = !click ? groupCalls.slice(0, 3) : groupCalls 
  return (
    <div className='w-full'>
        <div className='flex place-content-between'>
            <div className='flex space-x-3 text-gray-500'>
                <CiMenuBurger/>
                <p>Group Calls</p>

            </div>
            <div className='flex space-x-2 cursor-pointer' onClick={()=>{setClick(!click)}}>
                <p className='text-purple-700'>{click ? "See less" : "See all"}</p>
                <p>:</p>

            </div>


        </div>
        <div className='grid grid-cols-3 gap-3 mt-2 w-full max-md:grid-cols-1 gap-y-10'>

            {items.map((item) =>{
                return(
                    <div className='bg-white shadow-md p-3 dark:bg-gray-900' key={item.id}>
                        <div className='w-full'>
                            <Image src={item.bgImage} alt='some' className='w-60 h-20' />
                        </div>

                        <div className='mt-3'>
                            {
                                item.onGoing ?
                                <button className='p-0 bg-green-200 rounded-3xl cursor-pointer flex space-x-1 px-1 h-5 w-20 
                                hover:bg-green-500 mt-5 hover:text-green-700'>
                                    <span className='rounded-full h-2 w-2 bg-green-400 mt-1'></span>

                                    <p className='text-green-400 text-xs font-thin'>Ongoing</p>
                            
                                </button>
                                :
                                <button className='p-0 bg-purple-200 rounded-3xl cursor-pointer flex space-x-1 px-1 h-5 w-20 
                                hover:bg-purple-300 mt-5 hover:text-white'>
                                    <span className='rounded-full h-2 w-2 bg-purple-600 mt-1'></span>

                                    <p className='text-purple-500 text-xs font-thin'>Upcoming</p>
                            
                                </button>
                                
                                }
                        </div>
                        <div className='mt-1 py-1 border-gray-200 border-b-2 pb-2'>
                            <p className='text-gray-700 text-sm font-serif font-medium dark:text-white'>Weekly Meeting - Product Demo Review with Testers</p>
                        </div>
                        <div className='mt-2 flex place-content-between'>
                            <div className='flex space-x-1'>
                                <CiCalendarDate/>
                                <p className='text-xs text-gray-700 font-thin dark:text-white'>Mon,Jul 30,2024</p>
                            </div>
                            <div className='border-r-2 border-gray-200 h-4 mr-3 dark:border-white'>

                            </div>
                            <div className='flex space-x-1 '>
                                <GoClock/>
                                <p className='text-xs text-gray-700 font-thin dark:text-white'>9:00 - 11:00AM</p>


                            </div>

                        </div>
                        <div className='flex place-content-between px-3 mt-4'>
                            <p className='text-gray-500 dark:text-gray-600 text-xs'>Study Group</p>
                            <p className='text-gray-500 dark:text-gray-600 text-xs'>Members</p>

                        </div>
                        <div className='flex place-content-between mt-1 relative'>
                            <div className='flex space-x-1'>
                                <Image src={ux} alt='some'/>
                                <p className='text-gray-900 dark:text-gray-100 text-[0.7rem]'>
                                    Ux Strategy Study group
                                </p>

                            </div>
                            <div className='h-fit py-2'>
                                <Image src={program1} alt='some' className='absolute top-[-140%] left-[85%]  object-contain z-10 rounded-lg'/>
                                <Image src={program2} alt='some' className='absolute top-[-140%] left-[82%]  object-contain z-10 rounded-lg'/>
                                <Image src={program3} alt='some' className='absolute top-[-140%] left-[79%]  object-contain z-10 rounded-lg'/>
                                
                            </div>


                        </div>
                        <div className='flex place-content-between mt-2'>
                            <button className='px-1 py-0 border-2 border-purple-500 
                            hover:bg-purple-500 w-22 h-fit rounded-lg hover:text-white'>
                                <p className='text-[0.6rem] text-purple-600 hover:text-white max-xl:text-[0.7rem] max-md:mt-1'>
                                    View Participants</p>

                            </button>
                            
                            <div className='ml-4'>
                                {
                                    !item.fadeJoinNow ?
                                    <button type="button" className="text-white bg-gradient-to-br 
                                    from-purple-600 ml-4
                                    to-purple-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                                    focus:ring-blue-300
                                    dark:focus:ring-blue-800 font-medium rounded-sm 
                                    text-[0.6rem] px-1 py-1.5 me-2 mb-2 w-16 h-fit flex space-x-1">
                                        <p className='text-[0.6rem]'>Join Now  </p>
                                        <FaArrowRightLong className='text-xs'/>
                                    </button>
                                    :
                                    <button type="button" className="text-white bg-gradient-to-br 
                                    from-purple-300 ml-4
                                    to-purple-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                                    focus:ring-blue-300
                                    dark:focus:ring-blue-800 font-medium rounded-sm 
                                    text-[0.6rem] px-1 py-1.5 me-2 mb-2 w-16 h-fit flex space-x-1">
                                        <p className='text-[0.6rem]'>Join Now  </p>
                                        <FaArrowRightLong className='text-xs'/>
                                    </button>

                            }
                            </div>
                        </div>

                    </div>
                )
            })}


        </div>


    </div>
  )
}

export default GroupCalls
