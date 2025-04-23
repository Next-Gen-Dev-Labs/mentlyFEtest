import { ApplicationTypeMentor, ApplicationTypeStudent } from "../types/data";
export const StudentApplications: ApplicationTypeStudent[] = [
  {
    image: "/images/apps/student.svg",
    email: "maxwellsmith@gmail.com",
    name: "Adeati Samuel",
  },
  {
    image: "/images/apps/mentor.svg",
    email: "maxwellsmith@gmail.com",
    name: "Maxwell Smith",
  },
  {
    image: "/images/apps/student.svg",
    email: "maxwellsmith@gmail.com",
    name: "Adeati Samuel",
  },
  {
    image: "/images/apps/mentor.svg",
    email: "maxwellsmith@gmail.com",
    name: "Maxwell Smith",
  },
];
export const MentorApplications: ApplicationTypeMentor[] = [
  {
    image: "/images/apps/mentor.svg",
    email: "maxwellsmith@gmail.com",
    name: "Maxwell Smith",
    mentorDetails: {
      role: "Product Designer",
      experience: 4,
      GMT: "GMT+1",
      location: "🇳🇬 Lagos, Nigeria",
    },
  },
];
