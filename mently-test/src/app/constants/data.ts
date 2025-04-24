import { Program, GroupCall, Mentor, Activity } from '../types';

export const programs: Program[] = [
  {
    id: 1,
    title: 'Fundamentals of User Interface & Experience',
    description:
      'The program is a hands-on guide on design for designers who want to master color theory and confidently apply it in their designs. This practical course...',
    mentor: 'Mentors',
    imageSrc: '/images/banner1.svg',
    category: 'Bootcamp',
    status: 'active',
    pillTextColor: 'text-blue-900',
    pillBgColor: 'bg-blue-400',
    mentorImageSrc: '/images/man.svg',
  },
  {
    id: 2,
    title: 'Colour Hack Practical Group Call',
    description:
      'The program is a hands-on guide on design for designers who want to master color theory and confidently apply it in their designs. This practical course...',
    hostedBy: 'Faith Okolo ',
    imageSrc: '/images/banner2.svg',
    category: 'Group Call',
    status: 'active',
    pillTextColor: 'text-green-900',
    pillBgColor: 'bg-green-400',
    mentorImageSrc: '/images/man.svg',
  },
  {
    id: 3,
    title: 'Colour Hack Practical Group Call',
    description:
      'The program is a hands-on guide on design for designers who want to master color theory and confidently apply it in their designs. This practical course...',
    hostedBy: 'Faith Okolo ',
    imageSrc: '/images/banner2.svg',
    category: 'Group Call',
    status: 'active',
    pillTextColor: 'text-green-900',
    pillBgColor: 'bg-green-400',
    mentorImageSrc: '/images/man.svg',
  },
];

export const groupCalls: GroupCall[] = [
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 30, 2024',
    time: '9:00 - 11:00 AM',
    groupTitle: 'Study Group',
    groupSubtitle: 'UX Strategy Study Group',
    imageSrc: '/images/banner2.svg',
    status: 'ongoing',
    mentorAvatars: ['/images/group-logo.svg', '/images/man.svg'],
    joinRoute: '/join-call-1',
    groupLogoSrc: '/images/group-logo.svg',
  },
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 30, 2024',
    time: '9:00 - 11:00 AM',
    groupTitle: 'Study Group',
    groupSubtitle: 'UX Strategy Study Group',
    imageSrc: '/images/banner3.svg',
    status: 'upcoming',
    mentorAvatars: [
      '/images/group-logo.svg',
      '/images/man.svg',
      '/images/group-logo.svg',
    ],
    joinRoute: '/join-call-2',
    groupLogoSrc: '/images/group-logo.svg',
  },
  {
    title: 'Weekly Meeting - Product Demo Review with Testers',
    date: 'Mon, Jul 30, 2024',
    time: '9:00 - 11:00 AM',
    groupTitle: 'Study Group',
    groupSubtitle: 'UX Strategy Study Group',
    imageSrc: '/images/banner4.svg',
    status: 'ongoing',
    mentorAvatars: [
      '/images/group-logo.svg',
      '/images/man.svg',
      '/images/group-logo.svg',
    ],
    joinRoute: '/join-call-3',
    groupLogoSrc: '/images/group-logo.svg',
  },
];

export const applications = {
  mentors: [
    {
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'mentor',
      roleLabel: 'Product Designer',
      experience: '4 Years Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1',
    },
  ],
  students: [
    {
      name: 'Adeati Samuel',
      email: 'adeatisamuel@gmail.com',
      role: 'student',
      roleLabel: 'Product Designer',
      experience: '2 Years Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1',
    },
    {
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'student',
      roleLabel: 'Product Designer',
      experience: '3 Years Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1',
    },
    {
      name: 'Adeati Samuel',
      email: 'adeatisamuel@gmail.com',
      role: 'student',
      roleLabel: 'Product Designer',
      experience: '1 Year Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1',
    },
    {
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'student',
      roleLabel: 'Product Designer',
      experience: '4 Years Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1',
      },
     {
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      role: 'student',
      roleLabel: 'Product Designer',
      experience: '4 Years Experience',
      location: 'Lagos, Nigeria',
      timezone: 'GMT +1',
    },
  ],
};

export const mentors: Mentor[] = [
  {
    name: 'Maxwell Smith',
    role: 'Product Designer',
    avatarSrc: '/images/man.svg',
    messageRoute: '/message/maxwell-smith',
  },
  {
    name: 'Adeati Samuel',
    role: 'Product Designer',
    avatarSrc: '/images/logo-random.svg',
    messageRoute: '/message/adeati-samuel',
  },
];

export const activities: Activity[] = [
  {
    title: 'KYC Verification',
    description: '45 new persons signed up on Mently.',
    time: '25 minutes ago',
  },
  {
    title: 'New User Sign Up',
    description: '45 new persons signed up on Mently.',
    time: '25 minutes ago',
  },
  {
    title: 'Withdrawal Request',
    description: 'Mardian requested a withdrawal.',
    time: '25 minutes ago',
  },
];
