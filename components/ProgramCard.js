import Image from 'next/image';

export default function ProgramCard() {
  return (
    <div className='py-8 flex flex-col gap-3'>
        <div className='bg-white shadow-2xl p-7 rounded'>
            <div className='bg-[url("/Programbanner.png")]   bg-cover  bg-center rounded-xl p-3'>
                <h1 className='font-bold  text-2xl text-white'>
                    Fundamentals of User interface & Experience 
                </h1>

                <span className='text-sm w-19 rounded-2xl px-2 font-bold text-blue-700 bg-blue-200'>Bootcamp</span>
            </div>
            <p className='text-sm pt-4   pb-6'>
                This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
            </p>

            <div className='flex justify-between  flex-col sm:flex-col md:flex-row gap-y-2 '>
                   <div className='flex space-x-1'> 
                   <Image
                          src="/man-1.png" //image used in the design seem too small
                          alt=""
                          width={90} // Example width
                          height={0} // Example height
                          className="w-10 h-10 rounded-full" 
                        />
                      <p className=' text-sm opacity-95'>Mentors</p>
                    </div> 
                   <div className='flex space-x-2'> 
                      <p className=' text-purple-600 hover:text-white hover:bg-purple-600 border text-sm rounded text-center p-2'>View Details</p>
                      <p className='bg-purple-800  hover:text-purple-600 hover:bg-white rounded text-sm text-white p-2'>Analysis </p>
                    </div> 
                     
            </div>
        </div>
                {/*      */}
        <div className='bg-white shadow-2xl p-7 rounded'>
            <div className='bg-[url("/Rectangle.png")]   bg-cover  bg-center rounded-xl p-3'>
                <h1 className='font-bold text-2xl text-white'>
                  Colour Hack Practical Group Call
                </h1>
                  
                <span className="mt-2 text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Group Call</span>

            </div>
            <p className='text-sm pt-4  pb-6'>
                This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
            </p>

            <div className='flex justify-between   flex-col sm:flex-col md:flex-row gap-y-2 '>
                   <div className='flex space-x-1'> 
                   <Image
                          src="/man-1.png" //image used in the design seem too small
                          alt=""
                          width={90} // Example width
                          height={0} // Example height
                          className="w-10 h-10 rounded-full" 
                        />
                      <p className='text-sm opacity-95'>Hosted By: Faith Okolo </p>
                    </div> 
                   <div className='flex space-x-1'> 
                      <p className=' text-purple-600 hover:text-white hover:bg-purple-600 border text-sm rounded text-center p-2'>View Details</p>
                      <p className='bg-purple-800  hover:text-purple-600 hover:bg-white rounded text-sm text-white p-2'>Analysis</p>
                    </div> 
                     
            </div>
        </div>
        
        <div className='bg-white shadow-2xl p-7 rounded'>
            <div className='bg-[url("/Rectangle.png")]   bg-cover  bg-center rounded-xl p-3'>
                <h1 className='font-bold text-2xl text-white'>
                        Colour Hack Practical Group Call     
               </h1>

               <span className="mt-2 text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Group Call</span>
               </div>
            <p className='text-sm pt-4  pb-6'>
                This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
            </p>

            <div className='flex justify-between   flex-col sm:flex-col md:flex-row gap-y-2 '>
                   <div className='flex '> 
                       <Image
                          src="/man-1.png" //image used in the design seem too small
                          alt=""
                          width={90} // Example width
                          height={0} // Example height
                          className="w-10 h-10 rounded-full" 
                        />
                      <p className=' text-sm opacity-95'>Hosted By: Self</p>
                    </div> 
                   <div className='flex space-x-1 '> 
                      <p className=' text-purple-600 hover:text-white hover:bg-purple-600 border     text-sm rounded text-center p-2'>View Details</p>
                      <p className='bg-purple-800 hover:text-purple-600 hover:bg-white rounded  flex justify-center text-center   text-sm text-white p-2'>Assign Mentor</p>
                    </div> 
                     
            </div>
           

            


        </div>

        {/*  */}
    </div>
  )
}
