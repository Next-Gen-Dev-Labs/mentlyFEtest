import React from 'react';
import Image from 'next/image';
import { Dot } from 'lucide-react';

type Props = {
   img: string;
   title: string;
   content: string;
   description: string;
   contactInfo: {
      contactImg?: string;
      contactImg1?: string;
      contactImg2?: string;
      contactTypo?: string;
   };
};

function ProgramsCard({
   img,
   title,
   content,
   description,
   contactInfo,
}: Props) {
   return (
      <div>
         <div className="relative ">
            <div className="relative w-[265px] h-[69px]">
               <Image src={img} alt={img} fill className="object-contain" />
            </div>
            <h3 className="absolute text-[15px] z-10 top-0 left-2 font-bold text-white max-w-[224px]">
               {' '}
               {title}{' '}
            </h3>
            <button className="absolute z-10 left-2 bottom-1 text-[8px] bg-[#D4E0F3] text-[#0077FF] h-[17px] w-[80px] rounded-full flex  items-center">
               <Dot className="text-[#0077FF] " /> {content}
            </button>
         </div>
         <p className="text-[10px] text-black max-w-[265px] "> {description}</p>
         <div className="flex justify-between ">
            <div className="border border-amber-500 flex max-w-[75px]  items-center  ">
               <div className="flex">
                  {contactInfo?.contactImg && (
                     <div className="relative w-[50px] h-[25px]">
                        <Image
                           src={contactInfo?.contactImg}
                           alt={img}
                           fill
                           className="object-contain"
                        />
                     </div>
                  )}
                  {contactInfo?.contactImg1 && (
                     <div className="relative w-[50px] h-[50px]">
                        <Image
                           src={contactInfo?.contactImg1}
                           alt={img}
                           fill
                           className="object-contain"
                        />
                     </div>
                  )}
                  {contactInfo?.contactImg2 && (
                     <div className="relative w-[70px] h-[20px]">
                        <Image
                           src={contactInfo?.contactImg2}
                           alt={img}
                           fill
                           className="object-contain"
                        />
                     </div>
                  )}
               </div>
               <p className="text-black text-[8px] m-2">
                  {contactInfo?.contactTypo}
               </p>
            </div>
            <div className="flex items-center gap-2">
               <button className="p-4 bg-[#340260] w-[65px] h-[22px] rounded-[5px] text-[8px] flex items-center justify-center">
                  View Details
               </button>
               <button className="p-4 text-[#340260] border border-[#340260] w-[65px] h-[22px] rounded-[5px] text-[8px] flex items-center justify-center ">
                  Analytics
               </button>
            </div>
         </div>
      </div>
   );
}

export default ProgramsCard;
