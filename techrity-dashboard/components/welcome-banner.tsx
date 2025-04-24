import { Button } from "@/components/ui/button"

interface WelcomeBannerProps {
  name: string
}

export function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <div className="bg-[#2D0A5A] text-white p-3 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-lg">Welcome Aboard, {name} 👋</h2>
        <p className="text-sm text-white/80">We're thrilled to have you join Techrity Team!</p>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="bg-white text-[#2D0A5A] hover:bg-white/90 hover:text-[#2D0A5A] border-none"
      >
        Update Profile
      </Button>
    </div>
  )
}
