import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import Navbar from "../components/nav-bar";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});

export const metadata: Metadata = {
  title: "Techrity - Mentors",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row min-h-screen w-full">
        <Navbar />
        <main className="flex-1 overflow-auto mt-[64px] lg:mt-0 min-w-0">
          {children}
        </main>
      </body>
    </html>
  );
}
