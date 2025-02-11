import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${getOrdinal(day)} ${month} ${year}, ${time}`;
};

export const getOrdinal = (n: number) => {
  if (n > 3 && n < 21) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
};

export const items = [
  { image: "/icons/briefcase.svg", text: "Mentorship Program" },
  { image: "/icons/calendar.svg", text: "21/4/2024-21/5/2024" },
  { image: "/icons/location.svg", text: "In Person" },
] as const;

export const programItem = [
  { image: "/icons/award-2.svg", text: "Award Program" },
  { image: "/icons/briefcase-2.svg", text: "Mentorship" },
  { image: "/icons/people.svg", text: "Group Mentoring" },
  { image: "/icons/note.svg", text: "Program Curriculum" },
  { image: "/icons/phone.svg", text: "Contact Support" },
  { image: "/icons/chat.svg", text: "Live Q&A Sessions" },
] as const;

export const textItems = [
  "Mentorship Program",
  "April 21, 2024 - May 21, 2024",
  "Group Mentoring",
  "Program Curriculum",
  "Contact Support",
  "Live Q&A Sessions",
] as const;
