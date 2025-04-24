import React from 'react'
import { Icons } from '../Icons'
import Image from 'next/image'
import { Separator } from '../ui/seperator'

const GroupCalls = () => {
  return (
    <div>
       <div className="bg-[#fff] w-full h-full  rounded-xl px-4 py-4 ">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-3">
               <Icons.hamburger/>
                <p className="text-[#B0B0B0] font-chivo text-base font-bold"> Group Calls</p>
             </div>
             <div className="flex items-center gap-3">
                <p className="text-[#6F01D0] font-chivo text-xs font-semibold">See all</p>
               <Icons.settingsIcon/>
             </div>
          </div>
          <div className="mt-1 grid grid-cols-1  lg:grid-cols-3 gap-2 ">
            <GroupCard/>
            <GroupCardTwo/>
            <GroupCardThree/>
          </div>
        </div>
    </div>
  )
}

export default GroupCalls

const GroupCard =()=>{
  return(
      <div className='bg-[#F9F7FF] mt-3 rounded-[9px]  flex flex-col  p-3'>
         <div
        className="h-[120px] px-3 py-2 rounded-lg bg-cover bg-center bg-no-repeat w-full text-white"
        style={{
          backgroundImage: ` url('/Rectangle 12322.png')`, }}>
         </div>
         <button className='bg-[#D4F3D4] w-fit flex items-center py-1 px-4 rounded-xl my-3 text-[#008000] text-xs font-bold font-chivo '>
          <span className='bg-[#008000] rounded-full h-2 w-2 block mr-2'></span> Ongoing  </button>
          <p className='text-lg text-[#595564] pt-2'>Weekly Meeting - Product Demo Review with Testers</p>
          <div className=" border-t border-[#D0D5DD] py-2">
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-4">
                    <p className='text-[8px] flex items-center text-[#595564] font-medium font-chivo'> <span className='mr-2'><Icons.calender/> </span>Mon. Jul 30, 2024</p>
                    <Separator className='h-4' orientation='vertical' />
                </div>
                    
                <p className='text-[8px] flex items-center text-[#595564] font-medium font-chivo'>  <span className='mr-2'><Icons.clock/> </span>9:00 - 11:00AM</p>
            </div>
            <div className="flex mt-3 justify-between">
                <div className="flex gap-2 items-center ">
                    <div className="relative w-4 h-4 rounded-full  z-30">
                        <Image
                            src="/man-438081_960_720.png"
                            alt="mentor-img"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <p className='text-[#595564] text-[10px] font-medium'>
                        <span className='text-[7px] text-[#A195C0] block'>Study Group</span> UX Strategy  Study group</p>
                </div>
                <div className="flex flex-col  ">
                <p className='text-[7px] text-[#A195C0] block'> Mentors</p>
                   <div className="flex -space-x-2 ">
                        <div className="relative w-4 h-4 rounded-full  z-30">
                                     <Image
                                       src="/man-438081_960_720.png"
                                       alt="mentor-img"
                                       fill
                                       className="rounded-full object-cover"
                                     />
                        </div>
                        <div className="relative w-4 h-4 rounded-full  z-20">
                            <Image
                            src="/man-438081_960_720.png"
                            alt="mentor-img"
                            fill
                            className="rounded-full object-cover"
                            />
                        </div>
                        <div className="relative w-4 h-4 rounded-full  z-10">
                            <Image
                            src="/man-438081_960_720.png"
                            alt="mentor-img"
                            fill
                            className="rounded-full object-cover"
                            />
                        </div>
                    </div>
                  
                </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-3">
             <div className="flex w-full flex-wrap gap-2  justify-between  items-center mt-2 sm:mt-0">
              <button className='bg-transparent text-[#6F01D0] text-xs font-chivo border border-[#6F01D0] px-2 rounded-md py-2'>View View Participants</button>
              <button className='bg-[#6F01D0] flex items-center text-[#fff] text-xs font-chivo rounded-md py-2 px-2'>Join Now <span className='pl-1'><Icons.nextArrow/></span></button>
             </div>
             
          </div>
      </div>
  )
}

