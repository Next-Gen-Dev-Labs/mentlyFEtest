import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges Tailwind classes properly
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
