import { ChevronDown, ChevronLeft, Plus } from "lucide-react";

import { CopyIcon } from "@/components/icons/CopyIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { OptionPopover } from "@/components/option-popover";
import { Preview } from "@/components/preview";
import { TextEditor } from "@/components/text-editor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Alert from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputTIcon } from "@/components/icons/InputT";

export default function Home() {
  const accordionData = [
    {
      id: "1",
      title: "Program Information Text 1",
      content: "Program Information Content 1",
    },
    {
      id: "2",
      title: "Program Information Text 2",
      content: "Program Information Conent 2",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-8 md:gap-6 h-full">
      <div className="col-span-full md:col-span-5 p-2 md:p-8 shadow space-y-8">
        <div className="flex items-center justify-between">
          <Button variant={"link"} className="text-secondary text-base p-0">
            <ChevronLeft /> Back to Home
          </Button>
          <div className="flex gap-4 items-center">
            <OptionPopover options={["Delete", "Clear"]}>
              <SettingsIcon />
            </OptionPopover>

            <CopyIcon />
            <Button size={"sm"} className="rounded-full">
              <ShareIcon /> Share
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Program Information</h1>
            <p className="text-sm text-muted">Describe Section Title</p>
          </div>
          <div className="flex gap-2 border border-primary rounded-lg">
            <Select>
              <SelectTrigger className="w-[120px] h-14 border-none">
                <SelectValue placeholder="" />
                <InputTIcon />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lorem">Lorem</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Describe Section Title e.g What you stand to learn"
              className="h-14 border-none"
            />
          </div>
          <Alert description="Provide your prefered title for this section i.e What’s in this Program for you?" />
          <TextEditor />
          <Alert description="Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.." />
          <div className="space-y-4">
            <Button className="h-auto w-full" variant="outline">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-base">
                  <Plus /> <span>Add new section</span>
                </div>
                <p className="text-xs">(maximum number of sections to add is 3)</p>
              </div>
            </Button>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-muted">
                Show this section when Published
              </label>
            </div>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {accordionData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex gap-2">
            <Button size="lg" variant="ghost" disabled className="flex-1 text-base h-14">
              Go Back
            </Button>
            <Button size="lg" className="flex-1 text-base h-14">
              Save & Proceed <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-full md:col-span-7 h-full p-2 md:py-8 md:px-12">
        <Preview />
      </div>
    </div>
  );
}
