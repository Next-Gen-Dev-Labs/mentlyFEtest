import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BellIcon, ChevronDown } from "lucide-react";
import Link from "next/link";

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootDashboardLayout({ children }: RootLayoutType) {
  return (
    <SidebarProvider suppressHydrationWarning>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-secondary flex sm:h-20 h-[7rem] shrink-0 items-center gap-2 w-full transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 text-foreground sticky top-0 z-50 border-b">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            <div>
              <SidebarTrigger className="pl-4 sm:p-0" />
              {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
            </div>
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
            <div className="flex sm:gap-4 gap-2 items-center">
              <button>
                <BellIcon size={22} />
              </button>

              <Menubar className="border-none shadow-none h-full focus:bg-transparent bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="h-fit data-[state=open]:bg-transparent data-[state=open]:shadow-none cursor-pointer sm:pr-3 pr-0">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="sm:flex flex-col gap-0 text-start justify-start hidden">
                        <p>Godwin Jimmy</p>
                        <span>
                          Free Plan{" "}
                          <Link href={"#"} className="text-blue-500 text-base">
                            Upgrade
                          </Link>
                        </span>
                      </div>
                      <ChevronDown className="sm:block hidden" />
                    </div>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="focus:bg-transparent bg-transparent">
                      <div className="lex flex-col gap-0 text-start justify-start">
                        <p>Godwin Jimmy</p>
                        <span>
                          Free Plan{" "}
                          <Link href={"#"} className="text-blue-500 text-base">
                            Upgrade
                          </Link>
                        </span>
                      </div>
                    </MenubarItem>
                    <Separator className="my-3 px-2" />
                    <MenubarItem className="focus:bg-transparent">
                      <Button variant={"destructive"} className="float-right">
                        Logout
                      </Button>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 mt-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
