import React from 'react';

interface FinanceIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const FinanceIcon: React.FC<FinanceIconProp> = ({ className, ...props }) => {
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


            <path d="M15.0333 11.2916C14.6833 11.6333 14.4833 12.125 14.5333 12.65C14.6083 13.55 15.4333 14.2083 16.3333 14.2083H17.9167V15.2C17.9167 16.925 16.5083 18.3333 14.7833 18.3333H5.21667C3.49167 18.3333 2.08333 16.925 2.08333 15.2V9.59165C2.08333 7.86665 3.49167 6.45831 5.21667 6.45831H14.7833C16.5083 6.45831 17.9167 7.86665 17.9167 9.59165V10.7917H16.2333C15.7667 10.7917 15.3417 10.975 15.0333 11.2916Z" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.08333 10.3416V6.53336C2.08333 5.54169 2.69167 4.65832 3.61667 4.30832L10.2333 1.80832C11.2667 1.41666 12.375 2.18335 12.375 3.29168V6.45834" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.799 11.6418V13.3585C18.799 13.8169 18.4323 14.1918 17.9657 14.2085H16.3323C15.4323 14.2085 14.6073 13.5502 14.5323 12.6502C14.4823 12.1252 14.6823 11.6335 15.0323 11.2918C15.3407 10.9752 15.7657 10.7918 16.2323 10.7918H17.9657C18.4323 10.8085 18.799 11.1835 18.799 11.6418Z" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.83333 10H11.6667" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


        </svg>








    );
};

export default FinanceIcon;