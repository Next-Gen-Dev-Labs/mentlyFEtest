import React from 'react';

interface LogoutIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const LogoutIcon: React.FC<LogoutIconProp> = ({ className, ...props }) => {
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

            <path d="M7.41667 6.30001C7.675 3.30001 9.21667 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24167 17.9417 7.7 16.7333 7.425 13.7833" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 10H3.01667" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.875 7.20831L2.08333 9.99998L4.875 12.7916" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>



    );
};

export default LogoutIcon;