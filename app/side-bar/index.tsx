"use client"
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Users,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  House,
  ShieldUser,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";



const navItems = [
    { name: "Dashboard", href: "/", icon:   LayoutDashboard   },
    { name: "Programs", href: "/programs", icon: BookOpen  },
    { name: "Activities", href: "/activities", icon: Activity },
    { name: "Users", href: "/users", icon: Users },
    { name: "Forums", href: "/forums", icon: MessageSquare },
    { name: "Finances", href: "/finances", icon: DollarSign },
    { name: "Rewards", href: "/rewards", icon: Award },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Log-out", href: "/Log-out", icon: LogOut },
  ]
  

const AppSideBar = () =>  {
    const {  setOpenMobile } = useSidebar()
    const router = useRouter(); 
    const handleNavigation = (path: string) => {
    setOpenMobile(false); // Close the sidebar
    router.push(path); // Client-side navigation (no refresh)
  };
  return (
    <Sidebar className=" text-white " variant="sidebar">
      <SidebarContent>
        <SidebarGroup className=" mb-[37px] mt-[30px] pl-6 ">
         <Image 
         src='https://res.cloudinary.com/dk5mfu099/image/upload/v1745361125/T4G23_Style_Guide_V2_Updated_2_1_umu0w1.png'
         alt="logo"
         width={116}
         height={116}
         />
        </SidebarGroup>
        <SidebarGroup className="">
          <SidebarGroupContent>
            <SidebarMenu  >
              {navItems.map((item,i) => (
                <SidebarMenuItem key={i} className=" rounded-md cursor-pointer   flex justify-center ">
                  <SidebarMenuButton asChild className="w-full    md:w-[207px] hover:bg-white h-[40px]  hover:text-[#1F0954]">
                    <Link href={item.href} 
                    onClick={()=>handleNavigation(`${item.href}`)}>
                      <div className="flex items-center gap-1    text-[#C2C2C2] ml-5  w-full h-full md:gap-5  ">
                        <item.icon className="h-5 w-4 " aria-hidden="true" />
                        <span className="first-letter:capitalize text-[12px] md:text-sm flex ">{item.name}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className=" mb-[47px] mt-[30px] gap-3 mx-auto w-[90%] flex flex-col p-2 rounded-[8px] bg-[#4c2073] ">
        <ShieldUser />
        <h2 className="text-sm">Got some questions, enquiries or need help?</h2>
        <Link href='#' className="text-[10px] text-[#F0C074] underline">Visit Mently Help Desk Here</Link>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSideBar