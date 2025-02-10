import { IconTypes } from "@/app/types";

const TaskIcon: React.FC<IconTypes> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 9.75H10.5"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 6.25H10.5"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 2.75H10.5"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 2.75L2 3.25L3.5 1.75"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 6.25L2 6.75L3.5 5.25"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 9.75L2 10.25L3.5 8.75"
        stroke="#292D32"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TaskIcon;
