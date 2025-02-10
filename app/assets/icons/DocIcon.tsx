import { IconTypes } from "@/app/types";

const DocIcon: React.FC<IconTypes> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.998 10.0039V15.0039C21.998 20.0039 19.998 22.0039 14.998 22.0039H8.99805C3.99805 22.0039 1.99805 20.0039 1.99805 15.0039V9.00391C1.99805 4.00391 3.99805 2.00391 8.99805 2.00391H13.998"
        stroke="#1F0954"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.998 10.0039H17.998C14.998 10.0039 13.998 9.00391 13.998 6.00391V2.00391L21.998 10.0039Z"
        stroke="#1F0954"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocIcon;
