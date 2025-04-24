import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProgramProps {
  program: {
    id: number
    title: string
    description: string
    image: string
    progress: number
    participants: number
    mentors?: number
    hostedBy?: string
    status: string
  }
}

export function ProgramCard({ program }: ProgramProps) {
  return (
    <div className="border rounded-lg p-3 space-y-2 bg-white">
      <div className="flex gap-3">
        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
          <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
          {program.hostedBy && (
            <div className="absolute bottom-0 right-0 w-6 h-6">
              <Avatar className="w-6 h-6 border-2 border-white">
                <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${program.hostedBy[0]}`} />
                <AvatarFallback className="text-[10px] bg-gray-200">{program.hostedBy[0]}</AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm">{program.title}</h3>
            {program.status === "ongoing" && (
              <Badge
                variant="outline"
                className="text-[10px] font-normal px-2 py-0 rounded-full bg-green-50 text-green-600 border-green-200"
              >
                <span className="mr-1 w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                Ongoing
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{program.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {Array.from({ length: Math.min(program.participants, 3) }).map((_, i) => (
            <Avatar key={i} className="border-2 border-white w-6 h-6">
              <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${i + 1}`} />
              <AvatarFallback className="text-[10px] bg-gray-200">U{i + 1}</AvatarFallback>
            </Avatar>
          ))}
          {program.mentors && (
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] border-2 border-white">
              +{program.mentors}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs h-7 border-[#2D0A5A] text-[#2D0A5A]">
            View Details
          </Button>
          <Button size="sm" className="text-xs bg-[#2D0A5A] hover:bg-[#3D1A6A] h-7">
            {program.hostedBy ? "Analyze" : "Continue"}
          </Button>
        </div>
      </div>

      {!program.hostedBy && <Progress value={program.progress} className="h-1" />}
    </div>
  )
}
