import Image from 'next/image';
import React from 'react';
import ClientInput from '../ClientInput';
import NoticeBanner from '../NoticeBanner';
import AddSection from '../AddSection';
import ProgramInfo from './ProgramInfo';
import { MyEditor } from '../my-editor/MyEditor';

const ProgramInformation = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div>
        <h3 className="md:text-[32px] text-[24px] text-[#06152B] font-[700] mb-2">
          Program Information
        </h3>
        <p className="text-mentlyGray2 text-[14px]">Describe Section Title</p>
      </div>

      <div>
        <div className="w-full h-[50px] md:h-[64px] relative mb-4">
          <ClientInput />
          <div className="absolute top-[27%] left-[1%] md:left-[3%]">
            <Image
              src="/images/textholder.png"
              alt="textholder"
              width={60}
              height={32}
              className="w-[40px] md:w-[60px]"
            />
          </div>
        </div>
        <NoticeBanner message="Provide your prefered title for this section i.e What’s in this Program for you?" />
      </div>

      <div>
        {/* // TODO: Implement rich text editor */}
        {/* <input
          type="text"
          className="w-full h-[168px] border border-mentlyBlue mb-4 rounded-[5px] outline-none"
          placeholder="Input Text"
        /> */}
        <div className="mb-[2rem]">
          <MyEditor />
        </div>
        <NoticeBanner
          message="Provide a clear and concise description/information 
        of your program. This can include objectives, goals, necessary
         resources, or any specific instructions.."
        />
      </div>

      <div>
        <AddSection />
        <p className="flex items-center gap-2">
          <input type="checkbox" />{' '}
          <span className="text-[14px] font-[400] text-[#333333]">
            Show this section when Published
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <ProgramInfo
          title="Program Information Text 1"
          subtitle="Infomation about program information 1"
        />
        <ProgramInfo
          title="Program Information Text 2"
          subtitle="Infomation about program information 2"
        />
      </div>

      <div className="mt-[4rem] md:h-[51px] w-full flex flex-col md:flex-row items-center gap-[1rem] md:gap-0">
        <p className="md:w-[50%] w-full text-center">
          <span className="text-[#A4A5B8] font-[700] hover:-translate-y-1 transition-transform duration-600 cursor-pointer">
            Go Back
          </span>
        </p>
        <button className="hover:-translate-y-1 transition-transform duration-600 cursor-pointer h-[51px] md:w-[50%] w-full text-center bg-mentlyBlue d:h-full text-white rounded-[8px] font-[700] flex justify-around items-center text-nowrap px-[40px]">
          Save & Proceed
          <span>
            <Image
              src="/icons/triangledown.png"
              alt="traiangledown"
              width={11}
              height={5}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProgramInformation;
