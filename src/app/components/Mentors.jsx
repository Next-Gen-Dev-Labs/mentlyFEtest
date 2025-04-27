"use client"
import React from 'react'
import Image from 'next/image';
import { CiCirclePlus } from "react-icons/ci";
import { mentors } from '../utilis';
import { CiMenuBurger } from "react-icons/ci";
import RecentActivities from './RecentActivities';
import { useState } from 'react';

function Mentors() {
    const [click, setClick] = useState(false)

    const items = !click ? mentors.slice(2) : mentors
  return (
        <div className="relative shadow-md sm:rounded-lg w-3/5 mt-3 h-fit p-2 max-md:w-full">
            <div className='flex place-content-between p-3'>
                <div className='flex space-x-3 text-gray-500'>
                    <CiMenuBurger/>
                    <p>Mentors</p>

                </div>
                <div className='flex space-x-2 cursor-pointer'>
                    <CiCirclePlus className='text-xl text-gray-500 dark:text-white'/>
                    <p>:</p>

                </div>

            </div>
            <div>
                <p className='text-xs text-gray-700 ml-4 mt-3 dark:text-gray-400'>Mentors</p>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2">
                    
                <tbody>

                    {items.map((item) =>{
                        return(
                            <tr key={item.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            
                            <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Image src={item.image} alt='some'/>
                            </th>
                            
                            <td className="px-0.5 py-4">
                                <p className='text-black dark:text-white text-sm font-serif'>
                                    {item.name}
                                </p>
                                <p className='text-gray-500 text-xs'>{item.title}</p>
                                
                            </td>
                            <td className="px-0.5 py-4">
                                <div className='flex space-x-2'>
                                    <button type="button" className="text-white bg-purple-500 hover:bg-purple-800 
                                    focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xs 
                                    px-3 py-1.5 text-center mb-2 dark:bg-purple-600 
                                    dark:hover:bg-purple-700 dark:focus:ring-purple-900">Messenger</button>

    
                                </div>
                            </td>
        
                        </tr>
                        )
                    })}

                </tbody>
            </table>
            <div className='self-center flex place-content-center mt-2 w-[90%] ml-2'>
                <button
                    onClick={()=>{setClick(!click)}} 
                    type="button" 
                    className="text-purple-500 bg-purple-200 hover:bg-purple-800 
                    focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xs 
                    px-5 py-2.5 text-center mb-2 dark:bg-purple-800 
                    dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full cursor-pointer">
                        {click ? 'See less' : 'See all'}
                </button>
            </div>

        <div className='w-full mt-6'>
            <RecentActivities/>
        </div>
           
    </div>
  )
}

export default Mentors
