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
  visible: boolean;
  defaultVisible?: boolean;
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
    visible: true,
    id: 'programs',
    label: 'Programs',
    defaultVisible: true,
  },
  { 
    visible: true,
    id: 'group-calls',
    label: 'Group Calls',
    defaultVisible: true,
  },
  { 
    id: 'mentors',
    visible: true,
    label: 'Mentors',
    defaultVisible: true,
  },
  { 
    visible: true,
    defaultVisible: true,
    id: 'recent-activities',
    label: 'Recent Activities',
  },
  { 
    visible: true,
    id: 'application',
    label: 'Application',
    defaultVisible: true,
  },
  { 
    id: 'earnings',
    visible: false,
    label: 'Earnings',
  },
  { 
    id: 'forum',
    label: 'Forum',
    visible: false,
  },
  { 
    visible: false,
    id: 'program-analysis',
    label: 'Program Analysis',
  },
];
