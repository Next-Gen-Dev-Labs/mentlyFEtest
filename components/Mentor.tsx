import React from 'react';

const mentorsData = [
  {
    id: 1,
    name: 'Maxwell Smith',
    role: 'Product Designer',
    initial: 'M',
  },
  {
    id: 2,
    name: 'Adeoti Samuel',
    role: 'Product Designer',
    initial: 'A',
  },
];

const MentorsSection = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg max-w-xs">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-gray-500 text-sm font-medium">Mentors</span>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-400 p-1 rounded-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-400 p-1 rounded-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mentors List */}
      <div className="space-y-3">
        {mentorsData.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium text-sm">{mentor.initial}</span>
              </div>
              <div>
                <h3 className="text-sm font-medium">{mentor.name}</h3>
                <p className="text-xs text-gray-500">{mentor.role}</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white text-xs py-1 px-3 rounded-full">
              Message
            </button>
          </div>
        ))}
      </div>
      
      {/* See All Button */}
      <div className="mt-4">
        <button className="w-full py-2 bg-purple-100 text-purple-600 text-sm font-medium rounded-lg">
          See all
        </button>
      </div>
    </div>
  );
};

export default MentorsSection;