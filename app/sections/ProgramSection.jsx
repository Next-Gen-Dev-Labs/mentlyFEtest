import React from 'react'
import { HamburgerMenu, MenuDot } from '../assets/icons/sideBarIcons'
import ProgramCard from '../components/ProgramCrad';
import ProgramBanner from "../assets/icons/Program-banner.png"
import programBanner2 from "../assets/icons/programbanner.png"
import profileTwo from "../assets/icons/profile2.png"
// import avatar from "../assets/icons/profile4.png"
import avatar from "../assets/icons/programProfile.jpg"


const programData = [
  {
    title: 'Fundamentals of User interface & Experience',
    image: ProgramBanner,
    tag: 'Bootcamp',
    host: 'Mentors',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: avatar,
    buttons: [
      { label: 'View Details', variant: 'secondary' },
      { label: 'Analysis', variant: 'primary' },
    ],
  },
  {
    title: 'Colour Hack Practical Group Call',
    image: programBanner2,
    tag: 'Group Call',
    host: 'Hosted By: Faith Okolo',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: avatar,
    buttons: [
      { label: 'View Details', variant: 'secondary' },
      { label: 'Analysis', variant: 'primary' },
    ],
  },
  {
    title: 'Colour Hack Practical Group Call',
    image: programBanner2,
    tag: 'Group Call',
    host: 'Hosted By: Self',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: avatar,
    buttons: [
      { label: 'View Details', variant: 'secondary' },
      { label: 'Assign Mentor', variant: 'primary' },
    ],
  },
];


const ProgramSection = () => {
  return (
    <div className="space-y-4">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 font-[700] text-[16px]">
        <HamburgerMenu />
        <h2 className='text-[#B0B0B0]'>Programs</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#6F01D0] text-[12.27px] font-[600]">See all</button>
        <MenuDot />
      </div>
    </div>

    {/* filter text with and dropdown container default option active */}
<div className="w-full flex justify-end">
  <div className="flex items-center gap-2">
    <p className="text-[#918C9C] text-[11.26px] font-[500]">Filter</p>
    <div className="flex items-center gap-1 border border-[#E1E7EC] p-1 rounded-md">
      <select className="text-[#595564] text-[11.26px] font-[600] outline-none">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  </div>
</div>

    {/* Cards */}
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
      {programData.map((item, index) => (
        <ProgramCard key={index} {...item} />
      ))}
    </div>
  </div>
  )
}

export default ProgramSection
