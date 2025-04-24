"use client"
import React from 'react'
import Programs from './Programs';
import GroupCalls from './GroupCalls';
import Applications from './Applications';
import Mentors from './Mentors';
import DonutChart from './Users';
import { CiMenuBurger } from "react-icons/ci";

function Hero() {
  
  
  return (
    <section className='flex mt-10 self-center place-content-center space-x-4 w-[99%] mx-auto max-md:flex-col space-y-4'>
        <div className='w-3/6 bg-white dark:bg-gray-800 shadow-md px-4 py-3 flex flex-col space-y-4 max-md:w-[99%]'>
            <Programs/>
            <div className='mt-5 bg-white shadow-md dark:bg-gray-800'>
              <div className='flex place-content-between p-3'>
                  <div className='flex space-x-3 text-gray-500'>
                    
                      <p>Users</p>
      
                  </div>
                  <div className='flex space-x-2 cursor-pointer'>
                      <p className='text-purple-700'>See all</p>
                      <p>:</p>
      
                  </div>
      
              </div>
              <div className='mt-1'>
                <DonutChart />

              </div>
              
            </div>
            

        </div>
        <div className='w-4/6 bg-white dark:bg-gray-800 shadow-md px-5 py-3 max-md:w-[98%] h-fit'>
            <GroupCalls/>
            <div className='w-full flex space-x-4 max-md:flex-col'>
              <Applications/>
              <Mentors/>
              

            </div>
            
            

        </div>
      
    </section>
  )
}

export default Hero
