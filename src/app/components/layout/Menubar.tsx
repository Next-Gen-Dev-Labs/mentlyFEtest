import { TfiMenu } from 'react-icons/tfi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import { Logo } from './Logo';
import { Text } from '../ui/Text';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  Click?: () => void;
  user?: string;
  role?: 'Admin' | 'Member' | 'Guest';
}

export const MenuBar = ({user, role, Click}:Props)=> {

  return (
    <div className="bg-[#FDFDFD] flex items-center w-full lg:w-[calc(100%-240px)] h-20 justify-between lg:justify-end shadow-sm px-4 lg:px-10 z-50 font-chivo">
      <div onClick={Click}
        className='lg:hidden'>
        <TfiMenu className='text-2xl text-primary'/>
      </div>
      <div className='flex items-center justify-center'>
        <div className='size-6 relative text-Grey-2 p-1 mr-10'>
          <IoNotificationsOutline className='text-2xl' />
          <GoDotFill className="absolute top-0 left-3 text-error animate-pulse duration-200 ease-in-out"/>
        </div>
        <div className='flex gap-2 items-center'>
          <Logo/>
          <div className='space-y-1 py-2'>
            <Text size='sm' color='text-[#404040]' className="truncate text-nowrap max-w-[100px]" >
              {user}
            </Text>
            <Text size='xs' color='text-primary-300' className="truncate text-nowrap max-w-[100px]" >
              {role}
            </Text>
          </div>
        </div>
        <div className='size-7 mx-4 flex justify-center items-center text-Grey-4 rounded bg-primary-lite'>
          <IoIosArrowDown className='text-xl'/>
        </div>
      </div>
    </div>
  )
}