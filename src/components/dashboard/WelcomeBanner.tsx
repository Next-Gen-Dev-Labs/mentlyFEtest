
import React from 'react';
import { Button } from '@/components/ui/button';

type WelcomeBannerProps = {
  username: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username }) => {
  return (
    <div className="bg-gradient-to-r from-techrity-purple to-techrity-purple-light text-white p-6 rounded-lg flex justify-between items-center">
      <div>
        <h1 className="font-semibold text-xl flex items-center gap-2">
          Welcome Aboard, {username} <span className="text-xl">👋</span>
        </h1>
        <p className="text-sm mt-1">We're thrilled to have you join Techrity Team!</p>
      </div>
      
      <Button className="bg-white text-techrity-purple hover:bg-white/90">
        Update Profile
      </Button>
    </div>
  );
};

export default WelcomeBanner;
