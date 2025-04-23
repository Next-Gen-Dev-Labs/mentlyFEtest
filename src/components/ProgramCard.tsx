// src/components/ProgramCard.tsx
import { FC } from 'react';
import Image from 'next/image';

interface ProgramProps {
  program: {
    id: number;
    title: string;
    type: string;
    status: string;
    image: string;
    description: string;
    mentors: string[];
    students: number;
    duration: string;
  };
}

const ProgramCard: FC<ProgramProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-32 sm:h-40">
        <Image 
          src='/images/rpp8.jpg' 
          alt={program.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-2 right-2 bg-gray-100 rounded-full px-2 py-0.5">
          <span className="text-xs font-medium">{program.type}</span>
        </div>
        <div className="absolute bottom-0 left-0 p-3">
          <h3 className="text-white font-semibold text-sm sm:text-lg leading-tight">{program.title}</h3>
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        <div className="text-xs text-gray-500 mb-2 line-clamp-2 sm:line-clamp-3">
          <span>{program.description}</span>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex -space-x-2">
            {program.mentors.slice(0, 3).map((mentor, index) => (
              <div key={index} className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
                <Image 
                  src='/images/rpp6.jpg' 
                  alt="Mentor" 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {program.mentors.length > 3 && (
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 text-xs font-medium">
                +{program.mentors.length - 3}
              </div>
            )}
          </div>
          
          <div className="text-xs text-gray-500">
            <div>Students: {program.students}</div>
            <div>Duration: {program.duration}</div>
          </div>
        </div>
        
        <div className="flex justify-between mt-3 sm:mt-4">
          <button className="text-xs text-purple-600 border border-purple-600 rounded-full px-3 py-1">
            View Details
          </button>
          <button className="text-xs text-white bg-purple-600 rounded-full px-3 py-1">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;