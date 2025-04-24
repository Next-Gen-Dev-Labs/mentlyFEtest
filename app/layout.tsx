import type { Metadata } from "next";
import { Chivo  } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "./side-bar";
import Header from "./header";

const chivo = Chivo({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Add weights you need
  variable: '--font-chivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "job-assessment",
  description: "A responsive and accessible dashboard for educational programs and mentorship 😎",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} antialiased`}
      >
        <SidebarProvider>
        <AppSideBar />
        <main className="flex-1 overflow-hidden ">
        <Header />
        <SidebarTrigger />
        {children}
        </main>  
        </SidebarProvider>
      </body>
    </html>
  );
}
