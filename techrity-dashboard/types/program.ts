import { Mentor } from "./mentor";

export interface Program {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    hostName?: string;
    hostAvatar?: string;
    mentors?: Mentor[];
    actionText: string;
    isGroupCall?: boolean;
  }
  