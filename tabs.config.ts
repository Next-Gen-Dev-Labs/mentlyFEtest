const tabItems = [
	{ label: "Dashboard", icon: "solar:home-2-linear", key: "home" },
	{ label: "Programs", icon: "solar:book-2-linear", key: "programs" },
	{ label: "Activities", icon: "arcticons:emoji-bubbles", key: "activities" },
	{ label: "Users", icon: "solar:user-linear", key: "users" },
	{ label: "Forums", icon: "solar:clipboard-text-linear", key: "forums" },
	{ label: "Finances", icon: "solar:wallet-2-linear", key: "finances" },
	{ label: "Rewards", icon: "solar:medal-star-linear", key: "rewards" },
	{
		label: "Analytics",
		icon: "solar:diagram-up-linear",
		key: "analytics",
		disabled: true,
	},
	{ label: "Settings", icon: "solar:settings-linear", key: "settings" },
] as const;

export default tabItems;
