import React from 'react'
import { HamburgerMenu, MenuDot } from '../assets/icons/sideBarIcons'
import ProgramBanner from "../assets/icons/Program-banner.png"
import programBanner2 from "../assets/icons/programbanner.png"
// import profile from "../assets/icons/profile3.png"
import profileTwo from "../assets/icons/profile2.png"
import avatar from "../assets/icons/profile4.png"
import ApplicationCard from '../components/AplicationCard';
import mentorProfile from "../assets/icons/mentor.jpg"
import MentorCard from '../components/MentorCard'
import studentProfile from "../assets/icons/student.png"


const studentData = [
  {
    name: 'Adeati Samuel',
    email:"maxwellsmith@gmail.com",
    profileImage: studentProfile,
    buttons: [
      { label: 'Reject', variant: 'secondary' },
      { label: 'Accept', variant: 'primary' },
    ],
  },
  {
    name: 'Maxwell Smith',
    email:"maxwellsmith@gmail.com",
    profileImage: studentProfile,
    buttons: [
      { label: 'Reject', variant: 'secondary' },
      { label: 'Accept', variant: 'primary' },
    ],
  },
  {
    name: 'Adeati Samuel',
    email:"maxwellsmith@gmail.com",
    profileImage: studentProfile,
    buttons: [
      { label: 'Reject', variant: 'secondary' },
      { label: 'Accept', variant: 'primary' },
    ],
  },
  {
    name: 'Maxwell Smith',
    email:"maxwellsmith@gmail.com",
    profileImage: studentProfile,
    buttons: [
      { label: 'Reject', variant: 'secondary' },
      { label: 'Accept', variant: 'primary' },
    ],
  },
];

const mentorData = [
  {
    name: 'Maxwell Smith',
    email:"maxwellsmith@gmail.com",
    profileImage: mentorProfile,
    buttons: [
      { label: 'Reject', variant: 'secondary' },
      { label: 'Accept', variant: 'primary' },
    ],
  },
 
];


const ApplicationSection = () => {
  return (
    <div className="space-y-4">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 font-[700] text-[16px]">
        <HamburgerMenu />
        <h2 className='text-[#B0B0B0]'>Applications</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#6F01D0] text-[12.27px] font-[600]">See all</button>
        <MenuDot />
      </div>
    </div>

     {/* Mentor Cards */}
     <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
      <h2 className='text-[10px] text-[#7D8DA6]'>Mentors</h2>
      {mentorData.map((item, index) => (
        <MentorCard key={index} {...item} />
      ))}
    </div>

    {/* student Cards */}
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
    <h2 className='text-[10px] text-[#7D8DA6]'>Students</h2>
      {studentData.map((item, index) => (
        <ApplicationCard key={index} {...item} />
      ))}
    </div>
  </div>
  )
}

export default ApplicationSection
