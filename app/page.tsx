"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard on mount
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold text-purple-900">
            Welcome Aboard, Blessing! 🙌{" "}
            <span className="text-sm text-gray-600">
              We’re thrilled to have you join Techrity Team!
            </span>
          </h1>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg"
          >
            Update Profile
          </Button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto" />
      </div>
    </div>
  );
}