const GroupCardTwo =()=>{
    return(
        <div className='bg-[#F9F7FF] mt-3 rounded-[9px]  flex flex-col  p-3'>
           <div
          className="h-[120px] px-3 py-2 rounded-lg bg-cover bg-center bg-no-repeat w-full text-white"
          style={{
            backgroundImage: ` url('/group-call-2-bg.png')`, }}>
           </div>
           <button className='bg-[#E0DDFF] w-fit flex items-center py-1 px-4 rounded-xl my-3 text-[#1C0AE1] text-xs font-bold font-chivo '>
            <span className='bg-[#1C0AE1] rounded-full h-2 w-2 block mr-2'></span>Upcoming  </button>
            <p className='text-lg text-[#595564] pt-2'>Weekly Meeting - Product Demo Review with Testers</p>
            <div className=" border-t border-[#D0D5DD] py-2">
              <div className="flex justify-between w-full items-center">
                  <div className="flex gap-4">
                      <p className='text-[8px] flex items-center text-[#595564] font-medium font-chivo'> <span className='mr-2'><Icons.calender/> </span>Mon. Jul 30, 2024</p>
                      <Separator className='h-4' orientation='vertical' />
                  </div>
                      
                  <p className='text-[8px] flex items-center text-[#595564] font-medium font-chivo'>  <span className='mr-2'><Icons.clock/> </span>9:00 - 11:00AM</p>
              </div>
              <div className="flex mt-3 justify-between">
                  <div className="flex gap-2 items-center ">
                      <div className="relative w-4 h-4 rounded-full  z-30">
                          <Image
                              src="/man-438081_960_720.png"
                              alt="mentor-img"
                              fill
                              className="rounded-full object-cover"
                          />
                      </div>
                      <p className='text-[#595564] text-[10px] font-medium'>
                          <span className='text-[7px] text-[#A195C0] block'>Study Group</span> UX Strategy  Study group</p>
                  </div>
                  <div className="flex flex-col  ">
                  <p className='text-[7px] text-[#A195C0] block'> Mentors</p>
                     <div className="flex -space-x-2 ">
                          <div className="relative w-4 h-4 rounded-full  z-30">
                                       <Image
                                         src="/man-438081_960_720.png"
                                         alt="mentor-img"
                                         fill
                                         className="rounded-full object-cover"
                                       />
                          </div>
                          <div className="relative w-4 h-4 rounded-full  z-20">
                              <Image
                              src="/man-438081_960_720.png"
                              alt="mentor-img"
                              fill
                              className="rounded-full object-cover"
                              />
                          </div>
                          <div className="relative w-4 h-4 rounded-full  z-10">
                              <Image
                              src="/man-438081_960_720.png"
                              alt="mentor-img"
                              fill
                              className="rounded-full object-cover"
                              />
                          </div>
                      </div>
                    
                  </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-3">
               <div className="flex w-full flex-wrap gap-2  justify-between  items-center mt-2 sm:mt-0">
                <button className='bg-transparent text-[#6F01D0] text-xs font-chivo border border-[#6F01D0] px-2 rounded-md py-2'>View View Participants</button>
                <button className='bg-[#6F01D0] opacity-20 flex items-center text-[#fff] text-xs font-chivo rounded-md py-2 px-2'>Join Now <span className='pl-1'><Icons.nextArrow/></span></button>
               </div>
               
            </div>
        </div>
    )
  }

const GroupCardThree =()=>{
    return(
        <div className='bg-[#F9F7FF] mt-3 rounded-[9px]  flex flex-col  p-3'>
           <div
          className="h-[120px] px-3 py-2 rounded-lg bg-cover bg-center bg-no-repeat w-full text-white"
          style={{
            backgroundImage: ` url('/group-call-3-bg.png')`, }}>
           </div>
           <button className='bg-[#D4F3D4] w-fit flex items-center py-1 px-4 rounded-xl my-3 text-[#008000] text-xs font-bold font-chivo '>
            <span className='bg-[#008000] rounded-full h-2 w-2 block mr-2'></span> Ongoing  </button>
            <p className='text-lg text-[#595564] pt-2'>Weekly Meeting - Product Demo Review with Testers</p>
            <div className=" border-t border-[#D0D5DD] py-2">
              <div className="flex justify-between w-full items-center">
                  <div className="flex gap-4">
                      <p className='text-[8px] flex items-center text-[#595564] font-medium font-chivo'> <span className='mr-2'><Icons.calender/> </span>Mon. Jul 30, 2024</p>
                      <Separator className='h-4' orientation='vertical' />
                  </div>
                      
                  <p className='text-[8px] flex items-center text-[#595564] font-medium font-chivo'>  <span className='mr-2'><Icons.clock/> </span>9:00 - 11:00AM</p>
              </div>
              <div className="flex mt-3 justify-between">
                  <div className="flex gap-2 items-center ">
                      <div className="relative w-4 h-4 rounded-full  z-30">
                          <Image
                              src="/man-438081_960_720.png"
                              alt="mentor-img"
                              fill
                              className="rounded-full object-cover"
                          />
                      </div>
                      <p className='text-[#595564] text-[10px] font-medium'>
                          <span className='text-[7px] text-[#A195C0] block'>Study Group</span> UX Strategy  Study group</p>
                  </div>
                  <div className="flex flex-col  ">
                  <p className='text-[7px] text-[#A195C0] block'> Mentors</p>
                     <div className="flex -space-x-2 ">
                          <div className="relative w-4 h-4 rounded-full  z-30">
                                       <Image
                                         src="/man-438081_960_720.png"
                                         alt="mentor-img"
                                         fill
                                         className="rounded-full object-cover"
                                       />
                          </div>
                          <div className="relative w-4 h-4 rounded-full  z-20">
                              <Image
                              src="/man-438081_960_720.png"
                              alt="mentor-img"
                              fill
                              className="rounded-full object-cover"
                              />
                          </div>
                          <div className="relative w-4 h-4 rounded-full  z-10">
                              <Image
                              src="/man-438081_960_720.png"
                              alt="mentor-img"
                              fill
                              className="rounded-full object-cover"
                              />
                          </div>
                      </div>
                    
                  </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-3">
               <div className="flex flex-wrap gap-2 w-full justify-between  items-center mt-2 sm:mt-0">
                <button className='bg-transparent text-[#6F01D0] text-xs font-chivo border border-[#6F01D0] px-2 rounded-md py-2'>View View Participants</button>
                <button className='bg-[#6F01D0] flex items-center text-[#fff] text-xs font-chivo rounded-md py-2 px-2'>Join Now <span className='pl-1'><Icons.nextArrow/></span></button>
               </div>
               
            </div>
        </div>
    )
  }