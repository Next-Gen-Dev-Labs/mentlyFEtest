import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const groupCalls = [
  {
    id: 1,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Ongoing",
    group: "UX Strategy Study group",
    image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1745396374/7cf42e0c90afc28e48671582f0632caeced80a89_njc7o9.jpg",
    participants: [
      { avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png", initials: "MS" },
      { avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png", initials: "AS" },
    ],
  },
  {
    id: 2,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Upcoming",
    group: "UX Strategy Study group",
    image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1745396374/7cf42e0c90afc28e48671582f0632caeced80a89_njc7o9.jpg",
    participants: [
      { avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png", initials: "MS" },
      { avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png", initials: "AS" },
    ],
  },
  {
    id: 3,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    status: "Ongoing",
    group: "UX Strategy Study group",
    image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1745396374/7cf42e0c90afc28e48671582f0632caeced80a89_njc7o9.jpg",
    participants: [
      { avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png", initials: "MS" },
      { avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png", initials: "AS" },
    ],
  },
]

export function GroupCallsSection() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4  px-2  bg-white">
      {groupCalls.map((call) => (
        <div
          key={call.id}
          className="min-w-[280px] max-w-[280px]  flex-shrink-0 bg-[#F9F7FF] p-2 rounded-xl overflow-hidden shadow-sm"
        >
          <div className="relative w-full  ">
            <Image
              src={call.image || "/placeholder.svg"}
              alt={call.title}
              width={280}
              height={120}
              className="object-cover w-full h-[68px] rounded-[9px]"
            />
           
          </div>

          <div className="p-3">
          <Badge
              className={` text-[10px] ${
                call.status === "Ongoing"
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-blue-100 text-blue-800 border-blue-200"
              } flex items-center gap-1 px-2 py-1 rounded-full`}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full  ${
                  call.status === "Ongoing" ? "bg-green-500" : "bg-blue-500"
                }`}
              ></span>
              {call.status}
            </Badge>
            <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 text-[16px]">{call.title}</h3>

            <div className="flex items-center gap-4 text-[8px] text-gray-500 mb-2">
              <div className="flex items-center">
                <span className="mr-1">📅</span>
                {call.date}
              </div>
              <div className="flex items-center">
                <span className="mr-1">⏰</span>
                {call.time}
              </div>
            </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-[8px]  text-gray-500 mb-3">
                <span className="mr-1">👥</span>
                {call.group}
                </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex -space-x-2">
                {call.participants.map((participant, idx) => (
                  <Avatar key={idx} className="border-2 border-white w-6 h-6">
                    <AvatarImage src={participant.avatar || "/placeholder.svg"} alt="Participant" />
                    <AvatarFallback className="text-[10px]">{participant.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
                </div>
           

            

            <div className="flex justify-between gap-2">
              <Button variant="outline" size="sm" className="text-xs h-8 px-3 rounded-md">
                View Participants
              </Button>
              <Button
                size="sm"
                className="text-xs h-8 px-3 bg-purple-600 hover:bg-purple-700 rounded-md flex items-center"
              >
                Join Now
                <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
