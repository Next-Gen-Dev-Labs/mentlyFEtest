import Image from "next/image"
import { Text } from "../ui/Text"

type props = {
  role?: string;
  Name?: string;
  image?: string;
  activities?: string;
  details?: string;
  period?:string;
  title?: string;
}


interface ActivityItemProps {
  title: string;
  period: string;
  details: string;
  image: string;
}


export const MentorCard =({image, Name, role}:props)=> {

  return(
    <div className="flex w-full justify-between items-center py-2 border-b border-[#F1EFEF] ">
      <div className="flex items-center gap-2">
        <Image src={`${image}`} alt='' width={32} height={32} />
        <div className="space-y-1">
          <Text weight='bold' size="sm" color="text-Grey-2" >
            {Name}
          </Text>
          <Text size="2xs" color="text-Grey-2" >
            {role}
          </Text>
        </div>
      </div>
      <button 
        className="bg-primary-lite w-fit border border-primary-lite h-[22px] flex items-center px-3 text-white text-nowrap rounded-2xl font-chivo font-medium text-xs hover:opacity-90 transform-color duration-200 ease-in-out">
        Message
      </button>
    </div>
  )
}

export const Recent =({image, title, period, details}:ActivityItemProps)=> {
  return(
    <div className="flex gap-2 w-full py-2 border-b border-[#F1EFEF]">
      <Image src={`/${image}`} alt="" width={32} height={32} />
      <div className="space-y-1">
        <Text color="text-[#011627]" size='sm' weight="bold">
          {title}
        </Text>
        <Text color="text-[#707991]" size='xs' weight="medium">
          {details}
        </Text>
        <Text color="text-[#707991]" size='xs' weight="medium">
          {period}
        </Text>
      </div>
    </div>
  )
}