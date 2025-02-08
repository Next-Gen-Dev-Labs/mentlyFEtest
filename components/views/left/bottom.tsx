import { ArrowDropDown } from "@/components/icons/arrowdown";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

type AccordionProps = {
  heading: string;
};

export default function Bottom({ items }: { items: AccordionProps[] }) {
  return (
    <div className="mt-16 flex flex-col gap-9">
      <ul className="flex flex-col gap-2">
        {items.map(({ heading }, index) => (
          <li key={index}>
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index}`} className="border-none max-w-[325px]">
                <AccordionTrigger className="border bg-mently-blue/5 border-mently-blue/20 rounded-md px-4 py-3 pr-10 relative h-12 hover:no-underline">
                  <span className="font-bold text-mently-blue/80 capitalize text-sm">{heading}</span>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical className="stroke-mently-blue/30 absolute right-3 top-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute left-[5rem] top-2 rounded-none text-gray-400">
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </AccordionTrigger>
                <AccordionContent className="font-semibold text-xs p-2 rounded-md">
                  <span>Information about the program</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-baseline gap-2 justify-end mt-3 x-md:flex-row">
        <button className="appearance-none bg-none text-mently-blue/40 flex-center p-3 rounded-md flex items-center gap-2 text-[0.9rem] leading-5 w-full font-bold max-w-52">
          Go Back
        </button>
        <button
          type="button"
          className="appearance-none bg-mently-blue text-white flex-center p-3 rounded-md flex items-center gap-2 text-[0.9rem] leading-5 w-full max-w-52"
        >
          <span className="font-medium">Save & Proceed</span>
          <ArrowDropDown className="fill-white w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
