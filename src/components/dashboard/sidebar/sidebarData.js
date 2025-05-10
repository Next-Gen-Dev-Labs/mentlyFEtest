import ActivitiesIcon from "@/components/dynamicSvgs/ActivitiesIcon";
import AnalyticsIcon from "@/components/dynamicSvgs/AnalyticsIcon";
import FinancesIcon from "@/components/dynamicSvgs/FinancesIcon";
import ForumsIcon from "@/components/dynamicSvgs/ForumsIcon";
import HomeIcon from "@/components/dynamicSvgs/HomeIcon";
import LogoutIcon from "@/components/dynamicSvgs/LogoutIcon";
import ProgramsIcon from "@/components/dynamicSvgs/ProgramsIcon";
import RewardsIcon from "@/components/dynamicSvgs/RewardsIcon";
import SettingsIcon from "@/components/dynamicSvgs/SettingsIcon";
import UserIcon from "@/components/dynamicSvgs/UserIcon";

let id = 0;
export const sidebarData = [
  {
    id: id++,
    soon: false,
    name: "Dashboard",
    icon: (obj) => {
      return (
        <HomeIcon
          color={obj?.color }
          height={obj?.height }
          width={obj?.width }
          onClick={obj?.onClick }
        />
      );
    },
    active: true,
    href: "/dashboard",
  },
  {
    id: id++,
    soon: false,
    name: "Programs",
    icon: ( obj ) => {
      return (
        <ProgramsIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/programs",
  },
  {
    id: id++,
    soon: false,
    name: "Activities",
    icon: ( obj ) => {
      return (
        <ActivitiesIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/activities",
  },
  {
    id: id++,
    soon: false,
    name: "Users",
    icon: ( obj ) => {
      return (
        <UserIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/users",
  },
  {
    id: id++,
    soon: false,
    name: "Forums",
    icon: ( obj ) => {
      return (
        <ForumsIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/forums",
  },
  {
    id: id++,
    soon: false,
    name: "Finances",
    icon: ( obj ) => {
      return (
        <FinancesIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/finances",
  },
  {
    id: id++,
    soon: false,
    name: "Rewards",
    icon: ( obj ) => {
      return (
        <RewardsIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/rewards",
  },
  {
    id: id++,
    soon: "Coming Soon",
    name: "Analytics",
    icon: ( obj ) => {
      return (
        <AnalyticsIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/analytics",
  },
  {
    id: id++,
    soon: false,
    name: "Settings",
    icon: ( obj ) => {
      return (
        <SettingsIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "/dashboard/settings",
  },
  {
    id: id++,
    soon: false,
    name: "Log Out",
    icon: ( obj ) => {
      return (
        <LogoutIcon
        color={obj?.color }
        height={obj?.height }
        width={obj?.width }
        onClick={obj?.onClick }
        />
      );
    },
    active: false,
    href: "#",
  },
];
