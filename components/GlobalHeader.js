import React from 'react'

export default function GlobalHeader() {
  return (
    <div className="flex justify-end  px-6 py-2 bg-white  text-sm text-gray-700">
        {/* <div className="flex gap-6 items-center">
            <a href="#" className="font-medium text-purple-600 hover:underline">
                Techrity Forum
            </a>
        </div> */}

        <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-purple-600">
                <img src='/notifications.png' className='rounded-3xl text-sm p-1 hover:bg-purple-300'/>

            </button>
            <div className='flex'>
                <img src='/logo 448.png' className='bg-purple-400 rounded-3xl text-sm p-1'/>
                <div className='flex flex-col  items-start '>
                    <p className="  me-6 rounded hover:text-purple-800  ">
                        Techrity  Foun...
                    </p>
                    <p className='text-sm opacity-50 hover:opacity-100'>Member</p>

                </div>
                

            </div>
            
            <div className="w-6 h-6 rounded bg-purple-800" />
            </div>
    </div>
  )
}
