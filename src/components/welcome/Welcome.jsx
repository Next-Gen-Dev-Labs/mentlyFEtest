import React from 'react'
import {welcome} from "@/data/dashboard.json"

const Welcome = () => {
  return (
    <div className='min-h-[51px] bg-purple-700 flexBetween flex-col md:flex-row gap-3 lg:gap-[20px] place-items-start md:place-items-center ms-0 me-0  lg:ms-[63px] lg:me-[37px] px-[10px] md:px-[28px] mt-[19px] rounded-[4px] py-4 md:py-1 ' >
        <span className="flexBetween flex-col lg:flex-row gap-x-[15px] gap-y-3  text-nowrap">
            <span className="font-Chivo font-semibold text-[18px] md:text-[26.21px] text-white   "> {welcome.greet}{welcome.user.firstName} {welcome.emoji} </span>
        <span className="font-Chivo font-semibold text-[20px] text-gray-500  text-wrap lg:text-nowrap w "> {welcome.comment} </span>
        </span>
        <button className="w-[160px] h-[39px] rounded-[8px] flexCenter font-Chivo font-bold text-[16px] text-purple-900 bg-white text-nowrap ">
            {welcome.button}
        </button>

    </div>
  )
}

export default Welcome