import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './navlinks';
import { MdOutlineDashboard, MdOutlineSupportAgent, MdToggleOn } from 'react-icons/md';


export default function Leftbar() {
    return (
         <div className="w-full flex md:flex-col gap-2 bg-purple py-8 px-2 md:w-52 lg:w-60 h-full sticky top-0 md:relative md:top-0">
            <div className='flex gap-4 justify-between pl-6 items-center lg:mb-12'>
                <Image src="/logo.svg" alt="logo" height={27} width={116} 
                    className='w-3/4'
                />
                <MdOutlineDashboard className="w-1/4 text-grey text-25px" />
            </div>

            <NavLinks />

            <div className='bg-[#ffffff22] rounded-lg flex flex-col gap-4 p-4 lg:mt-12'>
                <MdOutlineSupportAgent className="text-white text-25px" />
                <p className="text-sm font-bold">Got some questions, enquiries or need help?</p>
                <Link href="" className='text-yellow text-sm underline hover:underline-none'>Visit Mently Help Desk Here</Link>
            </div>

            <div className='flex items-center justify-between px-4 mt-6'>
                <p className="font-bold text-sm">Switch to Classic Mode</p>
                <MdToggleOn className='text-25px' />
            </div>
        </div>
    )
}