import React from 'react'
import { Icons } from '../Icons'

const HelpBox = () => {
  return (
    <div className='bg-[#4c2173] flex flex-col  rounded-lg py-[10px] px-3'>
      <Icons.userTag/>
      <p className='text-xs font-chivo font-bold text-[#fff] pt-3'>Got some questions, enquiries or need help?</p>
      <p className='text-[10px] underline font-chivo text-[#F0C074] pt-4'>Visit Mently Help Desk Here</p>
    </div>
  )
}

export default HelpBox
