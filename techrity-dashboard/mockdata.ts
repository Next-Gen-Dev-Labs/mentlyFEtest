import { Applicant } from "./types/applicants";
import { GroupCall } from "./types/groupcall";
import { Program } from "./types/program";

export const defaultPrograms: Program[] = [
    {
      id: "1",
      title: "Fundamentals of User Interface & Experience",
      description: "This program is a hands-on guide designed for designers who want to master interface theory and confidently apply it to their designs. This practical approach",
      image: "/program1.jpg",
      category: "Design UX/UI",
      mentors: [
        { id: "m1", name: "John Doe", avatar: "" },
        { id: "m2", name: "Jane Smith", avatar: "" },
      ],
      actionText: "Enroll"
    },
    {
      id: "2",
      title: "Colour Hack Practical",
      description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      image: "/program2.jpg",
      category: "Design UX/UI",
      hostName: "Patti Davis",
      actionText: "Analyze"
    },
    {
      id: "3",
      title: "Colour Hack Practical Group Call",
      description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      image: "/program3.jpg",
      category: "Design UX/UI",
      hostName: "Sal",
      isGroupCall: true,
      actionText: "Join Meeting"
    }
  ];

  export const stats = {
    students: 200,
    mentors: 8,
    programs: 22,
    others: 8
  }

export const defaultCalls: GroupCall[] = [
    {
      id: "1",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      timeRange: "9:00 - 11:00AM",
      category: "UX Strategy",
      studyGroup: "Study group",
      status: "ongoing",
      participants: [
        { id: "p1", name: "John Doe" },
        { id: "p2", name: "Jane Smith" },
        { id: "p3", name: "Alex Johnson" }
      ],
      thumbnail: "/call1.jpg"
    },
    {
      id: "2",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      timeRange: "9:00 - 11:00AM",
      category: "UX Strategy",
      studyGroup: "Study group",
      status: "upcoming",
      participants: [
        { id: "p1", name: "John Doe" },
        { id: "p2", name: "Jane Smith" },
        { id: "p3", name: "Alex Johnson" }
      ],
      thumbnail: "/call2.jpg"
    },
    {
      id: "3",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      timeRange: "9:00 - 11:00AM",
      category: "UX Strategy",
      studyGroup: "Study group",
      status: "ongoing",
      participants: [
        { id: "p1", name: "John Doe" },
        { id: "p2", name: "Jane Smith" },
        { id: "p3", name: "Alex Johnson" }
      ],
      thumbnail: "/call3.jpg"
    }
  ];

export const defaultMentorApplications: Applicant[] = [
  {
    id: "m1",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    experience: "4years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1"
  }
];

export const defaultStudentApplications: Applicant[] = [
  {
    id: "s1",
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com"
  },
  {
    id: "s2",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com"
  },
  {
    id: "s3",
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com"
  },
  {
    id: "s4",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com"
  }
];