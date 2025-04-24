
import { TbChartBubble,  TbWallet, TbAward, TbSettings, TbLogout2 } from "react-icons/tb";
import { LuBookText } from "react-icons/lu";
import { RiHome4Line } from "react-icons/ri";
import { FaChartLine, FaRegUser } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

export const Navigations = [
  {nav: 'Dashboard', icon: RiHome4Line },
  {nav: 'Programs', icon: LuBookText },
  {nav: 'Activities', icon: TbChartBubble},
  {nav: 'Users', icon: FaRegUser},
  {nav: 'Forums', icon: HiOutlineClipboardList},
  {nav: 'Finances', icon: TbWallet},
  {nav: 'Rewards', icon: TbAward},
  {nav: 'Analytics', icon: FaChartLine},
  {nav: 'Settings', icon: TbSettings},
  {nav: 'Log Out', icon: TbLogout2},
]