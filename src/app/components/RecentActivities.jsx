"use client"
import Image from 'next/image'
import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { recent } from '../utilis';

function RecentActivities() {
    const [click, setClick] = useState(false)

    const items = !click ? recent.slice(0,3) : recent
  return (
    <div className="relative shadow-lg sm:rounded-lg mt-3 h-fit p-2">
        <div className='flex place-content-between p-3'>
            <div className='flex space-x-3 text-gray-500'>
                <CiMenuBurger/>
                <p className='text-xs'>Recent Activities</p>

            </div>
            <div className='flex space-x-2 cursor-pointer' onClick={()=>{setClick(!click)}}>
                <p className='text-purple-700 text-xs'>{click ? "See less" : "See all"}</p>
                <p>:</p>

            </div>

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
                            <p className='text-gray-500 text-xs'>25 minutes Ago</p>
                            
                        </td>


                    </tr>
                    )
                })}

            </tbody>
        </table>

           
    </div>
  )
}

export default RecentActivities
