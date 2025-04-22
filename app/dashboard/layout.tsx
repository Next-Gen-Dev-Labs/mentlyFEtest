import React from "react";
import RootDashboardLayout from "@/layouts/RootDashboardLayout";
import { MainLayoutType } from "@/type";

function layout({ children }: MainLayoutType) {
  return <RootDashboardLayout>{children}</RootDashboardLayout>;
}

export default layout;
