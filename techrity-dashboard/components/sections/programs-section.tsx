"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgramCard } from "@/components/cards/program-card"
import { useState } from "react"
import { MoreVertical, ListFilter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const programsData = [
  {
    id: 1,
    title: "Fundamentals of User Interface & Experience",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    image: "/placeholder.svg?height=80&width=80",
    progress: 75,
    participants: 3,
    mentors: 5,
    status: "ongoing",
  },
  {
    id: 2,
    title: "Colour Hack Practical Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    image: "/placeholder.svg?height=80&width=80",
    progress: 50,
    participants: 2,
    mentors: 1,
    hostedBy: "Faith Okello",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Colour Hack Practical Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    image: "/placeholder.svg?height=80&width=80",
    progress: 30,
    participants: 3,
    mentors: 1,
    hostedBy: "Saf",
    status: "ongoing",
  },
]

export function ProgramsSection() {
  const [filter, setFilter] = useState("Active")

  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <ListFilter className="h-4 w-4" />
          <h3 className="text-sm font-medium">Programs</h3>
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
      <div className="px-4 pb-2 flex items-center gap-2">
        <div className="text-xs text-muted-foreground">Filter</div>
        <Select defaultValue="active">
          <SelectTrigger className="h-7 text-xs w-24 bg-white">
            <SelectValue placeholder="Active" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CardContent className="space-y-3 p-4 pt-0">
        {programsData.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </CardContent>
    </Card>
  )
}
