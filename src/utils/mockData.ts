import program1 from "@/assets/program-img1.png";
import program2 from "@/assets/program-img2.png";
import mentor from "@/assets/mentor-img.png";

export const programInfo = [
  {
    id: 1,
    title: "Fundamentals of User interface & Experience ",
    type: "Bootcamp",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: [mentor, mentor, mentor],
    image: program1,
  },
  {
    id: 2,
    title: "Colour Hack Practical Group Call",
    type: "Group Call",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: [mentor],
    image: program2,
    host: "Hosted By: Faith Okolo ",
  },
  {
    id: 3,
    title: "Colour Hack Practical Group Call",
    type: "Group Call",
    description:
      "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: [mentor],
    image: program2,
    host: "Hosted By: Self ",
  },
];

export const groupCall = [
  {
    id: 1,
    studyGroup: "UX Strategy  Study group   ",
    title: "Weekly Meeting - Product Demo Review with Testers ",
    status: "Ongoing    ",
    date: "Mon. Jul 30, 2024",
    time: "10:00 AM - 11:00 AM",
    mentors: [mentor, mentor, mentor],
    image: program2,
  },
  {
    id: 2,
    studyGroup: "UX Strategy  Study group   ",
    title: "Weekly Meeting - Product Demo Review with Testers ",
    status: "Upcoming",
    date: "Mon. Jul 30, 2024",
    time: "10:00 AM - 11:00 AM",
    mentors: [mentor, mentor, mentor],
    image: program2,
  },
  {
    id: 3,
    studyGroup: "UX Strategy  Study group   ",
    title: "Weekly Meeting - Product Demo Review with Testers ",
    status: "Ongoing    ",
    date: "Mon. Jul 30, 2024",
    time: "10:00 AM - 11:00 AM",
    mentors: [mentor, mentor, mentor],
    image: program2,
  },
];

export const mentors = [
  {
    id: 1,
    name: "Maxwell Smith",
    position: "Product Designer",
    image: mentor,
    experience: "5 years Experience",
    country: "Lagos, Nigeria",
    timeZone: "GMT +1",
    email: "maxwellsmith@gmail.com",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    position: "Product Designer",
    image: mentor,
    experience: "5 years Experience",
    country: "Lagos, Nigeria",
    timeZone: "GMT +1",
    email: "maxwellsmith@gmail.com",
  },
];

export const students = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: mentor,
  },
  {
    id: 2,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: mentor,
  },
  {
    id: 3,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: mentor,
  },
  {
    id: 4,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: mentor,
  },
];

export const recentActivity = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    image: mentor,
    time: "25 minutes Ago",
  },
  {
    id: 2,
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    image: mentor,
    time: "25 minutes Ago",
  },
  {
    id: 3,
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    image: mentor,
    time: "25 minutes Ago",
  },
];

export const widgets = [
  { id: 1, name: "Programs" },
  { id: 2, name: "Group Calls" },
  { id: 3, name: "Mentors" },
  { id: 4, name: "Recent Activities" },
  { id: 5, name: "Applications" },
  { id: 6, name: "Earnings" },
  { id: 7, name: "Forums" },
  { id: 8, name: "Program Analysis" },
];
