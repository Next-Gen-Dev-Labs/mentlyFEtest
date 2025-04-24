import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface UsersListProps {
  users: {
    id: number
    name: string
    email: string
    role: string
    avatar: string
  }[]
}

export function UsersList({ users }: UsersListProps) {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between p-2 border rounded-lg">
          <div className="flex items-center gap-3">
            <Checkbox id={`user-${user.id}`} />
            <Avatar>
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>
                {user.name.charAt(0)}
                {user.name.split(" ")[1]?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-sm">{user.name}</h3>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs h-7">
              Reject
            </Button>
            <Button size="sm" className="text-xs bg-[#2D0A5A] hover:bg-[#3D1A6A] h-7">
              Accept
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
