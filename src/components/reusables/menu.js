import React from 'react'
import Image from 'next/image'
import Icon from '@/assets/icons/Vector (3).svg'
import Icon2 from '@/assets/icons/Vector (1).svg'

export default function Header({head}) {
    return(
        <div className="flex justify-between items-center">
                        <div className="flex gap-2.5 items-center">
                            <Image src={Icon2} alt="menu icon" className='h-4 w-4'    data-testid="menu-icon"/>
                            <h3 className="font-bold text-[#B0B0B0]">{head}</h3>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button className="text-sm text-[#6F01D0] hover:text-[#6f01d0d1] font-semibold cursor-pointer">See all</button>
                            <Image src={Icon} alt="icon" className='cursor-pointer' data-testid="action-icon"/>
                        </div>
                    </div>
    )
}