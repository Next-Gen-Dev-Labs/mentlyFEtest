import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Flag } from "lucide-react"

interface ApplicationProps {
  application: {
    id: number
    name: string
    email: string
    status: "pending" | "approved" | "rejected"
    avatar: string
    role: string
    location?: string
    timezone?: string
  }
}

export function ApplicationCard({ application }: ApplicationProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
      <div className="flex items-center gap-3">
        <Checkbox id={`application-${application.id}`} className="rounded-sm" />
        <Avatar>
          <AvatarImage src={application.avatar || "/placeholder.svg"} alt={application.name} />
          <AvatarFallback>
            {application.name.charAt(0)}
            {application.name.split(" ")[1]?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-sm">{application.name}</h3>
          <p className="text-xs text-muted-foreground">{application.email}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant="outline"
              className="text-[10px] font-normal px-2 py-0 rounded-full bg-gray-50 border-gray-200"
            >
              Product Designer
            </Badge>
            {application.location && (
              <Badge
                variant="outline"
                className="text-[10px] font-normal px-2 py-0 rounded-full bg-gray-50 border-gray-200"
              >
                <Flag className="h-2 w-2 mr-1" />
                {application.location}
              </Badge>
            )}
            {application.timezone && (
              <Badge
                variant="outline"
                className="text-[10px] font-normal px-2 py-0 rounded-full bg-gray-50 border-gray-200"
              >
                {application.timezone}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="text-xs h-7">
          Reject
        </Button>
        <Button size="sm" className="text-xs bg-[#2D0A5A] hover:bg-[#3D1A6A] h-7">
          Accept
        </Button>
      </div>
    </div>
  )
}
