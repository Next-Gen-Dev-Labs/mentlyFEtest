import React from 'react'

export default function Topbar() {
  return (
    <header className="flex justify-center flex-col sm:flex-col md:flex-row gap-x-52 gap-y-5 items-center px-6 py-4 bg-purple-600 border-b">
      <h1 className="text-2xl font-semibold  text-white ">
        Welcome Aboard, Blessing 👋
      </h1>
      <p className='text-white opacity-70  '>Were thrilled to have you join Techrity Team!   </p>
      <div className="flex items-center gap-4">
        <button className=" bg-white text-gray-700 px-4 py-2 rounded text-sm hover:bg-purple-700 hover:text-white">
           Update Profile
        </button>
       
      </div>
    </header>
  )
}
