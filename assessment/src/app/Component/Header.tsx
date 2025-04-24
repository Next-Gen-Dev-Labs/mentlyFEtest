"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Header() {
    const [Sidebar, setIsSidebar] = useState(false)
    return (
        <>
            {/* Header Section */} 
        <div className="flex justify-end">
            <div className="flex justify-end px-6 py-4 gap-6 items-center bg-white1 fixed h-[82px] w-[83%]">
                <Image 
                src={'/notifications.svg'}
                alt="not"
                width={24}
                height={24}
                />
                
                <div className="flex gap-3">
                    <div className="bg-purple1 rounded-full py-2 px-2 w-[44.33px] h-[44px]">
                    <Image 
                    src={'/Logo.svg'}
                    alt="not"
                    width={32}
                    height={26.4}
                    />
                    </div>
                    <div>
                        <p>Techrity Foun...</p>
                        <p>Member</p>
                    </div>
                </div>

                <div className="w-[19px] h-[18px] bg-purple1 rounded-md">

                </div>
            </div>
        </div>
        </>
    )
}

export default Header