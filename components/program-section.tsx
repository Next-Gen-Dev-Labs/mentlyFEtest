"use client"

import {  ChevronUp, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TextEditor } from "./text-editor"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

interface ProgramSectionProps {
  title: string
  isCollapsed?: boolean
  onToggleCollapse?: () => void
}

export function ProgramSection({ title, isCollapsed = false, onToggleCollapse }: ProgramSectionProps) {
  return (
    <Card className="relative">
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-move opacity-30 hover:opacity-100 transition-opacity"
        aria-label="Drag to reorder section"
      >
      </div>

      <div className="flex items-center justify-between p-4 pl-10">
        <div className="font-medium">{title}</div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            aria-expanded={!isCollapsed}
            aria-label={isCollapsed ? "Expand section" : "Collapse section"}
          >
            <ChevronUp className={`h-5 w-5 transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
                <span className="sr-only">Open section menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 p-4 pt-0">
              <TextEditor />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

