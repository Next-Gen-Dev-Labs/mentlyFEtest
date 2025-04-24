export interface Notification {
    id: number;
    title: string;
    description: string;
    avatar: string;
    timeAgo: string;
};

export interface ProgramsDataProps {
    id: number
    title: string
    tag?: string
    description: string
    image?: string
    instructor: {
        name: string
        avatar?: string
    }
    settings?: boolean
    buttonText?: string
};

export interface DashboardHeaderProps {
    userName?: string
    userRole?: string
    userImage?: string
    children?: React.ReactNode
};