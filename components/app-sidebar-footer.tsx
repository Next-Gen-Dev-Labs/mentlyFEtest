"use client";

import Link from "next/link";
import { UserTag } from "iconsax-reactjs";
import { SidebarFooter, useSidebar } from "./ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export const AppSidebarFooter = () => {
  const { state } = useSidebar();

  return (
    <SidebarFooter>
      {state === "expanded" ? (
        <div className="bg-sidebar-accent  mb-8 rounded-lg py-2.5 px-4 text-sidebar-accent-foreground">
          <UserTag className="size-5 mb-5" />
          <p className="text-xs font-bold">
            Got some questions, enquireies, or need help?
            <br />
            <Link
              href="#"
              className="underline block mt-6 underline-offset-2 font-normal text-[10px] text-[#F0C074]"
            >
              Visit Mently Help Desk Here
            </Link>
          </p>
        </div>
      ) : (
        <Tooltip>
          <TooltipTrigger
            className="size-5 text-[#F0C074] mb-8 mx-auto hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            asChild
          >
            <Link href="#">
              <UserTag className="size-5 mb-5" />
              <span className="sr-only">Help Desk</span>
            </Link>
          </TooltipTrigger>

          <TooltipContent side="right" className="text-xs">
            Mently Help Desk
          </TooltipContent>
        </Tooltip>
      )}

      {state === "expanded" ? (
        <div className="flex justify-between">
          <Label htmlFor="classic-mode">Switch to classic mode</Label>
          <Switch
            id="classic-mode"
            defaultChecked
            className="data-[state=checked]:bg-sidebar-primary data-[state=checked]:[&>span]:bg-sidebar-primary-foreground data-[state=unchecked]:bg-sidebar-accent data-[state=unchecked]:[&>span]:bg-sidebar-sidebar-accent-foreground/70 "
          />
        </div>
      ) : (
        <Tooltip>
          <TooltipTrigger className="mx-auto" asChild>
            <label>
              <Switch
                id="classic-mode"
                defaultChecked
                className="data-[state=checked]:bg-sidebar-primary data-[state=checked]:[&>span]:bg-sidebar-primary-foreground data-[state=unchecked]:bg-sidebar-accent data-[state=unchecked]:[&>span]:bg-sidebar-sidebar-accent-foreground/70 "
              />
              <span className="sr-only">Switch to classic mode</span>
            </label>
          </TooltipTrigger>

          <TooltipContent side="right" className="text-xs">
            Classic Mode
          </TooltipContent>
        </Tooltip>
      )}
    </SidebarFooter>
  );
};
