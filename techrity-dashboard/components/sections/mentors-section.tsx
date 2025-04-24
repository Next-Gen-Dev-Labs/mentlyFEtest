import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MentorCard } from "@/components/cards/mentor-card"
import { Users, MoreVertical, PlusCircle } from "lucide-react"

const mentorsData = [
  {
    id: 1,
    name: "Maxwell Smith",
    role: "Product Designer",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    role: "Product Designer",
    avatar: "/placeholder.svg?height=40&width=40&text=AS",
  },
]

export function MentorsSection() {
  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <h3 className="text-sm font-medium">Mentors</h3>
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
      <CardContent className="p-4">
        <div className="space-y-3">
          {mentorsData.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
        <div className="mt-3 text-center">
          <Button
            variant="outline"
            className="w-full bg-[#F5F2FF] text-[#2D0A5A] border-dashed border-[#2D0A5A] border"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            See all
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
