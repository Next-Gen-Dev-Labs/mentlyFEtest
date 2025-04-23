import SvgImageOne from "@/components/assets/svgImages/svgOne.svg";
import SvgImageTwo from "@/components/assets/svgImages/svgTwo.svg";
import SvgImageThree from "@/components/assets/svgImages/svgThree.svg";

export const programs = [
  {
    title: "Fundamentals of User interface & Experience",
    tag: "Bootcamp",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: "Mentors",
    avatars: [SvgImageOne, SvgImageTwo, SvgImageThree],
    backgroundImage: "fundamentals-ui.jpg",
  },
  {
    title: "Colour Hack Practical Group Call",
    tag: "Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: "Mentors",
    avatar: SvgImageTwo,
    backgroundImage: "group-call-1.jpg",
  },
  {
    title: "Colour Hack Practical Group Call",
    tag: "Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    mentors: "Mentors",
    avatar: SvgImageThree,
    backgroundImage: "group-call-2.jpg",
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
    backgroundImage: "group-call-smile.jpg",
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
    backgroundImage: "group-call-wave.jpg",
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
    backgroundImage: "group-call-muuk.jpg",
  },
];
