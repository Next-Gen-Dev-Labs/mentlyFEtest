"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { UsersPieChart } from "@/components/users-pie-chart"
import { Users, MoreVertical } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const usersData = {
  total: 240,
  categories: [
    { name: "Students", count: 200, color: "#4BC0C0" },
    { name: "Mentors", count: 8, color: "#FF6384" },
    { name: "Programs", count: 22, color: "#FFCE56" },
    { name: "Others", count: 10, color: "#36A2EB" },
  ],
}

export function UsersSection() {
  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <h3 className="text-sm font-medium">Users</h3>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="h-7 text-xs w-24 bg-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="students">Students</SelectItem>
              <SelectItem value="mentors">Mentors</SelectItem>
              <SelectItem value="admins">Admins</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <UsersPieChart data={usersData} />
      </CardContent>
    </Card>
  )
}
