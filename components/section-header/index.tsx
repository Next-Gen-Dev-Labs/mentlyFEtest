import { Menu, MoreVertical, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionHeaderProps {
  title: string
  seeAllLink?: string
  hasAddButton?: boolean
}

export function SectionHeader({ title, seeAllLink, hasAddButton }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <Menu  className="text-gray-500"/>
        <h2 className="text-base font-medium text-gray-500">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        {seeAllLink && (
          <a href={seeAllLink} className="text-purple-600 font-medium text-sm">
            See all
          </a>
          
        )}
        {hasAddButton && (
          <Button variant="ghost" size="icon" className="rounded-full border bg-gray-50 h-6 w-6">
            <Plus className="h-3 w-3 " />
            <span className="sr-only">Add {title.toLowerCase()}</span>
          </Button>
        )}
        <Button variant="ghost" size="icon" className="text-gray-500 h-6 w-6">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </div>
  )
}
