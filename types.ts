export interface MentorCardProps {
  imageUrl: string;
  role: string;
  name: string;
}
type Avatar = {
  imageUrl: string;
};

export interface ProgramCardProps {
  programbanner: string;
  type: "bootcamp" | "group-call";
  title: string;
  description: string;
  mentorsImages?: Avatar[];
  hostName?: string;
  hostImage?: string;
}


export interface GroupCallCardProps {
  programbanner: string;
  type: "ongoing" | "upcoming";
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  groupName: string;
  mentorsImages: Avatar[];
}


export interface StudentRequestCardProps {
  name: string;
  email: string;
  imageUrl: string;
}

export interface ActivityCardProps {
  imageUrl: string;
  activity: string;
  details: string;
  time: string;
}

