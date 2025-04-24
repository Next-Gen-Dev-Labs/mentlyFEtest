import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface MentorProps {
  mentor: {
    id: number
    name: string
    role: string
    avatar: string
  }
}

export function MentorCard({ mentor }: MentorProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
          <AvatarFallback>
            {mentor.name.charAt(0)}
            {mentor.name.split(" ")[1]?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-sm">{mentor.name}</h3>
          <p className="text-xs text-muted-foreground">{mentor.role}</p>
        </div>
      </div>

      <Button size="sm" className="text-xs bg-[#2D0A5A] hover:bg-[#3D1A6A] h-7 rounded-full">
        Message
      </Button>
    </div>
  )
}
