import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-[#6F01D0] text-white p-4 rounded-lg flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <h1 className="text-[26px] font-bold">Welcome Aboard, Blessing 👋</h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="hidden md:block text-[#BDBDBD] text-xl">We&apos;re thrilled to have you join Techrity Team!</p>
        <button className="bg-white text-[#1F0954] px-4 py-2 rounded-md font-medium text-sm cursor-pointer">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;