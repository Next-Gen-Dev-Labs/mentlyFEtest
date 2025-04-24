import React from 'react';
import Image from 'next/image';

function TopNav() {
   return (
      <div className="w-full h-[82px] bg-white">
         <div className="flex justify-end items-center h-[inherit] max-w-5xl mx-auto p-3 ">
            <div className="flex gap-5 items-center ">
               <div className="relative w-[20px] h-[20px]">
                  <Image
                     src="/notifications.svg"
                     alt="notification svg"
                     width={200}
                     height={100}
                  />
               </div>
               <div className="flex  gap-3 items-center">
                  <div className="] bg-[#8B72FC] p-2 rounded-full ">
                     <div className="bg-white relative w-[15px] h-[15px]">
                        <Image
                           src="/Group 448.svg"
                           alt="group images svg"
                           width={200}
                           height={100}
                        />
                     </div>
                  </div>

                  <div className="flex flex-col ">
                     <h4 className="text-black text-[12px]">Techrity Foun..</h4>
                     <p className="text-black text-[10px]">member</p>
                  </div>
                  <div className="bg-white relative w-[10px] h-[10px]">
                     <Image
                        src="/Frame.png"
                        alt="Frames image svg"
                        width={200}
                        height={100}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TopNav;
