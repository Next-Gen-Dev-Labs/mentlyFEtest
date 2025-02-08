"use client"

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link2,
  ImageIcon,
  Sparkles,
  MoreHorizontal,
} from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function TextEditor() {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">

        <div className="flex flex-1 flex-wrap gap-1 p-1 border rounded-md bg-white">
          {/* Desktop Toolbar */}
          <div className="hidden md:flex items-center gap-1">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle strikethrough">
              <Strikethrough className="h-4 w-4" />
            </Toggle>
            <Separator orientation="vertical" className="mx-1 h-8" />
            <Toggle aria-label="Toggle bullet list">
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle numbered list">
              <ListOrdered className="h-4 w-4" />
            </Toggle>
            <Separator orientation="vertical" className="mx-1 h-8" />
            <Toggle aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Justify">
              <AlignJustify className="h-4 w-4" />
            </Toggle>
            <Separator orientation="vertical" className="mx-1 h-8" />
            <Toggle aria-label="Add link">
              <Link2 className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Add image">
              <ImageIcon className="h-4 w-4" />
            </Toggle>
          </div>

          {/* Mobile Toolbar */}
          <div className="md:hidden flex items-center gap-1">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle bullet list">
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Add link">
              <Link2 className="h-4 w-4" />
            </Toggle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More formatting options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Italic className="mr-2 h-4 w-4" /> Italic
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Underline className="mr-2 h-4 w-4" /> Underline
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AlignLeft className="mr-2 h-4 w-4" /> Align Left
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          className="min-h-[200px] w-full rounded-md border p-3"
          placeholder="Input Text"
          aria-label="Content editor"
        />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-3 left-3 bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Write with May
        </Button>
      </div>
    </div>
  )
}

