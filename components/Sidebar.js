import React from 'react'

export default function Sidebar() {
  return (
    <aside className="bg-purple-950 text-white w-[230px] p-4 flex flex-col min-h-screen">
        <div className="text-lg  m-8 flex justify-between">
          <div className='flex'>
            <img src='/logo 448.png' className='bg-purple-400 rounded-3xl text-sm p-1'/>
            <p>Techvity</p>
          </div> 
            <img src='/Vector.png' className=' text-sm '/>
        </div>
      <nav className="  mt-10 text-sm ">
        <div className='flex flex-col justify-center  items-center gap-y-12 opacity-95 pb-16'>
            <div className='flex justify-center space-x-4 bg-white text-black px-5 py-3 rounded'>
                <img src='icon.png'/>
               <a href="#" className="hover:text-purple-300">Dashboard</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='book.png'/>
               <a href="#" className="hover:text-purple-300">Programs</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='bubble.png'/>
               <a href="#" className="hover:text-purple-300">Activities</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='Vector (3).png'/>
               <a href="#" className="hover:text-purple-300">Users</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='forum.png'/>
               <a href="#" className="hover:text-purple-300">Forums</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='wallet.png'/>
               <a href="#" className="hover:text-purple-300">Finances</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='award.png'/>
               <a href="#" className="hover:text-purple-300">Reward</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='diagram.png'/>
               <a href="#" className="hover:text-purple-300">Analytics</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='setting.png'/>
               <a href="#" className="hover:text-purple-300">Settings</a>
            </div>
            <div className='flex justify-center space-x-4 '>
                <img src='logout.png'/>
               <a href="#" className="hover:text-purple-300">Log Out</a>
            </div>
      

        </div>
       
        <div className='bg-purple-900 py-3 mb-16 px-2 rounded-md  space-y-9  text-white'>
            <img src='user-tag.png' alt='icn' />
           <p className='font-semibold'>Got some questions, enquiries or need help?</p>
           <p className='text-yellow-300 underline hover:text-yellow-600'>Visit Mently Help Desk Here</p>
        </div>


        <div className='flex  space-x-2 '>
          <p className='font-semibold'>Switch to classic Mode</p>           
             <img src='Rectangle .png' alt='icn' />

        </div>
      
      </nav>
  </aside>
  )
}
