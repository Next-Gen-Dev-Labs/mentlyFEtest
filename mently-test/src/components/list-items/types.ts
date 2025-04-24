// types.ts
import { StaticImageData } from 'next/image';
export interface Program {
    id: number;
    banner: StaticImageData;
    title: string;
    type: string;
    description: string;
    mentors: boolean;
    mentorsList: StaticImageData[];
    hostedBy: string | null;
    buttonAction: string;
    hostImage: StaticImageData | null;
  }
  
  export interface Mentor {
    id: number;
    name: string;
    email: string;
    role: string;
    experience: string;
    location: string;
    timezone: string;
    image: StaticImageData;
  }
  
  export interface Student {
    id: number;
    name: string;
    email: string;
    image: StaticImageData;
  }
  
  export interface Activity {
    id: number;
    title: string;
    description: string;
    time: string;
    image: StaticImageData;
  }
  
  export interface Meeting {
    id: number;
    title: string;
    date: string;
    time: string;
    status: 'ongoing' | 'upcoming';
    group: string;
    mentorsCount: number;
    image: StaticImageData;
    mentorsList: StaticImageData[];
  }
  