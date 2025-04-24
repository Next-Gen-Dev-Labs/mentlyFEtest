'use client'
import { Text } from "../components/ui/Text";
import Image from "next/image";
import { WidgetsCard } from "../components/ui/WidgetsCard";
import SelectComponent from "../components/ui/Select";
import { Program } from "./program";
import { GroupCall } from "./groupCall";
import { Applications } from "./application";
import { Mentors } from "./Mentor";
import { Activites } from "../components/dashboard/Activities";
import { Chart } from "./chart";
import { WidgetSlider } from "../components/layout/widgetSlider";
import { useState } from "react";


const DashboardScreen = ()=> {
  const [isOpen, setIsOpen] = useState(false)
  let user;
  user = 'Blessing'

  return (
    <div className="w-full h-full font-chivo">
      <div className="w-full flex items-center justify-end gap-6 mb-[18px]">
        <div className="space-x-6 flex">
          <Image src='/thumbnail.svg' alt="thumbnail" width={30} height={26} className="cursor-pointer"/>
          <Image src='/widget.svg' alt="widget" width={30} height={26} className="cursor-pointer"/>
        </div>
        <div onClick={()=>{setIsOpen(!isOpen)}} className="hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out">
          <Text as='h4' color='text-mently-blue' weight='bold' className="font-chivo">
            Manage Widgets
          </Text>
        </div>
      </div>

      <div className="bg-primary-lite flex w-full lg:items-center justify-between gap-2 sm:gap-6 rounded mb-2 px-4 lg:px-8 py-2">
        <div className='flex-wrap flex lg:items-center gap-x-8 gap-y-2'>
          <Text as='p' weight="semibold" color='text-white' className="text-xl lg:text-[26px] ">
            Welcome Aboard, <span className="font-bold text-nowrap">{user}👋</span>
          </Text>
          <Text as="p" color="text-[#BDBDBD]" weight="semibold" className="text-base lg:text-xl">
            We're thrilled to have you join Techrity Team!
          </Text> 
        </div>
        <button className="bg-white w-fit h-10 flex items-center py-2.5 px-6 text-mently-blue flex-nowrap rounded-lg font-chivo font-bold text-xs sm:text-base hover:opacity-90 transform-color duration-200 ease-in-out">
          Update Profile
        </button>
      </div>
      <div className="flex flex-col lg:flex-row flex-grow gap-2.5">
        <div className="flex flex-col w-full lg:w-[30%]">
          <WidgetsCard title={'Programs'} className='w-full h-[500px]' overflow="overflow-y-auto">
            <div className="w-full px-4">
              <div className="flex w-full justify-end items-center gap-3 px-2">
                <Text size='xs' weight='medium' color="text-[#918c9c]" className="hover:!text-sm cursor-pointer">
                  Filter
                </Text>
                <SelectComponent options={['Active','Inactive','Paused','Delayed']}/>
              </div>
            </div>
            <div className="px-3 flex-grow flex flex-col overflow-hidden">
              <Program />
            </div>
          </WidgetsCard>
          <div className='flex h-80 lg:h-[30%] flex-grow '>
            <Chart/>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[70%] gap-2.5">
          <WidgetsCard title="Group Calls" className="w-full ">
            <GroupCall/>
          </WidgetsCard>
          <div className="grid w-full h-full gap-2.5 grid-col-1 lg:grid-cols-2 grid-rows-2">
            <WidgetsCard title="Applications" className="row-span-2 !rounded-none">
              <div className="mt-5 px-4 flex overflow-y-auto">
                <Applications/>
              </div>
            </WidgetsCard>
            <WidgetsCard title="Mentors" className="" >
              <Mentors/>
            </WidgetsCard>
            <WidgetsCard title="Recent Activites" className="" >
              <Activites/>
            </WidgetsCard>
          </div>
        </div>
      </div>
      <WidgetSlider visibility={isOpen} onClose={()=>{setIsOpen(!isOpen)}}/>
    </div>
  )
}
export default DashboardScreen;