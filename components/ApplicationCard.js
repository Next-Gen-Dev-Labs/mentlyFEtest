import Image from 'next/image';

export default function ApplicationCard() {
  return (
      <section className=" p-4 rounded-xl  w-full">

        <ul className="space-y-8">
          {/* Application Item */}
             <div className='pb-7'>
                    <p className='text-xs opacity-55 my-7'>Mentors</p>
                  <li className="flex justify-between items-center ">
                    <div className="flex items-center gap-3">
                      <input type='checkbox' className="form-checkbox text-blue-600 rounded" />
                      <Image
                              src="/man-1.png" //image used in the design seem too small
                              alt=""
                              width={90} // Example width
                              height={0} // Example height
                              className="w-10 h-10 rounded-full" 
                            />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Maxwell Smith</p>
                          <p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'> 
                              <button className=' text-red-500 bg-orange-100 hover:text-orange-100 hover:bg-red-500 border border-red-200 text-xs rounded text-center p-2'>Reject</button>
                              <button className='bg-purple-800 hover:text-purple-600 hover:bg-white rounded text-xs text-white p-2'>Accept</button>
                      </div> 
                  </li>
                    <div className='space-x-1'>
                      <span className=" mt-2 text-xs text-purple-600  bg-purple-100 px-2 py-1 rounded">Product Designer</span>
                      <span className=" mt-2 text-xs text-green-600  bg-green-100 px-2 py-1 rounded">4years Experience</span>
                      <span className=" mt-2 text-xs text-cyan-600  bg-cyan-100 px-2 py-1 rounded">Lagos, Nigeria</span>
                      <span className=" mt-2 text-xs text-neutral-600  bg-neutral-100 px-2 py-1 rounded">GMT +1</span>

                    </div>
                  <div className='border-b-1 opacity-5 py-1'></div>

             </div>
          {/* Application Item */}
             <div>
                    <p className='text-xs opacity-55 my-7'>Students</p>
                  <li className="flex justify-between items-center ">
                    <div className="flex items-center gap-3">
                      <input type='checkbox' className="form-checkbox text-blue-600 rounded" />
                      <Image
                                        src="/male 57.png"
                                        alt=""
                                        width={90} // Example width
                                        height={0} // Example height
                                        className="w-10 h-10 rounded-full" 
                                      />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Adeati Samuel</p>
                          <p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'> 
                              <button className=' text-red-500 bg-orange-100 hover:text-orange-100 hover:bg-red-500 border border-red-200 text-xs rounded text-center p-2'>Reject</button>
                              <button className='bg-purple-800 hover:text-purple-600 hover:bg-white rounded text-xs text-white p-2'>Accept</button>
                      </div> 
                  </li>

                  <div className='border-b-1 opacity-5 py-1'></div>

             </div>
          {/* Application Item */}
             <div>
                  <li className="flex justify-between items-center ">
                    <div className="flex items-center gap-3">
                      <input type='checkbox' className="form-checkbox text-blue-600 rounded" />
                      <Image
                                        src="/man-1.png"
                                        alt=""
                                        width={90} // Example width
                                        height={0} // Example height
                                        className="w-10 h-10 rounded-full" 
                                      />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Maxwell Smith</p>
                          <p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'> 
                              <button className=' text-red-500 bg-orange-100 hover:text-orange-100 hover:bg-red-500 border border-red-200 text-xs rounded text-center p-2'>Reject</button>
                              <button className='bg-purple-800 hover:text-purple-600 hover:bg-white rounded text-xs text-white p-2'>Accept</button>
                      </div> 
                  </li>

                  <div className='border-b-1 opacity-5 py-1'></div>

             </div>
          {/* Application Item */}
             <div>
                  <li className="flex justify-between items-center ">
                    <div className="flex items-center gap-3">
                      <input type='checkbox' className="form-checkbox text-blue-600 rounded" />
                      <Image
                                        src="/male 57.png"
                                        alt=""
                                        width={90} // Example width
                                        height={0} // Example height
                                        className="w-10 h-10 rounded-full" 
                                      />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Adeati Samuel</p>
                          <p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'> 
                              <button className=' text-red-500 bg-orange-100 hover:text-orange-100 hover:bg-red-500 border border-red-200 text-xs rounded text-center p-2'>Reject</button>
                              <button className='bg-purple-800 hover:text-purple-600 hover:bg-white rounded text-xs text-white p-2'>Accept</button>
                      </div> 
                  </li>


             </div>
          {/* Application Item */}
             <div>
                  <li className="flex justify-between items-center ">
                    <div className="flex items-center gap-3">
                      <input type='checkbox' className="form-checkbox text-blue-600 rounded" />
                      <Image
                                        src="/man-1.png"
                                        alt=""
                                        width={90} // Example width
                                        height={0} // Example height
                                        className="w-10 h-10 rounded-full" 
                                      />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Maxwell Smith</p>
                          <p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'> 
                              <button className=' text-red-500 bg-orange-100 hover:text-orange-100 hover:bg-red-500 border border-red-200 text-xs rounded text-center p-2'>Reject</button>
                              <button className='bg-purple-800 hover:text-purple-600 hover:bg-white rounded text-xs text-white p-2'>Accept</button>
                      </div> 
                  </li>


             </div>

          {/* <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            <Image
                                src="/Ellipse 13.png"
                                alt=""
                                width={90} // Example width
                                height={0} // Example height
                                className="w-10 h-10 rounded-full" 
                              />
              <div>
                <p className="text-sm font-medium">Samuel Ojo</p>
                <p className="text-xs text-gray-500">Apr 20, 2025</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Reviewed</span>
          </li> */}

          {/* Add more items as needed */}
        </ul>
      </section>

  )
}
