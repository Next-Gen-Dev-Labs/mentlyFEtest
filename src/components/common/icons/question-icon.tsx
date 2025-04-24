import React from 'react';

interface QuestionIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const QuestionIcon: React.FC<QuestionIconProp> = ({ className, ...props }) => {
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



            <path d="M15 15.7166H14.3667C13.7 15.7166 13.0667 15.975 12.6 16.4416L11.175 17.85C10.525 18.4916 9.46668 18.4916 8.81668 17.85L7.39166 16.4416C6.925 15.975 6.28333 15.7166 5.625 15.7166H5C3.61667 15.7166 2.5 14.6083 2.5 13.2417V4.14996C2.5 2.7833 3.61667 1.67499 5 1.67499H15C16.3833 1.67499 17.5 2.7833 17.5 4.14996V13.2417C17.5 14.6 16.3833 15.7166 15 15.7166Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 8.33332C11.0724 8.33332 11.9417 7.464 11.9417 6.39164C11.9417 5.31929 11.0724 4.45001 10 4.45001C8.92765 4.45001 8.05832 5.31929 8.05832 6.39164C8.05832 7.464 8.92765 8.33332 10 8.33332Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3333 13.05C13.3333 11.55 11.8417 10.3334 10 10.3334C8.15833 10.3334 6.66667 11.55 6.66667 13.05" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>








    );
};

export default QuestionIcon;