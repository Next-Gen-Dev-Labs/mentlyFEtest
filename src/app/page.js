'use client';
import { useState } from "react";
import Application from "@/components/application";
import Mentor from "@/components/mentor";
import Program from "@/components/programs";
import RecentActivities from "@/components/recentAct";
import SideBar from "@/components/layouts/sidebar";
import UsersChart from "@/components/userChart";
import Head from "@/components/layouts/header";
import Image from "next/image";
import Icon1 from '@/assets/icons/Vector (2).svg';
import Icon2 from '@/assets/icons/material-symbols-light_gallery-thumbnail-outline-sharp.svg'
import Group from "@/components/group";
import Widget from "@/components/layouts/widget";


export default function Home() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false); // State to toggle Widget visibility
  return (
    <div className="flex ">
     
      <div className={`  ${isWidgetOpen ? 'blur-sm' : ''} transition-all duration-300`}>
      <SideBar/>
      </div>
     
      <div className={`w-full bg-[#F9F7FF] ${isWidgetOpen ? 'blur-sm' : ''} transition-all duration-300`}>
        <Head/>
        <div className="pl-4 lg:pl-6 xl:pl-14 pr-4 lg:pr-5 xl:pr-9 pt-16 lg:pt-0 ">
        <div className="flex justify-end gap-6 py-5 ">
          <Image src={Icon1} alt="Icon"/>
          <Image src={Icon2} alt="Icon"/>
          <button
              className="text-[#1F0954] font-bold cursor-pointer"
              onClick={() => setIsWidgetOpen(true)} // Open the Widget
            >
              Manage Widgets
            </button>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-3.5 lg:px-7 bg-[#6F01D0] rounded py-1.5 gap-2">
          <h2 className="font-semibold text-base lg:text-2xl text-white">Welcome Aboard, Blessing 👋</h2>
          <p className="text-[#BDBDBD] font-semibold text-sm lg:text-xl">We’re thrilled to have you join Techrity Team!</p>
          <button className="text-[#1F0954] text-sm lg:text-base font-bold bg-white py-2.5 px-6 rounded-lg">Update Profile</button>
        </div>
        <div className="mt-2 flex  gap-3 w-full">
          <div className="space-y-4 hidden lg:block">
          <Program/>
          <UsersChart/>
          </div>
          <div className="space-y-4 w-full  lg:w-[662px] xl:w-[772px]">
            <div className='lg:hidden'>
            <Program/>
            </div>
          <Group/>
          <div className="flex flex-col lg:flex-row justify-between gap-3">
          <Application/>
          <div className="lg:hidden">
          <UsersChart/>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-3 ">
          <Mentor/>
          <RecentActivities/>
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
     
      {/* Widget Component */}
      {isWidgetOpen && (
        <div className="fixed top-0 right-0 h-full w-[300px] md:w-[400px] lg:w-[450px] bg-white shadow-lg z-50 transition-transform duration-300">
          <Widget onClose={() => setIsWidgetOpen(false)} /> {/* Pass onClose prop */}
        </div>
      )}

      {/* Overlay for Blurring */}
      {/* {isWidgetOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsWidgetOpen(false)} // Close the Widget when clicking outside
        ></div>
      )} */}
    </div>
  );
}
