export interface Student {
  id: number;
  name: string;
  email: string;
  profileImage: string;
}

export interface Widget {
  id: number;
  label: string;
  check: boolean;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  mentorImages: string[];
  text: string;
  btnText: string;
}

export interface LinkItem {
  id: number;
  label: string;
  href: string;
  notifs?: string;
}

export interface CardDatas {
  id: number;
  title: string;
  date: string;
  time: string;
  imageUrl: string; // Background image for the card
  tag: string;
  tagColor: string; // Color for the tag dot and text
  tagBgColor: string; // Background color for the tag
  studyGroup: string;
  mentorImages: string[]; // Array to support multiple mentor images
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  timeAgo: string;
  profileImage: string;
}

export interface Mentor {
  id: number;
  name: string;
  email: string;
  profileImage: string;
}
