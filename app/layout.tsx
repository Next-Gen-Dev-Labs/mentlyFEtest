import type { Metadata } from "next";
import "./globals.css";
import { chivo, inter } from "@/lib/fonts";
import DashboardLayout from "@/layouts/dashboard-layout";

export const metadata: Metadata = {
  title: "Mently Technologies",
  description:
    "Accelerate Career Growth and Knowledge Sharing Through Mentoring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${chivo.className} w-screen antialiased`}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
