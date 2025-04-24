import {
  Activity,
  CardData,
  CardDatas,
  LinkItem,
  Mentor,
  Student,
} from "../types/types"; // Import the Student type
import { Widget } from "../types/types";

export const links: LinkItem[] = [
  { id: 1, label: "Dashboard", href: "/" },
  { id: 2, label: "Dashboard", href: "/d" },
  { id: 3, label: "Programs", href: "/programs", notifs: "coming soon" },
];

export const studentData: Student[] = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    profileImage: "/profile3.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarahjohnson@gmail.com",
    profileImage: "/profile4.png",
  },
  {
    id: 3,
    name: "David Kimani",
    email: "davidkimani@gmail.com",
    profileImage: "/profile3.png",
  },
  {
    id: 4,
    name: "Aisha Bello",
    email: "aishabello@gmail.com",
    profileImage: "/profile4.png",
  },
];

export const widgets: Widget[] = [
  { id: 1, label: "Programs", check: true },
  { id: 2, label: "Group Calls", check: true },
  { id: 3, label: "Mentors", check: true },
  { id: 4, label: "Recent Activities", check: true },
  { id: 5, label: "Application", check: true },
  { id: 6, label: "Earnings", check: false },
  { id: 7, label: "Forum", check: false },
  { id: 8, label: "Program Analysis", check: false },
];

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Fundamentals of User Interface & Experience",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    imageUrl: "/img1.jpg",
    tag: "Bootcamp",
    mentorImages: ["/profile1.png", "/profile.png", "/profile3.png"],
    text: "Mentors",
    btnText: "Analysis",
  },
  {
    id: 2,
    title: "Advanced Web Development",
    description:
      "Learn to build scalable web applications using modern frameworks and tools, with a focus on performance and user experience.",
    imageUrl: "/img2.jpg",
    tag: "Advanced",
    mentorImages: ["/profile4.png"],
    text: "Hosted By: Faith Okolo",
    btnText: "Analysis",
  },
  {
    id: 3,
    title: "Introduction to Data Science",
    description:
      "A beginner-friendly course covering data analysis, visualization, and machine learning basics using Python.",
    imageUrl: "/img2.jpg",
    tag: "Beginner",
    mentorImages: ["/profile4.png"],
    text: "Hosted By: Self",
    btnText: "Assign Mentor",
  },
];

export const cardDatas: CardDatas[] = [
  {
    id: 1,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    imageUrl: "/img2.jpg",
    tag: "Ongoing",
    tagColor: "#1F8B01",
    tagBgColor: "#2AC10033",
    studyGroup: "UX Strategy Study group",
    mentorImages: ["/profile1.png", "/profile.png", "/profile3.png"],
  },
  {
    id: 2,
    title: "Design Review - UI/UX Feedback Session",
    date: "Wed, Aug 2, 2024",
    time: "2:00 - 3:30PM",
    imageUrl: "/img3.png",
    tag: "Upcoming",
    tagColor: "#1C0AE1",
    tagBgColor: "#E0DDFF",
    studyGroup: "UX Strategy Study group",
    mentorImages: ["/profile1.png", "/profile.png", "/profile3.png"],
  },
  {
    id: 3,
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Fri, Aug 5, 2024",
    time: "10:00 - 11:30AM",
    imageUrl: "/img4.png",
    tag: "Ongoing",
    tagColor: "#1F8B01",
    tagBgColor: "#2AC10033",
    studyGroup: "UX Strategy Study group",
    mentorImages: ["/profile1.png", "/profile.png", "/profile3.png"],
  },
];

export const activityData: Activity[] = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    timeAgo: "25 minutes Ago",
    profileImage: "/profile3.png",
  },
  {
    id: 2,
    title: "Group Call Started",
    description: "45 new persons just signed up on Mently.",
    timeAgo: "1 hour Ago",
    profileImage: "/profile4.png",
  },
  {
    id: 3,
    title: "Mentor Assigned",
    description: "45 new persons just signed up on Mently.",
    timeAgo: "3 hours Ago",
    profileImage: "/profile.png",
  },
];

export const mentorData: Mentor[] = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    profileImage: "/profile3.png",
  },
  {
    id: 2,
    name: "Emily Carter",
    email: "emilycarter@gmail.com",
    profileImage: "/profile4.png",
  },
];
