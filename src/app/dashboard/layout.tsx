"use client"
import { MainLayout } from "@/layouts/main";
import React, { ReactNode } from "react";

function layout({ children }: {children: ReactNode}) {
  return <MainLayout>{children}</MainLayout>;
}

export default layout;