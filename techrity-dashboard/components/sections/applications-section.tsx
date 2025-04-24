import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ApplicationCard } from "@/components/cards/application-card"
import { FileText, MoreVertical } from "lucide-react"

const applicationsData = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
    role: "Product Designer",
    location: "Lagos, Nigeria",
    timezone: "GMT+1",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40&text=AS",
    role: "Product Designer",
  },
  {
    id: 3,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
    role: "Product Designer",
  },
]

export function ApplicationsSection() {
  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <h3 className="text-sm font-medium">Applications</h3>
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
      <CardContent className="space-y-3 p-4">
        {applicationsData.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </CardContent>
    </Card>
  )
}
