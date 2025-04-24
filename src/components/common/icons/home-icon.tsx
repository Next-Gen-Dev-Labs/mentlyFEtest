import React from 'react';

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ className, ...props }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M7.51667 2.36667L3.025 5.86667C2.275 6.45 1.66667 7.69167 1.66667 8.63334V14.8083C1.66667 16.7417 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7417 18.3333 14.8167V8.75C18.3333 7.74167 17.6583 6.45 16.8333 5.875L11.6833 2.26667C10.5167 1.45 8.64167 1.49167 7.51667 2.36667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 14.9917V12.4917"
                stroke="#1F0954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HomeIcon;