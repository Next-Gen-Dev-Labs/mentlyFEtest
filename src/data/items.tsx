import React from "react";
import { LuBookText } from "react-icons/lu";
import { FiGift, FiSettings } from "react-icons/fi";
import { RiHome5Line, RiLineChartLine } from "react-icons/ri";
import { IoPersonOutline, IoWalletOutline } from "react-icons/io5";
import { TbChartBubble, TbClipboardText, TbLogout2 } from "react-icons/tb";

export interface NavItem {
  label: string;
  badge?: string;
  active?: boolean;
  icon: React.ReactNode;
}

export interface WidgetItem {
  id: string;
  label: string;
  isUser?: boolean;
  gridPosition?: string;
}

export const navItems: NavItem[] = [
  { active: true, label: "Dashboard", icon: <RiHome5Line /> },
  { label: "Programs", icon: <LuBookText /> },
  { label: "Activities", icon: <TbChartBubble /> },
  { label: "Users", icon: <IoPersonOutline /> },
  { label: "Forums", icon: <TbClipboardText /> },
  { label: "Finances", icon: <IoWalletOutline /> },
  { label: "Rewards", icon: <FiGift /> },
  { label: "Analytics", badge: "Coming Soon", icon: <RiLineChartLine /> },
  { label: "Settings", icon: <FiSettings /> },
  { label: "Logout", icon: <TbLogout2 /> },
];

export const widgetItems: WidgetItem[] = [
  {
    id: 'program',
    label: 'Programs',
    gridPosition: 'col-span-1 row-span-2 col-start-1 row-start-1'
  },
  {
    id: 'group',
    label: 'Group Calls',
    gridPosition: 'col-span-2 row-span-1 col-start-2 row-start-1'
  },
  {
    id: 'application',
    label: 'Application',
    gridPosition: 'col-span-1 row-span-2 col-start-2 row-start-2'
  },
  {
    id: 'mentor',
    label: 'Mentors',
    gridPosition: 'col-span-1 row-span-1 col-start-3 row-start-2'
  },
  {
    id: 'recent',
    label: 'Recent Activities',
    gridPosition: 'col-span-1 row-span-1 col-start-3 row-start-3'
  },
  {
    id: 'user',
    isUser: true,
    label: 'Users',
    gridPosition: 'col-span-1 row-span-1 col-start-1 row-start-3'
  },
  {
    id: 'earnings',
    label: 'Earnings',
  },
  {
    id: 'forum',
    label: 'Forum',
  },
  {
    id: 'program-analysis',
    label: 'Program Analysis',
  },
];
