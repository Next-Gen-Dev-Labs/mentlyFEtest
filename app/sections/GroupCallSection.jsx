import React from 'react'
import { HamburgerMenu, MenuDot, RightArrow } from '../assets/icons/sideBarIcons'

import ProgramBanner from "../assets/icons/Program-banner.png"
import programBanner2 from "../assets/icons/programbanner.png"
import profile from "../assets/icons/profile3.png"
import profileTwo from "../assets/icons/profile2.png"
import avatar from "../assets/icons/profile4.png"
import GroupCallCard from '../components/GroupCallCard';


const groupCallData = [
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    image: ProgramBanner,
    tag: 'Ongoing',
    host: 'Mentors',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: [avatar],
    buttons: [
      { label: 'View Participants', variant: 'secondary' },
      { label: 'Join', arrow: <RightArrow/>, variant: 'primary' },
    ],
  },
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    image: programBanner2,
    tag: 'Upcoming',
    host: 'Hosted By: Faith Okolo',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: [avatar],
    buttons: [
      { label: 'View Participants', variant: 'secondary' },
      { label: 'Join', arrow: <RightArrow/>, variant: 'primary' },
    ],
  },
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    image: programBanner2,
    tag: 'Ongoing',
    host: 'Hosted By: Self',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: [profileTwo],
    buttons: [
      { label: 'View Participants', variant: 'secondary' },
      { label: 'Join', arrow: <RightArrow/>, variant: 'primary' },
    ],
  },
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    image: programBanner2,
    tag: 'Upcoming',
    host: 'Hosted By: Self',
    description: 'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
    profileImages: [profileTwo],
    buttons: [
      { label: 'View Participants', variant: 'secondary' },
      { label: 'Join', arrow: <RightArrow/>, variant: 'primary' },
    ],
  },
  
];


const GroupCallSection = () => {
  return (
    <div className="space-y-4">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 font-[700] text-[16px]">
        <HamburgerMenu />
        <h2 className='text-[#B0B0B0]'>Group Calls</h2>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-[#6F01D0] text-[12.27px] font-[600]">See all</button>
        <MenuDot />
      </div>
    </div>

 

    {/* Cards */}
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
  {groupCallData.map((item, index) => (
    <GroupCallCard key={index} {...item} />
  ))}
</div>
  </div>
  )
}

export default GroupCallSection
