import React from 'react'
import { AddToIcon, HamburgerMenu, MenuDot } from '../assets/icons/sideBarIcons'
import ProgramBanner from "../assets/icons/Program-banner.png"
import programBanner2 from "../assets/icons/programbanner.png"
// import profile from "../assets/icons/profile3.png"
import profileTwo from "../assets/icons/profile2.png"
import avatar from "../assets/icons/profile4.png"
import ApplicationCard from '../components/AplicationCard';
import mentorProfile from "../assets/icons/mentor.jpg"
import MentorCard from '../components/MentorCard'
import studentProfile from "../assets/icons/student.png"
import Mentors from '../components/Mentors'


const mentorData = [
  {
    name: 'Adeati Samuel',
    jobTitle:"Product Designer",
    profileImage: studentProfile,
    buttons: "Message"
  },
  {
    name: 'Adeati Samuel',
    jobTitle:"Product Designer",
    profileImage: studentProfile,
    buttons: "Message"
  },

];




const MentotSection = () => {
  return (
    <div className="space-y-4">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 font-[700] text-[16px]">
        <HamburgerMenu />
        <h2 className='text-[#B0B0B0]'>Mentors</h2>
      </div>
      <div className="flex items-center gap-4">
        <AddToIcon/>
        <MenuDot />
      </div>
    </div>

     {/* Mentor Cards */}
     <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
     
      {mentorData.map((item, index) => (
        <Mentors key={index} {...item} />
      ))}
    </div>

    {/* see all button text center */}
    <div className="flex justify-center items-center mt-4 bg-[#DDD6FB] rounded-full">
      <button className="px-4 py-2 text-[14px] font-[700]  text-[#6F01D0]">See all</button>
    </div>

    {/* see all button */}


 
    
  </div>
  )
}

export default MentotSection
