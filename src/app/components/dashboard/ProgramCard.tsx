import Image from "next/image"
import { Text } from "../ui/Text";
import { BsDot } from "react-icons/bs";

interface props {
  image?: string;
  title?: string;
  session?: string;
  description?: string;
  host?: string;
}

export const ProgramCard =({image, title, session, description ='Bootcamp', host = 'self'}:props)=> {
  return(
    <div className="bg-white w-full p-3.5 space-y-[7px] rounded-[10px] shadow-lg">
      <div className="relative w-full h-[80px] rounded-md overflow-clip z-[1]">
        <Image src={`/${image}`} alt="alt" width={500} height={500} className="w-full h-full" /> 
        <div className='absolute inset-0 bg-black/30 w-full h-full flex flex-col justify-between p-[10px] z-[1]'>
          <div className="flex gap-2 justify-between text-white">
            <Text weight='bold' size='sm' color='lg:!text-base text-white '>
              {title}
            </Text>
          </div>
          <div className={`${session === 'Bootcamp'? 'text-[#0077FF] bg-[#D4E0F3]':'text-[#008000] bg-[#D4F3D4]'} rounded-[10px]  flex items-center w-fit px-4 font-bold text-[6px] font-chivo `}>
            <BsDot className="text-xs"/><span className="">{session}</span>
          </div>
        </div>
      </div>
      <Text color='text-black' weight="medium" size="2xs" className="">
        {description}
      </Text>
      <div className="flex w-full justify-between items-end">
        <div className="flex items-center gap-1">
          <Image src={'/thumb.svg'} alt="thumb" width={20} height={20} />
          <Text color='text-[#6c6c6c]' size="2xs" weight="bold" className="">
            {host != 'Mentors' && 'Hosted By:'} {host}
          </Text>
        </div>
        <div className="flex w-fit gap-1.5">
          <button className="bg-white border border-primary-lite w-fit h-[22px] flex items-center py-2.5 px-4 text-mently-blue text-nowrap rounded-[4px] font-chivo text-[8px] hover:opacity-80 transform-color duration-200 ease-in-out">
            View Details
          </button>
          <button className="bg-primary-lite w-fit border border-primary-lite h-[22px] flex items-center py-2.5 px-4 text-white text-nowrap rounded-[4px] font-chivo text-[8px] hover:opacity-80 transform-color duration-200 ease-in-out">
            {host == 'Mentors' ? 'Assign Mentor' : 'Analysis'}
          </button>
        </div>
      </div>
    </div>
  )
}