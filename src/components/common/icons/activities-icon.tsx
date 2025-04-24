import React from 'react';

interface ActivitiesIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const ActivitiesIcon: React.FC<ActivitiesIconProp> = ({ className, ...props }) => {
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


            <path d="M12.9917 10.2167C15.3527 10.2167 17.2667 8.30268 17.2667 5.94166C17.2667 3.58064 15.3527 1.66666 12.9917 1.66666C10.6306 1.66666 8.71666 3.58064 8.71666 5.94166C8.71666 8.30268 10.6306 10.2167 12.9917 10.2167Z" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" />
            <path d="M5.29999 16.2C6.71752 16.2 7.86667 15.0508 7.86667 13.6333C7.86667 12.2158 6.71752 11.0667 5.29999 11.0667C3.88246 11.0667 2.73333 12.2158 2.73333 13.6333C2.73333 15.0508 3.88246 16.2 5.29999 16.2Z" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" />
            <path d="M13.85 18.3333C15.0282 18.3333 15.9833 17.3782 15.9833 16.2C15.9833 15.0218 15.0282 14.0667 13.85 14.0667C12.6718 14.0667 11.7167 15.0218 11.7167 16.2C11.7167 17.3782 12.6718 18.3333 13.85 18.3333Z" stroke="#C2C2C2" strokeWidth="1.5" strokeMiterlimit="10" />
        </svg>







    );
};

export default ActivitiesIcon;