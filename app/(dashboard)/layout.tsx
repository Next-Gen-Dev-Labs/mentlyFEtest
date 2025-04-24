import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Navbar } from "@/components/dashboard/navbar";
import React, { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardLayout>
      <Navbar />
      {children}
    </DashboardLayout>
  );
};

export default HomeLayout;
