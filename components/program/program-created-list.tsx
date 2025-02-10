import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export function ProgramCreatedList() {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {["Program Information Text 1", "Program Information Text 2"].map(
        (title, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-lg border bg-[#F9FAFB] px-4 py-1"
          >
            <div className="flex items-center">
              <AccordionTrigger className="w-full flex-1 py-4 text-base font-medium text-primary hover:no-underline">
                {title}
              </AccordionTrigger>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <AccordionContent className="py-4">
              Content for {title}
            </AccordionContent>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
}
