"use client"

import { LayoutGrid } from "lucide-react"
import { useState } from "react"
import { ManageWidgetsModal } from "./manage-widgets-modal"

export default function ManageWidgetsButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <LayoutGrid className="text-gray-500" />
        <span className="font-medium">Manage Widgets</span>
      </div>

      <ManageWidgetsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
