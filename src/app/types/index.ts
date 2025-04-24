import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Mentor {
  id: number;
  name: string;
  avatar: StaticImageData;
}

export interface Host {
  id: number;
  name: string;
  avatar: StaticImageData;
}

export interface Program {

    id: number;
    title: string;
    description: string;
    status: string;
    type?: string;
    mentors?: Mentor[];
    host?: Host;
    icon?: IconType;
    image?: string;
}