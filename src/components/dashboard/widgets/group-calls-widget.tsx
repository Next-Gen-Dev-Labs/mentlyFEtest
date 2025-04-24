"use client"

import { Calendar, Clock, MoreVertical, Users, Menu, ArrowRight } from "lucide-react"
import { useWidgets } from "../widgets-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GroupCall {
  id: string
  title: string
  date: string
  time: string
  group: string
  image: string
  status: "active" | "upcoming"
}

const groupCalls: GroupCall[] = [
  {
    id: "1",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 20, 2023",
    time: "9:00 - 11:00AM",
    group: "UX Strategy Study group",
    image: "assets/images/programs/program-6.jpg",
    status: "active",
  },
  {
    id: "2",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Wed, Jul 20, 2024",
    time: "9:00 - 11:00AM",
    group: "UX Strategy Study group",
    image: "assets/images/programs/program-4.jpg",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 20, 2023",
    time: "9:00 - 11:00AM",
    group: "UX Strategy Study group",
    image: "assets/images/programs/program-5.jpg",
    status: "active",
  },
]

export default function GroupCallsWidget() {
  const { widgets } = useWidgets()

  if (!widgets.groupCalls) return null

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
        <Menu className="w-6 h-6 text-gray-700" />
          <h3 className="font-medium text-gray-500">Group Calls</h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-purple-600 cursor-pointer">See all</span>
          <MoreVertical className="text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groupCalls.map((call) => (
          <GroupCallCard key={call.id} call={call} />
        ))}
      </div>
    </div>
  )
}

function GroupCallCard({ call }: { call: GroupCall }) {
  return (
    <Card className="overflow-hidden shadow">
      <div className="relative">
        <img src={call.image || "/placeholder.svg"} alt={call.title} className="w-full h-32 object-cover" />
        <div
          className={`absolute top-2 right-2 ${call.status === "active" ? "bg-green-200 text-green-900 font-bold" : "bg-purple-400 text-purple-900 font-bold"} text-white text-xs px-2 py-1 rounded`}
        >
          {call.status === "active" ? "Ongoing" : "Upcoming"}
        </div>
      </div>
      <CardContent className="p-3">
        <h4 className="font-medium">{call.title}</h4>
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{call.date}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Clock className="h-3 w-3 mr-1" />
          <span>{call.time}</span>
        </div>

        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Users className="h-3 w-3 mr-1" />
          <span>{call.group}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <Button variant="outline" size="sm" className="text-xs text-purple-600 border-purple-600">
            View Participants
          </Button>
          
          <Button size="sm" className="text-xs bg-purple-600 hover:bg-purple-700 text-white flex items-center">
            Join Now <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>

        
      </CardContent>
    </Card>
  )
}
