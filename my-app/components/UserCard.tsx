import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
  role: string;
  country?: string;
  timezone?: string;
  image: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, country, timezone, image }) => {
  return (
    <div className=" py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="rounded text-purple-600" />
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-sm">{name}</h4>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {country && (
            <div className="flex items-center">
              <span className="inline-block w-4 h-3 bg-gray-200 mr-1"></span>
              <span className="text-xs text-gray-500">{country}</span>
            </div>
          )}
          {timezone && (
            <span className="text-xs text-gray-500">{timezone}</span>
          )}
          <div className="flex gap-2">
            <button className="text-xs bg-[#FFEDED] border border-red-500 text-[#D83535] rounded-md px-5 py-2 cursor-pointer font-bold">
              Reject
            </button>
            <button className="text-xs bg-[#6F01D0] text-white rounded-md px-5 py-2 cursor-pointer font-bold">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;