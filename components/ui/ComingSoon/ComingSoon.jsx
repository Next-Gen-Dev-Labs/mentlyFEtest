import React from 'react';

export default function ComingSoon({ pageName }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-sm text-center max-w-md">
        <h2 className="text-3xl font-bold text-[#6F01D0] mb-4">{pageName}</h2>
        <div className="rounded-xl bg-[rgba(2,20,189,0.22)] px-3 py-2 inline-block mb-6">
          <span className="text-sm text-[#EFEFF8] italic">Coming Soon</span>
        </div>
        <p className="text-[#374557] text-sm mb-6">
          We're working hard to bring you an amazing {pageName.toLowerCase()} experience. 
          Stay tuned for updates!
        </p>
        <img 
          src="/images/logo.png" 
          alt="Techrity Logo" 
          className="h-8 mx-auto opacity-50" 
        />
      </div>
    </div>
  );
}