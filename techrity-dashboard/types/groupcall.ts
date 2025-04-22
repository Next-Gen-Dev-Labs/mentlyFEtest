import { Participant } from "./participants";

export interface GroupCall {
    id: string;
    title: string;
    date: string;
    timeRange: string;
    category: string;
    studyGroup: string;
    status: 'ongoing' | 'upcoming' | 'completed';
    participants: Participant[];
    thumbnail: string;
  }