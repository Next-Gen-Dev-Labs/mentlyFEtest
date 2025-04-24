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

export interface ApplicationItem {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface WidgetItem {
  id: string;
  label: string;
  isUser?: boolean;
  visible?: boolean;
  gridPosition?: string;
  defaultVisible?: boolean;
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
    visible: true,
    label: 'Programs',
    defaultVisible: true,
    gridPosition: 'lg:col-span-1 lg:row-span-2 col-start-1 row-start-1'
  },
  {
    id: 'group',
    visible: true,
    label: 'Group Calls',
    defaultVisible: true,
    gridPosition: 'lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-1'
  },
  {
    visible: true,
    id: 'application',
    label: 'Application',
    defaultVisible: true,
    gridPosition: 'lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-2'
  },
  {
    id: 'mentor',
    visible: true,
    label: 'Mentors',
    defaultVisible: true,
    gridPosition: 'lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-2'
  },
  {
    id: 'recent',
    visible: true,
    defaultVisible: true,
    label: 'Recent Activities',
    gridPosition: 'lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-3'
  },
  {
    id: 'user',
    isUser: true,
    label: 'Users',
    gridPosition: 'lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-3'
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

export const applicationItems: ApplicationItem[] = [
  {
    id: '1',
    name: 'Adeati Samuel',
    image: '/profile7.webp',
    email: 'adeatisamuel@gmail.com',
  },
  {
    id: '2',
    name: 'Maxwell Smith',
    image: '/profile3.webp',
    email: 'maxwellsmith@gmail.com',
  },
  {
    id: '3',
    name: 'Adeati Samuel',
    image: '/profile7.webp',
    email: 'adeatisamuel@gmail.com',
  },
  {
    id: '4',
    name: 'Maxwell Smith',
    image: '/profile3.webp',
    email: 'maxwellsmith@gmail.com',
  },
];
