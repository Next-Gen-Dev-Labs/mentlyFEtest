const programsData = [
    {
        id: 1,
        title: "Fundamentals of User Interface & Experience",
        type: "Bootcamp",
        description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        mentors: [
            { id: 1, avatar: "/images/mentor-1.png" },
            { id: 2, avatar: "/images/mentor-2.png" },
            { id: 3, avatar: "/images/mentor-3.png" }
        ],
        actions: [
            { label: "View Details", isPrimary: false },
            { label: "Analysis", isPrimary: true }
        ],
        backgroundImage: "/images/fundamental-bg.png"
    },
    {
        id: 2,
        title: "Colour Hack Practical Group Call",
        type: "Group Call",
        description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        hostedBy: {
            name: "Faith Okolo",
            avatar: "/images/mentor-1.png"
        },
        actions: [
            { label: "View Details", isPrimary: false },
            { label: "Analysis", isPrimary: true }
        ],
        backgroundImage: "/images/color-hack-bg.png"
    },
    {
        id: 3,
        title: "Colour Hack Practical Group Call",
        type: "Group Call",
        description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        hostedBy: {
            name: "Self",
            avatar: "/images/mentor-1.png"
        },
        actions: [
            { label: "View Details", isPrimary: false },
            { label: "Assign Mentor", isPrimary: true }
        ],
        backgroundImage: "/images/color-hack-bg.png"
    }
];

const groupCallsData = [
    {
        id: 1,
        title: "Weekly Meeting - Product Demo Review with Testers",
        status: "Ongoing",
        date: "Mon, Jul 30, 2024",
        time: "9:00 - 11:00AM",
        studyGroup: "UX Strategy Study group",
        participants: [
            { id: 1, avatar: "/images/mentor-1.png" },
            { id: 2, avatar: "/images/mentor-2.png" }
        ],
        bannerImage: "/images/color-hack-bg.png",
        isJoinable: true
    },
    {
        id: 2,
        title: "Weekly Meeting - Product Demo Review with Testers",
        status: "Upcoming",
        date: "Mon, Jul 30, 2024",
        time: "8:00 - 11:00AM",
        studyGroup: "UX Strategy Study group",
        participants: [
            { id: 1, avatar: "/images/mentor-1.png" },
            { id: 2, avatar: "/images/mentor-2.png" },
            { id: 3, avatar: "/images/mentor-3.png" }
        ],
        bannerImage: "/images/review-bg.png",
        isJoinable: false
    },
    {
        id: 3,
        title: "Weekly Meeting - Product Demo Review with Testers",
        status: "Ongoing",
        date: "Mon, Jul 30, 2024",
        time: "9:00 - 11:00AM",
        studyGroup: "UX Strategy Study group",
        participants: [
            { id: 1, avatar: "/images/mentor-1.png" },
        ],
        bannerImage: "/images/muuk.png",
        isJoinable: true
    },
    {
        id: 4,
        title: "Weekly Meeting - Product Demo Review with Testers",
        status: "Ongoing",
        date: "Mon, Jul 30, 2024",
        time: "9:00 - 11:00AM",
        studyGroup: "UX Strategy Study group",
        participants: [
            { id: 1, avatar: "/images/mentor-1.png" },
        ],
        bannerImage: "/images/muuk.png",
        isJoinable: true
    },
    {
        id: 5,
        title: "Weekly Meeting - Product Demo Review with Testers",
        status: "Ongoing",
        date: "Mon, Jul 30, 2024",
        time: "9:00 - 11:00AM",
        studyGroup: "UX Strategy Study group",
        participants: [
            { id: 1, avatar: "/images/mentor-1.png" },
        ],
        bannerImage: "/images/muuk.png",
        isJoinable: true
    }
];

const applicationsData = [
    {
        section: "Mentors",
        applications: [
            {
                id: 1,
                name: "Maxwell Smith",
                email: "maxwellsmith@gmail.com",
                avatar: "/images/mentor-1.png",
                tags: [
                    { label: "Product Designer", color: "purple" },
                    { label: "5 Years Experience", color: "teal" },
                    { label: "Lagos, Nigeria", color: "blue", flag: true },
                    { label: "GMT +1", color: "" }
                ],
            }
        ]
    },
    {
        section: "Students",
        applications: [
            {
                id: 2,
                name: "Adeati Samuel",
                email: "maxwellsmith@gmail.com", // Using same email from screenshot
                avatar: "/images/mentor-1.png",
                tags: []
            },
            {
                id: 3,
                name: "Maxwell Smith",
                email: "maxwellsmith@gmail.com",
                avatar: "/images/mentor-1.png",
                tags: []
            },
            {
                id: 4,
                name: "Adeati Samuel",
                email: "maxwellsmith@gmail.com", // Using same email from screenshot
                avatar: "/images/mentor-1.png",
                tags: []
            },
            {
                id: 5,
                name: "Maxwell Smith",
                email: "maxwellsmith@gmail.com",
                avatar: "/images/mentor-1.png",
                tags: []
            }
        ]
    }
];

const mentorsData = [
    {
        id: 1,
        name: "Maxwell Smith",
        stack: "Product Designer",
        avatar: "/images/mentor-1.png",
    },
    {
        id: 2,
        name: "Adeati Samuel",
        stack: "Product Designer",
        avatar: "/images/mentor-1.png",
    },
    {
        id: 3,
        name: "Adeati Samuel",
        stack: "Product Designer",
        avatar: "/images/mentor-1.png",
    },
    {
        id: 4,
        name: "Adeati Samuel",
        stack: "Product Designer",
        avatar: "/images/mentor-1.png",
    },
    {
        id: 5,
        name: "Adeati Samuel",
        stack: "Product Designer",
        avatar: "/images/mentor-1.png",
    },
]

const recentActivityData = [
    {
        id: 1,
        activity: "KYC Registration",
        details: "45 new persons just signed up on Mently.",
        time: "25 minutes Ago",
        avatar: "/images/mentor-1.png",
    },
    {
        id: 2,
        activity: "New User Sign Up!",
        details: "45 new persons just signed up on Mently.",
        time: "25 minutes Ago",
        avatar: "/images/mentor-1.png",
    },
    {
        id: 3,
        activity: "Withdrawal Request",
        details: "Mardian requested a withdrawal.",
        time: "25 minutes Ago",
        avatar: "/images/mentor-1.png",
    }
];

const userData = [
    { name: 'Students', value: 160, color: '#62B2FD' },
    { name: 'Mentors', value: 40, color: '#9BDFC4' },
    { name: 'Programs', value: 22, color: '#F99BAB' },
    { name: 'Others', value: 18, color: '#FFB44F' }
];



export { programsData,
    groupCallsData,
    applicationsData,
    mentorsData,
    recentActivityData,
    userData
};