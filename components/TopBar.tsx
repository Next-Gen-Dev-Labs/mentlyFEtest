import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center bg-purple-700">
        <div className="text-lg font-bold text-white">
          Welcome Aboard, Blessing 👋 <span className="text-semi-bold text-gray-800">We're thrilled to have you join Techrity Team!</span>
        </div>
        <Button className="bg-white text-black">Update Profile</Button>
      </CardContent>
    </Card>
  );
}
