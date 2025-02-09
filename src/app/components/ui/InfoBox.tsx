import { Icon } from "@iconify/react"
import type React from "react"

interface InfoBoxProps {
  children: React.ReactNode
}

export function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className="flex items-start gap-2 bg-appLightBlue p-4 rounded-md mb-4">
      <Icon icon="quill:warning-alt" className="text-appWarningBlue" width="32" height="32" />
      <p className="text-text text-sm">{children}</p>
    </div>
  )
}

