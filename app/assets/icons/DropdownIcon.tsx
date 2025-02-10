import { IconTypes } from "@/app/types";

const DropdownIcon: React.FC<IconTypes> = ({ className }) => {
  return (
    <svg
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.7244 0.966667L7.37776 5.31333C6.86443 5.82667 6.02443 5.82667 5.5111 5.31333L1.16443 0.966667"
        stroke="#C2C2C2"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropdownIcon;
