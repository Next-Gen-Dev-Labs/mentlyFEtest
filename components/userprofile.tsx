import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function UserProfile() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="hidden md:block">
        <div className="text-sm font-medium">Godwin Jimmy</div>
        <div className="text-xs text-muted-foreground">Free Plan <span className="text-[#2b85fe] font-bold">Upgrade</span></div>
      </div>
      <Button variant="ghost" size="sm" className="ml-2">
        
      </Button>
    </div>
  )
}

