import { ArrowRight2 } from "iconsax-reactjs";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { NavItem } from "@/lib/data";
import Link from "next/link";
import React from "react";

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-2">
        {items.map((item) =>
          item.items ? (
            <React.Fragment key={item.title}>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>

              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.url ? (
                        <Link
                          href={item.url}
                          className="flex items-center gap-2"
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </Link>
                      ) : (
                        <>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </>
                      )}
                      <ArrowRight2 className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </React.Fragment>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                data-active={item.isActive}
                className="data-[collapsible=expanded]:px-8 data-[collapsible=expanded]:py-[1.625rem]"
                tooltip={item.title}
                asChild
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
