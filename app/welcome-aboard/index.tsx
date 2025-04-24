import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeAboard = () => {
  return (
    <div className='min-h-[51px] bg-[#6F01D0] px-3 py-2 flex justify-between md:justify-evenly rounded-[12px]'>
        <div>
            <h2 className=' text-[16px] md:text-[26px] text-white font-semibold'>Welcome Aboard, Blessing 👋</h2>
        </div>
        <div>
            <p className='text-[#BDBDBD] text-sm md:text-[20px]'>We’re thrilled to have you join Techrity Team!</p>
        </div>
        <div>
            <Button className='text-[#1F0954] bg-white hover:text-white cursor-pointer'>Update Profile</Button>
        </div>
    </div>
  )
}

export default WelcomeAboard