import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function WelcomeSection() {
  return (
    <section className="bg-primary rounded-xl flex mb-2 justify-between flex-col py-3 px-6 md:px-8 lg:px-10 text-primary-foreground lg:items-center lg:flex-row gap-4 lg:justify-between">
      <div className="flex flex-col flex-1 justify-between lg:flex-row lg:max-w-3/4">
        <h1 className="text-2xl">Welcome Aboard, Blessing 👋</h1>
        <p className="text-[#bdbdbd] text-xl max-lg:mb-2">
          We&apos;re thrilled to have you join Techrity Team!
        </p>
      </div>
      <Button variant="outline" asChild>
        <Link href="#">Update Profile</Link>
      </Button>
    </section>
  );
}
