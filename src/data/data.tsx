import { Notification } from "@/lib/index.types";

// Notification data
export const notifications: Notification[] = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    avatar: "/SVGs/kyc1.svg",
    timeAgo: "25 minutes Ago",
  },
  {
    id: 2,
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    avatar: "/SVGs/kyc2.svg",
    timeAgo: "25 minutes Ago",
  },
  {
    id: 3,
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    avatar: "/SVGs/adt_sam.svg",
    timeAgo: "25 minutes Ago",
  },
];

//Programs Data
export const programsData = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      settings: true,
      tag: "Bootcamp",
      description:
        "This program is a hands-on guide designed for designers who want to learn the fundamentals of UI/UX design. This is practical approach.",
      image: "program-banner.svg",
      instructor: {
        name: "Mentors",
        avatar: "mentor.svg",
      },
      buttonText: "Analysis"
    },
    {
      id: 2,
      title: "Colour Has Practical Visual Crit",
      settings: false,
      tag: "Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to learn the fundamentals of UI/UX design. This is practical approach.",
      image: "program-banner2.svg",
      instructor: {
        name: "Faith Okolo",
        avatar: "man.svg",
      },
      buttonText: "Analysis"
    },
    {
      id: 3,
      title: "Colour Has Practical Visual Crit",
      settings: false,
      tag: "Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to learn the fundamentals of UI/UX design. This is practical approach.",
      image: "program-banner2.svg",
      instructor: {
        name: "Self",
        avatar: "man.svg",
      },
      buttonText: "Assign Mentor"
    },
    {
      id: 4,
      title: "Fundamentals of User Interface & Experience",
      settings: true,
      tag: "Bootcamp",
      description:
        "This program is a hands-on guide designed for designers who want to learn the fundamentals of UI/UX design. This is practical approach.",
      image: "program-banner.svg",
      instructor: {
        name: "Mentors",
        avatar: "mentor.svg",
      },
      buttonText: "Analysis"
    }

]

//Users Data
export const users = [
  {
    name: "Maxwell Smith",
    role: "Product Designer",
    avatar: "/SVGs/max_smith.svg",
  },
  {
    name: "Adeati Samuel",
    role: "Product Designer",
    avatar: "/SVGs/adt_sam.svg",
  },
];

//Widget Data
export const widgetOptions = [
  { id: "programs", label: "Programs", defaultChecked: true },
  { id: "groupCalls", label: "Group Calls", defaultChecked: true },
  { id: "mentors", label: "Mentors", defaultChecked: true },
  { id: "recentActivities", label: "Recent Activities", defaultChecked: true },
  { id: "application", label: "Application", defaultChecked: true },
  { id: "earnings", label: "Earnings", defaultChecked: false },
  { id: "forum", label: "Forum", defaultChecked: false },
  { id: "programAnalysis", label: "Program Analysis", defaultChecked: false },
];

