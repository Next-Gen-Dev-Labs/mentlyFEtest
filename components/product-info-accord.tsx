"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, EllipsisVerticalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

const ProductAccordion = AccordionPrimitive.Root;

const ProductAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));

ProductAccordionItem.displayName = "ProductAccordionItem";

const ProductAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <div className="flex gap-4 items-center">
        <ChevronDown
          className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200"
          size={45}
        />
        <Menubar className="border-none shadow-none h-full focus:bg-transparent bg-transparent p-0">
          <MenubarMenu>
            <MenubarTrigger className="bg-transparent">
              <EllipsisVerticalIcon
                className="h-6 w-6 shrink-0 text-muted-foreground"
                size={45}
              />
            </MenubarTrigger>
            <MenubarContent className="min-w-20">
              <MenubarItem>Edit</MenubarItem>
              <MenubarItem>Delete</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

ProductAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const ProductAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

ProductAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  ProductAccordion,
  ProductAccordionItem,
  ProductAccordionTrigger,
  ProductAccordionContent,
};
