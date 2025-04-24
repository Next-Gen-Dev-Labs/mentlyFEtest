import React from 'react'

const WelcomeBar = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row  lg:items-center justify-between gap-4 bg-[#6F01D0] rounded-md w-full max-w-[1100px] mx-auto p-4">
  {/* Welcome message */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
    <h1 className="text-[22px] lg:text-[26.21px] font-[600] text-white tracking-[-1]">
      Welcome Aboard, Blessing 👋
    </h1>
    <p className="text-[16px] lg:text-[20px] font-[600] text-[#BDBDBD] tracking-[-1]">
      We’re thrilled to have you join Techrity Team!
    </p>
  </div>

  {/* Button */}
  <div>
    <button className="bg-white text-[#1F0954] text-[16px] font-[700] px-4 py-2 rounded-md">
      Update Profile
    </button>
  </div>
</div>

    
  )
}

export default WelcomeBar