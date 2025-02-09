import NextProgress from "@/components/common/next-progress";
import LayoutDashboard from "@/layouts/dashboard";
import React, { Fragment } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <NextProgress />
      <LayoutDashboard>{children}</LayoutDashboard>
    </Fragment>
  );
}
