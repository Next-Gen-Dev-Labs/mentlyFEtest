import dynamic from "next/dynamic";
import { CSSProperties } from "react";

const widgets = [
	{
		key: "programs-widget",
		label: "Programs",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/programs"),
		),
	},
	{
		key: "group-calls-widget",
		label: "Group Calls",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/group-calls"),
		),
	},
	{
		key: "users-widget",
		label: "Users",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/users"),
		),
	},
	{
		key: "applications-widget",
		label: "Applications",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/applications"),
		),
	},
	{
		key: "mentors-widget",
		label: "Mentors",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/mentors"),
		),
	},
	{
		key: "recent-activities-widget",
		label: "Recent Activities",
		Component: dynamic<{ style?: CSSProperties }>(
			() =>
				import("@/components/tabs/home/components/widgets/recent-activities"),
		),
	},
	{
		key: "earnings-widget",
		label: "Earnings",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/earnings"),
		),
	},
	{
		key: "forum-widget",
		label: "Forum",
		Component: dynamic<{ style?: CSSProperties }>(
			() => import("@/components/tabs/home/components/widgets/forum"),
		),
	},
	{
		key: "program-analysis-widget",
		label: "Program Analysis",
		Component: dynamic<{ style?: CSSProperties }>(
			() =>
				import("@/components/tabs/home/components/widgets/program-analysis"),
		),
	},
] as const;

export default widgets;
