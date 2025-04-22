'use client';
import React, { useState } from 'react';
import { Menu, MoreVertical, MapPin, Clock } from 'lucide-react';
import { Applicant } from '../../types/applicants';


interface ApplicationsProps {
  mentorApplications: Applicant[];
  studentApplications: Applicant[];
  onAccept?: (applicantId: string) => void;
  onReject?: (applicantId: string) => void;
  onSeeAll?: () => void;
  onSelectApplicant?: (applicantId: string, selected: boolean) => void;
}

export default function Applications({
  mentorApplications ,
  studentApplications,
  onAccept = () => {},
  onReject = () => {},
  onSeeAll = () => {},
  onSelectApplicant = () => {},
}: ApplicationsProps) {
  const [selectedApplicants, setSelectedApplicants] = useState<{[key: string]: boolean}>({});

  const handleCheckboxChange = (applicantId: string) => {
    const newState = !selectedApplicants[applicantId];
    setSelectedApplicants({
      ...selectedApplicants,
      [applicantId]: newState
    });
    onSelectApplicant(applicantId, newState);
  };

  return (
    <div className="p-4 rounded-lg bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Menu size={20} className="text-gray-500 mr-2" />
          <h1 className="text-lg text-gray-500 font-normal">Applications</h1>
        </div>
        <div className="flex items-center">
          <button 
            onClick={onSeeAll}
            className="text-purple-700 text-sm font-medium mr-2"
          >
            See all
          </button>
          <button>
            <MoreVertical size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Mentors Section */}
      <div className="mb-6 overflow-x-auto">
        <h2 className="text-sm text-blue-600 mb-4">Mentors</h2>
        
        {mentorApplications.map((applicant) => (
          <div 
            key={applicant.id}
            className="flex items-center gap-2 justify-between py-3 border-b border-gray-100"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 w-4 h-4 text-purple-600 rounded border-gray-300"
                checked={selectedApplicants[applicant.id] || false}
                onChange={() => handleCheckboxChange(applicant.id)}
              />
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  {applicant.avatar ? (
                    <img src="/api/placeholder/40/40" alt={applicant.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">{applicant.name[0]}</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{applicant.name}</div>
                  <div className="text-sm text-gray-500">{applicant.email}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => onReject(applicant.id)}
                className="px-6 py-1 text-sm text-red-500 border border-red-500 rounded-md"
              >
                Reject
              </button>
              <button 
                onClick={() => onAccept(applicant.id)}
                className="px-6 py-1 text-sm text-white bg-purple-700 rounded-md"
              >
                Accept
              </button>
            </div>
          </div>
        ))}

        {/* Tags section for first mentor */}
        {mentorApplications.length > 0 && (
          <div className="mt-2 mb-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                Product Designer
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                4years Experience
              </span>
              <div className="flex items-center bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                <MapPin size={12} className="mr-1" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                <Clock size={12} className="mr-1" />
                <span>GMT +1</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Students Section */}
      <div className="overflow-x-auto">
        <h2 className="text-sm text-blue-600 mb-4">Students</h2>
        
        {studentApplications.map((applicant) => (
          <div 
            key={applicant.id}
            className="flex items-center gap-2 justify-between py-3 border-b border-gray-100"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 w-4 h-4 text-purple-600 rounded border-gray-300"
                checked={selectedApplicants[applicant.id] || false}
                onChange={() => handleCheckboxChange(applicant.id)}
              />
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  {applicant.avatar ? (
                    <img src="/api/placeholder/40/40" alt={applicant.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">{applicant.name[0]}</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{applicant.name}</div>
                  <div className="text-sm text-gray-500">{applicant.email}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => onReject(applicant.id)}
                className="px-6 py-1 text-sm text-red-500 border border-red-500 rounded-md"
              >
                Reject
              </button>
              <button 
                onClick={() => onAccept(applicant.id)}
                className="px-6 py-1 text-sm text-white bg-purple-700 rounded-md"
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Default data for demonstration


