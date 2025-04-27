import SvgImageOne from "@/components/assets/svgImages/svgOne.svg";
import SvgImageTwo from "@/components/assets/svgImages/svgTwo.svg";
import SvgImageThree from "@/components/assets/svgImages/svgThree.svg";

// programsImage
import ProgramsImageOne from '@/components/assets/Program banner with Image (1).png'
import ProgramsImageTwo from '@/components/assets/Rectangle 12322.png'
import ProgramsImageThree from '@/components/assets/Rectangle 12322.png'

// GroupCell Image
import GroupCallImageOne from "@/components/assets/Rectangle 12322 (1).png";
import GroupCallImageTwo from "@/components/assets/Rectangle 12322 (2).png";
import GroupCallImageThree from "@/components/assets/Rectangle 12322 (3).png";

export const programs = [
  {
    title: "Fundamentals of User interface & Experience",
    tag: "Bootcamp",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: "Mentors",
    avatars: [SvgImageOne, SvgImageTwo, SvgImageThree],
    backgroundImage: ProgramsImageOne,
  },
  {
    title: "Colour Hack Practical Group Call",
    tag: "Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: "Mentors",
    avatar: SvgImageTwo,
    backgroundImage: ProgramsImageTwo,
  },
  {
    title: "Colour Hack Practical Group Call",
    tag: "Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: "Mentors",
    avatar: SvgImageThree,
    backgroundImage: ProgramsImageThree,
  },
];

export const GroupCalls = [
  {
    status: "Ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    studyGroup: {
      name: "UX Strategy Study group",
      avatar: SvgImageOne,
    },
    mentors: {
      avatars: [SvgImageOne, SvgImageTwo, SvgImageThree],
    },
    backgroundImage: GroupCallImageOne,
  },
  {
    status: "Upcoming",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    studyGroup: {
      name: "UX Strategy Study group",
      avatar: SvgImageTwo,
    },
    mentors: {
      avatars: [SvgImageOne, SvgImageTwo, SvgImageThree],
    },
    backgroundImage: GroupCallImageTwo,
  },
  {
    status: "Ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    studyGroup: {
      name: "UX Strategy Study group",
      avatar: SvgImageThree,
    },
    mentors: {
      avatars: [SvgImageOne, SvgImageTwo, SvgImageThree],
    },
    backgroundImage: GroupCallImageThree,
  },
];

export const ApplicationsData = {
  mentors: [
    {
    image: SvgImageOne,
     name: "Maxwell Smith", 
     email: "maxwellsmith@gmail.com",
     skill: "Product Designer",
     experience: "4years Experience",
     location: "Lagos, Nigeria",
     timezone: "GMT +1",
    }
  ],
  students: [
    {
      name: "Adeati Samuel",
      email: "adeatisa@gmail.com",
      image: SvgImageOne,
    },
    {
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: SvgImageTwo,
    },
    {
      name: "Adeati Samuel",
      email: "adeatisa@gmail.com",
      image: SvgImageThree,
    },
    {
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: SvgImageOne,
    },
  ],
};


export const RecentActivitiesData = [
  {
    image: SvgImageTwo,
    title: "KYC Verification",
    notification: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
  },
  {
    image: SvgImageOne,
    title: "New User Sign Up!",
    notification: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
  },
  {
    image: SvgImageThree,
    title: "Withdrawal Request",
    notification: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
  },
] 


