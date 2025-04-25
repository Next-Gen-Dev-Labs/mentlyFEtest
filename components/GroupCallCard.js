import Image from 'next/image';

export default function GroupCallCard() {
  return (
    <div className="flex  flex-col sm:flex-col md:flex-col lg:flex-row gap-y-2  gap-6 overflow-x-auto">
      {/* Call Card */}
      <div className="min-w-[160px] bg-gray-100 rounded-lg p-3 flex flex-col ">
          <div className=' p-3'>
            <Image
            src="/Rectangle.png"
            alt="Group Call Banner"
            width={300} 
            height={200} 
           />
           </div>
          <div >
             <span className=" mt-2 text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Ongoing</span>
          </div>
          <h3 className='text-lg w opacity-75'>Weekly Meeting - Product Demo Review with Testers</h3>
          <div className='border-b-1 opacity-35 py-1'></div>
          <div className='flex justify-between py-1'>
             <img src='/calendar.png'/>
              <p className='text-xs '> Mon. Jul 30, 2024</p> <span className='border-r-2 opacity-20'></span>
             <p className='text-xs'>9:00 - 11:00AM</p>
          </div>
          <div className='flex justify-between py-1'>
             <main className='text-xs flex justify-center items-center '>
              <Image
                    src="/Ellipse 13.png"
                    alt=""
                    width={90} // Example width
                    height={0} // Example height
                    className=''
                  />
                  <div className='ml-[-15px]'>
                    <p className='opacity-40'>Study Group</p>
                    <p>UX Strategy  Study group</p>
                  </div>
              </main> 
             <main className='text-xs'>
                <p className='opacity-45 mb-[-15px]'>Mentors</p>
                <Image
                  src="/Ellipse 13.png"
                  alt=""
                  width={90} // Example width
                  height={0} // Example height
                  className='rounded-4xl'
                />
             </main>
          </div>
          <div className='flex justify-between py-0'>
            <p className=' text-purple-600  hover:text-white hover:bg-purple-600 border text-sm rounded-xl text-center p-2'>View Participants</p>
            <p className='bg-purple-800  hover:text-purple-600 hover:bg-white rounded-xl text-sm text-white p-2'>Join Now</p>
          </div>

      </div>

         {/* More cards */}

      <div className="min-w-[160px] bg-gray-100 rounded-lg p-3 flex flex-col ">
          <div className=' p-3'>
            <Image
            src="/Rectangle 1.png"
            alt="Group Call Banner"
            width={300} // Example width
            height={200} // Example height
           />
           </div>
          <div >
             <span className=" mt-2 text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">Upcoming</span>
          </div>
          <h3 className='text-lg  opacity-75'>Weekly Meeting - Product Demo Review with Testers</h3>
          <div className='border-b-1 opacity-35 py-1'></div>
          <div className='flex justify-between py-1'>
             <img src='/calendar.png'/>
             <p className='text-xs '>Mon. Jul 30, 2024</p> <span className='border-r-2 opacity-20'></span>
             <p className='text-xs'>9:00 - 11:00AM</p>
          </div>
          <div className='flex justify-between py-1'>
             <main className='text-xs flex justify-center items-center'>
              <Image
                    src="/Ellipse 13.png"
                    alt=""
                    width={90}    
                    height={0} 
                    className=''
                  />
                  <div className='ml-[-15px]'>
                    <p className='opacity-40'>Study Group</p>
                    <p>UX Strategy  Study group</p>
                  </div>
              </main> 
             <main className='text-xs'>
                <p className='opacity-45 mb-[-15px]'>Mentors</p>
                <Image
                  src="/Ellipse 13.png"
                  alt=""
                  width={90} // Example width
                  height={0} // Example height
                  className='rounded-4xl'
                />
             </main>
          </div>
          <div className='flex justify-between py-0'>
            <p className=' text-purple-600  hover:text-white hover:bg-purple-600 border text-sm rounded-xl text-center p-2'>View Participants</p>
            
            <p className='bg-purple-200  hover:text-purple-600 hover:bg-white rounded-xl text-sm text-white p-2'>Join Now</p>
          </div>

      </div>
            {/* */}

      <div className="min-w-[160px] bg-gray-100 rounded-lg p-3 flex flex-col ">
          <div className=' p-3'>
            <Image
            src="/Rectangle 2.png"
            alt="Group Call Banner"
            width={300} // Example width
            height={200} // Example height
           />  
           </div>
          <div >
             <span className=" mt-2 text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Ongoing</span>
          </div>
          <h3 className='text-lg  opacity-75'>Weekly Meeting - Product Demo Review with Testers</h3>
          <div className='border-b-1 opacity-35 py-1'></div>
          <div className='flex justify-between py-1'>
             <img src='/calendar.png'/>
             <p className='text-xs '>Mon. Jul 30, 2024</p> <span className='border-r-2 opacity-20'></span>
             <p className='text-xs'>9:00 - 11:00AM</p>
          </div>
          <div className='flex justify-between py-1'>
             <main className='text-xs flex justify-center items-center '>
              <Image
                    src="/Ellipse 13.png"
                    alt=""
                    width={90} // Example width
                    height={0} // Example height
                    className=''
                  />
                  <div className='ml-[-15px]'>
                    <p className='opacity-40'>Study Group</p>
                    <p>UX Strategy  Study group</p>
                  </div>
              </main> 
             <main className='text-xs'>
                <p className='opacity-45 mb-[-15px]'>Mentors</p>
                <Image
                  src="/Ellipse 13.png"
                  alt=""
                  width={90} // Example width
                  height={0} // Example height
                  className='rounded-4xl'
                />
             </main>
          </div>
          <div className='flex justify-between py-0'>
            <p className=' text-purple-600  hover:text-white hover:bg-purple-600 border text-sm rounded-xl text-center p-2'>View Participants</p>
            <p className='bg-purple-800  hover:text-purple-600 hover:bg-white rounded-xl text-sm text-white p-2'>Join Now</p>
          </div>

      </div>

     

     {/* Add more based on the figma design */}
  </div>
  )
}
