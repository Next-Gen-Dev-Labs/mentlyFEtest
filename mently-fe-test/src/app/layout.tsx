import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import HomeLayout from "./component/HomeLayout";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techrity",
  description: "Most preferred dashboard for mentorship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} antialiased`}>
       <HomeLayout>
        {children}
       </HomeLayout>
      </body>
    </html>
  );
}
