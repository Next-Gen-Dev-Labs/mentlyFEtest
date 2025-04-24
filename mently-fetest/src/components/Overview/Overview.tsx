import React from 'react';
import Image from 'next/image';
import TopNav from '../topnav/TopNav';
import ContainerOne from '../container1/ContainerOne';

function Overview() {
   return (
      <div className="w-full">
         <TopNav />
         <div className="max-w-5xl mx-auto">
            <div className="flex justify-end gap-5 p-3 items-center ">
               <div className="relative w-[15px] h-[15px]">
                  <Image
                     src="/vector.svg"
                     alt={'vector svg'}
                     width={200}
                     height={100}
                  />
               </div>
               <div className="relative w-[15px] h-[15px]">
                  <Image
                     src="/material-symbolsl.png"
                     alt={'vector svg'}
                     width={200}
                     height={100}
                  />
               </div>
               <h3 className="font-bold text-[16px] text-black ">
                  Manage Widgets
               </h3>
            </div>
            <div className="h-[51px] bg-[#6F01D0] m-3 p-3 flex items-center justify-evenly rounded-[5px]">
               <h3 className="text-[26px] font-bold ">
                  Welcome Aboard, Blessing 👋
               </h3>
               <p className="text-[20px] text-[#BDBDBD]">
                  We’re thrilled to have you join Techrity Team!
               </p>
               <button className=" bg-white font-bold text-black h-[39px] w-[160px] rounded-[10px] flex items-center justify-center ">
                  Update Profile
               </button>
            </div>
            <div>
               <ContainerOne />
            </div>
         </div>
      </div>
   );
}

export default Overview;
