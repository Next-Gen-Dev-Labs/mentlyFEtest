import Image from "next/image";
import { MdOutlineChevronLeft } from 'react-icons/md';

export default function Topbar() {
    return (
        <>
            <div className=' bg-light-grey py-2 flex justify-end items-center lg:gap-12 lg:pr-12 sticky top-0'>
                <Image src="/notifications.svg" alt="notifications" width={24} height={24} className='' />
                
                <div className='flex gap-6'>
                    <div className='flex gap-2 items-center'>
                        <Image src="/user.svg" alt="profile picture" height={40} width={40} 
                            className="bg-light-purple p-2 rounded-full" 
                        />
                        <div className='text-grey2'>
                            <p className='text-md font-bold'>Techrity  Foun...</p>
                            <p className='text-sm font-light'>Member</p>
                        </div>
                        <MdOutlineChevronLeft className='text-gray-300 text-lg -rotate-90 p-2 rounded-md bg-purple' />
                    </div>
                </div>
            </div>
        </>
    )
}