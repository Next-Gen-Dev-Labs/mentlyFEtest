import { GoHome } from "react-icons/go";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import bubble from "@/app/images/bubble.png"
import { CiUser } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";
import { TbWallet } from "react-icons/tb";
import award from "@/app/images/award.png"
import { FaChartLine } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import colorHack from "@/app/images/colorHack.png"
import man from "@/app/images/man.png"
import group1 from "@/app/images/group1.png"
import group2 from "@/app/images/group2.png"
import group3 from "@/app/images/group3.png"
import maxwell from "@/app/images/maxwell.png"
import samuel from "@/app/images/samuel.png"
import kyc from "@/app/images/kyc.png"
import newUser from "@/app/images/newUser.png"


export const sidebarData = [
    {
        id: 1,
        Icon: GoHome,
        title: "Dashboard",
        image: '',
        tooltipId: "dashboard",
        
    },
    {
        id: 2,
        Icon: StickyNote2Icon,
        title: "Program",
        image: '',
        tooltipId: "program",
        
    },
    {
        id: 3,
        Icon: '',
        title: "Activities",
        image: bubble,
        tooltipId: "activities",
        
    },
    {
        id: 4,
        Icon: CiUser,
        title: "Users",
        image: '',
        tooltipId: "users",
        
    },
    {
        id: 5,
        Icon: LuClipboardList,
        title: "Forums",
        image: '',
        tooltipId: "forums",
        
    },
    {
        id: 6,
        Icon: TbWallet,
        title: "Finances",
        image: '',
        tooltipId: "finances",
        
    },
    {
        id: 7,
        Icon: '',
        title: "Rewards",
        image: award,
        tooltipId: "rewards",
        
    },

    {
        id: 8,
        Icon: FaChartLine,
        title: "Analytics",
        image: '',
        tooltipId: "analytics",
        
    },
    {
        id: 9,
        Icon: CiSettings,
        title: "Settings",
        image: '',
        tooltipId: "settings",
        
    },
    {
        id: 10,
        Icon: CiLogout,
        title: "Log Out",
        image: '',
        tooltipId: "log out",
        
    },



]

export const dataProgram = [
    {
        id: 1,
        bgImage: colorHack,
        bgText: "Colour Hack Practical Group Call",
        text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        userImage: man,
        userName: "Hosted By: Faith Okolo",
        task: "Analyis",

    },
    {
        id: 2,
        bgImage: colorHack,
        bgText: "Colour Hack Practical Group Call",
        text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        userImage: man,
        userName: "Hosted By: Self",
        task: "Assign Mentor",

    },

    {
        id: 3,
        bgImage: colorHack,
        bgText: "Colour Hack Practical Group Call",
        text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        userImage: man,
        userName: "Hosted By: Faith Okolo",
        task: "Analyis",

    },
    {
        id: 4,
        bgImage: colorHack,
        bgText: "Colour Hack Practical <br/> Group Call",
        text: "This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
        userImage: man,
        userName: "Hosted By: Self",
        task: "Assign Mentor",

    }
]

export const groupCalls = [
    {
        id: 1,
        bgImage: group1,
        onGoing: true,
        fadeJoinNow: false
    },
    {
        id: 2,
        bgImage: group2,
        onGoing: false,
        fadeJoinNow: true
    },
    {
        id: 3,
        bgImage: group3,
        onGoing: true,
        fadeJoinNow: false
    },
    {
        id: 4,
        bgImage: group2,
        onGoing: false,
        fadeJoinNow: true
    },
    {
        id: 5,
        bgImage: group3,
        onGoing: true,
        fadeJoinNow: false
    },
    {
        id: 6,
        bgImage: group1,
        onGoing: false,
        fadeJoinNow: true
    },

]

export const students = [
    {
        id: 1,
        image: samuel,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 2,
        image: maxwell,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 3,
        image: samuel,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 4,
        image: maxwell,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 5,
        image: samuel,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 6,
        image: maxwell,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 7,
        image: samuel,
        name: "Adeati Samuel",
        email: "maxwellsmith@gmail.com"
    },
    {
        id: 8,
        image: maxwell,
        name: "Maxwell Smith",
        email: "maxwellsmith@gmail.com"
    },

]

export const mentors = [
    {
        id: 1,
        image: maxwell,
        name: "Maxwell Smith",
        title: "Product Designer"
    },
    {
        id: 2,
        image: samuel,
        name: "Adeati Samuel",
        title: "Product Designer"
    },
    {
        id: 3,
        image: maxwell,
        name: "Maxwell Smith",
        title: "Product Designer"
    },
    {
        id: 4,
        image: samuel,
        name: "Adeati Samuel",
        title: "Product Designer"
    },

]

export const recent = [
    {
        id: 1,
        image: kyc,
        name: "KYC Verification",
        title: "45 persons just signed up on Monthly"
    },
    {
        id: 2,
        image: newUser,
        name: "New User Sign Up",
        title: "45 persons just signed up on Monthly"
    },
    {
        id: 3,
        image: samuel,
        name: "Withdrawal Request",
        title: "Mardian request a withdrawal"
    },
    {
        id: 4,
        image: kyc,
        name: "KYC Verification",
        title: "45 persons just signed up on Monthly"
    },
    {
        id: 5,
        image: newUser,
        name: "New User Sign Up",
        title: "45 persons just signed up on Monthly"
    },
    {
        id: 6,
        image: samuel,
        name: "Withdrawal Request",
        title: "Mardian request a withdrawal"
    },

    
]

