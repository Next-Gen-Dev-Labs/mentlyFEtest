import { Checkmark } from "../ui/Checkbox";
import { Text } from "../ui/Text"
import Image from "next/image";

type props = {
  role?: string;
  Name?: string;
  email?: string;
  image?: string;
  More?: string[];
}

export const ApplicationCard =({role, Name, email, More, image='/'}:props)=> {

  const MoreColor = (index: number): string => {
    const colors = [
        'text-[#9985A7] bg-[#f3ecf9] border-[#ddceee]',
        'text-[#58948e] bg-[#e8fdfb] border-[#a1bdba]',
        'text-[#8196b5] bg-[#e3ecf9] border-[#abbee0]',
        'text-font bg-[#f4f4f4] border-[#c8c8c8]',
    ];
    return colors[index % colors.length] || 'text-[#9985A7] bg-[#f3ecf9] border-[#ddceee]';
  };

  return (
    <div className="w-full py-6 border-b border-[#dbdbdb]">
      <div className='flex items-center justify-between w-full'>
        <div className="flex items-center gap-2">
          <Checkmark/>
          <Image src={image} alt='' width={32} height={32} />
          <div className="space-y-1">
            <Text weight='bold' size="sm" color="text-Grey-2" >
              {Name}
            </Text>
            <Text size="2xs" color="text-Grey-2" >
              {email}
            </Text>
          </div>
        </div>
        <div className="flex gap-1.5">
          <button className="bg-[#ffeded] border border-[#d09696] w-fit h-8 flex items-center justify-center py-2.5 px-4 text-[#d83535] text-nowrap rounded-[8px] font-chivo text-[8px] hover:opacity-90 transform-color duration-200 ease-in-out">
            Reject
          </button>
          <button className="bg-primary-lite w-fit border border-primary-lite h-8 flex items-center justify-center px-4  text-white text-nowrap rounded-[8px] font-chivo text-[8px] hover:opacity-90 transform-color duration-200 ease-in-out">
            Accept
          </button>
        </div>
      </div>
      <div className="flex flex-wrap w-full pl-7 pr-2 gap-x-1.5 gap-1 mt-1.5">
        {role == 'Mentors' && 
            More?.map((items, index)=>(
              <Text key={index} weight="medium" className={`${MoreColor(index)} flex items-center border w-fit h-6 text-nowrap px-2.5 py-[2px] text-[8px] rounded-md`}>
                {items}
              </Text>
            ))
        }
      </div>
    </div>
  )
} 