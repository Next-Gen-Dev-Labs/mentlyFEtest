"use client"

const WelcomeBanner = ({ name = "Blessing" }) => {
    return (
      <div className="flex items-center justify-between px-6 py-3 bg-[#6F01D0] text-white">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Welcome Aboard, {name} 👋</h2>
        </div>
  
        <div className="flex items-center">
          <p className="mr-4 text-lg font-semibold text-[#BDBDBD]">We're thrilled to have you join Techrity Team!</p>
          <button className="px-4 py-2 bg-white text-[#1F0954] font-bold rounded-[8px] text-lg hover:bg-gray-100 transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    )
  }
  
  export default WelcomeBanner
  