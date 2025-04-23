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
    id: 'programs',
    label: 'Programs',
    visible: true,
    defaultVisible: true
  },
  { 
    id: 'group-calls',
    label: 'Group Calls',
    visible: true,
    defaultVisible: true
  },
  { 
    id: 'mentors',
    label: 'Mentors',
    visible: true,
    defaultVisible: true
  },
  { 
    id: 'recent-activities',
    label: 'Recent Activities',
    visible: true,
    defaultVisible: true
  },
  { 
    id: 'application',
    label: 'Application',
    visible: true,
    defaultVisible: true
  },
  { 
    id: 'earnings',
    label: 'Earnings',
    visible: false
  },
  { 
    id: 'forum',
    label: 'Forum',
    visible: false
  },
  { 
    id: 'program-analysis',
    label: 'Program Analysis',
    visible: false
  }
];