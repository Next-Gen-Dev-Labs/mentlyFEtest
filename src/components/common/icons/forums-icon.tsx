import React from 'react';

interface ForumsIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const ForumsIcon: React.FC<ForumsIconProp> = ({ className, ...props }) => {
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

<path d="M6.66667 10.1667H12.5" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66667 13.5H10.3167" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.33333 4.99999H11.6667C13.3333 4.99999 13.3333 4.16666 13.3333 3.33332C13.3333 1.66666 12.5 1.66666 11.6667 1.66666H8.33333C7.5 1.66666 6.66667 1.66666 6.66667 3.33332C6.66667 4.99999 7.5 4.99999 8.33333 4.99999Z" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3333 3.35001C16.1083 3.50001 17.5 4.52501 17.5 8.33334V13.3333C17.5 16.6667 16.6667 18.3333 12.5 18.3333H7.5C3.33333 18.3333 2.5 16.6667 2.5 13.3333V8.33334C2.5 4.53334 3.89167 3.50001 6.66667 3.35001" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>









    );
};

export default ForumsIcon;