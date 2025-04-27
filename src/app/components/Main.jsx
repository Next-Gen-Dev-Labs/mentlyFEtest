"use client"
import React from 'react'
import Navbar from './Navbar'
import fluent from "@/app/images/fluent.png"
import gallery from "@/app/images/gallery.png"
import Image from 'next/image'
import Hero from './Hero'
import { useGlobalState } from '../context'

function MainPage() {
  const {showManageWidget, setShowManageWidget} = useGlobalState()
  return (
    
    <main className='min-h-screen w-full relative'>
        <Navbar/>
        <div className='flex ml-auto place-content-end self-end pr-8 space-x-5 mt-5'>
            <Image src={fluent} alt='image' height={24} width={24} className='object-contain'/>
            <Image src={gallery} alt='image' height={24} width={24} className='object-contain'/>

            <p className='text-black dark:text-white font-bold cursor-pointer'
            onClick={()=>{setShowManageWidget(!showManageWidget)}}
            >
              Manage Widgets
            </p>


        </div>
        <div className='bg-gradient-to-r from-purple-500 via-purple-600 
        to-purple-700 flex rounded-md space-x-12 self-center place-content-center 
        w-fit max-xl:w-[90%] h-fit p-3 mt-5 mx-auto px-6 max-md:flex-col space-y-3'>
            <p className='text-white font-bold text-2xl'>Welcome Aboard, Blessing <span className='text-lg font-bold'>&#128075;</span></p>
            <p className='text-gray-200 font-medium text-lg'>{"We're thrilled to have you join Techrity Team!"}</p>
            <button className='text-black p-2 bg-white rounded-md px-4 font-medium text-lg max-md:h-12 h-10'>Update Profile</button>

            {/* [#7B1ECC] */}
            

        </div>
        <Hero/>

      
    </main>
  )
}

export default MainPage
