// components/ApplicationCard.tsx
"use client";

interface ApplicationCardProps {
  name: string;
  email: string;
  role: string;
  location: string;
  experience: string;
}

const ApplicationCard = ({ name, email, role, location, experience }: ApplicationCardProps) => {
  return (
    <div className="px-4 py-3 border-t border-gray-100">
      <h4 className="text-sm font-medium text-gray-800">{name}</h4>
      <p className="text-xs text-gray-500">{email} • {role}</p>
      <p className="text-xs text-gray-400">{location} • {experience}</p>
    </div>
  );
};

export default ApplicationCard;