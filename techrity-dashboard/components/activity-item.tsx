import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ActivityItemProps {
  activity: {
    id: number
    type: string
    description: string
    time: string
    icon: string
  }
}

export function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="w-8 h-8 bg-[#F5F2FF] text-[#2D0A5A]">
        <AvatarFallback>{activity.icon}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-medium text-sm">{activity.type}</h3>
        <p className="text-xs text-muted-foreground">{activity.description}</p>
        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
      </div>
    </div>
  )
}
