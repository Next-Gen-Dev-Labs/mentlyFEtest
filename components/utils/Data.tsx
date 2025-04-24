import { Icons } from "../Icons";
import { ActivityDataProps, SideBarProps, StudentDataProps } from "../types";

export const sidebarData:SideBarProps[] = [
    {
      href: "/",
      name: "Dashboard",
      icon:<Icons.home/>
    },
    {
      href: "/programs",
      name: "programs",
      icon:<Icons.program/>
    },
    {
      href: "/Activities",
      name: "Activities",
      icon:<Icons.actitvity/>
    },
    {
      href: "/users",
      name: "users",
      icon:<Icons.users/>
    },
    {
      href: "/forum",
      name: "forum",
      icon:<Icons.form/>
    },
    {
      href: "/finances",
      name: "finances",
      icon:<Icons.finance/>
    },
    {
      href: "/rewards",
      name: "rewards",
      icon:<Icons.award/>
    },
    {
      href: "/analytics",
      name: "analytics",
      icon:<Icons.analytics/>
    },
    {
      href: "/settings",
      name: "settings",
      icon:<Icons.settings/>
    },
    {
      href: "/logout",
      name: "logout",
      icon:<Icons.logout/>
    },
]

export const studentdata:StudentDataProps[] =[
  {
    avatarsrc: '/students-image.png',
    name:'Adeati Samuel',
    email:'maxwellsmith@gmail.com'
  },
  {
    avatarsrc: '/mentors-image.png',
    name:'Maxwell Smith',
    email:'maxwellsmith@gmail.com'
  },
  {
    avatarsrc: '/students-image.png',
    name:'Adeati Samuel',
    email:'maxwellsmith@gmail.com'
  },
  {
    avatarsrc: '/mentors-image.png',
    name:'Maxwell Smith',
    email:'maxwellsmith@gmail.com'
  },
]
export const mentorsdata:StudentDataProps[] =[
  {
    avatarsrc: '/mentors-image.png',
    name:'Maxwell Smith',
    email:'Product Designer'
  },
  {
    avatarsrc: '/students-image.png',
    name:'Adeati Samuel',
    email:'Product Designer'
  },
]
export const activitydata:ActivityDataProps[] =[
  {
    avatarsrc: '/activity-image (1).png',
    title:'KYC Verification',
    info:'45 new persons just signed up on Mently.',
    time:'25 minutes Ago'
  },
  {
    avatarsrc: '/activity-image (2).png',
    title:'New User Sign Up!',
    info:'45 new persons just signed up on Mently.',
    time:'25 minutes Ago'
  },
  {
    avatarsrc: '/students-image.png',
    title:'Withdrawal Request',
    info:'Mardian requested a withdrawal.',
    time:'25 minutes Ago'
  },
]
export const widgetList =[
  {
    title:'Programs',
    checked:true
  },
  {
    title:'Group Calls',
    checked:true
  },
  {
    title:'Mentors',
    checked:true
  },
  {
    title:'Recent Activities',
    checked:true
  },
  {
    title:'Application',
    checked:true
  },
  {
    title:'Earnings',
    checked:false
  },
  {
    title:'Forum',
    checked:false
  },
  {
    title:'Program Analysis',
    checked:false
  },
]