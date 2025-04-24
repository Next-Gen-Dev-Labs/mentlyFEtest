import { ProgramStatus, Role } from './enum';

export type Program = {
  id: number;
  title: string;
  description: string;
  mentor?: string;
  hostedBy?: string;
  imageSrc: string;
  category: string;
  status: 'active' | 'inactive';
  pillTextColor: string;
  pillBgColor: string;
  mentorImageSrc: string;
};

export type GroupCall = {
  title: string;
  date: string;
  time: string;
  groupTitle: string;
  groupSubtitle: string;
  imageSrc: string;
  status: 'ongoing' | 'upcoming';
  mentorAvatars: string[];
  joinRoute: string;
  groupLogoSrc: string;
};

export type Application = {
  name: string;
  email: string;
  role: 'mentor' | 'student';
  roleLabel?: string;
  experience?: string;
  location?: string;
  timezone?: string;
};

export type Mentor = {
  name: string;
  role: string;
  avatarSrc: string;
  messageRoute: string;
};

export type Activity = {
  title: string;
  description: string;
  time: string;
};

export type ApplicationCardProps = {
  name: string;
  email: string;
  role: Role;
  roleLabel?: string;
  experience?: string;
  location?: string;
  timezone?: string;
  avatarSrc?: string;
  onAccept?: () => void;
  onReject?: () => void;
};


export type CategoryBadgeProps = {
  label: string;
  textColor?: string;
  bgColor?: string;
};

export type GroupCallCardProps = {
  title: string;
  date: string;
  time: string;
  groupTitle: string;
  groupSubtitle: string;
  imageSrc: string;
  status: 'ongoing' | 'upcoming';
  mentorAvatars?: string[];
  joinRoute?: string;
  groupLogoSrc?: string;
};


export type ProgramCardProps = {
  title: string;
  description: string;
  mentor: string;
  hostedBy: string;
  imageSrc: string;
  category: string;
  detailsRoute?: string;
  pillTextColor: string;
  pillBgColor: string;
  mentorImageSrc?: string;
  status?: ProgramStatus;
};

export type MentorCardProps = {
  name: string;
  role: string;
  avatarSrc?: string;
  messageRoute?: string;
  onMessage?: () => void;
};

export type Widget = {
  name: string;
  visible: boolean;
};

export type ManageWidgetsDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (widgets: Widget[]) => void;
  onReset: () => void;
};