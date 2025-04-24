import React from 'react'
import Image from "next/image"
import Mentor from '@/assets/images/Ellipse 56 (2).svg'
import { students } from "@/data"
import Header from "./reusables/menu"
export default function Application() {
    return(
        <div className="lg:w-[370px] xl:w-[431px] bg-white py-6 px-4 xl:px-4 space-y-5">
            <Header head='Application'/>
            <div>
                <h6 className="text-[#7D8DA6] text-xs">Mentor</h6>
                <div className=" border-b border-[#DBDBDB] pb-6">
                    <div className="flex  justify-between items-center py-2.5">
                    <div className="flex items-center">
                    <input type="checkbox" className="w-3.5 h-3.5 mr-2.5 rounded-[2px]cursor-pointer"/>
                    <Image src={Mentor} alt="mentor's image"/>
                    <div className="ml-2 xl:ml-4">
                        <h3 className="font-bold text-sm">Maxwell Smith</h3>
                        <p className="text-xs">maxwellsmith@gmail.com</p>
                    </div>
                    </div>
                    <div className="flex gap-2 xl:gap-4 font-medium text-[10px]">
                        <button className="bg-[#FFEDED] border border-[#D09696] py-1.5 xl:py-2.5 px-3 xl:px-6 rounded-md text-[#D83535] hover:text-black cursor-pointer">Reject</button>
                        <button className="bg-[#6F01D0] py-1.5 xl:py-2.5 px-3 xl:px-6 text-white rounded-md hover:bg-[#6f01d0d1] cursor-pointer">Accept</button>
                    </div>
                    </div>
                    <div className="flex justify-center text-[8.65px] font-medium gap-1">
                        <span className="border border-[#DDCEEE] bg-[#F3ECF9] text-[#9985A7] py-0.5 px-2.5 rounded-[5.16px]">Product Designer</span>
                        <span className="border border-[#A1BDBA] bg-[#E8FDFB] text-[#58948E] py-0.5 px-2.5 rounded-[5.16px]">4years Experience</span>
                        <span className="border border-[#ABBEE0] bg-[#E3ECF9] text-[#8196B5] py-0.5 px-2.5 rounded-[5.16px]">Lagos, Nigeria</span>
                        <span className="border border-[#C8C8C8] bg-#F4F4F4] text-[#595564] py-0.5 px-1 rounded-[5.16px]">GMT +1</span>
                    </div>
                </div>
            </div>
            <div className="pb-5">
            <h6 className="text-[#7D8DA6] text-xs">Students</h6> 
            <div>
                {students.map((student)=>(
                     <div key={student.id} className="flex justify-between items-center py-4 border-b border-[#DBDBDB]">
                     <div className="flex items-center">
                     <input type="checkbox" className="w-3.5 h-3.5 mr-2.5 rounded-[2px] cursor-pointer"/>
                     <Image src={student.image} alt={student.name}/>
                     <div className="ml-2 xl:ml-4">
                         <h3 className="font-bold text-sm">{student.name}</h3>
                         <p className="text-xs">{student.email}</p>
                     </div>
                     </div>
                     <div className="flex gap-1.5 font-medium text-[10px]">
                         <button className="bg-[#FFEDED] border border-[#D09696] py-1.5 xl:py-2.5 px-3 xl:px-6 rounded-md text-[#D83535] hover:text-black cursor-pointer">Reject</button>
                         <button className="bg-[#6F01D0] py-1.5 xl:py-2.5 px-3 xl:px-6 text-white rounded-md hover:bg-[#6f01d0d1] cursor-pointer">Accept</button>
                     </div>
                     </div>
                ))}
            </div>
            </div>
        </div>
    )
}