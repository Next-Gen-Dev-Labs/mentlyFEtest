"use client"
import React from 'react'
import Image from 'next/image';
import { CiMenuBurger } from "react-icons/ci";
import maxwell from "@/app/images/maxwell.png"
import flag from "@/app/images/flag.png"
import { students } from '../utilis';
import { useState } from 'react';

function Applications() {
    const [click, setClick] = useState(false)

    const items = !click ? students.slice(0, 4) : students

  return (

        <div className="relative shadow-md sm:rounded-lg w-3/5 mt-3 max-md:w-full">
            <div className='flex place-content-between p-3'>
                <div className='flex space-x-3 text-gray-500'>
                    <CiMenuBurger/>
                    <p>Applications</p>

                </div>
                <div className='flex space-x-2 cursor-pointer'  onClick={()=>{setClick(!click)}}>
                    <p className='text-purple-700'>{click ? "See less" : "See all"}</p>
                    <p>:</p>

                </div>

            </div>
            <div>
                <p className='text-xs text-gray-700 ml-4 mt-3 dark:text-gray-400'>Mentors</p>
            </div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2 overflow-x-auto table-fixed">
                    
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-3 p-2">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-1 py-4 pl-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Image src={maxwell} alt='some'/>
                            </th>
                            <td className="px-0.5 py-4">
                                <p className='text-black dark:text-white text-sm font-serif'>Maxwell Smith</p>
                                <p className='text-gray-500 text-xs'>maxwellsmith@gmail.com</p>
                                
                            </td>
                            <td className="px-10 py-4">
                                <div className='flex space-x-2'>
                                    <div>
                                        <button className='bg-red-50 text-red-400 border-2 border-red-200 
                                        p-1 rounded-lg px-3 hover:text-white hover:bg-red-300 cursor-pointer'>
                                            Reject
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-purple-500 text-white border-2 border-purple-500 
                                        p-1 rounded-lg px-3 hover:text-purple-100 hover:bg-purple-400 cursor-pointer'>
                                            Accept
                                        </button>
                                    </div>

                                </div>
                            </td>
    
                        </tr>
                        
                        
                        
                        
                    </tbody>

                </table>
            </div>
            <div className='mt-2 flex space-x-1 ml-2'>
                <div>
                    <button className='p-2 px-3 rounded-md bg-purple-200 text-xs'>
                        <p className='text-[0.5rem] text-purple-400'>Product Designer</p>
                    </button>
                </div>
                <div>
                    <button className='p-2 px-3 rounded-md bg-green-200 text-xs'>
                        <p className='text-[0.5rem] text-green-400'>4years Experience</p>
                    </button>
                </div>
                <div>
                    <button className='p-2 px-3 rounded-md bg-blue-100 text-xs flex'>
                        <Image src={flag} alt='some'/>
                        <p className='text-[0.5rem] text-blue-300'>Lagos, Nigeria</p>
                    </button>
                </div>
                <div>
                    <button className='p-2 px-2 rounded-md bg-white text-xs border-2 border-gray-200'>
                        <p className='text-[0.5rem] text-gray-500 '>GMT+1</p>
                    </button>
                </div>
            </div>
            <div className='border-b-2 border-gray-300 mt-4'>

            </div>

            <div>
                <p className='text-xs text-gray-500 ml-4 mt-3 dark:text-gray-400'>Students</p>
            </div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2">
                    
                    <tbody>

                        {items.map((item) =>{
                            return(
                                <tr key={item.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-3 p-2">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-0 py-3 pl-4 ">
                                    <Image src={item.image} alt='some' />
                                    {/* <img src={item.image} alt="some" /> */}
                                </th>
                                <td className="px-0.5 py-4 ">
                                    <p className='text-black dark:text-white text-sm font-serif'>
                                        {item.name}
                                    </p>
                                    <p className='text-gray-500 text-xs'>{item.email}</p>
                                    
                                </td>
                                <td className="px-10 py-4 ">
                                    <div className='flex space-x-2'>
                                        <div>
                                            <button className='bg-red-50 text-red-400 border-2 border-red-200 
                                            p-1 rounded-lg px-3 hover:text-white hover:bg-red-300 cursor-pointer'>
                                                Reject
                                            </button>
                                        </div>
                                        <div>
                                            <button className='bg-purple-500 text-white border-2 border-purple-500 
                                            p-1 rounded-lg px-3 hover:text-purple-100 hover:bg-purple-400 cursor-pointer'>
                                                Accept
                                            </button>
                                        </div>
        
                                    </div>
                                </td>
        
                            </tr>
                            )
                        })}
            
                    </tbody>
                </table>
            </div>


        </div>

  )
}

export default Applications
