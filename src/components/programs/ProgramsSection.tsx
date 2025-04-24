import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import ProgramCard from "./ProgramCard"
import { programsData } from "@/data/data"



export default function ProgramsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="flex gap-4 items-center">
          <Image src="/SVGs/mobile.svg" width={10} height={9} alt="mobile-icon" className="cursor-pointer" />
          <h2 className="text-lg font-chivo font-semibold text-[#B0B0B0]">Programs</h2>
        </span>
        <span className="flex gap-4 items-center">
          <div className="text-[#6F01D0] text-sm font-[600] font-chivo">See all</div>
          <Image src="/SVGs/seeAll.svg" width={2.25} height={13.5} alt="seeAll-icon" className="cursor-pointer" />
        </span>
      </div>

      <div className="flex gap-2 mb-4 items-center">
        <div className="flex-1"></div>
        <span className="text-[12px] font-chivo font-medium text-[#918C9C]">
          Filter
        </span  >

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="text-[12px] font-chivo leading-[12px] text-[#595564]">
              Active
              <ChevronDown className="h-3.5 w-3.5 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Completed</DropdownMenuItem>
            <DropdownMenuItem>Upcoming</DropdownMenuItem>
            <DropdownMenuItem>All</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4 h-[700px] overflow-y-scroll hide-scrollbar">
        {programsData.map((program) => (
          <ProgramCard
            id={program.id}
            title={program.title}
            description={program.description}
            image={program.image}
            instructor={program.instructor}
            key={program.id}  
            tag={program.tag}
            buttonText={program.buttonText}
          />
        ))}
      </div>
    </div>
  )
}
