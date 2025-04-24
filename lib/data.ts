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
};
