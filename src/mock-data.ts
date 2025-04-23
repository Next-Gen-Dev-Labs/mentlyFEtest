

import {
  LayoutDashboard,
  BarChart2,
  Users,
  MessageSquare,
  BadgeDollarSign,
  Award,
  Settings,
  LogOut
} from 'lucide-react';


// Mock data
export const programsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80',
    title: 'Fundamentals of User Interface & Experience',
    description: 'This program aims to guide you through the foundations of UI/UX design and help you build a strong portfolio.',
    instructors: [
      { name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
      { name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
    ],
    timeAgo: 'Started 1 hour ago',
    status: 'ongoing',
    participantsCount: 24,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&q=80',
    title: 'Colour Heist Practical Design Call',
    description: 'This program aims to guide you through the foundations of UI/UX design and help you build a strong portfolio.',
    instructors: [
      { name: 'Sarah Brown', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
    ],
    timeAgo: 'Started 2 hours ago',
    status: 'ongoing',
    participantsCount: 18,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80',
    title: 'Weekly Meeting - Product Demo Review with Testers',
    description: 'This program aims to guide you through the foundations of UI/UX design and help you build a strong portfolio.',
    instructors: [
      { name: 'Michael Johnson', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
      { name: 'Emily Wilson', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
    ],
    timeAgo: 'Started 30 minutes ago',
    status: 'ongoing',
    participantsCount: 12,
  },
];


export const applicationsData = {
  mentors: [
    {
      id: 1,
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=6',
      attribute: {
        role: "Product Designer",
        experience: "4years Experience",
        timezone: "GMT +1",
        location: {
          flagUrl: "",
          location: "Lagos, Nigeria"
        }
      },
    },],

  students: [
    {
      id: 1,
      name: 'Adaafi Samuel',
      email: 'adaafisamuel@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 2,
      name: 'Adaafi Samuel',
      email: 'adaafisamuel@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 3,
      name: 'Adaafi Samuel',
      email: 'adaafisamuel@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 4,
      name: 'Adaafi Samuel',
      email: 'adaafisamuel@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    },
  ]
}

export const mentorsData = [
  {
    id: 1,
    name: 'Maxwell Smith',
    role: 'Product Designer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 2,
    name: 'Adaafi Samuel',
    role: 'Product Manager',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
  }
];

export const userStatsData = {
  active: 160,
  inProgress: 52,
  pending: 28,
  total: 240,
};

export const activitiesData = [
  {
    id: 1,
    title: 'KYC Verification',
    description: 'All new projects will have to verify on Monday',
    timeAgo: '20 minutes ago',
    iconUrl: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 2,
    title: 'New User Sign Up!',
    description: 'We have new users signed up on Monday',
    timeAgo: '25 minutes ago',
    iconUrl: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 3,
    title: 'Withdrawal Request',
    description: 'All new projects had entered to verify mode',
    timeAgo: '30 minutes ago',
    iconUrl: 'https://i.pravatar.cc/150?img=12',
  }
];

export const mockGroupCallsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&q=80",
    title: "Weekly Meeting - Product Demo Review with Testers",
    description: "Collaborate live on color theory, palette sharing and live feedback.",
    time: "9:00 AM - 10:00 AM",
    tags: ["Upcoming"],
    participants: [
      { name: 'Sarah Johnson', avatarUrl: 'https://i.pravatar.cc/150?img=13' },
      { name: 'Michael Wilson', avatarUrl: 'https://i.pravatar.cc/150?img=14' },
      { name: 'Adaafi Samuel', avatarUrl: 'https://i.pravatar.cc/150?img=15' }
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80",
    title: "Weekly Meeting - Product Demo Review with Testers",
    description: "Discuss and review new product test demos and insights from testers.",
    time: "11:00 AM - 12:00 PM",
    tags: ["Ongoing"],
    participants: [
      { name: 'Blessing O.', avatarUrl: 'https://i.pravatar.cc/150?img=16' }
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80",
    title: "Weekly Meeting - Product Demo Review with Testers",
    description: "Discuss and review new product test demos and insights from testers.",
    time: "11:00 AM - 12:00 PM",
    tags: ["Ongoing"],
    participants: [
      { name: 'Blessing O.', avatarUrl: 'https://i.pravatar.cc/150?img=16' }
    ],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80",
    title: "Weekly Meeting - Product Demo Review with Testers",
    description: "Discuss and review new product test demos and insights from testers.",
    time: "11:00 AM - 12:00 PM",
    tags: ["Ongoing"],
    participants: [
      { name: 'Blessing O.', avatarUrl: 'https://i.pravatar.cc/150?img=16' }
    ],
  },
];


export const sidebarLinks = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart2
  },
  {
    label: "Community",
    path: "/community",
    icon: Users
  },
  {
    label: "Messages",
    path: "/messages",
    icon: MessageSquare
  },
  {
    label: "Funding",
    path: "/funding",
    icon: BadgeDollarSign
  },
  {
    label: "Rewards",
    path: "/rewards",
    icon: Award
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings
  },
  {
    label: "Logout",
    path: "/logout",
    icon: LogOut
  }
];
