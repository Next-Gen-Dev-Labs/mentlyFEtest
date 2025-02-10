import React from 'react';
import Image from 'next/image';
import Details from './Details';
import ProgramCard1 from './ProgramCard1';
import ProgramCard2 from './ProgramCard2';

const ProgramDisplay = () => {
  return (
    <div className="border border-[#D9E1E7] rounded-[4px] w-full max-w-[695px] p-[1rem] flex flex-col gap-[1.5rem] pb-[4rem]">
      <div>
        <h3 className="md:text-[32px] text-[24px] text-[#06152B] font-[700] mb-2">
          Mentorship Program
        </h3>
        <div className="w-full">
          <Image
            src="/images/Banner-Template.png"
            alt="program-banner"
            width={668}
            height={206}
          />
        </div>
      </div>

      <Details />
      <ProgramCard1 />
      <ProgramCard2 />
    </div>
  );
};

export default ProgramDisplay;
