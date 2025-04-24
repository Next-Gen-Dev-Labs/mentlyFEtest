import Award from "@/assets/icons/award.svg"
import Book from "@/assets/icons/book.svg"
import Bubble from "@/assets/icons/bubble.svg"
import ClipboardText from "@/assets/icons/clipboard-text.svg"
import Diagram from "@/assets/icons/diagram.svg"
import EmptyWallet from "@/assets/icons/empty-wallet.svg"
import Logout from "@/assets/icons/logout.svg"
import Setting from "@/assets/icons/setting.svg"
import User from "@/assets/icons/user.svg"
import Home from "@/assets/icons/Icon.svg"

export const sidebarItems = [
    {
        id: 1,
        name: "Dashboard",
        icon: Home,
        path: "/dashboard",
    },
    {
        id: 2,
        name: "Programs",
        icon: Book,
        path: "/programs",
    },
    {
        id: 3,
        name: "Activities",
        icon: Bubble,
        path: "/activities",
    },
    {
        id: 4,
        name: "Users",
        icon: User,
        path: "/users",
    },
    {
        id: 5,
        name: "Forums",
        icon: ClipboardText,
        path: "/forums",
    },
    {
        id: 6,
        name: "Finances",
        icon: EmptyWallet,
        path: "/finances",
    },
    {
        id: 7,
        name: "Rewards",
        icon: Award,
        path: "/rewards",
    },
    {
        id: 8,
        name: "Analytics",
        icon: Diagram,
        path: "/analytics",
    },
    {
        id: 9,
        name: "Settings",
        icon:  Setting,
        path: "/settings",
    },
    {
        id: 10,
        name: "Log Out",
        icon: Logout,
        path: "/logout",
    },
];