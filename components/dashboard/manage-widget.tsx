import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { widgets } from "@/data";

import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const ManageWidget = () => {
  return (
    <div className="flex py-5">
      <div className="ml-auto flex gap-5 px-5">
        <Image src={"/image-bar.svg"} width={20} height={20} alt="widget" />
        <Image src={"/images.svg"} width={20} height={20} alt="widget" />
        <Sheet>
          <SheetTrigger className="font-extrabold text-xs sm:text-lg cursor-pointer">
            Manage Widget
          </SheetTrigger>
          <SheetContent className="overflow-y-auto pb-10 scrollbar-none gap-0">
            <SheetHeader>
              <Separator className="h-3 mt-8" orientation="horizontal" />
              <SheetTitle className="text-brand-blue text-xl mt-5 sm:text-3xl font-extrabold">
                Manage Widget
              </SheetTitle>
              <SheetDescription className="text-xs sm:text-lg">
                Personalize your dashboard by managing widgets add, remove, or
                reorder them to fit your workflow.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3 p-4">
              {widgets.map((widget, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <Image
                    src={"/bars.svg"}
                    width={20}
                    height={20}
                    alt="bar"
                    className="size-4 rounded"
                  />
                  <p className="sm:text-base text-sm font-semibold">{widget}</p>
                  <Checkbox className="ml-auto size-4 sm:size-5" />
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-5 gap-3 sm:gap-5 text-white px-5 md:px-10 font-semibold w-full">
              <Button className="w-full md:w-1/2 bg-brand-blue py-2 sm:py-5 hover:bg-brand-blue cursor-pointer font-semibold text-xs sm:text-base">
                Save Changes
              </Button>
              <Button
                variant={"outline"}
                className="w-full md:w-1/2 sm:text-base font-semibold py-2 sm:py-5 text-xs text-brand-blue cursor-pointer"
              >
                Reset to Default
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
