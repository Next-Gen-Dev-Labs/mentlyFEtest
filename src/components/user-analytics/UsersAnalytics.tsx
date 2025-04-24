import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Separator } from "../ui/separator"

export default function UsersAnalytics() {
  // User statistics data
  const userData = {
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
    total: 240,
  }

  return (
    <div className="bg-[#E7DDFF4D] rounded-lg border border-gray-200 p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-700 font-chivo">Users</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="text-sm bg-[#E7DDFF4D] h-8 px-3 border-gray-200 text-gray-700 font-normal">
              All
              <ChevronDown className="h-3.5 w-3.5 ml-1 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All</DropdownMenuItem>
            <DropdownMenuItem>Students</DropdownMenuItem>
            <DropdownMenuItem>Mentors</DropdownMenuItem>
            <DropdownMenuItem>Programs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator className="mb-3" />

      <div className="flex items-center justify-between">
        {/* Donut chart */}
        <div className="relative w-36 h-36">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            {/* Students segment (blue) - 200 */}
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#60A5FA"
              strokeWidth="4.5"
              strokeDasharray="75 25"
              strokeDashoffset="25"
              className="donut-segment"
            ></circle>

            {/* Mentors segment (green) - 8 */}
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#6EE7B7"
              strokeWidth="4.5"
              strokeDasharray="10 90"
              strokeDashoffset="100"
              className="donut-segment"
            ></circle>

            {/* Programs segment (pink) - 22 */}
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#FDA4AF"
              strokeWidth="4.5"
              strokeDasharray="8 92"
              strokeDashoffset="90"
              className="donut-segment"
            ></circle>

            {/* Others segment (orange) - 10 */}
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#FBBF24"
              strokeWidth="4.5"
              strokeDasharray="7 93"
              strokeDashoffset="82"
              className="donut-segment"
            ></circle>

            {/* White center circle */}
            <circle cx="18" cy="18" r="12.5" fill="none"></circle>
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold font-chivo">{userData.total}</span>
            <span className="text-xs text-[#595564] font-chivo">Users</span>
          </div>
        </div>

        {/* Legend */}
        <div className="ml-4 space-y-3">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-[10px] text-[#595564] font-chivo font-normal mr-3">Students</span>
            <span className="ml-auto font-bold text-[12px] leaidng-[14px] text-[#595564] font-chivo">{userData.students}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-300 mr-2"></div>
            <span className="text-[10px] text-[#595564] font-chivo font-normal">Mentors</span>
            <span className="ml-auto font-bold text-[12px] leaidng-[14px] text-[#595564] font-chivo">{userData.mentors}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-pink-300 mr-2"></div>
            <span className="text-[10px] text-[#595564] font-chivo font-normal">Programs</span>
            <span className="ml-auto font-bold text-[12px] leaidng-[14px] text-[#595564] font-chivo">{userData.programs}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
            <span className="text-[10px] text-[#595564] font-chivo font-normal">Others</span>
            <span className="ml-auto font-bold text-[12px] leaidng-[14px] text-[#595564] font-chivo">{userData.others}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
