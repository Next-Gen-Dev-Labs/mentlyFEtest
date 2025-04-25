import { StaticImageData } from "next/image";
import mentors from "../../assets/Ellipse 56.png";
import students from "../../assets/Ellipse 56 (4).png";
import girl from "../../assets/Ellipse 56 (3).png";
import girl2 from "../../assets/Ellipse 57.png";

export interface Mentor {
  id: number;
  name: string;
  email: string;
  role: string;
  experience: string;
  location: string;
  timezone: string;
  avatar: StaticImageData;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  avatar: StaticImageData;
}
export interface Tutors {
  id: number;
  name: string;
  title: string;
  avatar: StaticImageData;
}
export interface Recents {
  id: number;
  name: string;
  title: string;
  avatar: StaticImageData;
  time: string;
}

export interface ApplicationData {
  mentors: Mentor[];
  students: Student[];
  tutors: Tutors[];
  recent: Recents[];
}

const applicationData: ApplicationData = {
  mentors: [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      experience: "4years Experience",
      location: "Lagos, Nigeria",
      timezone: "GMT +1",
      avatar: mentors,
    },
  ],
  students: [
    {
      id: 2,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      avatar: students,
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      avatar: mentors,
    },
    {
      id: 4,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      avatar: students,
    },
    {
      id: 5,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      avatar: mentors,
    },
  ],
  tutors: [
    {
      id: 6,
      avatar: mentors,
      name: "Adeati Samuel",
      title: "Product Designer",
    },
    {
      id: 7,
      avatar: students,
      name: "Maxwell Smith",
      title: "Product Designer",
    },
  ],
  recent: [
    {
      id: 8,
      avatar: girl,
      name: "KYC Verification",
      title: "45 new persons just signed up on Mently.",
      time: "25 minutes Ago",
    },
    {
      id: 9,
      avatar: girl2,
      name: "New User Sign Up!",
      title: "45 new persons just signed up on Mently.",
      time: "25 minutes Ago",
    },

    {
      id: 10,
      avatar: students,
      name: "Withdrawal Request",
      title: "45 new persons just signed up on Mently.",
      time: "25 minutes Ago",
    },
  ],
};

export default applicationData;
