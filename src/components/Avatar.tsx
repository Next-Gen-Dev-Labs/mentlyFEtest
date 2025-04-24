import Image from "next/image";
import React, { useState } from "react";

interface AvatarImage {
    src: string;
    alt: string;
    tooltip?: string;
}

interface AvatarProps {
    overlap?: number;
    images: AvatarImage[];
    size?: "sm" | "md" | "lg";
}

const Avatar: React.FC<AvatarProps> = ({
    images,
    size = "md",
    overlap = 1.25
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const sizeClasses = {
        sm: {
            baseNumeric: 8,
            base: "w-8 h-8",      // 2rem (8 * 0.25)
            hoverNumeric: 10,
            hover: "w-10 h-10",    // 2.5rem (10 * 0.25)
        },
        md: {
            baseNumeric: 10,
            hoverNumeric: 12,
            base: "w-10 h-10",     // 2.5rem
            hover: "w-12 h-12",     // 3rem
        },
        lg: {
            baseNumeric: 12,
            hoverNumeric: 14,
            base: "w-12 h-12",      // 3rem
            hover: "w-14 h-14",     // 3.5rem
        }
    };

    const calculatePosition = (index: number) => {
        if (hoveredIndex === null) return index * overlap;
        if (index < hoveredIndex) return index * overlap - overlap * 0.3;
        if (index > hoveredIndex) return index * overlap + overlap * 0.3;
        return index * overlap;
    };

    const calculateZIndex = (index: number) => {
        if (hoveredIndex === null) return images.length - index;
        if (hoveredIndex === index) return images.length * 2;
        return images.length - Math.abs(index - hoveredIndex);
    };

    // Calculate minimal container width:
    const containerWidth = (images.length - 1) * overlap + sizeClasses[size].hoverNumeric * 0.25;

    return (
        <div className="relative" style={{ width: `${containerWidth}rem`, height: `${sizeClasses[size].hoverNumeric * 0.25}rem` }}>
            {images.map((image, index) => (
                <div
                    key={index}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className="absolute transition-all duration-300 ease-out"
                    style={{
                        zIndex: calculateZIndex(index),
                        left: `${calculatePosition(index)}rem`,
                        transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
                    }}
                >
                    <div className="relative">
                        <div className={`${sizeClasses[size].base} rounded-full border-2 border-white overflow-hidden shadow-lg transition-all duration-300`}>
                            <Image width={80} height={80} src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        </div>

                        {image.tooltip && hoveredIndex === index && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-[#6F01D0] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg z-40">
                                {image.tooltip}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-[#6F01D0]" />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Avatar;
