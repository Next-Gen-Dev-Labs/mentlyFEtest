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
} from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"

export function TextEditorToolbar() {
  return (
    <div className="flex flex-wrap gap-1 p-1 border rounded-md bg-white">
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
  )
}

