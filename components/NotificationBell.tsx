import { Notification } from "iconsax-react"

export default function NotificationBell() {
  return (
    <span className="relative">
      <Notification variant="Linear" size={24} className="stroke-gray-700" />
      <span className="bg-red-500 w-2 h-2 rounded-full absolute top-0 left-3"></span>
    </span>
  )
}
