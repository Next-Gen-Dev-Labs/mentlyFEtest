// components/WelcomeBanner.jsx
import React from 'react';

export default function WelcomeBanner({ username = "Blessing" }) {
  return (
    <div className="flex items-center rounded-md px-6 py-2 bg-[#6F01D0]  justify-between mb-6">
      <div className="flex items-center gap-16">
        <h1 className="text-2xl font-bold text-white flex items-center">
          <span className="text-white bg-clip-text">Welcome Aboard, {username}</span>
          <span className="ml-2 text-yellow-400">👋</span>
        </h1>
        <p className="text-xl text-[#BDBDBD] font-[600]">We're thrilled to have you join Techrity Team!</p>
      </div>
      <button className="px-4 py-2 bg-white font-[700] text-[#1F0954] rounded-md hover:bg-purple-50">
        Update Profile
      </button>
    </div>
  );
}