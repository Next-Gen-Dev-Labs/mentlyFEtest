import AddCallIcon from "../assets/icons/AddCallIcon";
import AwardIcon from "../assets/icons/AwardIcon";
import BadgeIcon from "../assets/icons/BadgeIcon";
import BookIcon from "../assets/icons/BookIcon";
import BriefcaseIcon from "../assets/icons/BriefcaseIcon";
import BubbleIcon from "../assets/icons/BubbleIcon";
import ClipboardTextIcon from "../assets/icons/ClipboardTextIcon";
import DiagramIcon from "../assets/icons/DiagramIcon";
import EmptyWalletIcon from "../assets/icons/EmptyWalletIcon";
import ForumIcon from "../assets/icons/ForumIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import NoteIcon from "../assets/icons/NoteIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import { SidebarItemProps } from "../components/sidebar/SidebarItem";

export const sidebarItems: SidebarItemProps[] = [
  { icon: <HomeIcon />, route: "/" },
  { icon: <BookIcon />, route: "/create-program" },
  { icon: <BubbleIcon />, route: "" },
  { icon: <ClipboardTextIcon />, route: "" },
  { icon: <EmptyWalletIcon />, route: "" },
  { icon: <AwardIcon />, route: "" },
  { icon: <DiagramIcon />, route: "" },
  { icon: <SettingsIcon />, route: "" },
  { icon: <LogoutIcon />, route: "" },
];

export const programItemIcons: React.ReactNode[] = [
  <BadgeIcon key={0} />,
  <BriefcaseIcon key={1} />,
  <PeopleIcon key={2} />,
  <NoteIcon key={3} />,
  <AddCallIcon key={4} />,
  <ForumIcon key={5} />,
];
