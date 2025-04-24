import Image from "next/image";
import Calendar from '/src/assets/icons/mynaui_calendar.svg'
import Clock from '/src/assets/icons/clock.svg'
import Pick from '/src/assets/images/Rectangle 12322 (1).svg'
import { FaArrowRightLong } from "react-icons/fa6";
export default function GroupCard({group}) {
    return(
        <div className="w-[270px] bg-[#F9F7FF] py-[15.79px] px-[12.93px] rounded-[9.7px] space-y-[6.47px] flex-none">
            <Image
            src={group.img}
            alt="group" className="w-full h-[68.7px] object-cover rounded-[10px]"/>
            <div className="px-5 py-[2.5px] text-[12px]"><span></span><p>{group.status}</p></div>
            <h3 className="text-[#595564] text-[16.81px] pr-3">{group.title}</h3>
            <div className="grid grid-cols-2 text-[#595564] border-t pt-[6.47px] gap-3">
                <div className="flex gap-[5.66px] text-[10px] font-medium">
                    <Image src={Calendar} alt="calendar icon"/>
                    <p>{group.date}</p>
                </div>
                <div className="flex gap-[5.66px] text-[10px] font-medium">
                    <Image src={Clock} alt="clock icon"/>
                    <p>{group.time}</p>
                </div>
                <div>
                    <p className="text-[#A195C0] text-[8px]">Study Group</p>
                    <div>
                        {/* <Image/> */}
                        <p className="text-[10px] font-semibold">{group.group}</p>
                    </div>
                </div>
                <div>
                    <p className="text-[#A195C0] text-[8px]">Mentor</p>
                    {/* <div><Image/></div> */}
                </div>
            </div>
            <div className="flex justify-between text-xs font-medium">
                <button className="p-3 border border-[#6F01D0] text-[#6F01D0] rounded-md">View Participants</button>
                <button className="p-3 bg-[#6F01D0] text-white flex items-center gap-2 rounded-md">Join Now <FaArrowRightLong className='text-white'/></button>
            </div>
        </div>
    )
}