"use client"
import React from 'react'
import Image from 'next/image'
import programUser from "@/app/images/programUser.png"
import program1 from "@/app/images/program1.png"
import program2 from "@/app/images/program2.png"
import program3 from "@/app/images/program3.png"
import { FaChevronDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { dataProgram } from '../utilis'
import { useState } from 'react'

function Programs() {
    const [click, setClick] = useState(false)

    const items = !click ? dataProgram.slice(0, 2) : dataProgram 

  return (
     <div>
        <div className='flex place-content-between'>
            <div className='flex space-x-3 text-gray-500'>
                <CiMenuBurger/>
                <p>Programs</p>

            </div>
            <div className='flex space-x-2 cursor-pointer' onClick={()=>{setClick(!click)}}>
                <p className='text-purple-700' >{click ? "See Less" : "See All"}</p>
                <p>:</p>

            </div>



        </div>
        <div className='flex ml-auto self-end place-content-end p-2 pr-3 space-x-3 mt-2'>
            <p className='text-gray-400 mt-2'>Filter</p>
            <button className='p-1 border-2 border-gray-100 flex space-x-3 w-fit h-8 px-2 cursor-pointer'>
                <p className='text-gray-500'>Active</p> <FaChevronDown className='text-gray-500'/>
            </button>
                

        </div>


        <div className='flex space-y-4 flex-col'>
            <div className='mt-2 bg-white shadow-md p-2 w-full dark:bg-gray-800'>
                <div className='w-full p-2 relative'>
                    <div className='relative'>
                        <Image src={programUser} alt='image' className='w-full h-30'/>
                        <div className='absolute left-2 top-2 flex space-y-3 flex-col'>
                            <p className='text-white text-2xl font-bold'>Fundamentals of User <br /> 
                                interface & Experience </p>
                            <button className='p-0 bg-blue-100 rounded-2xl cursor-pointer flex space-x-2 px-3 h-5 w-30 hover:bg-blue-300'>
                                <span className='rounded-full h-2 w-2 bg-blue-600 mt-1'></span> 
                                <p className='text-blue-600 text-sm font-thin'>Bootcamp</p>
                            </button>


                        </div>

                    </div>
                    <div>
                        <p className='font-sans text-sm font-normal dark:text-white text-black'>
                            This  program is a hands-on guide designed for designers who want to master 
                            color theory and confidently apply it to their designs. This practical approach
                        </p>

                    </div>
                    <div className='mt-1 flex px-3 p-1 h-fit place-content-between'>

                        <div className='flex space-x-5'>
                                
                            <div className='h-fit py-2'>
                                <Image src={program1} alt='some' className='absolute top-[75%] left-[-5%]  object-contain z-10 rounded-lg'/>
                                <Image src={program2} alt='some' className='absolute top-[75%] left-[-2%]  object-contain z-10 rounded-lg'/>
                                <Image src={program3} alt='some' className='absolute top-[75%] left-[0%]  object-contain z-10 rounded-lg'/>
                                
                            </div>
                            <p className='text-gray-800 dark:text-white text-sm font-thin mt-2'>Members</p>

                        </div>

                        <div className='flex space-x-10 max-xl:space-x-2'>

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 
                            overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-purple-600 
                            group-hover:from-purple-600 group-hover:to-purple-500 hover:text-white h-fit 
                            dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-blue-800">
                                <span className="relative px-2 py-1.5 transition-all ease-in duration-75 bg-white 
                                dark:bg-gray-900 rounded-md group-hover:bg-transparent 
                                group-hover:dark:bg-transparent max-md:text-xs max-md:px-1">
                                    View Details
                                </span>
                            </button>
                            
                            <div className='ml-4 max-xl:ml-0'>
                                <button type="button" className="text-white bg-gradient-to-br 
                                from-purple-600 ml-4
                                to-purple-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                                focus:ring-blue-300 
                                dark:focus:ring-blue-800 font-medium rounded-sm 
                                text-sm px-5 py-1.5 text-center me-2 mb-2 max-md:text-xs max-md:px-2">Analysis</button>
                            </div>

                        </div>
                    

                    </div>
                </div>

                


            </div>




           {items.map((item) =>{
            return(
                    <div className='mt-2 bg-white shadow-md p-2 w-full dark:bg-gray-800' key={item.id}>
                    <div className='w-full p-2 relative'>
                        <div className='relative'>
                            <Image src={item.bgImage} alt='image' className='w-full h-30'/>
                            <div className='absolute left-2 top-2 flex space-y-3 flex-col'>
                                <p className='text-white text-2xl font-bold'> 
                                    Colour Hack Practical <br />
                                    Group Call 
                                </p>
                                <button className='p-0 bg-green-100 rounded-2xl cursor-pointer flex space-x-2 px-3 h-5 w-30 hover:bg-blue-300'>
                                    <span className='rounded-full h-2 w-2 bg-green-400 mt-1'></span> 
                                    <p className='text-green-400 text-sm font-thin'>Group Call</p>
                                </button>


                            </div>

                        </div>
                        <div>
                            <p className='font-sans text-sm font-normal dark:text-white text-black'>
                                {item.text}
                            </p>

                        </div>
                        <div className='mt-1 flex px-3 p-1 h-fit place-content-between'>

                            <div className='flex space-x-5'>
                                    
                                <div className='h-fit py-2'>
                                    <Image src={item.userImage} alt='some' className='absolute top-[85%] left-[3%]  object-contain z-10 rounded-lg'/>
                                    
                                </div>
                                <p className='text-gray-800 dark:text-white text-xs font-thin mt-2'>{item.userName}</p>

                            </div>

                            <div className='flex space-x-10 max-xl:space-x-1'>

                                <button className='px-2 py-0 border-2 border-purple-500 hover:bg-purple-500 max-md:w-fit'>
                                    <p className='text-sm text-purple-600 max-xl:text-xs max-md:px-1 max-md:text-[0.5rem]'>View Details</p>

                                </button>
                                
                                <div className='ml-4 max-xl:ml-0'>
                                    <button type="button" className="text-white bg-gradient-to-br 
                                    from-purple-600 ml-4 max-md:text-[0.5rem]
                                    to-purple-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                                    focus:ring-blue-300 
                                    dark:focus:ring-blue-800 font-medium rounded-sm 
                                    text-sm px-5 py-1.5 text-center me-2 mb-2 max-md:text-xs max-md:px-2">{item.task}</button>
                                </div>

                            </div>
                        

                        </div>
                    </div>

                    


                </div>

            )
           })}



        </div>


    </div>
    

  )
}

export default Programs
