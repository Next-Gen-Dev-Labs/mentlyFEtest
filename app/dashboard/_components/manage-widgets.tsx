"use client";

import { WorkflowList } from "@/app/_components/workflow";
import { Button } from "@/components/ui/button";
import { GalleryViewIcon, ThumbnailViewIcon } from "@/components/ui/icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState } from "react";

type ManageWidgetsProps = {
  view?: "gallery" | "thumbnail";
  onViewChange?: (view: "gallery" | "thumbnail") => void;
  className?: string;
};
export const ManageWidgets = ({ className }: ManageWidgetsProps) => {
  const [openWorkflowManagement, setOpenWorkflowManagement] = useState(false);

  return (
    <>
      <div
        className={cn("flex items-center gap-5 max-sm:flex-wrap", className)}
      >
        <Button
          // data-active="true"
          size="icon"
          className="rounded-xs bg-muted hover:bg-muted shadow-none data-[active=true]:bg-secondary data-[active=true]:hover:bg-secondary data-[active=true]:text-primary data-[active=true]:border-primary border border-transparent transition-colors text-muted-foreground"
        >
          <GalleryViewIcon className="size-6" />
          <span className="sr-only">Gallery View</span>
        </Button>

        <Button
          type="button"
          data-active="true"
          size="icon"
          className="rounded-xs bg-muted hover:bg-muted shadow-none data-[active=true]:bg-secondary data-[active=true]:hover:bg-secondary data-[active=true]:text-primary data-[active=true]:border-primary border border-transparent transition-colors text-muted-foreground"
        >
          <ThumbnailViewIcon className="size-4.5" />
          <span className="sr-only">Thumbnail View</span>
        </Button>

        <Sheet
          open={openWorkflowManagement}
          onOpenChange={setOpenWorkflowManagement}
        >
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="lg"
              className="text-popover-foreground hover:bg-secondary rounded-xs font-bold"
            >
              Manage Widgets
            </Button>
          </SheetTrigger>

          <SheetContent
            backDropClassName="bg-transparent backdrop-blur"
            className="max-w-[450px] [&>.sheetClose]:hidden py-14 border-none px-6 md:px-8"
          >
            <SheetHeader className="p-0 mb-8">
              <div className="h-9 w-full border-b border-[#8D8D8D]/60 items-center flex justify-end">
                <SheetClose className="text-[#8D8D8D]/60">
                  <XIcon />
                </SheetClose>
              </div>
              <h2 className="mt-16 text-[2rem] text-primary font-bold text-">
                Manage Widgets
              </h2>
              <p className="text-[#374557] text-xs">
                Personalize your dashboard by managing widgets add, remove, or
                reorder them to fit your workflow.
              </p>
            </SheetHeader>
            <div>
              <WorkflowList
                onSaveChanges={() => setOpenWorkflowManagement(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
