import {
  ActivityCardProps,
  GroupCallCardProps,
  MentorCardProps,
  ProgramCardProps,
  StudentRequestCardProps,
} from "./types";

export const widgets = [
  "Programs",
  "Group Calls",
  "Mentors",
  "Recent Activities",
  "Application",
  "Earnings",
  "Forum",
  "Program Analysis",
];

export const mentorData: MentorCardProps[] = [
  {
    imageUrl: "/Ellipse 56.svg",
    role: "Product Designer",
    name: "Adaeze Okafor",
  },
  {
    imageUrl: "/man-1.svg",
    role: "Product Designer",
    name: "Tunde Balogun",
  },
];

export const avatars = [
  { imageUrl: "/man-1.svg" },
  { imageUrl: "/Ellipse 56 (1).svg" },
  { imageUrl: "/Ellipse 56.svg" },
];

export const programData: ProgramCardProps[] = [
  {
    programbanner: "/group-call-image-1.svg",
    type: "bootcamp",
    title: "Fundamentals of User interface & Experience ",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentorsImages: avatars,
  },
  {
    programbanner: "/group-call-image-2.svg",
    type: "group-call",
    title: "Colour Hack Practical Group Call",
    description:
      "A hands-on live session to explore color theory in design. Get real-time feedback and work through creative challenges with peers.",
    hostName: "Faith",
    hostImage: "/man-1.svg",
  },
  {
    programbanner: "/group-call-image-2.svg",
    type: "group-call",
    title: "Frontend Dev Mastery Bootcamp",
    description:
      "Level up your frontend skills with advanced React, TypeScript, and state management tools like Redux and React Query.",
    hostName: "Peter",
    hostImage: "/man-1.svg",
  },
];

export const groupCalldata: GroupCallCardProps[] = [
  {
    programbanner: "/group-call-image-1.svg",
    type: "ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "2025-05-01",
    startTime: "9:00",
    endTime: "10:00",
    groupName: "Frontend Wizards",
    mentorsImages: avatars,
  },
  {
    programbanner: "/group-call-image-2.svg",
    type: "upcoming",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    startTime: "9:00",
    endTime: "11:00",
    groupName: "Design Review Team",
    mentorsImages: avatars,
  },
  {
    programbanner: "/group-call-image-3.svg",
    type: "upcoming",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    startTime: "9:00",
    endTime: "11:00",
    groupName: "Design Review Team",
    mentorsImages: avatars,
  },
  {
    programbanner: "/group-call-image-2.svg",
    type: "upcoming",
    title: "Weekly Project Feedback Session",
    date: "Mon. Jul 30, 2024",
    startTime: "9:00",
    endTime: "11:00",
    groupName: "Design Review Team",
    mentorsImages: avatars,
  },
];

export const studentRequests: StudentRequestCardProps[] = [
  {
    name: "Maxwell Smith",
    email: "maxwell@gmail.com",
    imageUrl: "/man-1.svg",
  },
  {
    name: "Linda Okafor",
    email: "lindar@gmail.com",
    imageUrl: "/Ellipse 56 (1).svg",
  },
  {
    name: "Tunde Balogun",
    email: "tunde@gmail.com",
    imageUrl: "/Ellipse 56.svg",
  },
  {
    name: "Chinwe Eze",
    email: "chinwe@gmail.com",
    imageUrl: "/man-1.svg",
  },
];

export const mentorRequestsdata = [
  {
    name: "Maxwell Smith",
    email: "maxwell@gmail.com",
    role: "Product Designer",
    experience: "4 years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
    imageUrl: "/man-1.svg",
  },
];

export const activityData: ActivityCardProps[] = [
  {
    imageUrl: "/Ellipse 56 (1).svg",
    activity: "KYC Verification",
    details: "48 New persons just signed up on Mently",
    time: "25 minutes ago",
  },
  {
    imageUrl: "/man-1.svg",
    activity: "New User sign up",
    details: "48 New persons just signed up on Mently",
    time: "1 hour ago",
  },
  {
    imageUrl: "/man-1.svg",
    activity: "Mentorship Session",
    details: "1-on-1 design review with UI/UX mentor.",
    time: "2 hours ago",
  },
];
