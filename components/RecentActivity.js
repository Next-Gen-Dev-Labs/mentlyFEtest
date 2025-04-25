import React from 'react'
import Image from 'next/image'


export default function RecentActivity() {
  return (
      
 <ul className="space-y-4">


    <li className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Image
              src="/lady 56.png" //image used in the design seem too small
              alt=""
              width={90} // Example width
              height={0} // Example height
              className="w-10 h-10 rounded-full" 
             />
          <div>
            <p className="text-sm font-bold ">KYC Verification</p>
            <p className="text-xs font-semibold text-gray-500">45 new persons just signed up on Mently.</p>
            <p className="text-xs text-gray-500">25 minutes Ago</p>
          </div>
        </div>
        
      </li>
        <div className='border-b-1 opacity-5 py-1'></div>

        <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                    src="/lady 57.png" //image used in the design seem too small
                    alt=""
                    width={90} // Example width
                    height={0} // Example height
                    className="w-10 h-10 rounded-full" 
                    />
                <div>
                    <p className="text-sm font-bold ">New User Sign Up!</p>
                   <p className="text-xs font-semibold text-gray-500">45 new persons just signed up on Mently.</p>
                   <p className="text-xs text-gray-500">25 minutes Ago</p>                </div>
                </div>
                
        </li>
        <div className='border-b-1 opacity-5 py-1'></div>

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
                    <p className="text-sm font-bold">Withdrawal Request</p>
                    <p className="text-xs font-semibold text-gray-500">Mardian requested a withdrawal.</p>
                    <p className="text-xs text-gray-500">25 minutes Ago</p>
                    
                </div>
                </div>
                
        </li>
        <div className='border-b-1 opacity-5 py-1'></div>

</ul>
  )
}
