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

export interface ProgramItem {
  type: string;
  image: string;
  title: string;
  hostedBy: string;
  typeColor: string;
  mentors: { alt: string; src: string; tooltip: string; }[];
}

export interface GroupCallItem {
  date: string;
  time: string;
  image: string;
  title: string;
  status: 'ongoing' | 'upcoming';
  group: { name: string; type: string; };
  mentors: { alt: string; src: string; tooltip: string; }[];
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
  { id: 'earnings', label: 'Earnings' },
  { id: 'forum', label: 'Forum' },
  { id: 'program-analysis', label: 'Program Analysis' },
];

export const programItems: ProgramItem[] = [
  {
    type: "Bootcamp",
    hostedBy: "Mentors",
    typeColor: "#0077FF",
    image: "/widget1.webp",
    title: "Fundamentals of User Interface & Experience",
    mentors: [
      { alt: "Mentor 1", src: "/profile1.webp", tooltip: "Sam Wilson" },
      { alt: "Mentor 2", src: "/profile2.webp", tooltip: "Alex Johnson" },
      { alt: "Mentor 3", src: "/profile3.webp", tooltip: "Taylor Smith" }
    ],
  },
  {
    type: "Group Call",
    typeColor: "#008000",
    image: "/widget2.webp",
    hostedBy: "Faith Okolo",
    title: "Colour Hack Practical Group Call",
    mentors: [{ alt: "Mentor 1", src: "/profile4.webp", tooltip: "Faith Okolo" }],
  },
  {
    hostedBy: "Self",
    type: "Group Call",
    typeColor: "#008000",
    image: "/widget2.webp",
    title: "Colour Hack Practical Group Call",
    mentors: [{ alt: "Mentor 1", src: "/profile4.webp", tooltip: "Self" }],
  }
];

export const groupCallItems: GroupCallItem[] = [
  {
    status: "ongoing",
    time: "9:00 - 11:00AM",
    image: "/widget3.webp",
    date: "Mon. Jul 30, 2024",
    title: "Weekly Meeting - Product Demo Review with Testers",
    group: { type: "Study Group", name: "UX Strategy Study Group" },
    mentors: [
      { alt: "Mentor 1", src: "/profile1.webp", tooltip: "Sam Wilson" },
      { alt: "Mentor 2", src: "/profile2.webp", tooltip: "Alex Johnson" },
      { alt: "Mentor 3", src: "/profile3.webp", tooltip: "Taylor Smith" }
    ]
  },
  {
    status: "upcoming",
    time: "9:00 - 11:00AM",
    image: "/widget4.webp",
    date: "Mon. Jul 30, 2024",
    title: "Weekly Meeting - Product Demo Review with Testers",
    group: { type: "Study Group", name: "UX Strategy Study Group" },
    mentors: [
      { alt: "Mentor 1", src: "/profile1.webp", tooltip: "Sam Wilson" },
      { alt: "Mentor 2", src: "/profile2.webp", tooltip: "Alex Johnson" },
      { alt: "Mentor 3", src: "/profile3.webp", tooltip: "Taylor Smith" }
    ]
  },
  {
    status: "ongoing",
    image: "/widget5.webp",
    time: "9:00 - 11:00AM",
    date: "Mon. Jul 30, 2024",
    title: "Weekly Meeting - Product Demo Review with Testers",
    group: { type: "Study Group", name: "UX Strategy Study Group" },
    mentors: [
      { alt: "Mentor 1", src: "/profile1.webp", tooltip: "Sam Wilson" },
      { alt: "Mentor 2", src: "/profile2.webp", tooltip: "Alex Johnson" },
      { alt: "Mentor 3", src: "/profile3.webp", tooltip: "Taylor Smith" }
    ]
  }
];
