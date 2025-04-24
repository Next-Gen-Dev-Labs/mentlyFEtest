import Image from "next/image"
import { BsDot } from "react-icons/bs";
import { Text } from "../ui/Text";
import { TbCalendar, TbClock } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";

interface props {
  image?:string;
  session?: string;
  title?: string;
}

export const CallCard =({image='/', session='Upcoming', title}:props)=> {
  return(
    <div className="bg-[#f9f7ff] w-full max-w-[280px] p-3.5 rounded-[10px]">
      <div className="w-full h-[70px] rounded-md mb-1.5">
        <Image src={`/${image}`} alt="emblem" width={500} height={500} className="w-full" objectFit="cover" loading="lazy"/>
      </div>
      <div className={`${session =='Upcoming' ? 'text-[#1c0ae1] bg-[#e0ddff]':'text-[#008000] bg-[#D4F3D4]'} w-fit mb-2 flex items-center  h-[18px] px-1 pr-3 text-[10px] rounded-2xl font-chivo `}>
        <BsDot className="text-xl"/>
        <span>{session}</span>
      </div>
      <Text color="text-font" size='base' className="max-h-10">
        {title}
      </Text>
      <div className="w-full border border-[#D0D5DD] my-2"/>
      <div className="flex flex-col w-full gap-2.5 px-1 ">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-fit items-center  pr-4  text-[8px] gap-2">
            <TbCalendar className="text-mently-blue text-xs"/>
            <span className="">Mon. Jul 30, 2024</span>
          </div>
          <div className="border border-[#d0d5dd] h-3"/>
          <div className="flex w-fit items-center pr-4 text-[8px] gap-2">
            <TbClock className="text-mently-blue text-xs"/>
            <span className="">9:00 - 11:00AM</span>
          </div>
        </div>

        <div className="flex w-full justify-between items-end">
          <div className="flex items-end gap-1">
            <Image src={'/thumb.svg'} alt="" width={30} height={30} loading="lazy"/>
            <div className="space-y-1">
              <Text className="font-chivo text-[#a195c0] text-[7px]">
                Study Group 
              </Text>
              <Text className="font-chivo font-semibold text-font text-[8px]">
                UX Strategy Study group
              </Text>
            </div>
          </div>
          <div className="">
            <Text className="font-chivo text-[#a195c0] text-[7px]">
                Mentors
            </Text>
            <Image src={'/thumb.svg'} alt="" width={20} height={20} loading="lazy"/>
          </div>
        </div>
        <div className="flex w-full justify-between items-center gap-1">
          <button className="bg-[#b093c9]/30 border border-primary-lite w-[fit] h-[34px] flex items-center py-2.5 px-4 text-mently-blue text-nowrap rounded-[7px] font-chivo font-medium text-xs hover:opacity-90 transform-color duration-200 ease-in-out">
            View Participants
          </button>
          <button disabled={session === 'Upcoming'}
            className="bg-primary-lite w-fit border border-primary-lite h-[34px] flex items-center py-2.5 px-4 text-white text-nowrap rounded-[7px] font-chivo font-medium text-xs hover:opacity-90 transform-color duration-200 ease-in-out">
            Join Now <span className="ml-3"><IoArrowForward/></span>
          </button>
        </div>
      </div>  
    </div>
  )
}