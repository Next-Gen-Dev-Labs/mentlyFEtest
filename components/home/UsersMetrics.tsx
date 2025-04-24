import React from 'react'
import DonutChart from './UserChart'

const UsersMetrics = () => {
  return (
    <div className='bg-[#E7DDFF4D] border rounded-xl border-[#E1E7EC] mt-5 '>
      <div className=" flex w-full justify-between px-6 py-4 border border-b border-[#E1E7EC]">
        <p className='text-[#595564] font-semibold text-lg font-chivo capitalize'>users</p>
        <select className='bg-transparent border px-4 py-[6px] rounded-md border-[#E1E7EC]'>
          <option className='px-2 text-[#595564] text-sm '>All</option>
        </select>
      </div>
      <div className="flex items-center flex-col lg:flex-row  w-full  gap-6 px-3 ">
         <DonutChart/>
         <div className="w-full">
            <div className="flex items-center justify-between w-full pr-2">
                <p className='text-sm  items-center flex font-chivo text-[#595564] '> <span className='bg-[#62B2FD] mr-2 block rounded-full h-2 w-2'></span>Students</p>
                <p className='text-sm text-[#595564] font-bold font-chivo'>200</p>
            </div>
            <div className="flex items-center justify-between w-full pr-2 pt-3">
                <p className='text-sm  items-center flex font-chivo text-[#595564] '> <span className='bg-[#9BDFC4] mr-2 block rounded-full h-2 w-2'></span>Mentors</p>
                <p className='text-sm text-[#595564] font-bold font-chivo'>8</p>
            </div>
            <div className="flex items-center justify-between w-full pr-2 pt-3">
                <p className='text-sm  items-center flex font-chivo text-[#595564] '> <span className='bg-[#F99BAB] mr-2 block rounded-full h-2 w-2'></span>Programs</p>
                <p className='text-sm text-[#595564] font-bold font-chivo'>22</p>
            </div>
            <div className="flex items-center justify-between w-full pr-2 pt-3">
                <p className='text-sm  items-center flex font-chivo text-[#595564] '> <span className='bg-[#FFB44F] mr-2 block rounded-full h-2 w-2'></span>Others</p>
                <p className='text-sm text-[#595564] font-bold font-chivo'>10</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default UsersMetrics
