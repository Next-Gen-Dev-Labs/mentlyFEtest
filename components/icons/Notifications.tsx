import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export function NotificationIcon({ className }: IconProps) {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.02 2.91C8.71003 2.91 6.02003 5.6 6.02003 8.91V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7045 8C17.9359 8 19.7449 6.20914 19.7449 4C19.7449 1.79086 17.9359 0 15.7045 0C13.473 0 11.6641 1.79086 11.6641 4C11.6641 6.20914 13.473 8 15.7045 8Z"
        fill="#FF3E3E"
      />
    </svg>
  );
}
