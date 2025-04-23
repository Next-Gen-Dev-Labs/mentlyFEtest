import Image, { StaticImageData } from 'next/image'; // Use next/image for optimization
import { Settings } from 'lucide-react';
import Link from 'next/link';
import CourseCard from './ui/CourseCard';

// Define the props type based on our data structure
type Mentor = {
  id: string;
  avatarUrl: StaticImageData;
};

type Host = {
  name: string;
  avatarUrl: StaticImageData;
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
  actionType?: 'enroll' | 'view' | 'apply';
};

const ProgramCard: React.FC<{ program: ProgramCardProps }> = ({ program }) => {
  const getActionButton = () => {
    switch (program.actionType) {
      case 'enroll':
        return (
          <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md">
            Enroll
          </button>
        );
      case 'view':
        return (
          <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md">
            View Details
          </button>
        );
      case 'apply':
        return (
          <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md">
            Apply
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <CourseCard />
    </div>
  );
};

export default ProgramCard;