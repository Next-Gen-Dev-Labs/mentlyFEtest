import ProgramCard from "./cards/programCard";
import Header from "./reusables/menu";
import { IoIosArrowDown } from "react-icons/io";
import { programs } from "@/data";
export default function Program() {
    return(
        <div className="w-full  xl:w-[329px] rounded-xl bg-white px-2.5 pt-4 space-y-2">
           <Header head='Programs'/> 
           <div className="flex gap-3 justify-end items-center text-xs font-medium mr-4">
            <span>Filter</span>
            <span className="flex gap-0.5 items-center justify-between border border-[#E1E7EC] py-[6.43px] px-[9.65px]">Active <IoIosArrowDown/></span>
           </div>
           <div className="flex flex-row lg:flex-col gap-2 overflow-x-scroll lg:overflow-x-hidden w-full">
            {programs.map((program) => (
                <ProgramCard key={program.id} program={program}/>
            ))}
           </div>
        </div>
    )
}