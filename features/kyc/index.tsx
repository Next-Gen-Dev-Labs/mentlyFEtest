import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@radix-ui/react-scroll-area"

const activities = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    icon: "🔐",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "KV",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    icon: "👤",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "NU",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    time: "25 minutes Ago",
    icon: "💰",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "WR",
    color: "bg-gray-500",
  },
  
]

export function RecentActivitiesSection() {
  return (
    <ScrollArea>
    <div className="bg-white rounded-xl p-4 px-6 ">
      <div className="space-y-4 gap-2">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3  border-b-[#F3F3F3] border-b-[1px]">
            <Avatar className={activity.color}>
              <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.title} />
              <AvatarFallback>{activity.icon}</AvatarFallback>
            </Avatar>
           <div>
              <h3 className="font-medium text-[#011627] text-sm">{activity.title}</h3>
              <p className="text-xs text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </ScrollArea>
  )
}
