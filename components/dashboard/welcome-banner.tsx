"use client";

import { Button } from "@/components/ui/button";

export function WelcomeBanner() {
  return (
    <div className="bg-[#6F01D0] rounded-[5px] p-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between text-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Welcome Aboard, Blessing <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-white/80">We're thrilled to have you join Techrity Team!</p>
      </div>
      <Button 
        className="bg-white text-[#380065] hover:bg-white/90 whitespace-nowrap h-10 px-6 font-medium"
      >
        Update Profile
      </Button>
    </div>
  );
}