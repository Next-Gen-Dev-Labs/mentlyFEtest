import { UserOutline } from "@/components/ui/icons";
import {
  Award,
  Book,
  Bubble,
  ClipboardText,
  Diagram,
  EmptyWallet,
  Home2,
  LogoutCurve,
  Setting2,
  type Icon,
} from "iconsax-reactjs";
import { TProgramTag } from "./types";

export type LinkItem = {
  title: string;
  url: string;
  icon?: Icon;
  isActive?: boolean;
};

export interface NavItem extends LinkItem {
  items?: LinkItem[];
  comingSoon?: boolean;
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home2,
    isActive: true,
  },
  {
    title: "Programs",
    url: "#",
    icon: Book,
    isActive: false,
  },
  {
    title: "Activities",
    url: "#",
    icon: Bubble,
    isActive: false,
  },
  {
    title: "Users",
    url: "#",
    icon: UserOutline,
    isActive: false,
  },
  {
    title: "Forums",
    url: "#",
    icon: ClipboardText,
    isActive: false,
  },
  {
    title: "Finances",
    url: "#",
    icon: EmptyWallet,
    isActive: false,
  },
  {
    title: "Rewards",
    url: "#",
    icon: Award,
    isActive: false,
  },
  {
    title: "Analytics",
    url: "#",
    icon: Diagram,
    isActive: false,
    comingSoon: true,
  },
  {
    title: "Settings",
    url: "#",
    icon: Setting2,
    isActive: false,
    comingSoon: true,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogoutCurve,
    isActive: false,
    comingSoon: true,
  },
];

export const dummyData = {
  user: {
    email: "founder@techrity.com",
    name: "Techrity Founder",
    avatar: "",
    role: "Member",
  },

  workflows: [
    { id: 1, name: "Programs", isActive: true },
    { id: 2, name: "Group Calls", isActive: true },
    { id: 3, name: "Mentors", isActive: true },
    { id: 4, name: "Recent Activities", isActive: true },
    { id: 5, name: "Application", isActive: true },
    { id: 6, name: "Earnings", isActive: false },
    { id: 7, name: "Forum", isActive: false },
    { id: 8, name: "Program Analysis", isActive: false },
  ],

  usersAnaylytics: [
    { type: "students", users: 200 },
    { type: "mentors", users: 8 },
    { type: "programs", users: 22 },
    { type: "others", users: 10 },
  ],

  programs: [
    {
      cover: "/images/program-1.jpeg",
      title: "Fundamentals of User interface & Experience ",
      description:
        "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      tags: [{ name: "Group call", variant: "success" }] as TProgramTag[],
      hosts: [
        {
          name: "John Doe",
          image: "/avi/faith-0.png",
          role: "Mentor",
        },
        {
          name: "Jane Doe",
          image: "/avi/adeati.png",
          role: "Mentor",
        },
        { name: "Maxwell", image: "/avi/maxwell.png", role: "Mentor" },
      ],
      actions: ["View Details", "Analysis"],
    },
    {
      title: "Colour Hack Practical Group Call",
      description:
        "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      tags: [{ name: "Group call", variant: "success" }] as TProgramTag[],
      hosts: [
        {
          name: "Faith O",
          image: "/avi/faith-0.png",
          role: "Mentor",
        },
      ],
      actions: ["View Details", "Analysis"],
    },
    {
      title: "Colour Hack Practical Group Call",
      description:
        "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      tags: [{ name: "Group call", variant: "success" }] as TProgramTag[],
      hosts: [
        {
          name: "Self",
          image: "/avi/faith-0.png",
          role: "Mentor",
        },
      ],
      actions: ["View Details", "Analysis"],
    },
  ],
  calls: [
    {
      cover: "/images/program-1.jpeg",
      title: "Fundamentals of User interface & Experience ",
      status: { name: "Group call", variant: "success" } as TProgramTag,
      schedule: { date: "", time: "" },
      hosts: [
        {
          name: "John Doe",
          image: "/avi/faith-0.png",
          role: "Mentor",
        },
        {
          name: "Jane Doe",
          image: "/avi/adeati.png",
          role: "Mentor",
        },
        { name: "Maxwell", image: "/avi/maxwell.png", role: "Mentor" },
      ],
      group: { image: "", name: "UX Strategy  Study group" },
      actions: ["View Details", "Analysis"],
    },
    {
      title: "Fundamentals of User interface & Experience ",
      status: { name: "Group call", variant: "success" } as TProgramTag,
      schedule: { date: "Mon. Jul 30, 2024", time: "9:00 - 11:00AM" },
      hosts: [
        {
          name: "John Doe",
          image: "/avi/faith-0.png",
          role: "Mentor",
        },
        {
          name: "Jane Doe",
          image: "/avi/adeati.png",
          role: "Mentor",
        },
        { name: "Maxwell", image: "/avi/maxwell.png", role: "Mentor" },
      ],
      group: { image: "", name: "UX Strategy  Study group" },
      actions: ["View Details", "Analysis"],
    },
    {
      title: "Fundamentals of User interface & Experience ",
      status: { name: "Group call", variant: "success" } as TProgramTag,
      schedule: { date: "Mon. Jul 30, 2024", time: "9:00 - 11:00AM" },
      hosts: [
        {
          name: "John Doe",
          image: "/avi/faith-0.png",
          role: "Mentor",
        },
        {
          name: "Jane Doe",
          image: "/avi/adeati.png",
          role: "Mentor",
        },
        { name: "Maxwell", image: "/avi/maxwell.png", role: "Mentor" },
      ],
      group: { image: "", name: "UX Strategy  Study group" },
      actions: ["View Details", "Analysis"],
    },
  ],
};
