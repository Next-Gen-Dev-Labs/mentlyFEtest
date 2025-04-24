import { JSX } from "react/jsx-dev-runtime";

export interface SideBarProps {
 href:string,
 name:string,
 icon: JSX.Element;
}
export interface StudentDataProps{
    avatarsrc:string
    name:string,
    email:string,
}
export interface ActivityDataProps{
    avatarsrc:string
    title:string,
    info:string,
    time:string
}