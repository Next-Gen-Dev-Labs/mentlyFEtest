import React from 'react'
import ProgramsBox from './dashboxBoxes/ProgramsBox'
import GroupCallsBox from './dashboxBoxes/GroupCallsBox'
import UserBox from './dashboxBoxes/UsersBox'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[1fr] xl:grid-cols-[329px_1fr] gap-[10px] mt-2 ms-[15px] md:ms-[62px] me-[15px] md:me-[37px] mb-[23px] ' >
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
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-[10px]">
          {/* box Mentors */}
          <div className=" bg-white rounded-[12px] py-2 px-4 h-[605px]">Mentors</div>
        {/* box Applications */}
          <div className=" bg-white rounded-[12px] py-2 px-4 h-[605px]">Applications</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard