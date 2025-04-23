"use client";

import { Check, Package, ShirtIcon, ShoppingCart } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function WelcomeBanner() {
  return (
    <div className="bg-purple-600 rounded-xl text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Welcome Aboard, Blessing ✨</h1>
          <p className="hidden md:block ml-2">
            We're thrilled to have you join Techrity Team!
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-white text-purple-600 hover:bg-gray-100"
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
}
