import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ChevronLeftIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* The polyline creates the chevron shape.
        The points are set so that the legs (14,18) to (10,12) to (14,6)
        are close together, producing a compact chevron-left shape. */}
    <polyline points="14 18 10 12 14 6" />
  </svg>
);

export default ChevronLeftIcon;
