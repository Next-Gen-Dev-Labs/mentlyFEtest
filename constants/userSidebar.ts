import { IconType } from "react-icons";
import { RiHome5Line } from "react-icons/ri";
import { LuBookText, LuClipboardList  } from "react-icons/lu";
import { MdOutlineBubbleChart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";

export interface UserSideBarType {
    path: string;
    icon?: IconType;
    name: string;
  }


export const UserSideBar: UserSideBarType[] = [
    { path: "", name: "Dashboard", icon: RiHome5Line },
    { path: "programs", name: "Programs", icon: LuBookText },
    { path: "activities", name: "Activities", icon: MdOutlineBubbleChart },
    { path: "users", name: "Users", icon: HiOutlineUser },
    { path: "forums", name: "Forums", icon: LuClipboardList },
    { path: "finances", name: "finances", icon: IoWalletOutline },
    { path: "rewards", name: "Rewards", icon: FaAward  },
    { path: "analytics", name: "Analytics", icon: BsGraphUp },
    { path: "settings", name: "Settings", icon: IoSettingsOutline  },
   
  ];