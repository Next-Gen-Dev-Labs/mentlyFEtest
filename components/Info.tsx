import { InfoCircle } from 'iconsax-react'
import React from 'react'

export default function Info({info}: {info: string}) {
  return (
    <div className='text-icon-grey flex-center gap-2 bg-[#CEE1FB] px-3 rounded-sm py-4 my-2'>
      <InfoCircle variant='Linear' size={20} className='stroke-[#086BED]' />
      <p className='text-[#777795] text-xs w-[90%]'>{info}</p>
    </div>
  )
}
