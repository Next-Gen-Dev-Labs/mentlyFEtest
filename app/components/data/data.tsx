// types
export type GroupCallType = {
  id: number;
  badge: string;
  images: string[];
  title: string;
  date: string;
  time: string;
  group: string;
  participants: string[];
};

export const groupCallData: GroupCallType[] = [
  {
    id: 1,
    badge: "Ongoing",
    images: ["/assets/hum1.jpg", "/assets/hum2.webp", "/assets/hum3.avif"],
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    group: "UX Strategy Study group",
    participants: ["/avatar1.jpg", "/avatar2.jpg"],
  },
  {
    id: 2,
    badge: "Upcoming",
    images: [
      "/assets/spiral.jpeg",
      "/assets/spiral2.jpeg",
      "/assets/spiral3.jpg",
    ],
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Tue. Jul 31, 2024",
    time: "2:00 - 4:00PM",
    group: "Dev Team Sync",
    participants: ["/avatar3.jpg", "/avatar4.jpg"],
  },
  {
    id: 3,
    badge: "Ongoing",
    images: [
      "/assets/music.jpeg",
      "/assets/music2.jpeg",
      "/assets/music3.jpeg",
    
    ],
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Wed. Aug 1, 2024",
    time: "1:00 - 3:00PM",
    group: "Product Design Team",
    participants: ["/avatar5.jpg", "/avatar6.jpg"],
  },
];





