import React from 'react'
import Image from 'next/image'
import set from '../images/set.png'
import setting from '../images/setting.png'

const Manage = () => {
  return (
    <section className="lg:w-[1200px] lg:h-[60px]  lg:bg-transparent  lg:flex lg:items-center lg:justify-end">
   <div className='lg:w-[232px] lg:h-[26px]  lg:bg-transparent lg:flex lg:items-center lg:justify-between  lg:mr-12'>
    <div className='lg:w-[78px] lg:h-[26px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
        <Image src={set} alt="set" className='lg:w-[24px] lg:h-[24px]'/>
        <Image src={setting} alt="set" className='lg:w-[30px] lg:h-[26px] lg:rounded'/>
    </div>
    <div className='lg:w-[131px] lg:h-[19px] lg:bg-transparentlg:flex lg:items-center'>
        <h3 className='lg:font-semibold lg:text-[16px] lg:leading-[100%] lg:text-[#1F0954]'>Manage Widgets</h3>
    </div>
    </div>


    </section>
  )
}

export default Manage