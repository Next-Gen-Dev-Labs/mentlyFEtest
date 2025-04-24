import React from 'react'
import { AddToIcon, HamburgerMenu, MenuDot } from '../assets/icons/sideBarIcons'

// import profile from "../assets/icons/profile3.png"
import activitiesProfile from "../assets/icons/ActivitiesPro.jpg"
import activitisProTwo from "../assets/icons/ActivitiesProtwo.jpg"
import activitisProThree from "../assets/icons/ActivitiesProThree.jpg"
import studentProfile from "../assets/icons/student.png"
import ActivitiesCard from '../components/ActivitiesCard'


const RecentActivitiesData = [
  {
    title: 'KYC Verification',
    activity:"45 new persons just signed up on Mently.",
    profileImage: activitiesProfile,
    timeposted: "25 minutes Ago"
  },
  {
    title: 'New User Sign Up!',
    activity:"45 new persons just signed up on Mently",
    profileImage: activitisProTwo,
    timeposted: "25 minutes Ago"
  },
  {
    title: 'Withdrawal Request',
    activity:"Mardian requested a withdrawal.",
    profileImage: activitisProThree,
    timeposted: "25 minutes Ago"
  },

];




const RecentActivitiesSection = () => {
  return (
    <div className="space-y-4">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 font-[700] text-[16px]">
        <HamburgerMenu />
        <h2 className='text-[#B0B0B0]'>Recent Activities</h2>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-[#6F01D0] text-[12.27px] font-[600]">See all</button>
        <MenuDot />
      </div>
    </div>

     {/* Mentor Cards */}
     <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
     
      {RecentActivitiesData.map((item, index) => (
        <ActivitiesCard key={index} {...item} />
      ))}
    </div>

   


 
    
  </div>
  )
}

export default RecentActivitiesSection;
