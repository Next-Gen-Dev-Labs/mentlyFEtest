import { Bell, User } from "lucide-react"

export default function DashboardHeader() {
  return (
    <header className="bg-white p-4 flex items-center justify-between border-b">
      <div></div>
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-500" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
            <User className="h-4 w-4" />
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium">Techrity Foundation</div>
            <div className="text-xs text-gray-500">Member</div>
          </div>
        </div>
      </div>
    </header>
  )
}
