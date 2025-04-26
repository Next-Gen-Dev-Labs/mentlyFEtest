import { createId } from "@paralleldrive/cuid2";

const sidebarItems = [
	{
		label: "Dashboard",
		icon: "solar:home-2-linear",
		href: "/dashboard",
		type: "link",
	},
	{
		label: "Programs",
		icon: "solar:book-2-linear",
		href: "/dashboard/programs",
		type: "link",
	},
	{
		label: "Activities",
		icon: "arcticons:emoji-bubbles",
		href: "/dashboard/activities",
		type: "link",
	},
	{
		label: "Users",
		icon: "solar:user-linear",
		href: "/dashboard/users",
		type: "link",
	},
	{
		label: "Forums",
		icon: "solar:clipboard-text-linear",
		href: "/dashboard/forums",
		type: "link",
	},
	{
		label: "Finances",
		icon: "solar:wallet-2-linear",
		href: "/dashboard/finances",
		type: "link",
	},
	{
		label: "Rewards",
		icon: "solar:medal-star-linear",
		href: "/dashboard/rewards",
		type: "link",
	},
	{
		label: "Analytics",
		icon: "solar:diagram-up-linear",
		type: "unconfirmed",
	},
	{
		label: "Settings",
		icon: "solar:settings-linear",
		href: "/dashboard/settings",
		type: "link",
	},
	{
		label: "Log Out",
		icon: "solar:logout-2-outline",
		type: "action",
		action: (...args: unknown[]) => console.log(...args),
	},
] as const;

export default sidebarItems.map((sl) => ({ id: createId(), ...sl }));
