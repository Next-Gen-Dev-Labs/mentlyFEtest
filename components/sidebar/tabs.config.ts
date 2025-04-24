import Home from "@/components/tabs/home";
import dynamic from "next/dynamic";

const tabItems = [
	{
		label: "Dashboard",
		icon: "solar:home-2-linear",
		key: "home-tab",
		Component: Home,
	},
	{
		label: "Programs",
		icon: "solar:book-2-linear",
		key: "programs-tab",
		Component: dynamic(() => import("@/components/tabs/programs")),
	},
	{
		label: "Activities",
		icon: "arcticons:emoji-bubbles",
		key: "activities-tab",
		Component: dynamic(() => import("@/components/tabs/activities")),
	},
	{
		label: "Users",
		icon: "solar:user-linear",
		key: "users-tab",
		Component: dynamic(() => import("@/components/tabs/users")),
	},
	{
		label: "Forums",
		icon: "solar:clipboard-text-linear",
		key: "forums-tab",
		Component: dynamic(() => import("@/components/tabs/forums")),
	},
	{
		label: "Finances",
		icon: "solar:wallet-2-linear",
		key: "finances-tab",
		Component: dynamic(() => import("@/components/tabs/finances")),
	},
	{
		label: "Rewards",
		icon: "solar:medal-star-linear",
		key: "rewards-tab",
		Component: dynamic(() => import("@/components/tabs/rewards")),
	},
	{
		label: "Analytics",
		icon: "solar:diagram-up-linear",
		key: "analytics-tab",
		disabled: true,
	},
	{
		label: "Settings",
		icon: "solar:settings-linear",
		key: "settings-tab",
		Component: dynamic(() => import("@/components/tabs/settings")),
	},
	{
		label: "Log Out",
		icon: "solar:logout-2-outline",
		key: "logout-action",
		action: (...args: unknown[]) => console.log(...args),
	},
] as const;

export default tabItems;
