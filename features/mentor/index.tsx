import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const mentors = [
  {
    id: 1,
    name: "Maxwell Smith",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "MS",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "AS",
  },
  {
    id: 3,
    name: "Adeati Samuel",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "AS",
  }
]

export function MentorsSection() {
  return (
    <div className="bg-white rounded-xl p-4 px-6">
      <div className="space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between  border-b-[#F3F3F3] border-b-[1px] py-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                <AvatarFallback>{mentor.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-gray-800">{mentor.name}</h3>
                <p className="text-[10px] text-[#7D8DA6]">{mentor.role}</p>
              </div>
            </div>
            <Button className="bg-[#6F01D0] hover:bg-purple-700 rounded-full px-4 py-1 h-8">Message</Button>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full mt-4 bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100 rounded-full py-2"
      >
        See all
      </Button>
    </div>
  )
}
