import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='bg-[#6F01D0] rounded-md flex justify-between flex-wrap items-center px-7 py-2 mt-4'>
      <p className='text-[#FFFFFF] font-chivo font-semibold text-2xl'>Welcome Aboard, Blessing 👋</p>
      <p className='text-[#BDBDBD] font-semibold font-chivo text-lg '>We’re thrilled to have you join Techrity Team!</p>
      <button className='bg-[#fff] text-[#1F0954] font-chivo font-bold rounded-md px-4 py-2'>Update Profile</button>
    </div>
  )
}

export default WelcomeBanner
