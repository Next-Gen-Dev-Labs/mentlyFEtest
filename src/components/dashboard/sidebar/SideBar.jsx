"use client"
import React, { useEffect, useRef, useState } from 'react'
import { sidebarData } from './sidebarData'
import Link from 'next/link';
import Image from 'next/image';
import {sidebar} from '@/data/dashboard.json'
import Grid4Icon from '@/components/dynamicSvgs/Grid4Icon';
import UserTagIcon from '@/components/dynamicSvgs/UserTagIcon';
import MySwitch from '@/components/mui/Switch'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/redux/sidebarSlice';

const SideBar = () => {
    const [data,setData] = useState(sidebarData);
    const [enabled, setEnabled] = useState(false);
    const sidebarRef = useRef(null);
    const clickedInside = useRef(false);
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const handleActive= (id)=> {
        let upd = data.map(each=> {
            if(each.id === id) {
                each.active = true;
            }else{
                each.active = false
            }

            return each;
        })

        setData(upd);
    }

     // Detect outside click
  useEffect(() => {
    const handleClickOutside = (e) => {

        if(clickedInside.current === true) {
            
            if (
              isOpen &&
              sidebarRef.current &&
              !sidebarRef.current.contains(e.target)
            ) {
              dispatch(toggleSidebar())
            }
        }else{
          

        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  return (
    <div ref={sidebarRef} >
        {/* side bar top */}
        <div className="flexBetween mt-[36px] ps-[36.36px] pe-3 gap-x-[51.61px] mb-[89px] ">
            <Image loading='lazy' src={sidebar.logo.url} alt={sidebar.logo.text}  width={116} height={27} />
            <Grid4Icon color="#AAAAAA" />

        </div>
        {/* side bar links */}
        <div className="grid grid-cols-1 gap-y-2 px-[17px] place-content-center ">
        {
            data.map((each,i)=> (
               <div key={i} className="animate-fade-down ">
                 {
                    each.soon &&  <div className="flex justify-end "><p className="font-Chivo text-[10px] text-neutral-100 text-right pe-[7.5px] rounded-[8px] w-fit px-1 py-0.5 bg-blue-800  "> {each.soon}  </p></div>
                 }
                 <Link onClick={(e)=> {handleActive(each.id); clickedInside.current =true}} href={each.href}  className={`w-[207px] h-[57px] font-Chivo text-base flexStart px-[32px] gap-x-[42px] hover:animate-fade-left  ${each.active?"bg-white rounded-[8px] ": "bg-indigo-200"} `}>
                    {each.icon({color: each.active?"#1F0954": "#C2C2C2",height:20,width:20})}

                    <span className={`${each.active?"text-indigo-200": "text-neutral-800"}`}> {each.name} </span>

                </Link>
               </div>
            ))
        }

        </div>
        {/* user tag box */}
        <div className="w-[220px] h-fit mx-auto rounded-[8px] ps-[17.5px] pt-[11.67px] mt-[48px] bg-white-alpha12 flexColStart pb-[10px] ">
            <span className=""><UserTagIcon width={16} height={16} color="white" /></span>
            <h5 className="font-Chovo text-[12px] font-bold mt-[21px] mb-[25px] text-white "> {sidebar.userTag.h5} </h5>
            <Link className='font-Chovo text-[10px] font-normal text-yellow-100 border-b-yellow-100 block border-b-[1px]  ' href={sidebar.userTag.a.href} > {sidebar.userTag.a.text} </Link>

        </div>
        {/* toggle switch */}
        <div className="mt-[34.5px] mb-[197.5] flexCenter gap-x-[32px] ">
            <span className="font-Chovo text-[12px] font-bold text-white ">Switch to Classic Mode</span>
            <MySwitch enabled={enabled} setEnabled={setEnabled} />
        </div>
    </div>
  )
}

export default SideBar