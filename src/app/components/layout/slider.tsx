"use client"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Benchmark } from "./Logo";
import Image from "next/image";
import { Navigations } from "@/utils/Navigation";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Text } from "../ui/Text";
import { Toggle } from "../ui/Toggle";

type props = {
  isOpen: boolean;
  onClose?: () => void;
}

export const Slider = ({isOpen, onClose}:props) => {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={`bg-primary w-60 h-screen py-3 px-4 fixed top-0 left-0 z-20  lg:translate-0 ${isOpen ? 'translate-x-0': '-translate-x-[100%]'} transition-transform duration-300 ease-linear`}>
        {isOpen && <IoMdCloseCircleOutline onClick={onClose} className="mb-4 text-white text-2xl float-right hover:scale-105 transition-transform duration-200 ease-in-out" />}
        <div className="w-full pl-5 lg:my-5 flex justify-between">
          <Benchmark />
          <Image src='./grid-4.svg' alt='grid' width={24} height={24} className='hover:scale-105 transition-transform duration-200 ease-in-out' />
        </div>
        <div className='flex flex-col w-full my-6 sm:my-10'>
          {
            Navigations.map((item) => {
              const isActive = path === `/${item?.nav}` || path === `/${item?.nav.toLowerCase()}`;
              return (
                <Link href={item?.nav == 'Analytics' ? '#':`/${item.nav}`} key={item?.nav} className={`relative group flex items-center gap-8 py-3 px-8 rounded-lg text-Grey-4 text-base hover:text-[#1F0954] hover:bg-gray-200 ${isActive ? 'text-[#1F0954] bg-white':''} font-chivo groupflip`}>
                  {item?.icon && React.createElement(item?.icon, { className:' text-2xl group-hover:scale-105 transition-transform duration-200 ease-in-out'})}
                  <span className="text-base flip">{item?.nav}</span>
                  { item?.nav === 'Analytics' &&
                    <span className={`absolute top-0 right-2 rounded-[50px] text-[9px] text-Grey bg-[#1F0954] py-0.5 px-1`}>
                      Coming Soon
                    </span>
                  }
                </Link>
            )})
          }
        </div>
        <div className="hidden sm:block w-full px-3.5 py-2.5 rounded-lg bg-[#6f01d0] space-y-5 hover:scale-105 transition-transform duration-200 ease-in-out">
          <Image src='/user-tag.svg' alt="user-tag" width={24} height={24}/>
          <Text size='xs' color="text-white" weight="bold" className="font-chivo">
            Get some questions, enquiries or need help?
          </Text>
          <Link href={'#'}>
            <Text size='2xs' color="text-secondary" className="underline underline-offset-2 font-chivo">
              Visit Mently Help Desk Here
            </Text>
          </Link>
        </div>
        <div className="flex w-full justify-between items-center mt-6 sm:mt-10">
          <Text size='xs' color='text-[#F2F2F2]' weight='bold'>
            Switch to Classic Mode 
          </Text>
          <Toggle trigger={()=> setToggle(!toggle)} anime={toggle}/>
        </div>
      </div>
    </>
  )
}