import React from 'react';
import Image from 'next/image';
import { ProgramDatas } from '@/data/data';
import ProgramsCard from './ProgramsCard';

function Programs() {
   return (
      <div className="w-[350px] p-3 bg-white rounded-[10px] ">
         <div className="flex gap-[180px] items-center w-[inherit] relative ">
            <div className="flex gap-2 items-center">
               <div className="relative w-[10px] h-[10px]">
                  <Image
                     src={'/menu.png'}
                     alt={'menu image'}
                     width={100}
                     height={100}
                  />
               </div>
               <p className="text-[#B0B0B0] font-bold text-[15px] ">Programs</p>
            </div>
            <div className="flex gap-2 items-center">
               <p className="text-[#6F01D0]">see all</p>
               <div className="relative w-[3px] h-[3px]">
                  <Image
                     src={'/dotted.png'}
                     alt={'dotted menu '}
                     width={100}
                     height={100}
                  />
               </div>
            </div>
         </div>
         <div className="max-w-[300px] mx-auto  ">
            <div className="flex items-center justify-end">
               <p className="text-[10px] text-[#918C9C] ">Filter</p>
               <button className="p-3 text-[10px] text-black flex items-center gap-2 ">
                  Active
                  <div className="relative w-[7px] h-[7px]">
                     <Image
                        src={'/arrow.png'}
                        alt={'arrow menu '}
                        width={100}
                        height={100}
                     />
                  </div>
               </button>
            </div>
         </div>
         {ProgramDatas.map((programes) => (
            <ProgramsCard
               key={programes.title}
               img={programes.img}
               title={programes.title}
               content={programes.content}
               description={programes.description}
               contactInfo={{
                  contactImg: programes.contactInfo?.contactImg,
                  contactTypo: programes.contactInfo?.contactTypo,
               }}
            />
         ))}
      </div>
   );
}

export default Programs;
