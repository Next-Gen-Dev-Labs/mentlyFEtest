import React from 'react';
import { Button } from '@/components/ui/button';

type WelcomeBannerProps = {
  username: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username }) => {
  return (
    <div className="bg-gradient-to-r from-techrity-purple to-techrity-purple-light text-white p-4 sm:p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 animate-fade-in transition-all duration-300">
      <div className=" flex items-center justify-start gap-4 text-center md:text-left w-full">
        <h1 className="font-semibold text-lg sm:text-xl flex items-center gap-2 justify-center md:justify-start">
          Welcome Aboard, {username}
          <span className="text-xl">👋</span>
        </h1>
        <p className="text-sm mt-1">We're thrilled to have you join Techrity Team!</p>
      </div>
      <Button className="bg-white text-techrity-purple hover:bg-white/90 shadow-md transition-transform duration-200 hover:scale-105 min-w-[140px]">
        Update Profile
      </Button>
    </div>
  );
};
export default WelcomeBanner;
