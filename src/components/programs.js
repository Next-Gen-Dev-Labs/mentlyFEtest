import React from "react";
import ProgramCard from "./cards/programCard";
import Header from "./reusables/menu";
import { IoIosArrowDown } from "react-icons/io";
import { programs } from "@/data";
export default function Program() {
    return(
        <div className="w-full  xl:w-[329px] rounded-xl bg-white px-2.5 pt-4 space-y-2" data-testid="programs-container">
           <Header head='Programs'/> 
           <div className="flex gap-3 justify-end items-center text-xs font-medium mr-4" data-testid="filter-container">
            <span data-testid="filter-label">Filter</span>
            <span className="flex gap-0.5 items-center justify-between border border-[#E1E7EC] py-[6.43px] px-[9.65px]" data-testid="active-filter">Active <IoIosArrowDown data-testid="dropdown-icon"/></span>
           </div>
           <div className="flex flex-row lg:flex-col gap-2 overflow-x-scroll lg:overflow-x-hidden w-full" data-testid="programs-list">
            {programs.map((program) => (
                <ProgramCard key={program.id} program={program}/>
            ))}
           </div>
        </div>
    )
}