import React from 'react';

interface SideMenuIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const SideMenuIcon: React.FC<SideMenuIconProp> = ({ className, ...props }) => {
    return (
        <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >


<path d="M24 10.5H16.5V18H24V10.5ZM22.5 16.5H18V12H22.5V16.5ZM24 0H16.5V7.5H24V0ZM22.5 6H18V1.5H22.5V6ZM0 1.5V3H13.5V1.5H0ZM4.5 6H13.5V4.5H4.5V6ZM13.5 12H0V13.5H13.5V12ZM13.5 15H4.5V16.5H13.5V15Z" fill="#A4A5B8"/>
</svg>









    );
};

export default SideMenuIcon;