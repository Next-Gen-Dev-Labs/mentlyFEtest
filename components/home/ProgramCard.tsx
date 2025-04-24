/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Icons } from '../Icons'
import Image from 'next/image'
import UsersMetrics from './UsersMetrics'

const ProgramCard = () => {
  return (
    <div className="bg-[#fff]  h-full  w-full rounded-xl px-4 py-4 ">
    <div className="flex justify-between items-center">
       <div className="flex items-center gap-3">
         <Icons.hamburger/>
          <p className="text-[#B0B0B0] font-chivo text-base font-bold">Programs</p>
       </div>
       <div className="flex items-center gap-3">
          <p className="text-[#6F01D0] font-chivo text-xs font-semibold">See all</p>
         <Icons.settingsIcon/>
       </div>
    </div>
    <div className="flex flex-col  place-self-end mt-5">
      <div className="flex items-center place-items-end    gap-3">
        <p className='font-medium text-xs text-[#918C9C]'>Filter</p>
      <select className='bg-transparent border px-2 py-[4px] rounded-md border-[#E1E7EC]'>
            <option className='px-2 text-[#595564] text-xs '>Active</option>
          </select>
      </div>

    </div>
    <div className="mt-1">
        <Card/>
        <CardTwo/>
        <CardThree/>
        <UsersMetrics/>
    </div>
  </div>
  )
}

export default ProgramCard

const Card =()=>{
    return(
        <div className='bg-[#fff] rounded-[9px] custom-card-shadow flex flex-col items-center px-3 py-2'>
           <div
          className="sm:h-[98px] px-3 py-2 rounded-lg bg-cover bg-center bg-no-repeat w-full text-white"
          style={{
            backgroundImage: `linear-gradient(178.73deg, rgba(12, 12, 12, 0.552) 0.9%, rgba(0, 0, 0, 0.69) 98.73%), url('/bg-img.jpg')`,
          }}
        >
          <div className="flex justify-between w-full items-start">
          <p className='text-[#fff] text-base  sm:text-xl font-bold font-chivo '>Fundamentals of User <span className='sm:block'>Interface & Experience</span> </p>
           <Icons.settingsWhite/>
          </div>
          <button className='bg-[#D4E0F3] flex items-center py-[3px] px-4 rounded-xl my-2 text-[#0077FF] text-[8px] font-bold font-chivo '>
            <span className='bg-[#0077FF] rounded-full h-2 w-2 block mr-2'></span> Bootcamp  </button>
           </div>
            <p className='text-xs pt-2'>This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-3">
            <div className="flex items-center">
              <div className="flex -space-x-3 mr-4">
                <div className="relative w-8 h-8 rounded-full  z-30">
                  <Image
                    src="/man-438081_960_720.png"
                    alt="mentor-img"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full  z-20">
                  <Image
                    src="/man-438081_960_720.png"
                    alt="mentor-img"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full  z-10">
                  <Image
                    src="/man-438081_960_720.png"
                    alt="mentor-img"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              
              <p className="font-semibold text-[#6C6C6C] text-[10px] font-chivo">Mentors</p>
            </div>
               <div className="flex flex-wrap gap-2 items-center mt-2 sm:mt-0">
                <button className='bg-transparent text-[#6F01D0] text-xs font-chivo border border-[#6F01D0] rounded-md py-2 px-[14px]'>View Details</button>
                <button className='bg-[#6F01D0] text-[#fff] text-sxs font-chivo rounded-md py-2 px-5'>Analysis</button>
               </div>
               
            </div>
        </div>
    )
}

const CardTwo =()=>{
  return(
      <div className='bg-[#fff] mt-3 rounded-[9px] custom-card-shadow flex flex-col items-center px-3 py-2'>
         <div
        className="sm:h-[98px] px-3 py-2 rounded-lg bg-cover bg-center bg-no-repeat w-full text-white"
        style={{
          backgroundImage: ` url('/Rectangle 12322.png')`,
        }}
      >
        <div className="flex justify-between w-full items-start">
        <p className='text-[#fff] text-base  sm:text-xl font-bold font-chivo'>Colour Hack Practical <span className='lg:block'>Group Call</span></p>
        
        </div>
        <button className='bg-[#D4F3D4] flex items-center py-[3px] px-4 rounded-xl my-2 text-[#008000] text-[8px] font-bold font-chivo '>
          <span className='bg-[#008000] rounded-full h-2 w-2 block mr-2'></span> Group Call  </button>
         </div>
          <p className='text-xs pt-2'>This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-3">
          <div className="flex items-center">
            <div className="flex  mr-3">
              <div className="relative w-8 h-8 rounded-full  z-30">
                <Image
                  src="/man-438081_960_720.png"
                  alt="mentor-img"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              
            </div>
           
            <p className=" text-[#6C6C6C] text-[10px] font-chivo">Hosted By: Faith Okolo </p>
          </div>
             <div className="flex gap-2 flex-wrap items-center mt-2 sm:mt-0">
              <button className='bg-transparent text-[#6F01D0] text-xs font-chivo border border-[#6F01D0] rounded-md py-2 px-[14px]'>View Details</button>
              <button className='bg-[#6F01D0] text-[#fff] text-xs font-chivo rounded-md py-2 px-5'>Analysis</button>
             </div>
             
          </div>
      </div>
  )
}

const CardThree =()=>{
  return(
      <div className='bg-[#fff] mt-3 rounded-[9px] custom-card-shadow flex flex-col items-center px-3 py-2'>
         <div
        className="sm:h-[98px] px-3 py-2 rounded-lg bg-cover bg-center bg-no-repeat w-full text-white"
        style={{
          backgroundImage: ` url('/Rectangle 12322.png')`,
        }}
      >
        <div className="flex justify-between w-full items-start">
        <p className='text-[#fff] text-base  sm:text-xl font-bold font-chivo'>Colour Hack Practical <span className='lg:block'>Group Call</span></p>
        
        </div>
        <button className='bg-[#D4F3D4] flex items-center py-[3px] px-4 rounded-xl my-2 text-[#008000] text-[8px] font-bold font-chivo '>
          <span className='bg-[#008000] rounded-full h-2 w-2 block mr-2'></span> Group Call  </button>
         </div>
          <p className='text-xs pt-2'>This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-3">
          <div className="flex items-center">
            <div className="flex  mr-3">
              <div className="relative w-8 h-8 rounded-full  z-30">
                <Image
                  src="/man-438081_960_720.png"
                  alt="mentor-img"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              
            </div>
           
            <p className=" text-[#6C6C6C] text-[10px] font-chivo">Hosted By: self </p>
          </div>
             <div className="flex flex-wrap gap-2 items-center mt-2 sm:mt-0">
              <button className='bg-transparent text-[#6F01D0] text-xs font-chivo border border-[#6F01D0] rounded-md py-2 px-[14px]'>View Details</button>
              <button className='bg-[#6F01D0] text-[#fff] text-xs font-chivo rounded-md py-2 px-5'>Assign Mentor</button>
             </div>
             
          </div>
      </div>
  )
}