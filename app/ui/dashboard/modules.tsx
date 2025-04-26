'use client';
import Link from "next/link";
import Image from "next/image";
import { FaCircle } from 'react-icons/fa';
import { Cog6ToothIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function Title({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4">
            <Image src="/ham.svg" alt="" height={16} width={16} className="pt-1" />
            <p className="text-lg text-[#B0B0B0] font-semibold">{ text }</p>
        </div>
    )
}

function SeeAll() {
    return (
        <Link href=""  className="flex items-center gap-0 justify-end gap-4">
            <p className="text-l-purple font-semibold text-md ">See all</p>
            <EllipsisVerticalIcon className="text-purple" height={25} />
        </Link>
    )
}

function Program ({ ftImg, title, tagColor, tag, text,  user1, u1c, u2c, u3c, user2, user3,facilitators } : 
    { user1: string, user2: string, user3: string, u1c:string, u2c: string, u3c:string, ftImg:string, title: string, tagColor: string, tag: string, text: string, facilitators: string  }) {

    return (
        <div className="p-2 rounded-lg shadow-lg">
            <div className='rounded-xl p-4 flex bg-cover bg-center program' style={{backgroundImage: `linear-gradient(180deg, #00000055), url(${ftImg})`}}>
                <div className="w-5/6 flex flex-col items-start">
                    <h3 className="font-bold text-white text-lg ">{ title }</h3>
                    <div className={'flex py-0.5 px-4 text-sm rounded-xl mt-3 items-center gap-2 font-semibold ' + tagColor}>
                        <FaCircle />
                        <p className='text-sm'>{tag}</p>
                    </div>
                </div>

                <Link className="w-1/6 justify-end flex showhover" href="">
                    <Cog6ToothIcon height={20} className='text-white' />
                </Link>
            </div>

            <p className='text-sm text-grey2 my-3'> {text} </p>

            <div className='flex items-center'>
                <div className='w-2/5 flex items-center'>
                    <div className="flex pl-2 items-center">
                        <Image src={user1} alt="" width={20} height={20} className={u1c + " rounded-full -ml-2 "} />
                        <Image src={user2} alt="" width={20} height={20} className={u2c + " rounded-full -ml-2 "} />
                        <Image src={user3} alt="" width={20} height={20} className={u3c + " rounded-full -ml-2 "} />
                    </div>

                    <p className='text-sm text-grey3'>{facilitators}</p>
                </div>

                <div className='w-3/5 flex justify-end gap-1.5'>
                    <button className="w-1/2 px-1 py-2 border border-purple rounded-lg text-sm text-purple hover:bg-purple hover:text-white">View Details</button>
                    <button className="w-1/2 p- border border-purple rounded-lg text-sm hover:text-purple hover:bg-transparent bg-purple text-white">Analysis</button>
                </div>
            </div>
        </div>
)
}

export { Title, SeeAll, Program }