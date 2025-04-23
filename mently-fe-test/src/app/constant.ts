type Action = {
  label: string;
  variant: "outlined" | "primary";
};

export type IProgram = {
  id: string;
  background: string;
  title: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  description: string;
  thumbnails: string[] | string;
  hostedBy: string;
  actions: Action[];
};

export type IGroupCall = {
  id: number;
  title: string;
  status: "ongoing" | "upcoming";
  date: string;
  time: string;
  group: {
    name: string;
    type: string;
  };
  thumbnails: string[];
  bannerImage: string;
  actions: {
    viewParticipants: string;
    joinNow: string;
  };
};

export type IStudentsApplication = {
  name: string;
  email: string;
  img: string;
};

export const DummyPrograms: IProgram[] = [
  {
    id: "1",
    background: "/programs/fundamentals.jpeg",
    title: "Fundamentals of User Interface & Experience",
    badge: "Bootcamp",
    badgeColor: "#0077FF",
    badgeBg: "#D4E0F3",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    thumbnails: [
      "/programs/mentor1.png",
      "/programs/mentor2.png",
      "/programs/mentor3.png",
    ],
    hostedBy: "Mentors",
    actions: [
      { label: "View Details", variant: "outlined" },
      { label: "Analysis", variant: "primary" },
    ],
  },
  {
    id: "2",
    background: "/programs/colourhack.jpeg",
    title: "Colour Hack Practical Group Call",
    badge: "Group Call",
    badgeColor: "#008000",
    badgeBg: "#D4F3D4",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    thumbnails: ["/programs/faith1.png"],
    hostedBy: "Hosted By: Faith Okolo ",
    actions: [
      { label: "View Details", variant: "outlined" },
      { label: "Analysis", variant: "primary" },
    ],
  },
  {
    id: "3",
    background: "/programs/colourhack.jpeg",
    title: "Colour Hack Practical Group Call",
    badge: "Group Call",
    badgeColor: "#008000",
    badgeBg: "#D4F3D4",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    thumbnails: ["/programs/faith1.png"],
    hostedBy: "Hosted By: Self",
    actions: [
      { label: "View Details", variant: "outlined" },
      { label: "Assign Mentor", variant: "primary" },
    ],
  },
  {
    id: "4",
    background: "/programs/colourhack.jpeg",
    title: "Colour Hack Practical Group Call",
    badge: "Group Call",
    badgeColor: "#008000",
    badgeBg: "#D4F3D4",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    thumbnails: ["/programs/mentor2.png"],
    hostedBy: "Hosted By: Self",
    actions: [
      { label: "View Details", variant: "outlined" },
      { label: "Assign Mentor", variant: "primary" },
    ],
  },
];

export const DummyGroupCalls: IGroupCall[] = [
  {
    id: 1,
    title: "Weekly Meeting - Product Demo Review with Testers",
    status: "ongoing",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    group: {
      name: "UX Strategy Study group",
      type: "Study Group",
    },
    thumbnails: [
      "/programs/mentor1.png",
      "/programs/mentor2.png",
      "/programs/mentor3.png",
    ],
    bannerImage: "/programs/colourhack.jpeg",
    actions: {
      viewParticipants: "/participants/1",
      joinNow: "/meeting/1/join",
    },
  },
  {
    id: 2,
    title: "Weekly Meeting - Product Demo Review with Testers",
    status: "upcoming",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    group: {
      name: "UX Strategy Study group",
      type: "Study Group",
    },
    thumbnails: [
      "/programs/mentor1.png",
      "/programs/mentor2.png",
      "/programs/mentor3.png",
    ],
    bannerImage: "/group-calls/group1.jpeg",
    actions: {
      viewParticipants: "/participants/2",
      joinNow: "/meeting/2/join",
    },
  },
  {
    id: 3,
    title: "Weekly Meeting - Product Demo Review with Testers",
    status: "ongoing",
    date: "Mon, Jul 30, 2024",
    time: "9:00 - 11:00AM",
    group: {
      name: "UX Strategy Study group",
      type: "Study Group",
    },
    thumbnails: [
      "/programs/mentor1.png",
      "/programs/mentor2.png",
      "/programs/mentor3.png",
    ],
    bannerImage: "/group-calls/group2.jpeg",
    actions: {
      viewParticipants: "/participants/3",
      joinNow: "/meeting/3/join",
    },
  },
];

export const StudentsApplication: IStudentsApplication[] = [
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    img: "/applications/Adeati.jpeg",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    img: "/programs/mentor3.png",
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    img: "/applications/Adeati.jpeg",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    img: "/programs/mentor3.png",
  },
];
