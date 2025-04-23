export type MenuItemsType = {
  icon: string;
  label: string;
  url?: string;
};

export type CallCardType = {
  image: string;
  status: "Upcoming" | "Ongoing";
  title: string;
  date: string;
  time: string;
  group: string;
};

export type ProgramType = {
  background: string;
  title: string;
  program: "Bootcamp" | "Group Call";
  description: string;
  hostedBy: "self" | "mentors" | "faith okolo";
};

export type ApplicationTypeMentor = {
  name: string;
  image: string;
  email: string;
  mentorDetails: {
    role: string;
    experience: number;
    location: string;
    GMT: string;
  };
};
export type ApplicationTypeStudent = {
  name: string;
  image: string;
  email: string;
};

export type MentorType = {
  name: string;
  image: string;
  role: string;
};

export type ActivityType = {
  time: number;
  image: string;
  title: string;
  description: string;
};
