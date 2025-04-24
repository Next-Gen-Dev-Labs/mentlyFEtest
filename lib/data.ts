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
    avatar: "/techrity-icon.svg",
    role: "Member",
  },
};
