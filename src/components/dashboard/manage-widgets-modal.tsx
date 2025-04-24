"use client"

import type React from "react"

import { X } from "lucide-react"
import { useWidgets } from "./widgets-context"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ManageWidgetsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ManageWidgetsModal({ isOpen, onClose }: ManageWidgetsModalProps) {
  const { widgets, updateWidget, resetToDefault } = useWidgets()

  if (!isOpen) return null

  const handleSaveChanges = () => {
    onClose()
  }

  const handleResetDefault = () => {
    resetToDefault()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50" onClick={handleBackdropClick}>
      <div className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 relative">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={onClose}>
            <X />
          </button>

          {/* Modal Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">Manage Widget</h2>
            <p className="text-gray-600 mb-6">
              Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
            </p>

            {/* Widget Options */}
            <div className="space-y-4">
              {Object.entries(widgets).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`${key}-checkbox`} className="flex items-center gap-2 cursor-pointer">
                      <span className="text-gray-400">≡</span>
                      <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                    </Label>
                  </div>
                  <Checkbox
                    id={`${key}-checkbox`}
                    checked={value}
                    onCheckedChange={(checked) => updateWidget(key, checked as boolean)}
                  />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handleResetDefault}>
                Reset to Default
              </Button>
              <Button onClick={handleSaveChanges} className="bg-purple-600 hover:bg-purple-700">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
