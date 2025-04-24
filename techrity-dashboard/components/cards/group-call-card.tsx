import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface GroupCallProps {
  call: {
    id: number
    title: string
    date: string
    time: string
    host: string
    participants: number
    image: string
    status: string
  }
}

export function GroupCallCard({ call }: GroupCallProps) {
  return (
    <div className="border rounded-lg p-3 space-y-2 flex flex-col h-full bg-white">
      <div className="flex items-center gap-2">
        {call.status === "ongoing" ? (
          <Badge
            variant="outline"
            className="text-[10px] font-normal px-2 py-0 rounded-full bg-green-50 text-green-600 border-green-200"
          >
            <span className="mr-1 w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
            Ongoing
          </Badge>
        ) : (
          <Badge
            variant="outline"
            className="text-[10px] font-normal px-2 py-0 rounded-full bg-blue-50 text-blue-600 border-blue-200"
          >
            <span className="mr-1 w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
            Upcoming
          </Badge>
        )}
      </div>

      <h3 className="font-medium text-sm">{call.title}</h3>

      <div className="space-y-1 flex-1">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{call.date}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{call.time}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Avatar className="w-4 h-4">
          <AvatarImage src={call.image || "/placeholder.svg"} alt={call.host} />
          <AvatarFallback>{call.host[0]}</AvatarFallback>
        </Avatar>
        <span>{call.host}</span>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex -space-x-2">
          {Array.from({ length: Math.min(call.participants, 3) }).map((_, i) => (
            <Avatar key={i} className="border-2 border-white w-6 h-6">
              <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${i + 1}`} />
              <AvatarFallback className="text-[10px] bg-gray-200">U{i + 1}</AvatarFallback>
            </Avatar>
          ))}
          {call.participants > 3 && (
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] border-2 border-white">
              +{call.participants - 3}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs h-7 border-[#2D0A5A] text-[#2D0A5A]">
            View Participants
          </Button>
          <Button size="sm" className="text-xs bg-[#2D0A5A] hover:bg-[#3D1A6A] h-7">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  )
}
