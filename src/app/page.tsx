import ChevronLeftIcon from '../../public/svg/ChevronLeftIon';
import IconWithModal from './components/IconWithModal';
import ProgramInformation from './components/ProgramInformation/ProgramInformation';
import ProgramDisplay from './components/ProgramDisplay/ProgramDisplay';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row lg:justify-between lg:items-center xl:items-start">
      <div className="w-full xl:flex-1 xl:max-w-[532px] 2xl:max-w-[700px] h-full flex flex-col px-[1rem] md:px-[30px] py-[23px] gap-[2rem]">
        <div className="h-[2rem] flex justify-between items-center">
          <p className="text-mentlyYellow font-[600] flex items-center gap-4 hover:-translate-x-1 transition-transform duration-600 cursor-pointer">
            <span className="hover:-translate-x-1 transition-transform duration-600 cursor-pointer">
              <ChevronLeftIcon />
            </span>
            Back Home
          </p>
          <div className="flex gap-[1rem] items-center">
            <IconWithModal
              icon="/icons/setting-2.png"
              option1="delete"
              option2="clear"
            />
            <Image
              src="/icons/copy2.png"
              alt="copy"
              className="hover:-translate-y-1 transition-transform duration-600 cursor-pointer"
              width={24}
              height={24}
            />
            <div className="hover:-translate-y-1 transition-transform duration-600 cursor-pointer bg-mentlyBlue text-white flex items-center w-[5.5rem] h-[29px] justify-center gap-[1rem] rounded-[16px]">
              <div className="min-w-[15px]">
                <Image
                  src="/icons/share2.png"
                  alt="share"
                  className="w-full h-auto"
                  width={15}
                  height={15}
                />
              </div>
              <p className="text-[14px] font-[700]">Share</p>
            </div>
          </div>
        </div>
        <ProgramInformation />
      </div>
      <div className="w-full xl:w-[650px] 2xl:flex-1 px-[1rem] md:px-[47px] py-[3rem] lg:py-[116px] flex justify-center items-center relative">
        <p className="absolute top-0 lg:top-[33px] right-[45px] text-[#809FB8] font-[400]">
          13th February 2024, 12:15 PM (Local time).
        </p>
        <ProgramDisplay />
      </div>
    </div>
  );
}
