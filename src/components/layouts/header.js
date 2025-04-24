import Image from 'next/image'
import Notify from '@/assets/icons/notification.svg'
import Logo from '@/assets/icons/Clip path group.svg'
export default function Head() {
    return(
        <div className="w-full hidden lg:flex gap-12 justify-end bg-[#FDFDFD] py-5 px-14 " style={{boxShadow: '0px 2px 4px 0px #00000010'}}>
            <Image src={Notify} alt='notification'/>
            <div className='flex items-center gap-2'>
                <div className='h-11 w-11 rounded-full bg-[#8B72FC]'>
                    <Image src={Logo} alt='logo' />
                </div>
                <div>
                        <h3>Techrity  Foun...</h3>
                        <p>Member</p>
                    </div>
                    <div className='w-5 h-5 bg-[#6F01D0] rounded ml-2'>

                    </div>
            </div>
        </div>
    )
}