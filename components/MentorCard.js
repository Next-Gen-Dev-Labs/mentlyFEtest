import Image from 'next/image';

export default function MentorCard() {
  return (
  <ul className="space-y-1">
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Image
                src="/man-1.png" //image used in the design seem too small
                alt=""
                width={90} // Example width
                height={0} // Example height
                className="w-10 h-10 rounded-full" 
              />
            <div>
              <p className="text-sm font-bold text-gray-600">Maxwell Smith</p>
              <p className="text-xs text-gray-500">Product Designer</p>
            </div>
          </div>
          
          <button className=" mt-2 text-xs text-white  bg-purple-700 hover:text-purple-600 hover:bg-white px-2 py-1 rounded-full">Message</button>
        </li>
        <div className='border-b-1 opacity-5 py-1'></div>

              {/*  */}
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Image
                src="/male 57.png" //image used in the design seem too small
                alt=""
                width={90} // Example width
                height={0} // Example height
                className="w-10 h-10 rounded-full" 
              />
            <div>
              <p className="text-sm font-bold text-gray-600">Adeati Samuel</p>
              <p className="text-xs text-gray-500">Product Designer</p>
            </div>
          </div>
          
          <button className=" mt-2 text-xs text-white  bg-purple-700 hover:text-purple-600 hover:bg-white px-2 py-1 rounded-full">Message</button>
        </li>
        <div className='border-b-1 opacity-5 py-1'></div>

          <div className=" mt-2  text-purple-800 hover:text-purple-600 hover:bg-white font-semibold flex justify-center items-center bg-purple-200 px-8 py-4 rounded-full">See all</div>





  </ul>
  )
}
