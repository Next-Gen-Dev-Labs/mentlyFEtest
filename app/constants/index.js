export const SIDENAV = {
	mascot: "/assets/ted.png",
	logo: "/assets/logo.svg",
	sidebar: "/assets/sidebaricon.svg",
	navitems: [
		{
			icon: "/assets/dashboard.svg",
			name: "Dashboard",
		},
		{
			icon: "/assets/programs.svg",
			activeicon: "/assets/programsactive.svg",
			name: "Programs",
		},
		{
			icon: "/assets/activities.svg",
			activeicon: "/assets/activitiesactive.svg",
			name: "Activities",
		},
		{
			icon: "/assets/finances.svg",
			activeicon: "/assets/financesactive.svg",
			name: "Finances",
		},
		{
			icon: "/assets/achievements.svg",
			activeicon: "/assets/achievementsactive.svg",
			name: "Achievements",
		},
		{
			icon: "/assets/analytics.svg",
			activeicon: "/assets/analyticsactive.svg",
			name: "Analytics",
			tag: "Coming Soon",
		},
		{
			icon: "/assets/setting.svg",
			activeicon: "/assets/settingactive.svg",
			name: "Setting",
		},
		{
			icon: "/assets/logout.svg",
			activeicon: "/assets/logoutactive.svg",
			name: "Log Out",
		},
	],
	help: {
		icon: "/assets/usertag.svg",
		text: "Got some questions, enquiries or need help?",
		link: "Visit Mently Help Desk Here",
	},
	mode: "Switch to Classic Mode",
};

export const TOPNAV = {
	logo: "/assets/logodark.svg",
	notification: "/assets/notifications.svg",
	userpic: "/assets/profilepic.png",
	name: "Godwin Jimmy",
	plan: "Free Plan",
	upgrade: "Upgrade",
	dropdown: "/assets/arrow-down.svg",
	sidebar: "/assets/sidebaricondark.svg",
};

export const DASHBOARD = {
	alert: {
		icon: "/assets/rocket.png",
		text: "Congratulations. Your Account has been Verified. Start your Mentorship Journey.",
		close: "/assets/close.svg",
	},
	time: "(Local time).",
	welcome: {
		heading: "Dashboard",
		text: "Welcome back, Jimmy!",
	},
	stats: [
		{
			type: "Total Registered Students",
			value: "50",
			unit: "Students",
		},
		{
			type: "Pending Applications",
			value: "24",
			unit: "",
		},
		{
			type: "My Earnings",
			value: "50,000",
			unit: "NGN",
		},
		{
			type: "Active Programs",
			value: "4",
			unit: "",
		},
	],
	program: {
		icon: "/assets/plus.svg",
		text: "Create a  Program",
	},
	assessments: {
		heading: "Submitted Assessments",
		submissions: [
			{
				name: "Mideola O",
				week: "submitted Week 2  Assessment.",
				time: "5 min ago",
			},
			{
				name: "Olasukanmi",
				week: "submitted Week 2  Assessment.",
				time: "10 min ago",
			},
			{
				name: "Bright Ndukwe",
				week: "submitted Week 2  Assessment.",
				time: "25 min ago",
			},
			{
				name: "Prosper Okeke",
				week: "submitted Week 2  Assessment.",
				time: "40 min ago",
			},
		],
	},
	more: "/assets/more.svg",
	leaderboard: {
		heading: "Leaderboard",
		tab: ["This Week", "Past Week", "Custom"],
		leadericon: "/assets/solar_cup-bold.svg",
		participants: [
			{
				name: "Marsha Fisher",
				points: "36pts",
				image: "/assets/user1.jpg",
				tab: "This Week",
			},
			{
				name: "Mideola Rejoice",
				points: "36pts",
				image: "/assets/user2.png",
				tab: "This Week",
			},
			{
				name: "Maxwell Smith",
				points: "36pts",
				image: "/assets/user3.png",
				tab: "This Week",
			},
			{
				name: "Juanita Cormier",
				points: "36pts",
				image: "/assets/user4.png",
				tab: "This Week",
			},
			{
				name: "Marsha Fisher",
				points: "36pts",
				image: "/assets/user1.jpg",
				tab: "This Week",
			},
			{
				name: "Mideola Rejoice",
				points: "36pts",
				image: "/assets/user2.png",
				tab: "This Week",
			},
			{
				name: "Maxwell Smith",
				points: "36pts",
				image: "/assets/user3.png",
				tab: "This Week",
			},
			{
				name: "Juanita Cormier",
				points: "36pts",
				image: "/assets/user4.png",
				tab: "This Week",
			},
			{
				name: "Fisher Marsha",
				points: "36pts",
				image: "/assets/user1.jpg",
				tab: "Past Week",
			},
			{
				name: "Rejoice Mideola",
				points: "36pts",
				image: "/assets/user2.png",
				tab: "Past Week",
			},
			{
				name: "Smith Maxwell",
				points: "36pts",
				image: "/assets/user3.png",
				tab: "Past Week",
			},
			{
				name: "Cormier Juanita",
				points: "36pts",
				image: "/assets/user4.png",
				tab: "Past Week",
			},
		],
	},
	schedule: {
		heading: "My Schedule",
		date: { date: "Today, ", of: "of" },
		items: [
			{
				name: "Web Design Introductory Class",
				details: [
					{
						datetime: "January 17, 2021",
						icon: "/assets/calendar-2.svg",
						iconName: "Calendar",
					},
					{
						datetime: "09.00 - 10.00 AM",
						icon: "/assets/clock.svg",
						iconName: "Clock",
					},
				],
				attendees: [
					"/assets/attendee1.jpg",
					"/assets/attendee2.png",
					"/assets/attendee3.png",
					"/assets/attendee4.png",
					"/assets/attendee5.jpg",
				],
				others: "+24",
				attending: "Attending",
			},
			{
				name: "Web Design in the 21st Century",
				details: [
					{
						datetime: "January 17, 2021",
						icon: "/assets/calendar-2.svg",
						iconName: "Calendar",
					},
					{
						datetime: "09.00 - 10.00 AM",
						icon: "/assets/clock.svg",
						iconName: "Clock",
					},
				],
				attendees: [
					"/assets/attendee1.jpg",
					"/assets/attendee2.png",
					"/assets/attendee3.png",
					"/assets/attendee4.png",
					"/assets/attendee5.jpg",
				],
				others: "+24",
				attending: "Attending",
			},
		],
	},
};
