import React from "react";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Sidebar } from "@/component/sharedLayout/sidebar/sidebar";
import { ThemeProvider } from "@/component/providers";
import { NavBar } from "@/component/sharedLayout/navbar/navbar";

export const metadata: Metadata = {
  title: "Mentorship Program",
  description: "UI/UX Design Mentorship Program",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex">
            <Sidebar />
            <main className="w-full">
              <NavBar />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
