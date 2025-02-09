'use client'
import { ToggleLeft, ToggleRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Sidebar = () => {
    const [isToggleOn, setisToggleOn] = useState(true)

    const toggleButton = () =>{
        setisToggleOn((prev => !prev))
    }

    const pathname = usePathname()


  return (
    <div className="fixed left-0 top-0 h-full w-[100px] tablet:w-[110px] laptop:w-[120px] bg-[#1F0954] flex flex-col items-center py-9 gap-10">
        <div className="flex flex-col gap-5 justify-center items-center">
            <Link href={'/'}>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="object-cover h-8 w-[47px]"
                />
            </Link>
            <Image
                src="/icons/panelright.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="object-cover size-8 hidden laptop:block"
            />
        </div>


        <div className="flex flex-col gap-5 justify-center items-center">
            <Image
                src="/icons/home.png"
                alt="home icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Link href={'/'} className={`link ${pathname === '/' ? 'bg-white rounded-lg py-3 px-6' : ''}`}>
                <Image
                    src="/icons/book.png"
                    alt="book icon"
                    width={1000}
                    height={1000}
                    className="object-cover size-5"
                />
            </Link>
            <Image
                src="/icons/bubble.png"
                alt="bubble icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Image
                src="/icons/clipboard-text.png"
                alt="clipboard icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Image
                src="/icons/empty-wallet.png"
                alt="wallet icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Image
                src="/icons/award.png"
                alt="award icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Image
                src="/icons/diagram.png"
                alt="diagram icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Image
                src="/icons/setting.png"
                alt="setting icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
            <Image
                src="/icons/logout.png"
                alt="logout icon"
                width={1000}
                height={1000}
                className="object-cover size-5"
            />
        </div>

        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col gap-2 laptop:gap-0 items-center justify-between bg-[#FFFFFF1F] mx-5 h-28 py-6 px-1 laptop:px-3 rounded-lg'>
                <Image
                    src="/icons/user-tag.png"
                    alt="user-tag icon"
                    width={1000}
                    height={1000}
                    className="object-cover size-5"
                />
                <Link href={"/"} className="text-[#F0C074] underline font-normal leading-3 text-[10px]">Visit Mently Help Desk Here</Link>
            </div>

            {isToggleOn ? <ToggleRight size={30} color='white' onClick={toggleButton} /> : <ToggleLeft size={30} color='white' onClick={toggleButton} />}
        </div>
  </div>
  )
}

export default Sidebar