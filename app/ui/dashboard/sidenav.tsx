import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './navlinks';
import { MdOutlineDashboard, MdOutlineSupportAgent, MdToggleOn } from 'react-icons/md';


export default function Leftbar() {
    return (
        <div className='md:w-52 lg:w-1/6 h-screen overflow-y-scroll'>
            <div className=" w-full flex flex-col bg-purple lg:py-8 px-2 md:min-h-screen justify-around">
                <div className='flex gap-4 justify-between pl-[15%] items-center lg:mb-8'>
                    <Image src="/logo.svg" alt="logo" height={27} width={116} 
                        className='w-1/2'
                    />
                    <MdOutlineDashboard className="w-1/5 text-grey text-25px" />
                </div>

                <NavLinks />

                <div className='bg-[#ffffff22] rounded-lg flex flex-col gap-4 p-4 lg:mt-8'>
                    <MdOutlineSupportAgent className="text-white text-25px" />
                    <p className="text-base font-bold">Got some questions, enquiries or need help?</p>
                    <Link href="" className='text-yellow text-md underline hover:underline-none'>Visit Mently Help Desk Here</Link>
                </div>

                <div className='flex items-center justify-between px-4 mt-6'>
                    <p className="font-bold text-base">Switch to Classic Mode</p>
                    <MdToggleOn className='text-25px' />
                </div>
            </div>
        </div>
    )
}