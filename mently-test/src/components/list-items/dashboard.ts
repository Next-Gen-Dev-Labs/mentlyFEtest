import BannerOne from "../../../public/assets/images/program-banner-one.jpg";
import BannerTwo from "../../../public/assets/images/program-banner-two.jpg";
import mentorOne from "../../../public/assets/images/mentor-one.png";
import mentorTwo from "../../../public/assets/images/mentor-two.png";
import mentorThree from "../../../public/assets/images/mentor-three.png";
import Faith from "../../../public/assets/images/faith.png";
import mentorFour from "../../../public/assets/images/mentor-three.jpg";
import activityOne from "../../../public/assets/images/activity-one.jpg";
import activityTwo from "../../../public/assets/images/activity-two.png";
import bannerThree from "../../../public/assets/images/product-meeting.jpg"
import bannerFour from "../../../public/assets/images/MUUK.jpg";
import { Program, Mentor, Student, Activity, Meeting } from "./types";

export const programs: Program[] = [
  {
    id: 1,
    banner: BannerTwo,
    title: "Fundamentals of User interface & Experience",
    type: "Bootcamp",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: true,
    mentorsList: [mentorThree, mentorTwo, mentorOne],
    hostedBy: null,
    buttonAction: "Analysis",
    hostImage: null,
  },
  {
    id: 2,
    title: "Colour Hack Practical Group Call",
    type: "Group Call",
    banner: BannerOne,
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: false,
    mentorsList: [],
    hostedBy: "Faith Okolo",
    buttonAction: "Analysis",
    hostImage: Faith,
  },
  {
    id: 3,
    title: "Colour Hack Practical Group Call",
    type: "Group Call",
    banner: BannerOne,
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: false,
    mentorsList: [],
    hostedBy: "Self",
    buttonAction: "Assign Mentor",
    hostImage: Faith,
  },
];

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    experience: "4years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
    image: mentorOne,
  },
];

export const students: Student[] = [
  {
    id: 1,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: mentorOne,
  },
  {
    id: 2,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: mentorFour,
  },
  {
    id: 3,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: mentorOne,
  },
  {
    id: 4,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: mentorFour,
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    image: activityOne,
  },
  {
    id: 2,
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    image: activityTwo,
  },
  {
    id: 3,
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    time: "25 minutes Ago",
    image: mentorFour,
  },
];

export const meetings: Meeting[] = [
  {
    id: 1,
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon. Jul 30, 2024',
    time: '9:00 - 11:00AM',
    status: 'ongoing',
    group: 'UX Strategy Study group',
    mentorsCount: 3,
    image: BannerOne,
    mentorsList: [mentorThree, mentorTwo, mentorOne],
  },
  {
    id: 2,
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon. Jul 30, 2024',
    time: '9:00 - 11:00AM',
    status: 'upcoming',
    group: 'UX Strategy Study group',
    mentorsCount: 3,
    image: bannerThree,
    mentorsList: [mentorThree, mentorTwo, mentorOne],
  },
  {
    id: 3,
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon. Jul 30, 2024',
    time: '9:00 - 11:00AM',
    status: 'ongoing',
    group: 'UX Strategy Study group',
    mentorsCount: 3,
    image: bannerFour,
    mentorsList: [mentorThree, mentorTwo, mentorOne],
  },
];