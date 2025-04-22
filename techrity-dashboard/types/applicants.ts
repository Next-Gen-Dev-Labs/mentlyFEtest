export interface Applicant {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    experience?: string;
    location?: string;
    timezone?: string;
    selected?: boolean;
  }