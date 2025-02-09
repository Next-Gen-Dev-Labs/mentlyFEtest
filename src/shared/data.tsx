import IconBriefcase from "@/assets/IconComponents/IconBriefcase";
import { FontSizeOption, SidebarItem } from "./models";
import IconDashboard from "@/assets/IconComponents/IconDashboard";
import IconCalender from "@/assets/IconComponents/IconCalender";
import IconLocation from "@/assets/IconComponents/IconLocation";

import IconTextBold from "@/assets/IconComponents/IconTextBold";
import IconTextItalic from "@/assets/IconComponents/IconTextItalic";
import IconTextUnderline from "@/assets/IconComponents/IconTextUnderline";
import IconTextSmallCaps from "@/assets/IconComponents/IconTextSmallCaps";
import IconTextAlignLeft from "@/assets/IconComponents/IconTextAlignLeft";
import IconTextAlignCenter from "@/assets/IconComponents/IconTextAlignCenter";
import IconTextAlignRight from "@/assets/IconComponents/IconTextAlignRight";
import IconTextAlignJustify from "@/assets/IconComponents/IconTextAlignJustify";
import IconTextTask from "@/assets/IconComponents/IconTextTask";

import IconTextEdit from "@/assets/IconComponents/IconTextEdit";
import IconBadge from "@/assets/IconComponents/IconBadge";
import IconYellowBriefcase from "@/assets/IconComponents/IconYellowBriefcase";
import IconCommunity from "@/assets/IconComponents/IconCommunity";
import IconConversation from "@/assets/IconComponents/IconConversation";
import IconCall from "@/assets/IconComponents/IconCall";
import IconChat from "@/assets/IconComponents/IconChat";

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    icon: <IconDashboard />,
    isDisabled: true,
  },
  { id: 2, label: "Programs", path: "/programs", icon: <IconDashboard /> },
  {
    id: 3,
    label: "Settings",
    path: "/settings",
    icon: <IconDashboard />,
    isDisabled: true,
  },
];

export const collapseData = [
  {
    id: 1,
    label: "Program Information Text 1",
    children: <p>Programs</p>,
  },
  {
    id: 2,
    label: "Program Information Text 2",
    children: <p>Programs</p>,
  },
];

export const programData = [
  {
    icon: <IconBriefcase />,
    text: "Mentorship Program",
  },
  {
    icon: <IconCalender />,
    text: "21/4/2024-21/5/2024",
  },
  {
    icon: <IconLocation />,
    text: "In Person",
  },
];

export const programInfoData = [
  {
    icon: <IconBadge />,
    text: "Content",
  },
  {
    icon: <IconYellowBriefcase />,
    text: "Content",
  },
  {
    icon: <IconCommunity />,
    text: "Content",
  },
  {
    icon: <IconConversation />,
    text: "Content",
  },
  {
    icon: <IconCall />,
    text: "Content",
  },
  {
    icon: <IconChat />,
    text: "Content",
  },
];

export const fontSizes: FontSizeOption[] = [
  { label: "Very Small", value: "1" },
  { label: "Small", value: "2" },
  { label: "Normal", value: "3" },
  { label: "Medium", value: "4" },
  { label: "Large", value: "5" },
  { label: "Very Large", value: "6" },
  { label: "Huge", value: "7" },
];

export const toolbarButtons = [
  { cmd: "", label: <IconTextEdit />, title: "Text" },
  { cmd: "bold", label: <IconTextBold />, title: "Bold" },
  { cmd: "italic", label: <IconTextItalic />, title: "Italic" },
  { cmd: "underline", label: <IconTextUnderline />, title: "Underline" },
  { cmd: "smallCaps", label: <IconTextSmallCaps />, title: "Small caps" },
  { cmd: "justifyLeft", label: <IconTextAlignLeft />, title: "Align Left" },
  {
    cmd: "justifyCenter",
    label: <IconTextAlignCenter />,
    title: "Align Center",
  },
  { cmd: "justifyRight", label: <IconTextAlignRight />, title: "Align Right" },
  {
    cmd: "justifyJustify",
    label: <IconTextAlignJustify />,
    title: "Align Justify",
  },
  { cmd: "insertUnorderedList", label: <IconTextTask />, title: "Bullet List" },
];
