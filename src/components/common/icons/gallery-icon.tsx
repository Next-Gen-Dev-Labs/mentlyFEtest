import React from 'react';

interface GalleryIconProp extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const GalleryIcon: React.FC<GalleryIconProp> = ({ className, ...props }) => {
    return (
        <svg
            width="30" height="26" viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >


            <rect x="0.5" y="0.5" width="29" height="25" rx="1.5" fill="#6F01D0" fill-opacity="0.11" />
            <rect x="0.5" y="0.5" width="29" height="25" rx="1.5" stroke="#6F01D0" />
            <path d="M4.44446 19.0833V5.83772H17.6901V19.0833H4.44446ZM19.8977 11.3567V5.83772H25.4167V11.3567H19.8977ZM21.0015 10.2529H24.3129V6.94152H21.0015V10.2529ZM5.54826 17.9795H16.5863V6.94152H5.54826V17.9795ZM6.86399 15.666H15.2705L12.585 12.0786L10.5154 14.8381L8.99764 12.8237L6.86399 15.666ZM19.8977 19.0833V13.5643H25.4167V19.0833H19.8977ZM21.0015 17.9795H24.3129V14.6681H21.0015V17.9795Z" fill="#6F01D0" />
        </svg>









    );
};

export default GalleryIcon;