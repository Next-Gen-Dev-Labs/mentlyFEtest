"use client"

import { useState } from "react"
import { Images, LayoutGrid, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const widgetOptions = [
  { id: "programs", label: "Programs", defaultChecked: true },
  { id: "group-calls", label: "Group Calls", defaultChecked: true },
  { id: "mentors", label: "Mentors", defaultChecked: true },
  { id: "recent-activities", label: "Recent Activities", defaultChecked: true },
  { id: "application", label: "Application", defaultChecked: true },
  { id: "earnings", label: "Earnings", defaultChecked: false },
  { id: "forum", label: "Forum", defaultChecked: false },
  { id: "program-analysis", label: "Program Analysis", defaultChecked: false },
]

interface ManageWidgetsDialogProps {
  isMobile?: boolean
}

export function ManageWidgetsDialog({ isMobile = false }: ManageWidgetsDialogProps) {
  const [widgets, setWidgets] = useState(
    widgetOptions.reduce(
      (acc, widget) => {
        acc[widget.id] = widget.defaultChecked
        return acc
      },
      {} as Record<string, boolean>,
    ),
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        {isMobile ? (
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-50">
                <span className='text-[#A4A5B8]'><LayoutList /></span>
                    <span className='text-[#6F01D0]'><Images /></span>
                    <p className='text-[#1F0954] text-[16px] font-bold '> Manage Widgit</p>
          </Button>
        ) : (
          <Button variant="outline"  className="flex gap-2 border-gray-200 h-[46px] my-4">
                <span className='text-[#A4A5B8]'><LayoutList /></span>
                    <span className='text-[#6F01D0]'><Images /></span>
                    <p className='text-[#1F0954] text-[16px] font-bold '> Manage Widgit</p>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md p-6 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl text-purple-700">Manage Widget</SheetTitle>
          <SheetDescription>
            Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {widgetOptions.map((widget) => (
            <div key={widget.id} className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor={widget.id} className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4" />
                  {widget.label}
                </Label>
              </div>
              <Checkbox
                id={widget.id}
                checked={widgets[widget.id]}
                onCheckedChange={(checked) => {
                  setWidgets({
                    ...widgets,
                    [widget.id]: !!checked,
                  })
                }}
                className="h-5 w-5 border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
              />
            </div>
          ))}
        </div>
        <SheetFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setWidgets(
                widgetOptions.reduce(
                  (acc, widget) => {
                    acc[widget.id] = widget.defaultChecked
                    return acc
                  },
                  {} as Record<string, boolean>,
                ),
              )
            }}
            className="border-gray-200 w-full sm:w-auto"
          >
            Reset to Default
          </Button>
          <Button type="button" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
