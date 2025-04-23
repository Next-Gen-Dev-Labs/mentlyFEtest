import Image, { StaticImageData } from 'next/image'; // Use next/image for optimization
import { Settings } from 'lucide-react';

// Define the props type based on our data structure
type Mentor = {
    id: string;
    avatarUrl:  StaticImageData;
};

type Host = {
    name: string;
    avatarUrl:  StaticImageData;
};

type ProgramCardProps = {
    title: string;
    imageUrl: StaticImageData;
    badge: string;
    badgeColor: string;
    description: string;
    mentors?: Mentor[] | null;
    hostedBy?: Host | null;
    detailsAction: string;
    primaryAction: string;
    primaryActionColor: string;
};

const ProgramCard: React.FC<ProgramCardProps> = ({
    title,
    imageUrl,
    badge,
    badgeColor,
    description,
    mentors,
    hostedBy,
    detailsAction,
    primaryAction,
    primaryActionColor
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Image Section */}
            <div className="relative h-20 sm:h-40"> {/* Adjust height as needed */}
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover" // Changed from object-cover to next/image prop
                    className="absolute inset-0"
                />
                {/* Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> {/* Optional Gradient */}

                <span className={`absolute top-2 left-2 ${badgeColor} text-white text-xs font-semibold px-2 py-0.5 rounded`}>
                    {badge}
                </span>
                {/* Optional Icon */}
                <button className="absolute top-2 right-2 text-white p-1 rounded-full hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <Settings size={18} />
                </button>

                <h3 className="absolute bottom-2 left-3 right-3 text-white font-bold text-md leading-tight line-clamp-2"> {/* Limit title lines */}
                    {title}
                </h3>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow"> {/* flex-grow allows button section to stick to bottom */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                {/* Footer Info (Mentors or Hosted By) */}
                <div className="flex items-center mb-4 mt-auto pt-2"> {/* mt-auto pushes this down */}
                    {mentors && mentors.length > 0 && (
                        <>
                            <div className="flex -space-x-2 mr-2">
                                {mentors.slice(0, 3).map((mentor) => ( // Show max 3 avatars
                                    <Image
                                        key={mentor.id}
                                        src={mentor.avatarUrl}
                                        alt="Mentor"
                                        width={24}
                                        height={24}
                                        className="rounded-full border-2 border-white"
                                        objectFit="cover"
                                    />
                                ))}
                            </div>
                            <span className="text-gray-500 text-xs font-medium">Mentors</span>
                            {mentors.length > 3 && (
                                <span className="text-gray-400 text-xs ml-1">+{mentors.length - 3}</span>
                            )}
                        </>
                    )}
                    {hostedBy && (
                         <>
                            <Image
                                src={hostedBy.avatarUrl}
                                alt={hostedBy.name}
                                width={24}
                                height={24}
                                className="rounded-full mr-2 border border-gray-200"
                                objectFit="cover"
                            />
                            <span className="text-gray-500 text-xs font-medium">Hosted By: {hostedBy.name}</span>
                         </>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                    <button className="px-4 py-1.5 rounded border border-purple-600 text-purple-600 text-xs font-semibold hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300">
                        {detailsAction}
                    </button>
                    <button className={`px-4 py-1.5 rounded ${primaryActionColor} text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-400`}>
                        {primaryAction}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;