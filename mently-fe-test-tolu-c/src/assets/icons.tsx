import { ComponentProps } from "react";

type Icon = ComponentProps<"svg">;

export const LogoutIcon = ({ ...props }: Icon) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M7.41667 6.30001C7.675 3.30001 9.21667 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24167 17.9417 7.7 16.7333 7.425 13.7833"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 10H3.01667"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.875 7.20831L2.08333 9.99998L4.875 12.7916"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BookIcon = ({ ...props }: Icon) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M2.91667 15V5.83334C2.91667 2.50001 3.75 1.66667 7.08333 1.66667H12.9167C16.25 1.66667 17.0833 2.50001 17.0833 5.83334V14.1667C17.0833 14.2833 17.0833 14.4 17.075 14.5167"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.29167 12.5H17.0833V15.4167C17.0833 17.025 15.775 18.3333 14.1667 18.3333H5.83333C4.225 18.3333 2.91667 17.025 2.91667 15.4167V14.875C2.91667 13.5667 3.98333 12.5 5.29167 12.5Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66667 5.83333H13.3333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66667 8.75H10.8333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeIcon = ({ ...props }: Icon) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M7.51667 2.36667L3.025 5.86667C2.275 6.45 1.66667 7.69167 1.66667 8.63334V14.8083C1.66667 16.7417 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7417 18.3333 14.8167V8.75C18.3333 7.74167 17.6583 6.45 16.8333 5.875L11.6833 2.26667C10.5167 1.45 8.64167 1.49167 7.51667 2.36667Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.9917V12.4917"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserTagIcon = ({ ...props }: Icon) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M15 15.7166H14.3667C13.7 15.7166 13.0667 15.975 12.6 16.4416L11.175 17.85C10.525 18.4916 9.46668 18.4916 8.81668 17.85L7.39166 16.4416C6.925 15.975 6.28333 15.7166 5.625 15.7166H5C3.61667 15.7166 2.5 14.6083 2.5 13.2417V4.14996C2.5 2.7833 3.61667 1.67499 5 1.67499H15C16.3833 1.67499 17.5 2.7833 17.5 4.14996V13.2417C17.5 14.6 16.3833 15.7166 15 15.7166Z"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 8.33332C11.0724 8.33332 11.9417 7.464 11.9417 6.39164C11.9417 5.31929 11.0724 4.45001 10 4.45001C8.92765 4.45001 8.05832 5.31929 8.05832 6.39164C8.05832 7.464 8.92765 8.33332 10 8.33332Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 13.05C13.3333 11.55 11.8417 10.3334 10 10.3334C8.15833 10.3334 6.66667 11.55 6.66667 13.05"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DropdownIcon = ({ ...props }: Icon) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.7244 5.96667L9.37776 10.3133C8.86443 10.8267 8.02443 10.8267 7.5111 10.3133L3.16443 5.96667"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NotificationIcon = ({ ...props }: Icon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M12.02 2.91C8.70997 2.91 6.01997 5.6 6.01997 8.91V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);
