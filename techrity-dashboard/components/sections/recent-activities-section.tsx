import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ActivityItem } from "@/components/activity-item"
import { Clock, MoreVertical } from "lucide-react"

const activitiesData = [
  {
    id: 1,
    type: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    icon: "🔒",
  },
  {
    id: 2,
    type: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    icon: "👤",
  },
  {
    id: 3,
    type: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    time: "25 minutes Ago",
    icon: "💰",
  },
]

export function RecentActivitiesSection() {
  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <h3 className="text-sm font-medium">Recent Activities</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-xs text-[#2D0A5A] font-medium p-0">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        {activitiesData.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </CardContent>
    </Card>
  )
}
