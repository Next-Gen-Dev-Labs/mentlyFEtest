"use client";

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
  ListCheck,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatherIcon } from "./icons/FeatherIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DocIcon } from "./icons/DocIcon";

export function TextEditor() {
  const icons = [
    Bold,
    Italic,
    Underline,
    Strikethrough,
    List,
    ListOrdered,
    AlignLeft,
    AlignCenter,
    AlignJustify,
    AlignRight,
    ListCheck,
    Quote,
    ImageIcon,
    Link2,
  ];
  return (
    <div className="border rounded-md">
      <div className="flex flex-1 flex-wrap gap-1 border rounded-md">
        <div className="flex items-center gap-2 py-2">
          <Select>
            <SelectTrigger className="w-[100px] border-none ">
              <SelectValue placeholder="" />
              <DocIcon />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lorem">Lorem</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-wrap items-center gap-2 border-l rounded">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center h-9 px-1 hover:bg-gray-100 cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          className="min-h-[200px] w-full rounded-md p-4 focus:outline-none focus:ring-0"
          placeholder="Input Text"
        />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 left-4 bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
        >
          <FeatherIcon className="h-4 w-4" />
          Write with May
        </Button>
      </div>
    </div>
  );
}
