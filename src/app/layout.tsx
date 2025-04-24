import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import SideNav from "@/components/layout/sidenav";

// const outfit = Outfit({
//   variable: "--font-outfit",
//   subsets: ["latin"],
// });

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"], // Or any other subsets you need
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Example - check actual available weights
});

export const metadata: Metadata = {
  title: "Techrity",
  description: "Welcome to techrity...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` relative ${chivo.variable} antialiased min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full md:max-w-[1600px] md:mx-auto`}
      >
        <Header />
        <SideNav />

        <main className="py-4 px-3 md:pl-12 md:pr-6 bg-[#f4f5fa] ">
          {children}
        </main>
      </body>
    </html>
  );
}
