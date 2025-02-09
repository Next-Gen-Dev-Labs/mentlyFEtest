'use client'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import EditCard from './EditCard'
import { useState } from 'react'

const LeftCard = () => {
    const [settings, setSettings] = useState(false)

    const toggleSettings = () =>{
        setSettings((prev)=>!prev)
    }


  return (
    <section className='bg-[#FDFDFD] flex flex-col px-4 laptop:px-10 min-h-screen shadow-[#00000010]'>
        <div className='flex justify-between items-center py-6'>
            <Link href="/" className='flex items-center justify-center text-[#F0C074] hover:text-opacity-80 gap-3 font-semibold'>
                <ChevronLeft size={16} />
                <p className='text-base'>Back to Home</p>
            </Link>

            <div className='flex items-center justify-center gap-5'>
                <div className='relative'>
                    <Image 
                        src={'/icons/setting.png'}
                        alt="settings icon"
                        width={100}
                        height={100}
                        className="object-cover size-6"
                        onClick={toggleSettings}
                    />
                    {settings && (
                        <div className="z-10 absolute top-7 -right-1/2 flex flex-col justify-start items-start bg-[#FAFAFA] shadow shadow-[#00000040] py-2 px-1 rounded-sm">
                            <button className="w-full text-left text-[#777795] hover:bg-[#777795] hover:bg-opacity-10  hover:rounded-msm py-1 px-6 text-sm">Delete</button>
                            <button className="w-full text-left text-[#777795] hover:bg-[#777795] hover:bg-opacity-10  hover:rounded-msm py-1 px-6 text-sm">Clear</button>
                        </div>
                    )}
                </div>
                <Image 
                    src={'/icons/copy.png'}
                    alt="copy icon"
                    width={100}
                    height={100}
                    className="object-cover size-6"
                />
                <button className='flex gap-2 items-center justify-center py-1 px-4 rounded-2xl bg-[#1F0954] hover:bg-opacity-90'>
                    <Image 
                        src={'/icons/share.png'}
                        alt="share icon"
                        width={100}
                        height={100}
                        className="object-contain size-4"
                    />
                    <p className='text-white'>Share</p>
                </button>
            </div>
        </div>

        <div className='flex flex-col'>
            <h2 className='text-[#06152B] text-2xl laptop:text-3xl font-bold'>Program Information</h2>
            <p className='text-[#828282] text-sm'>Describe Section Title</p>
        </div>

        <EditCard />
    </section>
  )
}

export default LeftCard