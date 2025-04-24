"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GroupCallCard } from "@/components/cards/group-call-card"
import { MoreVertical, Phone } from "lucide-react"

const callsData = [
  {
    id: 1,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    host: "UX Strategy Study group",
    participants: 5,
    image: "/placeholder.svg?height=80&width=80&text=T",
    status: "ongoing",
  },
  {
    id: 2,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    host: "UX Strategy Study group",
    participants: 3,
    image: "/placeholder.svg?height=80&width=80&text=T",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    host: "UX Strategy Study group",
    participants: 4,
    image: "/placeholder.svg?height=80&width=80&text=T",
    status: "ongoing",
  },
]

export function GroupCallsSection() {
  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <h3 className="text-sm font-medium">Group Calls</h3>
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
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
        {callsData.map((call) => (
          <GroupCallCard key={call.id} call={call} />
        ))}
      </CardContent>
    </Card>
  )
}
