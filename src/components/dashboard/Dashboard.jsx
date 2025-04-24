import React from 'react'
import ProgramsBox from './dashboxBoxes/ProgramsBox'
import GroupCallsBox from './dashboxBoxes/GroupCallsBox'
import UserBox from './dashboxBoxes/UsersBox'
import ApplicationBox from './dashboxBoxes/ApplicationBox'
import MentorsBox from './dashboxBoxes/MentorsBox'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[1fr] xl:grid-cols-[329px_1fr] gap-[10px] mt-2 ms-[15px] md:ms-[22px] me-[15px] md:me-[7px] mb-[23px] ' >
      {/* boxa */}
      <div className=" grid grid-cols-1 gap-[10px] ">
        {/* box Programs */}
        <div className=" bg-white rounded-[12px] py-2 px-4 h-[604px] overflow-y-scroll myScrollBar pb-3 "> <ProgramsBox /> </div>
        {/* box Users */}
        <div className=" bg-white rounded-[12px] py-2 px-4 h-[320px] "> <UserBox /> </div>
      </div>
      {/* boxb */}
      <div className="  grid grid-cols-1 gap-[10px]">
        {/* box Group Calls */}
        <div className=" bg-white rounded-[12px] py-2 px-4 min-h-[320px]   "> <GroupCallsBox /> </div>
        <div className=" grid grid-cols-1 xl:grid-cols-[415px_320px] gap-[10px]">
        {/* box Applications */}
          <div className=" bg-white rounded-[12px] py-2 px-4 h-[605px]"> <ApplicationBox /> </div>
          {/* box Mentors */}
          <div className=" bg-white rounded-[12px] py-2 px-4 h-[605px]"> <MentorsBox /> </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard